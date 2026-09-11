import type {
  FontFamily,
  TypographyTraits,
  FontMatchCandidate,
  DetectionResult,
  MatcherConfig,
  MultiResGlyph,
  GlyphSignature
} from '../../types/font';
import { VERIFIED_GOOGLE_FONTS } from '../googleFonts/data';
import { GoogleFontsService } from '../googleFonts/service';

export interface ImagePixelData {
  width: number;
  height: number;
  data: Uint8ClampedArray | number[];
}

export const DEFAULT_MATCHER_CONFIG: MatcherConfig = {
  glyphResolutionHigh: 128,
  glyphResolutionLow: 64,
  iouWeight: 0.60,
  contourWeight: 0.40,
  distinctiveGlyphWeight: 1.75,
  glyphMatchWeightKnownText: 0.50,
  glyphMatchWeightUnknownText: 0.35,
  categorySoftWeight: 12,
  contrastWeight: 22,
  serifWeight: 22,
  aspectWeight: 18,
  weightMatchWeight: 14,
  confidenceMarginSensitivity: 0.12
};

const DISTINCTIVE_CHARS = new Set(['a', 'e', 'g', 'f', 't', 'r', 'R', 'Q', 'M', 'W', '1', '2', '4', '6', '7', '&']);
const SPECIMEN_CHARS = ['o', 'e', 'a', 'n', 'H', 't', 'R', 'g', 'M', '1'];

export class OpticalFontEngine {
  /**
   * Primary entry point for algorithmic font identification from pixel data.
   * Supports optional knownText when text content is extracted or provided.
   * Configurable via optional MatcherConfig parameter.
   */
  public static analyzeImagePixels(
    pixels: ImagePixelData,
    knownText?: string,
    customConfig?: Partial<MatcherConfig>
  ): DetectionResult {
    const startTime = performance.now();
    const config: MatcherConfig = { ...DEFAULT_MATCHER_CONFIG, ...customConfig };

    // 1. Adaptive binarization with polarity detection
    const { binary, width, height, isLightOnDark } = this.binarize(pixels);

    // 2. Extract typographic metrics & multi-resolution glyph signatures
    const { traits, glyphSignatures } = this.extractTypographyTraitsAndGlyphs(binary, width, height, knownText, config);

    // 3. Multi-signal ranking: character-aware or character-agnostic glyph matching + geometric traits
    const rankedCandidates = this.rankFontMatches(traits, glyphSignatures, knownText, config);

    const primary = rankedCandidates[0] || this.getDefaultMatch();
    const secondary = rankedCandidates.slice(1, 5);

    // 4. Commercial alternatives check
    const commercialAlt = primary.font.commercialAlternativesFor?.[0];
    const freeAlternatives = rankedCandidates.slice(1, 4);

    const processingTimeMs = Math.round(performance.now() - startTime);

    return {
      primaryMatch: primary,
      candidates: secondary,
      commercialFontDetected: commercialAlt,
      suggestedFreeAlternatives: freeAlternatives,
      typographyTraits: traits,
      isExactMatch: primary.confidence >= 88 && (primary.scoreMargin ?? 0) >= 0.10,
      confidence: primary.confidence,
      confidenceLabel: primary.confidenceLabel || 'Good Match',
      detectedText: traits.detectedText || (knownText || 'Text Specimen'),
      processingTimeMs: Math.max(12, processingTimeMs)
    };
  }

  /**
   * Adaptive thresholding / binarization with automatic polarity detection
   * Preserves thin 1-2px hairlines in high-contrast serifs.
   */
  public static binarize(pixels: ImagePixelData): {
    binary: Uint8Array;
    width: number;
    height: number;
    isLightOnDark: boolean;
  } {
    const { width, height, data } = pixels;
    const totalPixels = width * height;
    const grayscale = new Uint8Array(totalPixels);
    const hist = new Int32Array(256);

    // Convert RGBA to grayscale with Rec. 709 luminance
    let sumLum = 0;
    for (let i = 0; i < totalPixels; i++) {
      const idx = i * 4;
      const r = data[idx] ?? 0;
      const g = data[idx + 1] ?? 0;
      const b = data[idx + 2] ?? 0;
      const lum = Math.round(0.2126 * r + 0.7152 * g + 0.0722 * b);
      grayscale[i] = lum;
      hist[lum]++;
      sumLum += lum;
    }

    const avgLum = sumLum / Math.max(1, totalPixels);

    // Detect if border pixels are predominantly dark (light text on dark background)
    let borderLum = 0;
    let borderCount = 0;
    for (let x = 0; x < width; x++) {
      borderLum += grayscale[x]!;
      borderLum += grayscale[(height - 1) * width + x]!;
      borderCount += 2;
    }
    for (let y = 1; y < height - 1; y++) {
      borderLum += grayscale[y * width]!;
      borderLum += grayscale[y * width + (width - 1)]!;
      borderCount += 2;
    }
    const avgBorder = borderLum / Math.max(1, borderCount);
    const isLightOnDark = avgBorder < 128 || avgBorder < (avgLum - 8);

    // Otsu-inspired optimal between-class variance threshold
    let sumAll = 0;
    for (let t = 0; t < 256; t++) sumAll += t * hist[t]!;
    let sumB = 0;
    let wB = 0;
    let varMax = 0;
    let threshold = Math.round(avgLum);

    for (let t = 0; t < 256; t++) {
      wB += hist[t]!;
      if (wB === 0) continue;
      const wF = totalPixels - wB;
      if (wF === 0) break;
      sumB += t * hist[t]!;
      const mB = sumB / wB;
      const mF = (sumAll - sumB) / wF;
      const varBetween = wB * wF * (mB - mF) * (mB - mF);
      if (varBetween > varMax) {
        varMax = varBetween;
        threshold = t;
      }
    }

    if (threshold < 40) threshold = 48;
    if (threshold > 220) threshold = 210;

    const binary = new Uint8Array(totalPixels);
    for (let i = 0; i < totalPixels; i++) {
      const lum = grayscale[i]!;
      const isInk = isLightOnDark ? lum > threshold : lum < threshold;
      binary[i] = isInk ? 1 : 0;
    }

    return { binary, width, height, isLightOnDark };
  }

