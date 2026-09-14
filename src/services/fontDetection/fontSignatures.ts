import type { FontSignatureManifest } from '../../types/font';

export interface FontSignatureData {
  name: 'regular' | 'bold';
  charMap: Map<string, Uint8Array>;
}

let cachedManifest: FontSignatureManifest | null = null;
let cachedSignatures: FontSignatureData[] | null = null;
let loadingPromise: Promise<{ manifest: FontSignatureManifest; signatures: FontSignatureData[] }> | null = null;

const GZIP_MAGIC = [31, 139];

async function decompressGzip(buffer: ArrayBuffer): Promise<Uint8Array> {
  const bytes = new Uint8Array(buffer);
  if (bytes[0] !== GZIP_MAGIC[0] || bytes[1] !== GZIP_MAGIC[1]) {
    return bytes;
  }

  if (typeof DecompressionStream !== 'undefined') {
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    const decompressedBuf = await new Response(stream).arrayBuffer();
    return new Uint8Array(decompressedBuf);
  }

  // Fallback for Node.js environment
  try {
    const zlibModule = 'zlib';
    const zlib = await import(/* @vite-ignore */ zlibModule);
    return new Uint8Array(zlib.gunzipSync(Buffer.from(bytes)));
  } catch (err) {
    throw new Error('No decompression stream available in environment: ' + String(err));
  }
}

export class FontSignatureService {
  public static async loadManifest(): Promise<FontSignatureManifest> {
    if (cachedManifest) return cachedManifest;

    try {
      if (typeof window !== 'undefined') {
        const res = await fetch('/signatures/manifest.json');
        if (!res.ok) throw new Error(`Manifest returned HTTP ${res.status}`);
        cachedManifest = await res.json();
      } else {
        // Node.js environment
        const fsModule = 'fs';
        const pathModule = 'path';
        const fs = await import(/* @vite-ignore */ fsModule);
        const path = await import(/* @vite-ignore */ pathModule);
        const manifestPath = path.join(process.cwd(), 'public', 'signatures', 'manifest.json');
        const content = fs.readFileSync(manifestPath, 'utf-8');
        cachedManifest = JSON.parse(content);
      }
      return cachedManifest!;
    } catch (err) {
      throw new Error(`Failed to load signatures manifest: ${err}`);
    }
  }

