import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://profontfinder.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  redirects: {
    '/tools/commercial-alternative': '/tools/free-font-alternative-finder',
    '/free-font-alternative-finder': '/tools/free-font-alternative-finder',
    '/logo-font-identifier': '/tools/logo-font-finder',
    '/tools/logo-font-identifier': '/tools/logo-font-finder',
    '/pdf-font-detector': '/tools/pdf-font-detector',
    '/tools/font-pairing-finder': '/tools/font-pairing'
  }
});