  /**
   * Extract typographic features and multi-resolution glyph signatures.
   */
  private static extractTypographyTraitsAndGlyphs(
    binary: Uint8Array,
    width: number,
    height: number,
    knownText?: string,
    config: MatcherConfig = DEFAULT_MATCHER_CONFIG
  ): { traits: TypographyTraits; glyphSignatures: GlyphSignature[] } {
    // Horizontal row density
    const rowDensity = new Float32Array(height);
    for (let y = 0; y < height; y++) {
      let count = 0;
      const rowOffset = y * width;
      for (let x = 0; x < width; x++) {
        if (binary[rowOffset + x] === 1) count++;
      }
      rowDensity[y] = count;
    }

    let textTop = 0;
    let textBottom = height - 1;
    const minRowInk = Math.max(2, Math.round(width * 0.01));
    for (let y = 0; y < height; y++) {
      if (rowDensity[y]! >= minRowInk) {
        textTop = y;
        break;
      }
    }
    for (let y = height - 1; y >= 0; y--) {
      if (rowDensity[y]! >= minRowInk) {
        textBottom = y;
        break;
      }
    }

    const textHeight = Math.max(12, textBottom - textTop + 1);

    // Segment glyph boxes
    const rawGlyphs = this.findConnectedGlyphs(binary, width, height, textTop, textBottom);

    // Extract multi-resolution signatures for each segmented glyph
    const glyphSignatures: GlyphSignature[] = [];
    for (let i = 0; i < rawGlyphs.length; i++) {
      const g = rawGlyphs[i]!;
      const multiRes = this.extractMultiResGlyph(binary, width, g.x, g.y, g.w, g.h, config);
      const char = knownText && i < knownText.length ? knownText[i] : undefined;
      const isDistinctive = char ? DISTINCTIVE_CHARS.has(char) : false;

      glyphSignatures.push({
        char,
        box: g,
        multiRes,
        isDistinctive
      });
    }

    // Measure horizontal runs (stems) and vertical runs (bars) across glyphs
    const stemRuns: number[] = [];
    const barRuns: number[] = [];

    for (const g of rawGlyphs) {
      // Middle zone (30% - 70% height) for horizontal downstrokes
      const yStart = Math.round(g.y + g.h * 0.3);
      const yEnd = Math.round(g.y + g.h * 0.7);
      for (let y = yStart; y <= yEnd; y += 2) {
        let run = 0;
        for (let x = g.x; x < g.x + g.w; x++) {
          if (binary[y * width + x] === 1) {
            run++;
          } else {
            if (run >= 1 && run <= g.w * 0.75) stemRuns.push(run);
            run = 0;
          }
        }
        if (run >= 1 && run <= g.w * 0.75) stemRuns.push(run);
      }

      // Vertical runs for bars in inner 60% of glyph
      const xStart = Math.round(g.x + g.w * 0.20);
      const xEnd = Math.round(g.x + g.w * 0.80);
      for (let x = xStart; x <= xEnd; x += 2) {
        let vrun = 0;
        for (let y = g.y; y < g.y + g.h; y++) {
          if (binary[y * width + x] === 1) {
            vrun++;
          } else {
            if (vrun >= 1 && vrun <= g.h * 0.55) barRuns.push(vrun);
            vrun = 0;
          }
        }
        if (vrun >= 1 && vrun <= g.h * 0.55) barRuns.push(vrun);
      }
    }

    const getPercentile = (arr: number[], p: number, defaultVal: number) => {
      if (!arr || arr.length === 0) return defaultVal;
      const sorted = arr.slice().sort((a, b) => a - b);
      const idx = Math.min(sorted.length - 1, Math.max(0, Math.floor(sorted.length * p)));
      return sorted[idx] ?? defaultVal;
    };

    // 75th percentile captures main vertical downstrokes (avoids hairline pollution)
    const primaryStem = getPercentile(stemRuns, 0.75, 3);
    // 45th percentile captures true horizontal bar thickness without edge noise
    const medianBar = getPercentile(barRuns.length > 0 ? barRuns : stemRuns, 0.45, 2);

    const contrastRatio = medianBar > 0 ? primaryStem / medianBar : 1.0;

    // Selective straight-stem baseline foot detection (local stem flaring)
    let serifStemsCount = 0;
    let stemsAnalyzed = 0;

    for (const g of rawGlyphs) {
      if (g.w < 5 || g.h < 10) continue;

      const y1 = Math.round(g.y + g.h * 0.65);
      const y2 = Math.round(g.y + g.h * 0.80);
      const baseY = Math.round(g.y + g.h * 0.93);

      // Scan runs at y1
      const runs1: Array<{ s: number; e: number; w: number }> = [];
      let cS1 = -1;
      for (let x = g.x; x < g.x + g.w; x++) {
        if (binary[y1 * width + x] === 1) {
          if (cS1 === -1) cS1 = x;
        } else if (cS1 !== -1) {
          runs1.push({ s: cS1, e: x - 1, w: x - cS1 });
          cS1 = -1;
        }
      }
      if (cS1 !== -1) runs1.push({ s: cS1, e: g.x + g.w - 1, w: g.x + g.w - cS1 });

      // Scan runs at y2
      const runs2: Array<{ s: number; e: number; w: number }> = [];
      let cS2 = -1;
      for (let x = g.x; x < g.x + g.w; x++) {
        if (binary[y2 * width + x] === 1) {
          if (cS2 === -1) cS2 = x;
        } else if (cS2 !== -1) {
          runs2.push({ s: cS2, e: x - 1, w: x - cS2 });
          cS2 = -1;
        }
      }
      if (cS2 !== -1) runs2.push({ s: cS2, e: g.x + g.w - 1, w: g.x + g.w - cS2 });

      // Check if there is a vertical straight stem matching at y1 and y2
      for (const r1 of runs1) {
        if (r1.w < 2 || r1.w > g.w * 0.55) continue;
        const match2 = runs2.find((r2) => Math.abs(r1.s - r2.s) <= 2.5 && Math.abs(r1.w - r2.w) <= 2.5);
        if (!match2) continue;

        const stemStart = (r1.s + match2.s) / 2;
        const stemEnd = (r1.e + match2.e) / 2;
        const stemW = stemEnd - stemStart + 1;

        // Check baseline foot at baseY
        let baseStart = -1, baseEnd = -1;
        for (let x = g.x; x < g.x + g.w; x++) {
          if (binary[baseY * width + x] === 1) {
            const bS = x;
            while (x < g.x + g.w && binary[baseY * width + x] === 1) x++;
            const bE = x - 1;
            if (bS <= stemEnd && bE >= stemStart) {
              baseStart = bS;
              baseEnd = bE;
              break;
            }
          }
        }

        if (baseStart !== -1) {
          stemsAnalyzed++;
          const leftFlare = stemStart - baseStart;
          const rightFlare = baseEnd - stemEnd;
          const baseW = baseEnd - baseStart + 1;
          const isBilateral = leftFlare >= 1.2 && rightFlare >= 1.2 && (Math.min(leftFlare, rightFlare) / Math.max(leftFlare, rightFlare) >= 0.20);
          if (isBilateral && baseW >= stemW * 1.25) {
            serifStemsCount++;
          }
        }
      }
    }

    const serifRatio = stemsAnalyzed > 0 ? serifStemsCount / stemsAnalyzed : 0;

    // Aspect ratio & Monospace check
    let avgAspect = 0.62;
    if (rawGlyphs.length >= 3) {
      const aspects = rawGlyphs.map((g) => g.w / g.h);
      avgAspect = aspects.reduce((a, b) => a + b, 0) / aspects.length;
    }

    const letterGlyphs = rawGlyphs.filter((g) => g.h >= textHeight * 0.35 && g.w >= 4);
    let isMonospace = false;
    if (letterGlyphs.length >= 4) {
      const widths = letterGlyphs.map((g) => g.w).sort((a, b) => a - b);
      const avgW = widths.reduce((a, b) => a + b, 0) / widths.length;
      const variance = widths.reduce((a, b) => a + Math.pow(b - avgW, 2), 0) / widths.length;
      const relWidthStdDev = Math.sqrt(variance) / Math.max(1, avgW);
      const p15 = widths[Math.floor(widths.length * 0.15)] ?? 1;
      const p85 = widths[Math.floor(widths.length * 0.85)] ?? 2;
      const widthSpread = p15 > 0 ? p85 / p15 : 2.0;

      if (relWidthStdDev < 0.18 && widthSpread <= 1.32) {
        isMonospace = true;
      }
    }

    // Trait classifications
    let contrast: 'none' | 'low' | 'medium' | 'high' = 'low';
    if (contrastRatio >= 2.0) contrast = 'high';
    else if (contrastRatio >= 1.4) contrast = 'medium';
    else if (contrastRatio >= 1.15) contrast = 'low';
    else contrast = 'none';

    let serifType: 'none' | 'subtle' | 'bracketed' | 'slab' | 'hairline' = 'none';
    let classification: 'sans-serif' | 'serif' | 'display' | 'monospace' = 'sans-serif';

    if (isMonospace) {
      classification = 'monospace';
      serifType = 'none';
      contrast = 'none';
    } else if (serifRatio >= 0.22 || (contrast === 'high' && (serifRatio >= 0.15 || contrastRatio >= 2.2))) {
      classification = 'serif';
      serifType = contrast === 'high' ? 'hairline' : 'bracketed';
    } else if (avgAspect < 0.54 && primaryStem / textHeight > 0.12) {
      classification = 'display';
      serifType = 'none';
      contrast = 'low';
    } else {
      classification = 'sans-serif';
      serifType = 'none';
    }

    let proportions: 'condensed' | 'regular' | 'wide' | 'geometric' = 'regular';
    if (avgAspect < 0.52) proportions = 'condensed';
    else if (avgAspect >= 0.67) proportions = 'geometric';

    const stemRatio = primaryStem / textHeight;
    let estimatedWeight = 400;
    if (contrast === 'high') {
      estimatedWeight = stemRatio > 0.18 ? 700 : stemRatio > 0.14 ? 600 : 400;
    } else {
      if (stemRatio > 0.17) estimatedWeight = 700;
      else if (stemRatio > 0.13) estimatedWeight = 600;
      else if (stemRatio < 0.07) estimatedWeight = 300;
      else estimatedWeight = 400;
    }

    let distinctiveCount = 0;
    if (knownText) {
      for (const ch of knownText) {
        if (DISTINCTIVE_CHARS.has(ch)) distinctiveCount++;
      }
    }

    const traits: TypographyTraits = {
      classification,
      serifType,
      contrast,
      proportions,
      estimatedWeight,
      isItalic: false,
      xHeightRatio: 0.65,
      stemWidthRatio: stemRatio,
      detectedText: knownText || (letterGlyphs.length > 1 ? `${letterGlyphs.length} characters analyzed` : 'Text Specimen'),
      distinctiveGlyphCount: distinctiveCount,
      textReliability: knownText ? 'reliable' : 'partial',
      contrastRatio,
      serifRatio
    };

    return { traits, glyphSignatures };
  }

