import type { APIRoute } from 'astro';
import { execSync } from 'child_process';
import fs from 'fs';
import { LOCALES } from '../i18n/languages';
import { getLocalizedPath, getHreflangTags, SITE_URL } from '../i18n/utils';
import { getAllFontsMap } from '../services/googleFonts/fontCatalog';
import { BLOG_ARTICLES } from '../data/blogArticles';

const lastModCache = new Map<string, string>();

function getRealLastMod(file: string): string {
  if (lastModCache.has(file)) return lastModCache.get(file)!;
  let date = '';
  try {
    const out = execSync('git log -1 --format=%cI -- ' + file, {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim();
    if (out) date = out.split('T')[0];
  } catch {}

  if (!date) {
    try {
      date = fs.statSync(file).mtime.toISOString().split('T')[0];
    } catch {}
  }

  if (!date) {
    date = '2026-09-30';
  }

  lastModCache.set(file, date);
  return date;
}

const PAGE_FILE_MAP: Record<string, string> = {
  '/': 'src/components/pages/HomeView.astro',
  '/tools': 'src/components/pages/ToolsIndexView.astro',
  '/tools/free-font-alternative-finder': 'src/components/pages/CommercialAlternativeView.astro',
  '/tools/url-font-finder': 'src/components/pages/UrlFontFinderView.astro',
  '/tools/logo-font-finder': 'src/components/pages/LogoFontFinderView.astro',
  '/tools/screenshot-font-finder': 'src/components/pages/ScreenshotFontFinderView.astro',
  '/tools/handwriting-font-finder': 'src/components/pages/HandwritingFontFinderView.astro',
  '/tools/font-pairing': 'src/components/pages/FontPairingView.astro',
  '/tools/pdf-font-detector': 'src/components/pages/PdfFontDetectorView.astro',
  '/fonts': 'src/pages/fonts/index.astro',
  '/blog': 'src/pages/blog/index.astro',
  '/guides': 'src/components/pages/GuidesView.astro',
  '/how-it-works': 'src/components/pages/HowItWorksView.astro',
  '/about': 'src/components/pages/AboutView.astro',
  '/privacy': 'src/components/pages/PrivacyView.astro',
  '/terms': 'src/components/pages/TermsView.astro',
  '/contact': 'src/components/pages/ContactView.astro'
};

export const GET: APIRoute = async () => {
  const staticPages = [
    '/',
    '/tools',
    '/tools/free-font-alternative-finder',
    '/tools/url-font-finder',
    '/tools/logo-font-finder',
    '/tools/screenshot-font-finder',
    '/tools/handwriting-font-finder',
    '/tools/font-pairing',
    '/tools/pdf-font-detector',
    '/fonts',
    '/blog',
    ...BLOG_ARTICLES.map((a) => `/blog/${a.slug}`),
    '/guides',
    '/how-it-works',
    '/about',
    '/privacy',
    '/terms',
    '/contact'
  ];

  interface SitemapEntry {
    loc: string;
    lastmod: string;
    alternates?: { lang: string; href: string }[];
  }

  const urlEntries: SitemapEntry[] = [];

  for (const pagePath of staticPages) {
    const sourceFile =
      PAGE_FILE_MAP[pagePath] ||
      (pagePath.startsWith('/blog/') ? 'src/data/blogArticles.ts' : 'src/components/pages/HomeView.astro');

    const lastmod = getRealLastMod(sourceFile);
    const alternates = getHreflangTags(pagePath, SITE_URL);

    for (const locale of LOCALES) {
      const localizedPath = getLocalizedPath(pagePath, locale);
      const loc = `${SITE_URL}${localizedPath === '/' ? '/' : localizedPath}`;

      urlEntries.push({
        loc,
        lastmod,
        alternates
      });
    }
  }

  const fontsMap = getAllFontsMap();
  const fontSlugs = new Set<string>();
  fontsMap.forEach((f) => {
    fontSlugs.add(f.id.toLowerCase());
  });

  const fontPageLastmod = getRealLastMod('src/pages/fonts/[font].astro');

  fontSlugs.forEach((slug) => {
    urlEntries.push({
      loc: `${SITE_URL}/fonts/${slug}`,
      lastmod: fontPageLastmod
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries
  .map((entry) => {
    const alternateTags = entry.alternates
      ? entry.alternates
          .map(
            (alt) =>
              `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />`
          )
          .join('\n')
      : '';

    return `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>${alternateTags ? '\n' + alternateTags : ''}
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
