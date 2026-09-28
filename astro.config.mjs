// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Dominio del sitio (canonical, hreflang, sitemap, robots.txt).
// 1. SITE_URL si está definida (dominio propio).
// 2. En Vercel, el dominio de producción que expone la plataforma.
// 3. En local, localhost.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:4321');

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es-CO', en: 'en' } } }),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Archivo',
      cssVariable: '--font-archivo',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/ArchivoVariable-latin.woff2'],
            weight: '100 900',
            stretch: '62% 125%',
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
  ],
});