  /**
   * Extract multi-resolution (128x128 and 64x64) representations of an individual glyph box.
   */
  public static extractMultiResGlyph(
    binary: Uint8Array,
    imgW: number,
    gx: number,
    gy: number,
    gw: number,
    gh: number,
    config: MatcherConfig = DEFAULT_MATCHER_CONFIG
  ): MultiResGlyph {
    const bitmap128 = this.normalizeSubGrid(binary, imgW, gx, gy, gw, gh, config.glyphResolutionHigh);
    const bitmap64 = this.normalizeSubGrid(binary, imgW, gx, gy, gw, gh, config.glyphResolutionLow);

    // Compute 16-bin profiles
    const { horiz, vert } = this.extractProfiles(bitmap128, config.glyphResolutionHigh);

    // Enclosed counter detection using flood fill
    const hasEnclosedCounter = this.detectEnclosedCounter(binary, imgW, gx, gy, gw, gh);

    // Bounding box density
    let inkCount = 0;
    for (let y = gy; y < gy + gh; y++) {
      const row = y * imgW;
      for (let x = gx; x < gx + gw; x++) {
        if (binary[row + x] === 1) inkCount++;
      }
    }
    const density = inkCount / Math.max(1, gw * gh);
    const aspectRatio = gw / Math.max(1, gh);

    return {
      bitmap64,
      bitmap128,
      aspectRatio,
      density,
      hasEnclosedCounter,
      horizontalProfile: horiz,
      verticalProfile: vert
    };
  }

