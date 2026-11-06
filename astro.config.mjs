// @ts-check
import fs from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Last-updated date for each article, from its front matter ("updated", or "date" if never updated).
const blogDir = new URL('./src/content/blog/', import.meta.url);
const articleDates = Object.fromEntries(
  fs.readdirSync(blogDir).filter((f) => f.endsWith('.md')).map((f) => {
    const text = fs.readFileSync(new URL(f, blogDir), 'utf8');
    const match = text.match(/^updated:\s*(\S+)/m) ?? text.match(/^date:\s*(\S+)/m);
    return [f.replace(/\.md$/, ''), match ? match[1] : null];
  }),
);

export default defineConfig({
  site: 'https://www.ftgaap.co.za',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      // The thank-you page is marked noindex, so it stays out of the sitemap.
      filter: (page) => !page.endsWith('/thank-you'),
      serialize(item) {
        const slug = item.url.match(/\/resources\/([^/]+)$/)?.[1];
        if (slug && articleDates[slug]) item.lastmod = new Date(articleDates[slug]).toISOString();
        return item;
      },
    }),
  ],
});
