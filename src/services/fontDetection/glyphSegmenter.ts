/**
 * Anchor Glyph Isolator & Sub-Character Segmentation Engine
 *
 * Decomposes words into isolated high-entropy anchor glyphs to eliminate tracking,
 * letter-spacing, and kerning drift from optical matching.
 */

export interface SegmentedAnchorGlyph {
  char: string;
  weight: number; // Typographic discriminative weight (e.g., 2.0 for 'e', 'a', 'g', 0.5 for 'l', 'i')
  canvas: HTMLCanvasElement;
  box: { x: number; y: number; w: number; h: number };
}

export class GlyphSegmentationEngine {
  // Typographic discriminative power weights based on morphological diversity
  private static readonly CHAR_DISCRIMINATIVE_WEIGHTS: Record<string, number> = {
    // High-entropy anchor glyphs (unique terminals, loops, apertures, ears)
    'a': 2.4, 'e': 2.3, 'g': 2.5, 'r': 2.0, 't': 2.0, 'f': 1.9, 's': 2.1, 'c': 1.8,
    'R': 2.4, 'Q': 2.5, 'S': 2.2, 'G': 2.3, 'C': 1.9, 'M': 2.0, 'W': 2.0, 'K': 1.9, 'k': 1.8,
    'y': 1.8, 'x': 1.7,

    // Structural medium-entropy glyphs
    'n': 1.5, 'h': 1.5, 'u': 1.4, 'd': 1.5, 'b': 1.5, 'p': 1.5, 'q': 1.5, 'o': 1.6, 'O': 1.6,
    'B': 1.7, 'D': 1.6, 'P': 1.5, 'A': 1.8, 'H': 1.4, 'E': 1.5, 'F': 1.5, 'T': 1.4,

    // Low-entropy / ambiguous straight-stem glyphs
    'l': 0.7, 'i': 0.7, 'I': 0.6, '1': 0.7, 'j': 0.8, 'J': 0.9, 'v': 1.1, 'w': 1.3,
    'z': 1.4, 'Z': 1.4
  };

  /**
   * Retrieves the typographic discriminative weight for a given character.
   */
  public static getCharWeight(char: string): number {
    return this.CHAR_DISCRIMINATIVE_WEIGHTS[char] || (/[A-Z]/.test(char) ? 1.6 : 1.2);
  }

  /**
   * Selects the top N most distinctive anchor glyphs from a set of available characters.
   */
  public static selectTopAnchorChars(chars: string[], maxAnchors: number = 4): string[] {
    const unique = Array.from(new Set(chars.filter(c => c && c.trim().length === 1)));
    unique.sort((a, b) => this.getCharWeight(b) - this.getCharWeight(a));
    return unique.slice(0, maxAnchors);
  }

  /**
   * Cuts and standardizes an individual glyph from a word canvas into a canonical 64x64 box.
   */
  public static createCanonicalGlyphCanvas(
    sourceCanvas: HTMLCanvasElement,
    box: { x: number; y: number; w: number; h: number },
    targetSize: number = 64
  ): HTMLCanvasElement {
    const out = document.createElement('canvas');
    out.width = targetSize;
    out.height = targetSize;
    const ctx = out.getContext('2d');
    if (!ctx) return out;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, targetSize, targetSize);

    // Ensure valid coordinates
    const sx = Math.max(0, Math.min(sourceCanvas.width - 1, box.x));
    const sy = Math.max(0, Math.min(sourceCanvas.height - 1, box.y));
    const sw = Math.max(1, Math.min(sourceCanvas.width - sx, box.w));
    const sh = Math.max(1, Math.min(sourceCanvas.height - sy, box.h));

    const padding = 8;
    const availSize = targetSize - padding * 2; // 48px canonical box
    const scale = Math.min(availSize / sw, availSize / sh);
    const dw = sw * scale;
    const dh = sh * scale;
    const dx = (targetSize - dw) / 2;
    const dy = (targetSize - dh) / 2;