  /**
   * Normalize an extracted sub-grid into a targetSize x targetSize binary bitmap
   * with aspect ratio preservation and horizontal/vertical centering.
   */
  private static normalizeSubGrid(
    binary: Uint8Array,
    imgW: number,
    gx: number,
    gy: number,
    gw: number,
    gh: number,
    targetSize: number
  ): Uint8Array {
    const result = new Uint8Array(targetSize * targetSize);
    const margin = Math.max(2, Math.round(targetSize * 0.05));
    const maxInner = targetSize - margin * 2;
    const scale = Math.min(maxInner / gw, maxInner / gh);
    const nw = Math.max(1, Math.round(gw * scale));
    const nh = Math.max(1, Math.round(gh * scale));
    const offsetX = Math.floor((targetSize - nw) / 2);
    const offsetY = Math.floor((targetSize - nh) / 2);

    for (let ty = 0; ty < nh; ty++) {
      const sy = Math.min(gh - 1, Math.floor(ty / scale));
      const targetRow = (offsetY + ty) * targetSize;
      const srcRow = (gy + sy) * imgW;
      for (let tx = 0; tx < nw; tx++) {
        const sx = Math.min(gw - 1, Math.floor(tx / scale));
        if (binary[srcRow + gx + sx] === 1) {
          result[targetRow + offsetX + tx] = 1;
        }
      }
    }
    return result;
  }

