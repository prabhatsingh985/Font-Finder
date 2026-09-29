import type { APIRoute } from 'astro';
import { LOCALES } from '../i18n/languages';
import { getLocalizedPath, SITE_URL } from '../i18n/utils';
import { getAllFontsMap } from '../services/googleFonts/fontCatalog';
import { BLOG_ARTICLES } from '../data/blogArticles';

export const GET: APIRoute = async () => {
  const staticPages = [
    '/',
    '/tools',
    '/tools/free-font-alternative-finder',
    '/tools/url-font-finder',
    '/tools/logo-font-finder',
    '/tools/logo-font-identifier',
    '/logo-font-identifier',
    '/tools/screenshot-font-finder',
    '/tools/handwriting-font-finder',
    '/tools/font-pairing',
    '/tools/font-pairing-finder',
    '/tools/pdf-font-detector',
    '/pdf-font-detector',
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

  const urlEntries: { loc: string; priority: string }[] = [];

  for (const pagePath of staticPages) {
    const priority =
      pagePath === '/'
        ? '1.0'
        : pagePath.startsWith('/tools') || pagePath === '/fonts'
        ? '0.9'
        : pagePath.startsWith('/blog')
        ? '0.85'
        : '0.7';

    for (const locale of LOCALES) {
      const localizedPath = getLocalizedPath(pagePath, locale);
      const loc = `${SITE_URL}${localizedPath === '/' ? '/' : localizedPath}`;

      urlEntries.push({
        loc,
        priority
      });
    }
  }

  const fontsMap = getAllFontsMap();
  const fontSlugs = new Set<string>();
  fontsMap.forEach((f) => {
    fontSlugs.add(f.id.toLowerCase());
  });

  fontSlugs.forEach((slug) => {
    urlEntries.push({
      loc: `${SITE_URL}/fonts/${slug}`,
      priority: '0.8'
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
