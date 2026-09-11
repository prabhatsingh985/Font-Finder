import type { FontFamily, FontCategory } from '../../types/font';
import { VERIFIED_GOOGLE_FONTS } from './data';
import catalogData from './catalog.json';

export function normalizeCatalogFont(raw: any): FontFamily {
  if (raw.variants && raw.typographicMetrics && raw.designer) {
    return raw as FontFamily;
  }
  const designer = Array.isArray(raw.designers)
    ? raw.designers.join(', ')
    : (raw.designer || 'Google Fonts');

  const variants = Array.isArray(raw.variants) && raw.variants.length > 0
    ? raw.variants
    : (Array.isArray(raw.weights) && raw.weights.length > 0
        ? raw.weights.map((w: any) => ({ weight: w, style: 'normal' as const }))
        : [{ weight: 400, style: 'normal' as const }, { weight: 700, style: 'normal' as const }]);

  const description = raw.description || `${raw.family} is a verified open-source Google Font family available for free personal and commercial projects under the SIL Open Font License.`;

  const familySlug = raw.family.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const id = raw.id || familySlug;

  return {
    id,
    family: raw.family,
    category: (raw.category as FontCategory) || 'sans-serif',
    designer,
    variants,
    subsets: raw.subsets || ['latin'],
    version: raw.version || 'v1.0',
    lastModified: raw.lastModified || '2024',
    isGoogleFont: true,
    googleFontsUrl: raw.googleFontsUrl || `https://fonts.google.com/specimen/${encodeURIComponent(raw.family).replace(/%20/g, '+')}`,
    importUrl: raw.importUrl || `@import url('https://fonts.googleapis.com/css2?family=${encodeURIComponent(raw.family).replace(/%20/g, '+')}:wght@400;700&display=swap');`,
    fontFamilyCss: raw.fontFamilyCss || `font-family: '${raw.family}', ${raw.category || 'sans-serif'};`,
    variable: Boolean(raw.variable || (variants.length > 3)),
    description,
    typographicMetrics: raw.typographicMetrics || {
      serif: raw.category === 'serif' ? 'bracketed' : 'none',
      contrast: raw.category === 'serif' ? 'medium' : 'low',
      proportions: raw.width && raw.width > 7 ? 'wide' : (raw.width && raw.width < 6 ? 'condensed' : 'regular'),
      xHeight: 'medium',
      aperture: 'open',
      avgAspect: 0.55,
      strokeWidthRatio: 0.12,
      xHeightRatio: 0.65,
      terminalStyle: 'rounded'
    },
    commercialAlternativesFor: raw.commercialAlternativesFor || [],
    recommendedPairings: raw.recommendedPairings || []
  };
}

let cachedAllFontsMap: Map<string, FontFamily> | null = null;

export function getAllFontsMap(): Map<string, FontFamily> {
  if (cachedAllFontsMap) {
    return cachedAllFontsMap;
  }
  const map = new Map<string, FontFamily>();

  // 1. Add rich verified fonts first
  VERIFIED_GOOGLE_FONTS.forEach((f) => {
    map.set(f.id.toLowerCase(), f);
  });

  // 2. Add all catalog fonts
  if (Array.isArray(catalogData)) {
    catalogData.forEach((item: any) => {
      const normalized = normalizeCatalogFont(item);
      const key = normalized.id.toLowerCase();
      if (!map.has(key)) {
        map.set(key, normalized);
      }
    });
  }

  cachedAllFontsMap = map;
  return map;
}

export function getAllStaticFontPaths(): { params: { font: string }; props: { font: FontFamily } }[] {
  const map = getAllFontsMap();
  const paths: { params: { font: string }; props: { font: FontFamily } }[] = [];
  const seenSlugs = new Set<string>();

  map.forEach((font) => {
    // 1. Primary slug (e.g. "ar-one-sans")
    const primarySlug = font.id.toLowerCase();
    if (!seenSlugs.has(primarySlug)) {
      seenSlugs.add(primarySlug);
      paths.push({
        params: { font: primarySlug },
        props: { font }
      });
    }

    // 2. Hyphenated family slug (e.g. "ar-one-sans")
    const altSlug = font.family.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    if (!seenSlugs.has(altSlug)) {
      seenSlugs.add(altSlug);
      paths.push({
        params: { font: altSlug },
        props: { font }
      });
    }

    // 3. Space-separated or decoded family (e.g. "ar one sans")
    const spaceSlug = font.family.toLowerCase();
    if (!seenSlugs.has(spaceSlug)) {
      seenSlugs.add(spaceSlug);
      paths.push({
        params: { font: spaceSlug },
        props: { font }
      });
    }
  });

  return paths;
}