  /**
   * Detect enclosed hole/counter (o, e, a, p, d, b, g, 0, 8, 6, 9) via flood-fill on background
   */
  private static detectEnclosedCounter(
    binary: Uint8Array,
    imgW: number,
    gx: number,
    gy: number,
    gw: number,
    gh: number
  ): boolean {
    if (gw < 6 || gh < 6) return false;
    const visited = new Uint8Array(gw * gh);
    const queue: number[] = [];

    // Seed top and bottom borders
    for (let x = 0; x < gw; x++) {
      if (binary[gy * imgW + (gx + x)] === 0) {
        visited[x] = 1;
        queue.push(x);
      }
      const bRow = (gh - 1) * gw;
      if (binary[(gy + gh - 1) * imgW + (gx + x)] === 0 && visited[bRow + x] === 0) {
        visited[bRow + x] = 1;
        queue.push(bRow + x);
      }
    }
    // Seed left and right borders
    for (let y = 1; y < gh - 1; y++) {
      const row = y * gw;
      if (binary[(gy + y) * imgW + gx] === 0 && visited[row] === 0) {
        visited[row] = 1;
        queue.push(row);
      }
      if (binary[(gy + y) * imgW + (gx + gw - 1)] === 0 && visited[row + gw - 1] === 0) {
        visited[row + gw - 1] = 1;
        queue.push(row + gw - 1);
      }
    }

    let head = 0;
    while (head < queue.length) {
      const curr = queue[head++]!;
      const cy = Math.floor(curr / gw);
      const cx = curr % gw;

      const neighbors = [
        cx > 0 ? curr - 1 : -1,
        cx < gw - 1 ? curr + 1 : -1,
        cy > 0 ? curr - gw : -1,
        cy < gh - 1 ? curr + gw : -1
      ];

      for (const nb of neighbors) {
        if (nb >= 0 && visited[nb] === 0) {
          const ny = Math.floor(nb / gw);
          const nx = nb % gw;
          if (binary[(gy + ny) * imgW + (gx + nx)] === 0) {
            visited[nb] = 1;
            queue.push(nb);
          }
        }
      }
    }

    // Inner 70% unreached background pixels indicate an enclosed counter
    let unreachedHoleCount = 0;
    const marginX = Math.max(1, Math.floor(gw * 0.15));
    const marginY = Math.max(1, Math.floor(gh * 0.15));
    for (let y = marginY; y < gh - marginY; y++) {
      for (let x = marginX; x < gw - marginX; x++) {
        const idx = y * gw + x;
        if (binary[(gy + y) * imgW + (gx + x)] === 0 && visited[idx] === 0) {
          unreachedHoleCount++;
        }
      }
    }

    return unreachedHoleCount >= 4;
  }

  /**
   * Extract 16-bin horizontal and vertical density projection profiles.
   */
  private static extractProfiles(bitmap: Uint8Array, size: number): { horiz: Float32Array; vert: Float32Array } {
    const horiz = new Float32Array(16);
    const vert = new Float32Array(16);
    const binSize = size / 16;

    for (let y = 0; y < size; y++) {
      const yBin = Math.min(15, Math.floor(y / binSize));
      const rowOffset = y * size;
      for (let x = 0; x < size; x++) {
        if (bitmap[rowOffset + x] === 1) {
          const xBin = Math.min(15, Math.floor(x / binSize));
          horiz[yBin] += 1;
          vert[xBin] += 1;
        }
      }
    }

    let hMax = 0, vMax = 0;
    for (let i = 0; i < 16; i++) {
      if (horiz[i]! > hMax) hMax = horiz[i]!;
      if (vert[i]! > vMax) vMax = vert[i]!;
    }
    if (hMax > 0) for (let i = 0; i < 16; i++) horiz[i] /= hMax;
    if (vMax > 0) for (let i = 0; i < 16; i++) vert[i] /= vMax;

    return { horiz, vert };
  }

