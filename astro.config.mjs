// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://irinauxdesign.com',

  // The Framer site used addresses without a trailing slash
  // (for example /work/pan-de-queso). These two settings keep them identical.
  trailingSlash: 'never',
  build: { format: 'file' },

  // Hides Astro's developer toolbar so the local preview looks like the real site.
  devToolbar: { enabled: false },

  integrations: [
    sitemap({
      // Leave out the "not found" page and the old /writing/ addresses that only forward to the homepage.
      filter: (page) => !page.endsWith('/404') && !page.includes('/writing/'),
    }),
  ],
});
