// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import rehypeLazyImages from './src/plugins/rehype-lazy-images.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  server: { port: 8700, host: '0.0.0.0' },
  site: 'https://hve4638.github.io',
  output: 'static',

  markdown: {
    rehypePlugins: [rehypeLazyImages],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});