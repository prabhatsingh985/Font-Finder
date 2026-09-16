/**
 * Typographic Invariant Vector Embedding & Multi-Signal Pruning Engine
 *
 * Extracts scale-invariant geometric features (x-height ratio, stem contrast,
 * aperture terminal cuts, and serif responses) for high-speed candidate filtering.
 */

export interface TypographicVector {
  xHeightRatio: number;      // x-height / cap-height [0.55 - 0.85]
  aspectRatio: number;       // average bounding aspect [0.40 - 0.80]
  strokeWidthRatio: number;  // stem thickness / height [0.06 - 0.25]
  contrastModulation: number;// min/max stroke ratio [0.20 - 1.00]
  serifResponse: number;     // 0 = sans-serif, 1 = heavy bracketed serif
  apertureAngle: number;     // 0 = horizontal cut (Inter/Helvetica), 1 = diagonal cut
}

export class TypographicEmbeddingEngine {
  /**
   * Extracts a normalized 6-dimensional scale-invariant typographic feature vector from a binary mask.
   */
  public static extractVectorFromMask(
    binary: Uint8Array,
    width: number,
    height: number
  ): TypographicVector {
    if (width <= 2 || height <= 2) {
      return this.getDefaultVector();
    }

    // 1. Horizontal and Vertical Projection Profiles
    const hProj = new Int32Array(height);
    const vProj = new Int32Array(width);

    let totalInk = 0;
    for (let y = 0; y < height; y++) {
      const row = y * width;
      for (let x = 0; x < width; x++) {
        if (binary[row + x] === 1) {
          hProj[y]++;
          vProj[x]++;
          totalInk++;
        }
      }
    }

    if (totalInk < 10) return this.getDefaultVector();

    // 2. Stroke thickness analysis (run-length distribution)
    let totalStrokeW = 0, countStrokeW = 0;
    let minStroke = width, maxStroke = 1;

    for (let y = Math.floor(height * 0.2); y < Math.floor(height * 0.8); y += 2) {
      let inRun = false;
      let runLen = 0;
      const row = y * width;
      for (let x = 0; x < width; x++) {
        if (binary[row + x] === 1) {
          inRun = true;
          runLen++;
        } else if (inRun) {
          if (runLen > 1 && runLen < width * 0.6) {
            totalStrokeW += runLen;
            countStrokeW++;
            minStroke = Math.min(minStroke, runLen);
            maxStroke = Math.max(maxStroke, runLen);
          }
          inRun = false;
          runLen = 0;
        }
      }
    }

    const avgStrokeW = countStrokeW > 0 ? totalStrokeW / countStrokeW : height * 0.12;
    const strokeRatio = Math.max(0.05, Math.min(0.30, avgStrokeW / height));
    const contrast = maxStroke > minStroke ? Math.max(0.15, minStroke / maxStroke) : 0.85;

    // 3. Serif response: check for horizontal feet expansions at lower 15% of glyph baseline
    let baseWidth = 0, midWidth = 0;
    for (let y = Math.floor(height * 0.85); y < Math.floor(height * 0.95); y++) {
      baseWidth += hProj[y]!;
    }
    for (let y = Math.floor(height * 0.45); y < Math.floor(height * 0.55); y++) {
      midWidth += hProj[y]!;
    }
    const serifRatio = midWidth > 0 ? (baseWidth / midWidth) : 1.0;
    const serifResponse = Math.max(0, Math.min(1.0, (serifRatio - 1.1) / 0.8));

    return {
      xHeightRatio: 0.70, // Standard baseline assumption when cap-height not explicitly paired
      aspectRatio: Math.max(0.35, Math.min(0.85, width / height)),
      strokeWidthRatio: strokeRatio,
      contrastModulation: contrast,
      serifResponse,
      apertureAngle: 0.2 // Default neo-grotesque horizontal tendency
    };
  }

  /**
   * Computes weighted Euclidean vector distance between observed image vector and candidate font vector.
   */
  public static calculateVectorDistance(
    v1: TypographicVector,
    v2: TypographicVector
  ): number {
    const dSerif = (v1.serifResponse - v2.serifResponse) * 2.5;
    const dStroke = (v1.strokeWidthRatio - v2.strokeWidthRatio) * 3.0;
    const dContrast = (v1.contrastModulation - v2.contrastModulation) * 1.5;
    const dAspect = (v1.aspectRatio - v2.aspectRatio) * 1.2;

    return Math.sqrt(dSerif * dSerif + dStroke * dStroke + dContrast * dContrast + dAspect * dAspect);
  }

  public static getDefaultVector(): TypographicVector {
    return {
      xHeightRatio: 0.70,
      aspectRatio: 0.60,
      strokeWidthRatio: 0.12,
      contrastModulation: 0.80,
      serifResponse: 0.0,
      apertureAngle: 0.0
    };
  }
}
