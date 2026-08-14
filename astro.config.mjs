// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sriwijayagrafika.com',
  output: 'static',
  prefetch: true,
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    port: 3000,
    host: true,
  },
});
