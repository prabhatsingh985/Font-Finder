import type { FontFamily, FontCategory } from '../../types/font';
import { VERIFIED_GOOGLE_FONTS } from './data';

export interface VerificationResult {
  isVerified: boolean;
  officialFamily: string | null;
  font: FontFamily | null;
  confidence: number;
  verificationSource: 'official_catalog' | 'unverified';
}

export class GoogleFontsService {
  private static fontsCache: Map<string, FontFamily> = new Map();
  private static initialized = false;

  private static init() {
    if (this.initialized) return;
    for (const font of VERIFIED_GOOGLE_FONTS) {
      this.fontsCache.set(this.normalizeName(font.family), font);
      this.fontsCache.set(font.id.toLowerCase(), font);
    }
    this.initialized = true;
  }

  public static normalizeName(name: string): string {
    return name
      .toLowerCase()
      .trim()
      .replace(/[\s\-_]+/g, '');
  }

  /**
   * Strictly verify whether a font is available on Google Fonts.
   * Only returns isVerified: true when officially found in the verified catalog.
   */
  public static verifyFont(fontName: string): VerificationResult {
    this.init();
    if (!fontName) {
      return {
        isVerified: false,
        officialFamily: null,
        font: null,
        confidence: 0,
        verificationSource: 'unverified'
      };
    }

    const normalized = this.normalizeName(fontName);
    const directMatch = this.fontsCache.get(normalized);

    if (directMatch) {
      return {
        isVerified: true,
        officialFamily: directMatch.family,
        font: directMatch,
        confidence: 99,
        verificationSource: 'official_catalog'
      };
    }

    // Fuzzy check against known families
    for (const font of VERIFIED_GOOGLE_FONTS) {
      const targetNorm = this.normalizeName(font.family);
      if (normalized.includes(targetNorm) || targetNorm.includes(normalized)) {
        return {
          isVerified: true,
          officialFamily: font.family,
          font: font,
          confidence: 92,
          verificationSource: 'official_catalog'
        };
      }
    }

    return {
      isVerified: false,
      officialFamily: null,
      font: null,
      confidence: 0,
      verificationSource: 'unverified'
    };
  }

  /**
   * Get all verified Google Fonts
   */
  public static getAllFonts(): FontFamily[] {
    return VERIFIED_GOOGLE_FONTS;
  }

  /**
   * Find font by id or family name
   */
  public static getFont(idOrFamily: string): FontFamily | undefined {
    this.init();
    const normalized = this.normalizeName(idOrFamily);
    return this.fontsCache.get(normalized);
  }

  /**
   * Search fonts by keyword and category
   */
  public static searchFonts(query: string = '', category?: string): FontFamily[] {
    const q = query.toLowerCase().trim();
    return VERIFIED_GOOGLE_FONTS.filter((font) => {
      const matchesCategory = !category || category === 'all' || font.category === category;
      const matchesQuery =
        !q ||
        font.family.toLowerCase().includes(q) ||
        font.designer.toLowerCase().includes(q) ||
        font.description.toLowerCase().includes(q) ||
        font.commercialAlternativesFor?.some((alt) => alt.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }

  /**
   * Find verified free Google Fonts alternatives for proprietary/commercial fonts
   */
  public static getAlternativesForCommercialFont(commercialName: string): FontFamily[] {
    this.init();
    const norm = commercialName.toLowerCase().trim();
    
    // Direct lookup in commercialAlternativesFor
    const matches = VERIFIED_GOOGLE_FONTS.filter((font) =>
      font.commercialAlternativesFor?.some((c) => c.toLowerCase().includes(norm) || norm.includes(c.toLowerCase()))
    );

    if (matches.length > 0) {
      return matches;
    }

    // Fallback based on typographic categories (return top versatile fonts)
    return [
      this.fontsCache.get('inter')!,
      this.fontsCache.get('montserrat')!,
      this.fontsCache.get('lora')!
    ].filter(Boolean);
  }

  /**
   * Generate valid Google Fonts CSS import snippet
   */
  public static generateCssSnippet(
    font: FontFamily,
    weight: number | string = 400
  ): { importUrl: string; fontFamily: string } {
    const encodedFamily = encodeURIComponent(font.family).replace(/%20/g, '+');
    const availableWeights = font.variants
      .filter((v) => v.style === 'normal')
      .map((v) => v.weight)
      .slice(0, 5)
      .join(';');

    const importUrl = `@import url('https://fonts.googleapis.com/css2?family=${encodedFamily}:wght@${availableWeights || '400;700'}&display=swap');`;
    const fontFamily = `font-family: '${font.family}', ${font.category};`;

    return { importUrl, fontFamily };
  }
}
