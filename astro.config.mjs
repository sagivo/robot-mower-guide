import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update SITE_URL in src/lib/site.ts when the domain is finalized.
export default defineConfig({
  site: 'https://robot-mower-guide.pages.dev',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
