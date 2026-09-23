import type { SupportedLocale } from '../languages';
import { en, type TranslationSchema } from './en';
import { es } from './es';
import { ja } from './ja';
import { fr } from './fr';
import { de } from './de';
import { pt } from './pt';
import { ko } from './ko';
import { it } from './it';

export const LOCALES_DATA: Record<SupportedLocale, TranslationSchema> = {
  en,
  es,
  ja,
  fr,
  de,
  pt,
  ko,
  it
};

export { en, es, ja, fr, de, pt, ko, it };
export type { TranslationSchema };
