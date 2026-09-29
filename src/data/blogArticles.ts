export type { BlogArticle } from './blog/types';
import type { BlogArticle } from './blog/types';
import type { SupportedLocale } from '../i18n/languages';

import { ARTICLES_EN } from './blog/en';
import { ARTICLES_ES } from './blog/es';
import { ARTICLES_DE } from './blog/de';
import { ARTICLES_FR } from './blog/fr';
import { ARTICLES_IT } from './blog/it';
import { ARTICLES_JA } from './blog/ja';
import { ARTICLES_KO } from './blog/ko';
import { ARTICLES_PT } from './blog/pt';

export const BLOG_ARTICLES: BlogArticle[] = ARTICLES_EN;

const ARTICLES_BY_LOCALE: Record<SupportedLocale, BlogArticle[]> = {
  en: ARTICLES_EN,
  es: ARTICLES_ES,
  de: ARTICLES_DE,
  fr: ARTICLES_FR,
  it: ARTICLES_IT,
  ja: ARTICLES_JA,
  ko: ARTICLES_KO,
  pt: ARTICLES_PT
};

export function getBlogArticles(locale?: string): BlogArticle[] {
  const loc = (locale || 'en') as SupportedLocale;
  return ARTICLES_BY_LOCALE[loc] || ARTICLES_EN;
}

export function getBlogArticleBySlug(slug: string, locale?: string): BlogArticle | undefined {
  const articles = getBlogArticles(locale);
  return articles.find((a) => a.slug === slug) || ARTICLES_EN.find((a) => a.slug === slug);
}
