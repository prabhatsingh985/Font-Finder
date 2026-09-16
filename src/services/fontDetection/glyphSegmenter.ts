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

    const padding = 6;
    const availSize = targetSize - padding * 2;
    const scale = Math.min(availSize / sw, availSize / sh);
    const dw = sw * scale;
    const dh = sh * scale;
    const dx = (targetSize - dw) / 2;
    const dy = (targetSize - dh) / 2;

    ctx.drawImage(sourceCanvas, sx, sy, sw, sh, dx, dy, dw, dh);
    return out;
  }
}
