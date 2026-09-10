export type FontCategory = 'sans-serif' | 'serif' | 'display' | 'monospace' | 'handwriting';

export interface FontVariant {
  weight: number | string;
  style: 'normal' | 'italic';
  label?: string;
}

export interface FontFamily {
  id: string;
  family: string;
  category: FontCategory;
  designer: string;
  variants: FontVariant[];
  subsets: string[];
  version: string;
  lastModified: string;
  isGoogleFont: boolean;
  googleFontsUrl: string;
  importUrl: string;
  fontFamilyCss: string;
  variable: boolean;
  description: string;
  // Typographic fingerprint features for matching
  typographicMetrics: {
    serif: 'none' | 'subtle' | 'bracketed' | 'slab' | 'hairline';
    contrast: 'none' | 'low' | 'medium' | 'high';
    proportions: 'condensed' | 'regular' | 'wide' | 'geometric';
    xHeight: 'low' | 'medium' | 'high';
    aperture: 'open' | 'semi-closed' | 'closed';
    avgAspect: number; // width-to-height ratio of standard letters
    strokeWidthRatio: number; // stroke weight relative to height
  };
  // Known commercial alternatives mapped directly
  commercialAlternativesFor?: string[];
  recommendedPairings?: string[];
}

export interface TypographyTraits {
  classification: FontCategory;
  serifType: 'none' | 'subtle' | 'bracketed' | 'slab' | 'hairline';
  contrast: 'none' | 'low' | 'medium' | 'high';
  proportions: 'condensed' | 'regular' | 'wide' | 'geometric';
  estimatedWeight: number;
  isItalic: boolean;
  xHeightRatio: number;
  stemWidthRatio: number;
  detectedText?: string;
}

export interface FontMatchCandidate {
  family: string;
  font: FontFamily;
  confidence: number; // 0 - 100
  style: string;
  weight: number | string;
  isGoogleFontsVerified: boolean;
  matchReasons: string[];
  previewUrl?: string;
}

export interface DetectionResult {
  primaryMatch: FontMatchCandidate;
  candidates: FontMatchCandidate[];
  commercialFontDetected?: string;
  suggestedFreeAlternatives: FontMatchCandidate[];
  typographyTraits: TypographyTraits;
  isExactMatch: boolean;
  confidence: number;
  detectedText: string;
  processingTimeMs: number;
}