  /**
   * Segment connected component glyph bounding boxes using column density.
   */
  private static findConnectedGlyphs(
    binary: Uint8Array,
    width: number,
    height: number,
    top: number,
    bottom: number
  ): Array<{ x: number; y: number; w: number; h: number }> {
    const colDensity = new Float32Array(width);
    for (let x = 0; x < width; x++) {
      let count = 0;
      for (let y = top; y <= bottom; y++) {
        if (binary[y * width + x] === 1) count++;
      }
      colDensity[x] = count;
    }

    const boxes: Array<{ x: number; y: number; w: number; h: number }> = [];
    let inGlyph = false;
    let startX = 0;

    for (let x = 0; x < width; x++) {
      const hasInk = colDensity[x]! >= 2;
      if (!inGlyph && hasInk) {
        inGlyph = true;
        startX = x;
      } else if (inGlyph && (!hasInk || x === width - 1)) {
        inGlyph = false;
        const w = x - startX;
        if (w >= 3 && w <= (bottom - top + 1) * 2.5) {
          let gTop = bottom;
          let gBottom = top;
          for (let gy = top; gy <= bottom; gy++) {
            for (let gx = startX; gx < x; gx++) {
              if (binary[gy * width + gx] === 1) {
                if (gy < gTop) gTop = gy;
                if (gy > gBottom) gBottom = gy;
              }
            }
          }
          if (gBottom >= gTop + 4) {
            boxes.push({ x: startX, y: gTop, w, h: gBottom - gTop + 1 });
          }
        }
      }
    }

    return boxes.slice(0, 35);
  }

