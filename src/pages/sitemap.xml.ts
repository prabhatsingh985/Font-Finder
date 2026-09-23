import type { APIRoute } from 'astro';
import { LOCALES } from '../i18n/languages';
import { getLocalizedPath, SITE_URL } from '../i18n/utils';

export const GET: APIRoute = async () => {
  const staticPages = [
    '/',
    '/tools',
    '/tools/commercial-alternative',
    '/tools/url-font-finder',
    '/tools/logo-font-finder',
    '/tools/screenshot-font-finder',
    '/tools/handwriting-font-finder',
    '/tools/font-pairing',
    '/how-it-works',
    '/about',
    '/privacy',
    '/terms',
    '/contact'
  ];

  // Total URLs = 13 pages * 8 languages = 104 URLs
  const urlEntries: { loc: string; priority: string }[] = [];

  for (const pagePath of staticPages) {
    const priority = pagePath === '/' ? '1.0' : pagePath.startsWith('/tools') ? '0.9' : '0.7';

    for (const locale of LOCALES) {
      const localizedPath = getLocalizedPath(pagePath, locale);
      const loc = `${SITE_URL}${localizedPath === '/' ? '/' : localizedPath}`;

      urlEntries.push({
        loc,
        priority
      });
    }
  }

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
