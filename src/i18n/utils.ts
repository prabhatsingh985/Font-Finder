import {
  DEFAULT_LOCALE,
  LOCALES,
  NON_DEFAULT_LOCALES,
  isSupportedLocale,
  type SupportedLocale
} from './languages';
import { LOCALES_DATA, type TranslationSchema } from './locales';

export const SITE_URL = 'https://profontfinder.com';

/**
 * Get translations for a specific locale with fallback to English
 */
export function useTranslations(locale: string | undefined): TranslationSchema {
  if (isSupportedLocale(locale)) {
    return LOCALES_DATA[locale];
  }
  return LOCALES_DATA[DEFAULT_LOCALE];
}

/**
 * Remove locale prefix from a pathname to get the clean root path.
 * Examples:
 *   /es/about -> /about
 *   /ja/tools/font-pairing -> /tools/font-pairing
 *   /es -> /
 *   / -> /
 *   /about -> /about
 */
export function getCleanPath(pathname: string): string {
  if (!pathname) return '/';
  
  // Normalize leading slash and remove trailing slash (except root)
  let clean = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (clean.length > 1 && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }

  // Check if pathname starts with a non-default locale prefix
  for (const loc of NON_DEFAULT_LOCALES) {
    if (clean === `/${loc}`) {
      return '/';
    }
    if (clean.startsWith(`/${loc}/`)) {
      const remainder = clean.slice(loc.length + 1);
      return remainder.startsWith('/') ? remainder : `/${remainder}`;
    }
  }

  return clean;
}

/**
 * Convert any path to a target locale.
 * Preserves the page route while switching locale.
 */
export function getLocalizedPath(pathname: string, targetLocale: SupportedLocale): string {
  const cleanPath = getCleanPath(pathname);

  if (targetLocale === DEFAULT_LOCALE) {
    return cleanPath === '' ? '/' : cleanPath;
  }

  if (cleanPath === '/' || cleanPath === '') {
    return `/${targetLocale}`;
  }

  return `/${targetLocale}${cleanPath}`;
}

export interface HreflangEntry {
  lang: string;
  href: string;
}

/**
 * Generate reciprocal hreflang tags for all 8 supported languages + x-default
 * Uses absolute production URLs.
 */
export function getHreflangTags(pathname: string, siteUrl: string = SITE_URL): HreflangEntry[] {
  const cleanPath = getCleanPath(pathname);
  const suffix = cleanPath === '/' ? '' : cleanPath;

  const entries: HreflangEntry[] = LOCALES.map((locale) => {
    if (locale === DEFAULT_LOCALE) {
      return {
        lang: 'en',
        href: `${siteUrl}${cleanPath === '/' ? '/' : cleanPath}`
      };
    }
    return {
      lang: locale,
      href: `${siteUrl}/${locale}${suffix}`
    };
  });

  // x-default points to the default English URL
  entries.push({
    lang: 'x-default',
    href: `${siteUrl}${cleanPath === '/' ? '/' : cleanPath}`
  });

  return entries;
}

/**
 * Generate self-referencing canonical URL for the current localized page.
 * Localized pages self-reference their own URL and DO NOT canonicalize to English.
 */
export function getCanonicalUrl(
  pathname: string,
  currentLocale: string | undefined,
  siteUrl: string = SITE_URL
): string {
  const cleanPath = getCleanPath(pathname);
  const suffix = cleanPath === '/' ? '' : cleanPath;
  const locale = isSupportedLocale(currentLocale) ? currentLocale : DEFAULT_LOCALE;

  if (locale === DEFAULT_LOCALE) {
    return `${siteUrl}${cleanPath === '/' ? '/' : cleanPath}`;
  }

  return `${siteUrl}/${locale}${suffix}`;
}
