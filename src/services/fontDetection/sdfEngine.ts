/**
 * Signed Distance Field (SDF) Computation & Chamfer Matching Engine
 *
 * Implements exact linear-time O(N) 2D Euclidean Distance Transform (Felzenszwalb & Huttenlocher).
 * Eliminates subpixel rasterizer discrepancies, anti-aliasing variations, and 1px translational jitter.
 */

export class SignedDistanceFieldEngine {
  public static readonly CANONICAL_SIZE = 64;
  public static readonly DEFAULT_CLAMP_RADIUS = 16.0;

  /**
   * Computes an exact 2D Signed Distance Field from a binary mask.
   * Positive distance inside the letterform, negative distance outside.
   *
   * @param binaryMask 1D array of 0 (background) and 1 (foreground/glyph ink)
   * @param width Width of the grid
   * @param height Height of the grid
   * @param clampRadius Maximum distance radius for clamping (default: 16)
   */
  public static computeSDF(
    binaryMask: Uint8Array,
    width: number,
    height: number,
    clampRadius: number = this.DEFAULT_CLAMP_RADIUS
  ): Float32Array {
    const size = width * height;
    const sdf = new Float32Array(size);

    // 1. Distance to nearest background pixel (inside distance)
    const distInside = this.euclideanDistanceTransform2D(binaryMask, width, height, 1);

    // 2. Distance to nearest foreground pixel (outside distance)
    const distOutside = this.euclideanDistanceTransform2D(binaryMask, width, height, 0);

    // 3. Combine: inside is positive, outside is negative, normalized to [-1, 1]
    const invRadius = 1.0 / Math.max(1e-4, clampRadius);
    for (let i = 0; i < size; i++) {
      let d = 0;
      if (binaryMask[i] === 1) {
        d = distInside[i]!;
      } else {
        d = -distOutside[i]!;
      }
      // Clamp to [-clampRadius, clampRadius] and normalize to [-1, 1]
      const clamped = Math.max(-clampRadius, Math.min(clampRadius, d));
      sdf[i] = clamped * invRadius;
    }

    return sdf;
  }

  /**
   * Compares two canonical Float32Array SDFs and returns L1 Chamfer distance and calibrated similarity [0, 1].
   */
  public static compareSDF(
    sdfA: Float32Array,
    sdfB: Float32Array
  ): { distance: number; similarity: number } {
    const len = Math.min(sdfA.length, sdfB.length);
    if (len === 0) return { distance: 1.0, similarity: 0 };

    let diffSum = 0;
    let weightSum = 0;

    for (let i = 0; i < len; i++) {
      const a = sdfA[i]!;
      const b = sdfB[i]!;

      // Emphasize the boundary zone [-0.5, 0.5] where contour details reside
      const nearBoundary = Math.max(0, 1.0 - Math.min(Math.abs(a), Math.abs(b)));
      const weight = 1.0 + 1.5 * nearBoundary;

      diffSum += Math.abs(a - b) * weight;
      weightSum += weight;
    }

    const meanWeightedDiff = diffSum / Math.max(1e-6, weightSum);
    // Exponential decay curve: 0 diff -> 1.0; 0.2 diff -> ~0.82; 0.5 diff -> ~0.50
    const similarity = Math.max(0, Math.min(1.0, Math.exp(-1.38 * meanWeightedDiff)));

    return {
      distance: meanWeightedDiff,
      similarity
    };
  }

  /**
   * Extracts a standardized 64x64 Signed Distance Field from an HTMLCanvasElement.
   */
  public static extractCanvasSDF(
    sourceCanvas: HTMLCanvasElement,
    targetSize: number = this.CANONICAL_SIZE
  ): Float32Array {
    const off = document.createElement('canvas');
    off.width = targetSize;
    off.height = targetSize;
    const ctx = off.getContext('2d');
    if (!ctx) return new Float32Array(targetSize * targetSize);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, targetSize, targetSize);

    // Maintain aspect ratio centered in target box
    const scale = Math.min((targetSize - 8) / Math.max(1, sourceCanvas.width), (targetSize - 8) / Math.max(1, sourceCanvas.height));
    const dw = sourceCanvas.width * scale;
    const dh = sourceCanvas.height * scale;
    const dx = (targetSize - dw) / 2;
    const dy = (targetSize - dh) / 2;

    ctx.drawImage(sourceCanvas, 0, 0, sourceCanvas.width, sourceCanvas.height, dx, dy, dw, dh);
    const imgData = ctx.getImageData(0, 0, targetSize, targetSize);
    const data = imgData.data;

