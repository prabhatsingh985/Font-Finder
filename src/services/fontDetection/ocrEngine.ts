import type {
  SegmentedGlyph,
  SegmentedWord,
  TextAnalysisResult,
  FontSignatureManifest
} from '../../types/font';
import { FontSignatureService } from './fontSignatures';

export interface BinarizedImage {
  bits: Uint8Array;
  width: number;
  height: number;
  dominantBgColor: { r: number; g: number; b: number };
}

export interface TypographicGuidelines {
  baseline: number;
  xHeight: number;
  capHeight: number;
  xSize: number;
  isReliable: boolean;
  isAllCaps: boolean;
}

export class OpticalCharRecognizer {
  /**
   * Otsu optimal threshold on 1D histogram
   */
  public static otsuThreshold(hist: Uint32Array, total: number): number {
    let sumAll = 0;
    for (let i = 0; i < 256; i++) {
      sumAll += i * (hist[i] ?? 0);
    }

    let sumB = 0;
    let weightB = 0;
    let maxVariance = -1;
    let threshold = 128;

    for (let t = 0; t < 256; t++) {
      const count = hist[t] ?? 0;
      weightB += count;
      if (weightB === 0) continue;

      const weightF = total - weightB;
      if (weightF === 0) break;

      sumB += t * count;
      const meanB = sumB / weightB;
      const meanF = (sumAll - sumB) / weightF;
      const variance = weightB * weightF * Math.pow(meanB - meanF, 2);

      if (variance > maxVariance) {
        maxVariance = variance;
        threshold = t;
      }
    }

    return threshold;
  }

  /**
   * Adaptive color-distance binarization:
   * Finds the dominant background color via 4096-bin quantized RGB histogram,
   * calculates Euclidean color distance from background, and applies Otsu thresholding.
   * Works flawlessly on light-on-dark, dark-on-light, and colored text on colored backgrounds.
   */
  public static binarize(
    rgbaData: Uint8ClampedArray | number[],
    width: number,
    height: number
  ): BinarizedImage {
    const totalPixels = width * height;
    const rBlended = new Uint8Array(totalPixels);
    const gBlended = new Uint8Array(totalPixels);
    const bBlended = new Uint8Array(totalPixels);

    // 1. Alpha-blend onto white background
    for (let i = 0; i < totalPixels; i++) {
      const idx = i * 4;
      const a = (rgbaData[idx + 3] ?? 255) / 255;
      rBlended[i] = Math.round((rgbaData[idx] ?? 0) * a + 255 * (1 - a));
      gBlended[i] = Math.round((rgbaData[idx + 1] ?? 0) * a + 255 * (1 - a));
      bBlended[i] = Math.round((rgbaData[idx + 2] ?? 0) * a + 255 * (1 - a));
    }

    // 2. 4096-bin quantized color histogram (4 bits per channel)
    const colorHist = new Uint32Array(4096);
    for (let i = 0; i < totalPixels; i++) {
      const bin =
        ((rBlended[i]! >> 4) << 8) |
        ((gBlended[i]! >> 4) << 4) |
        (bBlended[i]! >> 4);
      colorHist[bin]++;
    }

    // Find dominant background color bin
    let maxBin = 0;
    for (let i = 1; i < colorHist.length; i++) {
      if (colorHist[i]! > colorHist[maxBin]!) {
        maxBin = i;
      }
    }

    const bgR = ((maxBin >> 8) & 0x0f) * 17;
    const bgG = ((maxBin >> 4) & 0x0f) * 17;
    const bgB = (maxBin & 0x0f) * 17;

    // 3. Compute Euclidean color distance from dominant background
    const distMap = new Float64Array(totalPixels);
    let maxDist = 0;

    for (let i = 0; i < totalPixels; i++) {
      const d = Math.hypot(
        rBlended[i]! - bgR,
        gBlended[i]! - bgG,
        bBlended[i]! - bgB
      );
      distMap[i] = d;
      if (d > maxDist) maxDist = d;
    }

    if (maxDist === 0) {
      return {
        bits: new Uint8Array(totalPixels),
        width,
        height,
        dominantBgColor: { r: bgR, g: bgG, b: bgB }
      };
    }

    // 4. Normalize distances to [0, 255] and compute Otsu threshold
    const dist8 = new Uint8Array(totalPixels);
    const distHist = new Uint32Array(256);

    for (let i = 0; i < totalPixels; i++) {
      const val = Math.round((distMap[i]! * 255) / maxDist);
      dist8[i] = val;
      distHist[val]++;
    }

    const threshold = this.otsuThreshold(distHist, totalPixels);

    // 5. Binary mask: 1 = ink, 0 = background
    const bits = new Uint8Array(totalPixels);
    for (let i = 0; i < totalPixels; i++) {
      bits[i] = dist8[i]! > threshold ? 1 : 0;
    }

    return {
      bits,
      width,
      height,
      dominantBgColor: { r: bgR, g: bgG, b: bgB }
    };
  }