  private static async fetchBinary(filename: string): Promise<Uint8Array> {
    if (typeof window !== 'undefined') {
      const res = await fetch(`/signatures/${filename}`);
      if (!res.ok) throw new Error(`Failed to fetch /signatures/${filename}: HTTP ${res.status}`);
      const buf = await res.arrayBuffer();
      return decompressGzip(buf);
    } else {
      const fsModule = 'fs';
      const pathModule = 'path';
      const fs = await import(/* @vite-ignore */ fsModule);
      const path = await import(/* @vite-ignore */ pathModule);
      const filePath = path.join(process.cwd(), 'public', 'signatures', filename);
      const buf = fs.readFileSync(filePath);
      return decompressGzip(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
    }
  }

  private static indexSignatureBuffer(
    buffer: Uint8Array,
    manifest: FontSignatureManifest
  ): Map<string, Uint8Array> {
    const charMap = new Map<string, Uint8Array>();
    const stride = manifest.fonts.length * manifest.bytesPerGlyph;

    for (let i = 0; i < manifest.chars.length; i++) {
      const ch = manifest.chars[i]!;
      const start = i * stride;
      const end = start + stride;
      charMap.set(ch, buffer.subarray(start, end));
    }

    return charMap;
  }

  public static async init(): Promise<{ manifest: FontSignatureManifest; signatures: FontSignatureData[] }> {
    if (cachedManifest && cachedSignatures) {
      return { manifest: cachedManifest, signatures: cachedSignatures };
    }

    if (loadingPromise) return loadingPromise;

    loadingPromise = (async () => {
      const manifest = await this.loadManifest();
      const [allBuf, boldBuf] = await Promise.all([
        this.fetchBinary('all.bin.gz'),
        this.fetchBinary('bold.bin.gz')
      ]);

      const signatures: FontSignatureData[] = [
        { name: 'regular', charMap: this.indexSignatureBuffer(allBuf, manifest) },
        { name: 'bold', charMap: this.indexSignatureBuffer(boldBuf, manifest) }
      ];

      cachedManifest = manifest;
      cachedSignatures = signatures;
      return { manifest, signatures };
    })();

    try {
      return await loadingPromise;
    } finally {
      loadingPromise = null;
    }
  }

  /**
   * Samples a 16x16 binary bitmask (32 bytes) from a binary image mask given a bounding box.
   */
  public static compute16x16Signature(
    bits: Uint8Array,
    imgWidth: number,
    box: { x: number; y: number; w: number; h: number }
  ): Uint8Array {
    const n = 16;
    const sig = new Uint8Array((n * n) / 8); // 32 bytes

    for (let row = 0; row < n; row++) {
      const y0 = box.y + Math.floor((row * box.h) / n);
      const y1 = box.y + Math.max(Math.floor(((row + 1) * box.h) / n), y0 + 1);

      for (let col = 0; col < n; col++) {
        const x0 = box.x + Math.floor((col * box.w) / n);
        const x1 = box.x + Math.max(Math.floor(((col + 1) * box.w) / n), x0 + 1);

        let total = 0;
        let ink = 0;

        for (let y = y0; y < y1; y++) {
          const rOffset = y * imgWidth;
          for (let x = x0; x < x1; x++) {
            total++;
            if (bits[rOffset + x]) ink++;
          }
        }

        if (total > 0 && ink / total >= 0.5) {
          const pixelIdx = row * n + col;
          sig[pixelIdx >> 3]! |= 1 << (7 - (pixelIdx & 7));
        }
      }
    }

    return sig;
  }

  /**
   * Fast bitwise Hamming distance between two 32-byte signatures
   */
  public static hammingDistance(sigA: Uint8Array, sigB: Uint8Array, offsetB: number = 0): number {
    let diffBits = 0;
    const len = sigA.length;

    for (let i = 0; i < len; i++) {
      let xor = sigA[i]! ^ sigB[offsetB + i]!;
      // Brian Kernighan bit counter
      while (xor) {
        xor &= xor - 1;
        diffBits++;
      }
    }

    return diffBits;
  }

  /**
   * Checks if a slice of 32 bytes is all zeros (font missing glyph)
   */
  public static isBlankGlyph(buf: Uint8Array, offset: number, bytesPerGlyph: number): boolean {
    for (let i = 0; i < bytesPerGlyph; i++) {
      if (buf[offset + i] !== 0) return false;
    }
    return true;
  }

  /**
   * Morphological 3x3 erosion (thinning) to test for lighter weight cuts
   */
  public static erodeMask(mask: { bits: Uint8Array; width: number; height: number }): {
    bits: Uint8Array;
    width: number;
    height: number;
  } {
    const { bits, width, height } = mask;
    const eroded = new Uint8Array(bits.length);

    for (let y = 1; y < height - 1; y++) {
      const row = y * width;
      for (let x = 1; x < width - 1; x++) {
        const idx = row + x;
        if (!bits[idx]) continue;

        let allNeighborsSet = 1;
        for (let dy = -1; dy <= 1 && allNeighborsSet; dy++) {
          const nRow = (y + dy) * width;
          for (let dx = -1; dx <= 1; dx++) {
            if (!bits[nRow + x + dx]) {
              allNeighborsSet = 0;
              break;
            }
          }
        }
        eroded[idx] = allNeighborsSet;
      }
    }

    return { bits: eroded, width, height };
  }

  /**
   * Recalculates bounding box after erosion so the signature is tightly framed
   */
  public static tightenBox(
    bits: Uint8Array,
    imgWidth: number,
    box: { x: number; y: number; w: number; h: number }
  ): { x: number; y: number; w: number; h: number } | null {
    let minX = box.x + box.w;
    let maxX = box.x - 1;
    let minY = box.y + box.h;
    let maxY = box.y - 1;

    for (let y = box.y; y < box.y + box.h; y++) {
      const row = y * imgWidth;
      for (let x = box.x; x < box.x + box.w; x++) {
        if (bits[row + x]) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    if (maxX < minX || maxY < minY) return null;
    return { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 };
  }
}
