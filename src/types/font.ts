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
    avgAspect: number;        // width-to-height ratio of standard letters (0.40-0.80)
    strokeWidthRatio: number; // stroke weight relative to cap-height (0.07-0.22)
    xHeightRatio: number;     // x-height / cap-height (0.55-0.80)
    terminalStyle: 'flat' | 'diagonal' | 'rounded' | 'ball' | 'sheared'; // stroke terminal shape
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
  distinctiveGlyphCount?: number;
  textReliability?: 'reliable' | 'partial' | 'unknown';
  contrastRatio?: number;
  serifRatio?: number;
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
  visualScore?: number;
  scoreMargin?: number;
  confidenceLabel?: string;
}

export interface DetectionResult {
  primaryMatch: FontMatchCandidate;
  candidates: FontMatchCandidate[];
  commercialFontDetected?: string;
  suggestedFreeAlternatives: FontMatchCandidate[];
  typographyTraits: TypographyTraits;
  isExactMatch: boolean;
  confidence: number;
  confidenceLabel?: string;
  detectedText: string;
  processingTimeMs: number;
}

export interface MatcherConfig {
  glyphResolutionHigh: number; // 128
  glyphResolutionLow: number;  // 64
  iouWeight: number;           // weight of binary silhouette IoU (e.g. 0.60)
  contourWeight: number;       // weight of boundary/profile similarity (e.g. 0.40)
  distinctiveGlyphWeight: number; // multiplier for distinctive glyphs (e.g. 1.75)
  glyphMatchWeightKnownText: number;   // weight of glyph matching when text is reliable (e.g. 0.55)
  glyphMatchWeightUnknownText: number; // weight of glyph matching when text is unknown (e.g. 0.40)
  categorySoftWeight: number;  // max points for soft category prior (e.g. 12)
  contrastWeight: number;      // max points for contrast curve (e.g. 22)
  serifWeight: number;         // max points for serif flare curve (e.g. 22)
  aspectWeight: number;        // max points for aspect ratio (e.g. 18)
  weightMatchWeight: number;   // max points for stroke weight match (e.g. 14)
  confidenceMarginSensitivity: number; // divisor for score margin (e.g. 0.12)
}

export interface MultiResGlyph {
  bitmap64: Uint8Array;   // 64x64 binary bitmap
  bitmap128: Uint8Array;  // 128x128 binary bitmap (preserves hairlines)
  aspectRatio: number;    // width / height
  density: number;        // ink pixels / total bounding box
  hasEnclosedCounter: boolean; // detected closed hole (like o, e, p, d, b, g, 0, 8, 6, 9)
  horizontalProfile: Float32Array; // 16-bin vertical projection profile
  verticalProfile: Float32Array;   // 16-bin horizontal projection profile
}

export interface GlyphSignature {
  char?: string;
  box: { x: number; y: number; w: number; h: number };
  multiRes: MultiResGlyph;
  isDistinctive?: boolean;
}

export interface SegmentedGlyph {
  id: string;
  char: string;
  confidence: number;
  box: { x: number; y: number; w: number; h: number };
  signature: Uint8Array;
  zone: 'cap' | 'x-height' | 'ascender' | 'descender' | 'punctuation';
  croppedImageDataUrl?: string;
}

export interface SegmentedWord {
  id: string;
  text: string;
  bounds: { x: number; y: number; w: number; h: number };
  lineIndex: number;
  glyphs: SegmentedGlyph[];
  isJoinedScript: boolean;
  inkPixelCount: number;
  croppedWordDataUrl?: string;
}

export interface TextAnalysisResult {
  words: SegmentedWord[];
  primaryWordIndex: number;
  imageWidth: number;
  imageHeight: number;
  dominantBgColor: { r: number; g: number; b: number };
}

export interface FontSignatureManifest {
  grid: number;
  bytesPerGlyph: number;
  chars: string;
  weights: string[];
  fonts: string[];
  families: string[];
  categories: string[];
}

