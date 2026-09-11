import type { APIRoute } from 'astro';
import { VERIFIED_GOOGLE_FONTS } from '../services/googleFonts/data';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://fontfinder.dev';

  const staticPages = [
    '',
    '/tools',
    '/tools/commercial-alternative',
    '/tools/url-font-finder',
    '/tools/logo-font-finder',
    '/tools/screenshot-font-finder',
    '/tools/pdf-font-finder',
    '/tools/handwriting-font-finder',
    '/tools/font-pairing',
    '/fonts',
    '/how-it-works',
    '/about',
    '/privacy',
    '/terms'
  ];

  const fontPages = VERIFIED_GOOGLE_FONTS.map((f) => `/fonts/${f.id}`);
  const allUrls = [...staticPages, ...fontPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map((path) => {
    const priority = path === '' ? '1.0' : path.startsWith('/fonts/') ? '0.8' : '0.7';
    return `  <url>
    <loc>${siteUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};
