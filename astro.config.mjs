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
  integrations: [
    react(),
    sitemap({
      // Jangan masukkan halaman noindex ke sitemap XML (perbaiki isu Ahrefs
      // "Noindex page in sitemap" / "Non-canonical page in sitemap").
      // Argumen `page` adalah URL lengkap, jadi ekstrak pathname dulu.
      filter: (page) => {
        let pathname = page;
        try {
          pathname = new URL(page).pathname;
        } catch {
          /* biarkan apa adanya */
        }
        return !['/sitemap', '/kebijakan-privasi', '/syarat-ketentuan', '/404'].includes(
          pathname.replace(/\/+$/, '')
        );
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    port: 3000,
    host: true,
  },
  // Redirect /admin ke /admin/index.html agar panel CMS Decap
  // tersedia saat diakses tanpa trailing slash.
  redirects: {
    '/admin': '/admin/index.html',
  },
});
