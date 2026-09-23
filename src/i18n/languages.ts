export const DEFAULT_LOCALE = 'en' as const;

export const LOCALES = ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'] as const;

export type SupportedLocale = (typeof LOCALES)[number];

export const NON_DEFAULT_LOCALES = LOCALES.filter(
  (locale) => locale !== DEFAULT_LOCALE
) as Exclude<SupportedLocale, typeof DEFAULT_LOCALE>[];

export interface LanguageInfo {
  code: SupportedLocale;
  label: string;
  nativeName: string;
  dir?: 'ltr' | 'rtl';
}

export const LANGUAGES: Record<SupportedLocale, LanguageInfo> = {
  en: {
    code: 'en',
    label: 'English',
    nativeName: 'English',
    dir: 'ltr'
  },
  es: {
    code: 'es',
    label: 'Spanish',
    nativeName: 'Español',
    dir: 'ltr'
  },
  ja: {
    code: 'ja',
    label: 'Japanese',
    nativeName: '日本語',
    dir: 'ltr'
  },
  fr: {
    code: 'fr',
    label: 'French',
    nativeName: 'Français',
    dir: 'ltr'
  },
  de: {
    code: 'de',
    label: 'German',
    nativeName: 'Deutsch',
    dir: 'ltr'
  },
  pt: {
    code: 'pt',
    label: 'Portuguese',
    nativeName: 'Português',
    dir: 'ltr'
  },
  ko: {
    code: 'ko',
    label: 'Korean',
    nativeName: '한국어',
    dir: 'ltr'
  },
  it: {
    code: 'it',
    label: 'Italian',
    nativeName: 'Italiano',
    dir: 'ltr'
  }
};

export function isSupportedLocale(locale: string | undefined): locale is SupportedLocale {
  return typeof locale === 'string' && (LOCALES as readonly string[]).includes(locale);
}
