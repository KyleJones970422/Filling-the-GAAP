// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.ftgaap.co.za',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