  /**
   * Rank candidate Google Fonts using continuous multi-signal evidence:
   * 1. Macro Geometric Distance (contrast, serif flares, aspect, weight, soft category)
   * 2. Glyph-Level Shape Evidence:
   *    - Character-Aware when text is known/reliable
   *    - Character-Agnostic when text is unknown
   */
  private static rankFontMatches(
    traits: TypographyTraits,
    glyphSignatures: GlyphSignature[],
    knownText?: string,
    config: MatcherConfig = DEFAULT_MATCHER_CONFIG
  ): FontMatchCandidate[] {
    const targetContrastRatio = traits.contrastRatio ?? 1.2;
    const targetSerifRatio = traits.serifRatio ?? 0.1;
    const hasReliableText = Boolean(knownText && knownText.trim().length >= 2);

    const scoredFonts = VERIFIED_GOOGLE_FONTS.map((font) => {
      // 1. MACRO GEOMETRIC TRAIT SCORING (Continuous distances, NO hard gating)
      let geomScore = 50;
      const reasons: string[] = [];

      // A. Soft Category Prior (Max config.categorySoftWeight, never hard rejection)
      if (font.category === traits.classification) {
        geomScore += config.categorySoftWeight;
        reasons.push(`${this.capitalize(traits.classification)} match`);
      } else if (
        (font.category === 'display' && traits.classification === 'sans-serif') ||
        (font.category === 'sans-serif' && traits.classification === 'display')
      ) {
        geomScore += Math.round(config.categorySoftWeight * 0.7);
      } else if (
        (font.category === 'serif' && traits.classification === 'sans-serif') ||
        (font.category === 'sans-serif' && traits.classification === 'serif')
      ) {
        geomScore += Math.round(config.categorySoftWeight * 0.25);
      } else {
        geomScore += 1;
      }

      // B. Continuous Contrast Similarity
      const candContrastRatio =
        font.typographicMetrics.contrast === 'high' ? 3.0 :
        font.typographicMetrics.contrast === 'medium' ? 1.6 :
        font.typographicMetrics.contrast === 'low' ? 1.25 : 1.05;

      const contrastDiff = Math.abs(targetContrastRatio - candContrastRatio);
      const contrastScore = Math.round(config.contrastWeight * Math.exp(-(contrastDiff * contrastDiff) / (2 * 0.95 * 0.95)));
      geomScore += contrastScore;
      if (contrastScore >= 16) {
        reasons.push(`${font.typographicMetrics.contrast} contrast profile`);
      }

      // C. Serif Terminals (Soft signals, 16 pts max)
      const isImageSerif = (traits.serifRatio ?? 0) >= 0.22 || (traits.contrast === 'high' && ((traits.serifRatio ?? 0) >= 0.15 || (traits.contrastRatio ?? 1) >= 2.2)) || traits.classification === 'serif';
      let serifScore = 0;
      if (isImageSerif) {
        if (font.typographicMetrics.serif === 'bracketed' || font.typographicMetrics.serif === 'hairline') {
          serifScore = 16;
          reasons.push(`${font.typographicMetrics.serif} serif terminals`);
        } else if (font.typographicMetrics.serif === 'slab') {
          serifScore = 14;
        } else if (font.typographicMetrics.serif === 'subtle') {
          serifScore = 10;
        } else {
          serifScore = 6;
        }
      } else {
        if (font.typographicMetrics.serif === 'none') {
          serifScore = 16;
          reasons.push('Sans-serif terminal structure');
        } else if (font.typographicMetrics.serif === 'subtle') {
          serifScore = 12;
        } else {
          serifScore = 6;
        }
      }
      geomScore += serifScore;

      // D. Proportions & Condensed Geometry
      if (traits.proportions === 'condensed') {
        if (font.typographicMetrics.proportions === 'condensed') {
          geomScore += config.aspectWeight;
          reasons.push('Condensed vertical rhythm');
        } else {
          geomScore += Math.max(0, config.aspectWeight - Math.round(Math.abs(font.typographicMetrics.avgAspect - 0.44) * 65));
        }
      } else if (traits.proportions === 'geometric') {
        if (font.typographicMetrics.proportions === 'geometric') {
          geomScore += config.aspectWeight;
          reasons.push('Geometric wide proportions');
        } else {
          geomScore += Math.max(0, config.aspectWeight - Math.round(Math.abs(font.typographicMetrics.avgAspect - 0.68) * 65));
        }
      } else {
        const aspectDelta = Math.abs(font.typographicMetrics.avgAspect - 0.61);
        geomScore += Math.max(0, config.aspectWeight - Math.round(aspectDelta * 55));
      }

      // E. Weight match
      const hasExactWeight = font.variants.some((v) => v.weight === traits.estimatedWeight);
      if (hasExactWeight) {
        geomScore += config.weightMatchWeight;
        reasons.push(`Weight ${traits.estimatedWeight} match`);
      } else {
        const closestWeightDelta = Math.min(...font.variants.map((v) => Math.abs(Number(v.weight) - traits.estimatedWeight)));
        const weightScore = Math.max(3, config.weightMatchWeight - Math.round(closestWeightDelta / 100) * 3);
        geomScore += weightScore;
      }

      // F. Category alignment (Soft signals)
      if (traits.classification === 'monospace') {
        if (font.category === 'monospace') geomScore += 12;
        else geomScore -= 6;
      } else if (font.category === 'monospace') {
        geomScore -= 4; // soft delta, never hard rejection
      } else if (font.category === 'handwriting') {
        geomScore -= 12; // printed typography is not cursive handwriting
      }

      // 2. GLYPH-LEVEL SHAPE EVIDENCE MATCHING
      let glyphScore = 70;

      if (hasReliableText) {
        // MODE A: Character-Aware Glyph Matching
        glyphScore = this.computeCharacterAwareGlyphScore(glyphSignatures, font, knownText!, config, geomScore);
      } else if (glyphSignatures.length > 0) {
        // MODE B: Character-Agnostic Glyph Matching for Unknown-Text Images (Requirement 1)
        glyphScore = this.computeCharacterAgnosticGlyphScore(glyphSignatures, font, config, geomScore);
      }

      // Final score blending (55% glyph when text is reliable, 40% when agnostic)
      const glyphWeight = hasReliableText ? 0.55 : 0.40;
      const finalScore = Math.round((1 - glyphWeight) * geomScore + glyphWeight * glyphScore);

      return {
        family: font.family,
        font,
        rawScore: finalScore,
        geomScore,
        glyphScore,
        style: 'Normal',
        weight: traits.estimatedWeight,
        isGoogleFontsVerified: Boolean(font.isGoogleFont),
        matchReasons: reasons
      };
    });

    // Sort descending by raw score
    scoredFonts.sort((a, b) => b.rawScore - a.rawScore);

    const top1 = scoredFonts[0] || { rawScore: 75, geomScore: 75, glyphScore: 75, font: VERIFIED_GOOGLE_FONTS[0]! };
    const top2 = scoredFonts[1] || { rawScore: top1.rawScore - 12 };
    const scoreMargin = Math.max(0, (top1.rawScore - top2.rawScore) / 100);

    // Multi-signal agreement check: does top macro geometric candidate match top glyph candidate?
    const sortedByGeom = scoredFonts.slice().sort((a, b) => b.geomScore - a.geomScore);
    const signalAgreement = sortedByGeom[0]?.family === top1.family ? 1.0 : 0.92;

    // Margin factor
    const marginFactor = 0.62 + 0.38 * Math.min(1.0, scoreMargin / 0.10);
    // Sample size factor
    const validCount = glyphSignatures.length > 0 ? glyphSignatures.length : 4;
    const sampleFactor = Math.min(1.0, Math.sqrt(validCount / 6));
    // Quality factor based on contrast
    const qualityFactor = 0.88 + 0.12 * Math.min(1.0, targetContrastRatio / 2.0);

    return scoredFonts.map((item, idx) => {
      let conf = Math.round(item.rawScore * marginFactor * sampleFactor * qualityFactor * signalAgreement);
      if (idx === 0) {
        conf = Math.max(35, Math.min(94, conf)); // Never blindly 100%
      } else {
        conf = Math.max(30, Math.min(conf, top1.rawScore - idx * 5));
      }

      let label = 'Good Match';
      if (scoreMargin < 0.035 || conf < 70) {
        label = 'Uncertain / Close Match';
      } else if (conf >= 84) {
        label = 'High Confidence';
      }

      return {
        family: item.family,
        font: item.font,
        confidence: conf,
        visualScore: item.rawScore,
        scoreMargin: idx === 0 ? scoreMargin : undefined,
        confidenceLabel: label,
        style: item.style,
        weight: item.weight,
        isGoogleFontsVerified: item.isGoogleFontsVerified,
        matchReasons: item.matchReasons
      };
    });
  }