  /**
   * 8-connected component labeling to identify individual ink masses.
   */
  public static findConnectedComponents(
    bin: BinarizedImage,
    minPixelCount: number = 8
  ): Array<{ x: number; y: number; w: number; h: number; pixelCount: number }> {
    const { bits, width, height } = bin;
    const total = bits.length;
    const visited = new Uint8Array(total);
    const components: Array<{ x: number; y: number; w: number; h: number; pixelCount: number }> = [];
    const queue: number[] = [];

    for (let i = 0; i < total; i++) {
      if (!bits[i] || visited[i]) continue;

      visited[i] = 1;
      queue.push(i);

      let minX = width;
      let maxX = 0;
      let minY = height;
      let maxY = 0;
      let pixelCount = 0;

      while (queue.length > 0) {
        const curr = queue.pop()!;
        pixelCount++;
        const cx = curr % width;
        const cy = Math.floor(curr / width);

        if (cx < minX) minX = cx;
        if (cx > maxX) maxX = cx;
        if (cy < minY) minY = cy;
        if (cy > maxY) maxY = cy;

        // 8-way neighborhood
        for (let dy = -1; dy <= 1; dy++) {
          const ny = cy + dy;
          if (ny < 0 || ny >= height) continue;
          const rowOffset = ny * width;

          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = cx + dx;
            if (nx < 0 || nx >= width) continue;

            const nIdx = rowOffset + nx;
            if (bits[nIdx] && !visited[nIdx]) {
              visited[nIdx] = 1;
              queue.push(nIdx);
            }
          }
        }
      }

      if (pixelCount >= minPixelCount) {
        components.push({
          x: minX,
          y: minY,
          w: maxX - minX + 1,
          h: maxY - minY + 1,
          pixelCount
        });
      }
    }