    ctx.drawImage(sourceCanvas, sx, sy, sw, sh, dx, dy, dw, dh);
    return out;
  }

  /**
   * Monotonic DP character alignment to pair OCR text with optical boxes without off-by-one shifts.
   */
  public static alignBoxesToWord(
    boxes: Array<{ x: number; y: number; w: number; h: number; ink?: number }>,
    wordText: string
  ): Array<{ char: string; box: { x: number; y: number; w: number; h: number; ink?: number } }> {
    if (!wordText || !boxes || boxes.length === 0) return boxes.map(b => ({ char: 'e', box: b }));
    const cleanWord = wordText.replace(/^[.,\/#!$%\^&\*;:{}=\-_`~()]+|[.,\/#!$%\^&\*;:{}=\-_`~()]+$/g, '');
    const chars = Array.from(cleanWord || wordText);
    const N = boxes.length;
    const M = chars.length;
    if (M === 0) return boxes.map(b => ({ char: 'e', box: b }));

    const hArr = boxes.map(b => b.h).sort((a, b) => a - b);
    const medianH = hArr[Math.floor(hArr.length / 2)] || 16;

    const dp = Array.from({ length: M + 1 }, () => new Float64Array(N + 1).fill(Infinity));
    const parent: Array<Array<{ i: number; j: number; action: string; char?: string; box?: any } | null>> = Array.from(
      { length: M + 1 },
      () => new Array(N + 1).fill(null)
    );

    dp[0]![0] = 0;
    for (let j = 1; j <= N; j++) {
      const isPunct = boxes[j - 1]!.h < medianH * 0.55;
      dp[0]![j] = dp[0]![j - 1]! + (isPunct ? 0.1 : 1.2);
      parent[0]![j] = { i: 0, j: j - 1, action: 'skip_box' };
    }

    const CHAR_ASPECT: Record<string, number> = {
      'm': 1.55, 'w': 1.55, 'W': 1.60, 'M': 1.50,
      'i': 0.35, 'l': 0.30, 't': 0.45, 'j': 0.35, 'I': 0.35,
      'f': 0.45, 'r': 0.55, 'default': 0.85
    };

    function matchCost(char: string, box: { w: number; h: number }, charIdx: number, boxIdx: number): number {
      const boxAspect = box.w / Math.max(1, box.h);
      const expAspect = CHAR_ASPECT[char] || CHAR_ASPECT['default']!;
      const aspectDiff = Math.abs(Math.log(Math.max(0.1, boxAspect) / expAspect));
      const progChar = charIdx / Math.max(1, M - 1);
      const progBox = boxIdx / Math.max(1, N - 1);
      const progDiff = Math.abs(progChar - progBox);
      let heightPenalty = 0;
      if (box.h < medianH * 0.55) heightPenalty = 4.0;
      return aspectDiff * 1.5 + progDiff * 1.0 + heightPenalty;
    }

    function mergeBoxes(b1: any, b2: any) {
      const x0 = Math.min(b1.x, b2.x);
      const y0 = Math.min(b1.y, b2.y);
      const x1 = Math.max(b1.x + b1.w, b2.x + b2.w);
      const y1 = Math.max(b1.y + b1.h, b2.y + b2.h);
      return { x: x0, y: y0, w: x1 - x0, h: y1 - y0, ink: (b1.ink || 0) + (b2.ink || 0) };
    }

    for (let i = 1; i <= M; i++) {
      const char = chars[i - 1]!;
      for (let j = 1; j <= N; j++) {
        const cost1 = dp[i - 1]![j - 1]! + matchCost(char, boxes[j - 1]!, i - 1, j - 1);
        if (cost1 < dp[i]![j]!) {
          dp[i]![j] = cost1;
          parent[i]![j] = { i: i - 1, j: j - 1, action: 'match_1', char, box: boxes[j - 1] };
        }

        if (j >= 2) {
          const merged = mergeBoxes(boxes[j - 2], boxes[j - 1]);
          const cost2 = dp[i - 1]![j - 2]! + matchCost(char, merged, i - 1, j - 1.5) + 0.2;
          if (cost2 < dp[i]![j]!) {
            dp[i]![j] = cost2;
            parent[i]![j] = { i: i - 1, j: j - 2, action: 'match_2', char, box: merged };
          }
        }

        const isTiny = boxes[j - 1]!.h < medianH * 0.55;
        const skipCost = dp[i]![j - 1]! + (isTiny ? 0.1 : 1.2);
        if (skipCost < dp[i]![j]!) {
          dp[i]![j] = skipCost;
          parent[i]![j] = { i, j: j - 1, action: 'skip_box' };
        }
      }
    }

    const result: Array<{ char: string; box: any }> = [];
    let currI = M, currJ = N;
    while (currI > 0 || currJ > 0) {
      const p = parent[currI]?.[currJ];
      if (!p) break;
      if (p.action === 'match_1' || p.action === 'match_2') {
        result.unshift({ char: p.char!, box: p.box });
      }
      currI = p.i;
      currJ = p.j;
    }
    return result.length > 0 ? result : boxes.map((b, idx) => ({ char: chars[idx] || 'e', box: b }));
  }
}