    // Convert to binary mask (1 for dark ink, 0 for white background)
    const mask = new Uint8Array(targetSize * targetSize);
    for (let i = 0; i < mask.length; i++) {
      const idx = i * 4;
      const lum = 0.2126 * (data[idx] ?? 0) + 0.7152 * (data[idx + 1] ?? 0) + 0.0722 * (data[idx + 2] ?? 0);
      mask[i] = lum < 165 ? 1 : 0;
    }

    return this.computeSDF(mask, targetSize, targetSize);
  }

  /**
   * Renders a candidate glyph offscreen and computes its canonical 64x64 SDF.
   */
  public static renderCandidateGlyphSDF(
    family: string,
    char: string,
    weightNum: number = 400,
    targetSize: number = this.CANONICAL_SIZE
  ): Float32Array | null {
    if (typeof document === 'undefined') return null;

    const canvas = document.createElement('canvas');
    canvas.width = targetSize;
    canvas.height = targetSize;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, targetSize, targetSize);

    ctx.fillStyle = '#000000';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    // Generous font size that fills ~75% of canonical height
    ctx.font = `${weightNum} 46px "${family}", sans-serif`;
    ctx.fillText(char, targetSize / 2, targetSize / 2 + 1);

    const imgData = ctx.getImageData(0, 0, targetSize, targetSize);
    const data = imgData.data;

    const mask = new Uint8Array(targetSize * targetSize);
    let inkCount = 0;
    for (let i = 0; i < mask.length; i++) {
      const idx = i * 4;
      const lum = 0.2126 * (data[idx] ?? 0) + 0.7152 * (data[idx + 1] ?? 0) + 0.0722 * (data[idx + 2] ?? 0);
      if (lum < 165) {
        mask[i] = 1;
        inkCount++;
      } else {
        mask[i] = 0;
      }
    }

    if (inkCount === 0) return null; // Glyph missing or unrendered
    return this.computeSDF(mask, targetSize, targetSize);
  }

  /**
   * Separable 2D Euclidean Distance Transform in O(W * H) time.
   * Based on parabolic lower envelope intersection algorithm (Felzenszwalb & Huttenlocher).
   */
  private static euclideanDistanceTransform2D(
    binaryMask: Uint8Array,
    width: number,
    height: number,
    targetValue: number
  ): Float32Array {
    const size = width * height;
    const d = new Float32Array(size);
    const INF = 1e8;

    // Step 1: Initialize grid. If pixel == targetValue, distance is 0, else infinity
    for (let i = 0; i < size; i++) {
      d[i] = binaryMask[i] === targetValue ? 0 : INF;
    }

    // Step 2: Transform along columns
    const colDist = new Float32Array(height);
    const colOut = new Float32Array(height);
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        colDist[y] = d[y * width + x]!;
      }
      this.distanceTransform1D(colDist, colOut, height);
      for (let y = 0; y < height; y++) {
        d[y * width + x] = colOut[y]!;
      }
    }

    // Step 3: Transform along rows
    const rowDist = new Float32Array(width);
    const rowOut = new Float32Array(width);
    for (let y = 0; y < height; y++) {
      const rowOffset = y * width;
      for (let x = 0; x < width; x++) {
        rowDist[x] = d[rowOffset + x]!;
      }
      this.distanceTransform1D(rowDist, rowOut, width);
      for (let x = 0; x < width; x++) {
        // sqrt to get true Euclidean distance
        d[rowOffset + x] = Math.sqrt(rowOut[x]!);
      }
    }

    return d;
  }

  /**
   * 1D Euclidean squared distance transform via lower envelope of parabolas.
   */
  private static distanceTransform1D(
    f: Float32Array,
    d: Float32Array,
    n: number
  ): void {
    const v = new Int32Array(n);
    const z = new Float32Array(n + 1);
    let k = 0;
    v[0] = 0;
    z[0] = -1e8;
    z[1] = 1e8;

    for (let q = 1; q < n; q++) {
      let s = ((f[q]! + q * q) - (f[v[k]!]! + v[k]! * v[k]!)) / (2 * q - 2 * v[k]!);
      while (s <= z[k]!) {
        k--;
        s = ((f[q]! + q * q) - (f[v[k]!]! + v[k]! * v[k]!)) / (2 * q - 2 * v[k]!);
      }
      k++;
      v[k] = q;
      z[k] = s;
      z[k + 1] = 1e8;
    }

    k = 0;
    for (let q = 0; q < n; q++) {
      while (z[k + 1]! < q) {
        k++;
      }
      const dx = q - v[k]!;
      d[q] = dx * dx + f[v[k]!]!;
    }
  }
}