    return components.sort((a, b) => a.x - b.x);
  }

  /**
   * Overlap merging: Connects detached dots (tittles) on 'i' and 'j', accents,
   * colons, semicolons, and multipart glyphs.
   */
  public static mergeOverlappingComponents(
    components: Array<{ x: number; y: number; w: number; h: number; pixelCount: number }>,
    overlapRatio: number = 0.55,
    verticalGapRatio: number = 0.45
  ): Array<{ x: number; y: number; w: number; h: number; pixelCount: number }> {
    const sorted = components.slice().sort((a, b) => a.x - b.x);
    const merged: Array<{ x: number; y: number; w: number; h: number; pixelCount: number }> = [];

    for (const curr of sorted) {
      const prev = merged[merged.length - 1];

      if (prev) {
        // Horizontal overlap
        const xOverlap = Math.min(prev.x + prev.w, curr.x + curr.w) - Math.max(prev.x, curr.x);
        const minW = Math.min(prev.w, curr.w);
        const maxVerticalGap = Math.min(prev.h, curr.h) * verticalGapRatio;
        const yDist = Math.max(prev.y, curr.y) - Math.min(prev.y + prev.h, curr.y + curr.h);

        // If significant horizontal overlap and within vertical proximity
        if (xOverlap > 0 && xOverlap >= minW * overlapRatio && yDist <= maxVerticalGap) {
          const newX = Math.min(prev.x, curr.x);
          const newY = Math.min(prev.y, curr.y);
          const newRight = Math.max(prev.x + prev.w, curr.x + curr.w);
          const newBottom = Math.max(prev.y + prev.h, curr.y + curr.h);

          prev.x = newX;
          prev.y = newY;
          prev.w = newRight - newX;
          prev.h = newBottom - newY;
          prev.pixelCount += curr.pixelCount;
          continue;
        }
      }

      merged.push({ ...curr });
    }

    return merged;
  }

  /**
   * Filters out tiny noise components while preserving valid small punctuation.
   */
  public static filterNoise(
    components: Array<{ x: number; y: number; w: number; h: number; pixelCount: number }>
  ): Array<{ x: number; y: number; w: number; h: number; pixelCount: number }> {
    if (components.length === 0) return components;

    const heights = components.map((c) => c.h).sort((a, b) => a - b);
    const medianH = heights[Math.floor(heights.length / 2)] ?? 10;

    return components.filter((c) => c.h >= medianH * 0.32 && c.w >= 2);
  }

  /**
   * Horizontal projection profile to detect individual line bands.
   */
  public static detectTextLines(bin: BinarizedImage): Array<{ top: number; bottom: number }> {
    const { bits, width, height } = bin;
    const lines: Array<{ top: number; bottom: number }> = [];
    let startY = -1;

    for (let y = 0; y < height; y++) {
      let hasInk = false;
      const rowOffset = y * width;

      for (let x = 0; x < width; x++) {
        if (bits[rowOffset + x]) {
          hasInk = true;
          break;
        }
      }

      if (hasInk && startY < 0) {
        startY = y;
      } else if (!hasInk && startY >= 0) {
        lines.push({ top: startY, bottom: y - 1 });
        startY = -1;
      }
    }

    if (startY >= 0) {
      lines.push({ top: startY, bottom: height - 1 });
    }

    return lines;
  }

  /**
   * Segments glyphs on a line into words using inter-glyph gap statistics.
   */
  public static segmentWordsOnLine(
    glyphs: Array<{ x: number; y: number; w: number; h: number; pixelCount: number }>,
    gapMultiplier: number = 1.9,
    minHeightRatio: number = 0.22
  ): Array<Array<{ x: number; y: number; w: number; h: number; pixelCount: number }>> {
    if (glyphs.length < 2) {
      return glyphs.length ? [glyphs] : [];
    }

    const sorted = glyphs.slice().sort((a, b) => a.x - b.x);
    const heights = sorted.map((g) => g.h).sort((a, b) => a - b);
    const medianH = heights[Math.floor(heights.length / 2)] ?? 12;

    const gaps: number[] = [];
    for (let i = 1; i < sorted.length; i++) {
      gaps.push(sorted[i]!.x - (sorted[i - 1]!.x + sorted[i - 1]!.w));
    }

    const sortedGaps = gaps.slice().sort((a, b) => a - b);
    const medianGap = Math.max(1, sortedGaps[Math.floor(sortedGaps.length / 2)] ?? 2);
    const wordThreshold = Math.max(medianGap * gapMultiplier, medianH * minHeightRatio);

    const words: Array<Array<{ x: number; y: number; w: number; h: number; pixelCount: number }>> = [
      [sorted[0]!]
    ];

    for (let i = 1; i < sorted.length; i++) {
      const gap = gaps[i - 1]!;
      if (gap > wordThreshold) {
        words.push([]);
      }
      words[words.length - 1]!.push(sorted[i]!);
    }

    return words;
  }

  /**
   * Finds typographic guidelines (baseline, x-height, cap-height).
   */
  public static computeTypographicGuidelines(
    boxes: Array<{ x: number; y: number; w: number; h: number }>
  ): TypographicGuidelines {
    if (boxes.length === 0) {
      return {
        baseline: 0,
        xHeight: 0,
        capHeight: 0,
        xSize: 1,
        isReliable: false,
        isAllCaps: false
      };
    }

    const heights = boxes.map((b) => b.h).sort((a, b) => a - b);
    const medianH = heights[Math.floor(heights.length / 2)] ?? 14;
    const tol = Math.max(2, medianH * 0.09);

    // Baseline: mode of glyph bottoms (y + h)
    const bottoms = boxes.map((b) => b.y + b.h);
    let bestBaseline = bottoms[0] ?? 0;
    let maxBottomMatches = 0;

    for (const b of bottoms) {
      let count = 0;
      for (const target of bottoms) {
        if (Math.abs(target - b) <= tol) count++;
      }
      if (count > maxBottomMatches) {
        maxBottomMatches = count;
        bestBaseline = b;
      }
    }

    const baselineAligned = boxes.filter((b) => Math.abs(b.y + b.h - bestBaseline) <= tol);

    // x-Height: mode of tops for non-ascender letters
    const nonAscenderTops = baselineAligned
      .filter((b) => b.h <= medianH * 1.08)
      .map((b) => b.y);

    let bestXHeight = bestBaseline - medianH;
    if (nonAscenderTops.length > 0) {
      let maxXMatches = 0;
      for (const top of nonAscenderTops) {
        let count = 0;
        for (const target of nonAscenderTops) {
          if (Math.abs(target - top) <= tol) count++;
        }
        if (count > maxXMatches) {
          maxXMatches = count;
          bestXHeight = top;
        }
      }
    }

    const xSize = Math.max(1, bestBaseline - bestXHeight);
    const isReliable = boxes.length >= 2 && baselineAligned.length >= Math.max(2, boxes.length * 0.5);

    // All-caps check: height variation is minimal across all characters
    const alignedHeights = baselineAligned.map((b) => b.h);
    const minH = Math.min(...alignedHeights);
    const maxH = Math.max(...alignedHeights);
    const isAllCaps = (maxH - minH) / Math.max(1, medianH) < 0.16;

    const tops = boxes.map((b) => b.y).sort((a, b) => a - b);
    const capTop = tops[0] ?? bestXHeight;
    const capHeight = Math.max(14, bestBaseline - capTop);

    return {
      baseline: bestBaseline,
      xHeight: bestXHeight,
      capHeight,
      xSize,
      isReliable,
      isAllCaps
    };
  }

  /**
   * Determines allowable candidate characters for a glyph based on typographic vertical zones.
   */
  public static getCandidateCharsForZone(
    box: { x: number; y: number; w: number; h: number },
    typo: TypographicGuidelines,
    allowedChars: string
  ): { primary: string; fallback: string } {
    if (!typo.isReliable) return { primary: allowedChars, fallback: allowedChars };

    const tol = typo.xSize * 0.25;
    const isAscender = box.y < typo.xHeight - tol;
    const isDescender = box.y + box.h > typo.baseline + tol;

    let candidateSubset: string;

    if (isAscender && isDescender) {
      candidateSubset = 'fgjpqyjQ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else if (isAscender) {
      candidateSubset = 'bdfhiklt0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else if (isDescender) {
      candidateSubset = 'gjpqy';
    } else if (typo.isAllCaps) {
      candidateSubset = 'aceimnorsuvwxz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else {
      // Broader x-height set: includes 'i' (short body after dot merge) and common letters
      candidateSubset = 'abceimnorsuvwxz';
    }

    const filtered = Array.from(candidateSubset).filter((c) => allowedChars.includes(c)).join('');
    return {
      primary: filtered.length > 0 ? filtered : allowedChars,
      fallback: allowedChars
    };
  }

  /**
   * Visually grounded OCR: Matches the 16x16 glyph signature against the full font database
   * using typographic zone constraints and structural disambiguation.
   * Uses best-single-font minimum distance (5th percentile) instead of averaging across
   * all fonts, which destroys signal due to stylistic diversity.
   * NO context-guessing / dictionary replacement is performed.
   */
  public static classifyGlyph(
    sig: Uint8Array,
    box: { x: number; y: number; w: number; h: number },
    typo: TypographicGuidelines,
    manifest: FontSignatureManifest,
    signaturesMap: Map<string, Uint8Array>
  ): { char: string; confidence: number } {
    const { primary: primaryChars, fallback: fallbackChars } = this.getCandidateCharsForZone(box, typo, manifest.chars);
    const numFonts = manifest.fonts.length;
    const bytesPerGlyph = manifest.bytesPerGlyph;

    // How many top fonts to consider for the percentile score
    const topK = Math.max(5, Math.floor(numFonts * 0.05));

    let bestChar = '?';
    let bestScore = -1;

    // Try primary zone-filtered candidates first, then fallback if confidence is low
    const charSets = [primaryChars, fallbackChars];

    for (let pass = 0; pass < charSets.length; pass++) {
      const chars = charSets[pass]!;
      // Skip fallback pass if primary already produced good confidence
      if (pass === 1 && bestScore >= 0.65) break;

      for (const ch of chars) {
        // Skip chars already evaluated in primary pass
        if (pass === 1 && primaryChars.includes(ch)) continue;

        const fontSlices = signaturesMap.get(ch);
        if (!fontSlices) continue;

        // Collect distances from all fonts that support this character
        const distances: number[] = [];

        for (let f = 0; f < numFonts; f++) {
          const offset = f * bytesPerGlyph;
          if (FontSignatureService.isBlankGlyph(fontSlices, offset, bytesPerGlyph)) {
            continue;
          }

          const dist = FontSignatureService.hammingDistance(sig, fontSlices, offset);
          distances.push(dist);
        }

        if (distances.length === 0) continue;

        // Sort ascending and take the 5th percentile (topK best matches)
        // This finds how well the glyph matches the BEST fonts for this character,
        // ignoring the vast majority of stylistically different fonts
        distances.sort((a, b) => a - b);
        const kIdx = Math.min(topK, distances.length) - 1;
        let sumTopK = 0;
        for (let i = 0; i <= kIdx; i++) {
          sumTopK += distances[i]!;
        }
        const avgTopKDist = sumTopK / (kIdx + 1);

        // 256 total bits in 16x16 signature
        const similarity = 1 - avgTopKDist / 256;

        if (similarity > bestScore) {
          bestScore = similarity;
          bestChar = ch;
        }
      }
    }

    const confidence = Math.max(15, Math.min(99, Math.round(bestScore * 100)));
    return { char: bestChar, confidence };
  }

  /**
   * Checks if a word is likely a connected script (cannot be cleanly separated into letters)
   */
  public static isConnectedScript(
    boxes: Array<{ x: number; y: number; w: number; h: number }>
  ): boolean {
    if (boxes.length === 0) return true;
    const maxAspect = Math.max(...boxes.map((b) => b.w / Math.max(1, b.h)));
    if (maxAspect > 2.2) return true;

    if (boxes.length >= 3) {
      const heights = boxes.map((b) => b.h).sort((a, b) => a - b);
      const medianH = heights[Math.floor(heights.length / 2)] ?? 10;
      if (Math.max(...heights) > medianH * 2.2) return true;
    }

    return false;
  }

  /**
   * Extracts a cropped base64 data URL for a given bounding box from RGBA pixel data.
   */
  public static extractBoxDataUrl(
    rgbaData: Uint8ClampedArray | number[],
    imgWidth: number,
    imgHeight: number,
    box: { x: number; y: number; w: number; h: number },
    padding: number = 3
  ): string {
    if (typeof document === 'undefined') return '';
    try {
      const padX = Math.max(0, padding);
      const padY = Math.max(0, padding);
      const sx = Math.max(0, box.x - padX);
      const sy = Math.max(0, box.y - padY);
      const ex = Math.min(imgWidth, box.x + box.w + padX);
      const ey = Math.min(imgHeight, box.y + box.h + padY);
      const sw = Math.max(1, ex - sx);
      const sh = Math.max(1, ey - sy);

      const canvas = document.createElement('canvas');
      canvas.width = sw;
      canvas.height = sh;
      const ctx = canvas.getContext('2d');
      if (!ctx) return '';

      const imgData = ctx.createImageData(sw, sh);
      for (let y = 0; y < sh; y++) {
        const srcRow = (sy + y) * imgWidth;
        const dstRow = y * sw;
        for (let x = 0; x < sw; x++) {
          const sIdx = (srcRow + sx + x) * 4;
          const dIdx = (dstRow + x) * 4;
          imgData.data[dIdx] = rgbaData[sIdx] ?? 0;
          imgData.data[dIdx + 1] = rgbaData[sIdx + 1] ?? 0;
          imgData.data[dIdx + 2] = rgbaData[sIdx + 2] ?? 0;
          imgData.data[dIdx + 3] = rgbaData[sIdx + 3] ?? 255;
        }
      }
      ctx.putImageData(imgData, 0, 0);
      return canvas.toDataURL('image/png');
    } catch {
      return '';
    }
  }

  /**
   * Main Phase 1 entry point:
   * Analyzes an image, separates lines, segments words, extracts individual glyphs,
   * generates 16x16 signatures, and performs visually grounded OCR without dictionary corruption.
   */
  public static async analyzeImageText(
    rgbaData: Uint8ClampedArray | number[],
    width: number,
    height: number,
    options?: { cropBox?: { x: number; y: number; w: number; h: number } }
  ): Promise<TextAnalysisResult> {
    const { manifest, signatures } = await FontSignatureService.init();
    const regularMap = signatures[0]!.charMap;

    // 1. Adaptive Binarization
    const bin = this.binarize(rgbaData, width, height);

    // 2. Connected component labeling & smart merging
    const rawComponents = this.findConnectedComponents(bin, 8);
    const mergedComponents = this.mergeOverlappingComponents(rawComponents, 0.55, 0.45);
    const cleanedGlyphs = this.filterNoise(mergedComponents);

    // 3. Text lines
    const lineBands = this.detectTextLines(bin);

    const segmentedWords: SegmentedWord[] = [];
    let wordCounter = 0;

    lineBands.forEach((band, lineIdx) => {
      // Find glyphs belonging to this line
      const lineGlyphs = cleanedGlyphs.filter((g) => {
        const centerY = g.y + g.h / 2;
        return centerY >= band.top && centerY <= band.bottom;
      });

      if (lineGlyphs.length === 0) return;

      const wordsOnLine = this.segmentWordsOnLine(lineGlyphs);

      for (const wordGlyphBoxes of wordsOnLine) {
        if (wordGlyphBoxes.length === 0) continue;

        const isJoined = this.isConnectedScript(wordGlyphBoxes);
        const typo = this.computeTypographicGuidelines(wordGlyphBoxes);

        // Compute word bounding box
        const minX = Math.min(...wordGlyphBoxes.map((b) => b.x));
        const minY = Math.min(...wordGlyphBoxes.map((b) => b.y));
        const maxX = Math.max(...wordGlyphBoxes.map((b) => b.x + b.w));
        const maxY = Math.max(...wordGlyphBoxes.map((b) => b.y + b.h));
        const wordBounds = { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 };

        let wordInkPixels = 0;
        const glyphs: SegmentedGlyph[] = [];

        for (let gIdx = 0; gIdx < wordGlyphBoxes.length; gIdx++) {
          const gBox = wordGlyphBoxes[gIdx]!;
          wordInkPixels += gBox.pixelCount;

          const sig = FontSignatureService.compute16x16Signature(bin.bits, width, gBox);
          const ocr = this.classifyGlyph(sig, gBox, typo, manifest, regularMap);

          let zone: 'cap' | 'x-height' | 'ascender' | 'descender' | 'punctuation' = 'x-height';
          if (typo.isAllCaps) zone = 'cap';
          else if (gBox.y < typo.xHeight - typo.xSize * 0.18) zone = 'ascender';
          else if (gBox.y + gBox.h > typo.baseline + typo.xSize * 0.18) zone = 'descender';

          const glyphDataUrl = this.extractBoxDataUrl(rgbaData, width, height, gBox, 2);

          glyphs.push({
            id: `glyph-${wordCounter}-${gIdx}`,
            char: ocr.char,
            confidence: ocr.confidence,
            box: { x: gBox.x, y: gBox.y, w: gBox.w, h: gBox.h },
            signature: sig,
            zone,
            croppedImageDataUrl: glyphDataUrl
          });
        }

        const wordText = glyphs.map((g) => g.char).join('');
        const wordDataUrl = this.extractBoxDataUrl(rgbaData, width, height, wordBounds, 4);

        segmentedWords.push({
          id: `word-${wordCounter++}`,
          text: wordText,
          bounds: wordBounds,
          lineIndex: lineIdx,
          glyphs,
          isJoinedScript: isJoined,
          inkPixelCount: wordInkPixels,
          croppedWordDataUrl: wordDataUrl
        });
      }
    });

    // Determine primary word: word with highest ink mass or largest bounds
    let primaryWordIndex = 0;
    let maxInk = 0;
    segmentedWords.forEach((w, idx) => {
      if (w.inkPixelCount > maxInk) {
        maxInk = w.inkPixelCount;
        primaryWordIndex = idx;
      }
    });

    return {
      words: segmentedWords,
      primaryWordIndex,
      imageWidth: width,
      imageHeight: height,
      dominantBgColor: bin.dominantBgColor
    };
  }
}