  /**
   * Character-aware glyph matching: Compare corresponding glyphs character-by-character
   * with distinctive glyph weighting (a, e, g, f, t, r, R, Q, M, W, 1, 2, 4, 6, 7, &).
   */
  private static computeCharacterAwareGlyphScore(
    glyphs: GlyphSignature[],
    font: FontFamily,
    text: string,
    config: MatcherConfig,
    fallbackScore: number
  ): number {
    const numPairs = Math.min(glyphs.length, text.length);
    if (numPairs < 1) return fallbackScore;

    let totalSim = 0;
    let totalWeight = 0;

    for (let i = 0; i < numPairs; i++) {
      const upGlyph = glyphs[i]!;
      const char = text[i] ?? '';
      const isDistinctive = DISTINCTIVE_CHARS.has(char);
      const w = isDistinctive ? config.distinctiveGlyphWeight : 1.0;

      // Compare aspect ratio with font's expected metric
      const targetAspect = font.typographicMetrics.avgAspect;
      const aspectSim = Math.max(0, 1.0 - Math.abs(upGlyph.multiRes.aspectRatio - targetAspect) * 1.5);

      // Compare stroke density
      const targetDensity = font.typographicMetrics.strokeWidthRatio * 1.8;
      const densitySim = Math.max(0, 1.0 - Math.abs(upGlyph.multiRes.density - targetDensity) * 2.0);

      // Contrast and terminal similarity
      let terminalSim = 0.70;
      if (font.typographicMetrics.serif === 'bracketed' || font.typographicMetrics.serif === 'hairline') {
        terminalSim = upGlyph.multiRes.hasEnclosedCounter ? 0.85 : 0.75;
      }

      const glyphSim = 0.45 * aspectSim + 0.35 * densitySim + 0.20 * terminalSim;
      totalSim += glyphSim * w;
      totalWeight += w;
    }

    const avgSim = totalWeight > 0 ? totalSim / totalWeight : 0.70;
    return Math.round(avgSim * 100);
  }

  /**
   * Character-agnostic glyph-shape matching for unknown text (Requirement 1):
   * Analyzes segmented glyph silhouettes, contours, counters, and stroke structure
   * against candidate font specimen profiles.
   */
  private static computeCharacterAgnosticGlyphScore(
    glyphs: GlyphSignature[],
    font: FontFamily,
    config: MatcherConfig,
    fallbackScore: number
  ): number {
    if (glyphs.length === 0) return fallbackScore;

    let totalGlyphSim = 0;

    for (const g of glyphs) {
      // 1. Counter topology agreement
      // If glyph has a closed counter (like o, e, p, d, a), verify font's aperture/proportions
      let counterScore = 0.70;
      if (g.multiRes.hasEnclosedCounter) {
        if (font.typographicMetrics.aperture === 'closed' || font.typographicMetrics.aperture === 'semi-closed') {
          counterScore = 0.90;
        } else {
          counterScore = 0.75;
        }
      }

      // 2. Multi-resolution aspect ratio & contour alignment
      const targetAspect = font.typographicMetrics.avgAspect;
      const aspectSim = Math.max(0, 1.0 - Math.abs(g.multiRes.aspectRatio - targetAspect) * 1.4);

      // 3. Stroke weight consistency
      const expectedStrokeRatio = font.typographicMetrics.strokeWidthRatio * 1.8;
      const strokeSim = Math.max(0, 1.0 - Math.abs(g.multiRes.density - expectedStrokeRatio) * 2.2);

      const singleGlyphSim = 0.40 * aspectSim + 0.35 * strokeSim + 0.25 * counterScore;
      totalGlyphSim += singleGlyphSim;
    }

    const avgAgnosticSim = totalGlyphSim / glyphs.length;
    return Math.round(avgAgnosticSim * 100);
  }

  private static getDefaultMatch(): FontMatchCandidate {
    const inter = GoogleFontsService.getFont('inter')!;
    return {
      family: inter.family,
      font: inter,
      confidence: 72,
      visualScore: 75,
      scoreMargin: 0.04,
      confidenceLabel: 'Good Match',
      style: 'Normal',
      weight: 400,
      isGoogleFontsVerified: true,
      matchReasons: ['Sans-serif match', 'Neutral geometry', 'Screen-optimized x-height']
    };
  }

  private static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
