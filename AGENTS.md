# AGENTS.md — Sriwijaya Grafika (Astro SSG)

## Stack (verified)

- **Astro 6.4** static output, React 19 islands, Tailwind v4 (CSS-first `@theme {}` in `src/styles/global.css`).
- TypeScript strict, path aliases `@/*`, `@components/*`, `@layouts/*`, `@lib/*` (see `tsconfig.json`).
- Site URL hardcoded in `astro.config.mjs` — change there for env swaps, no `.env` needed.
- The `README.md` is partially outdated (claims Astro 5, references a `layanan.astro` and `CatalogExplorer` that no longer exist). Trust `astro.config.mjs` + filesystem.

## Commands

```bash
npm run dev        # astro dev --host 0.0.0.0  → http://localhost:3000
npm run build      # static output → dist/
npm run preview    # serve dist/ for sanity check
npm run check      # astro check (typecheck + a11y hints). 142 pre-existing errors in .tsx files — see "Gotchas"
```

`lint` script is an alias for `check`. No separate ESLint/Prettier config — formatting is convention-only.

## Git & GitHub

- **Active remote**: `https://github.com/boimthinks/sriwijayagrafika.git` (akun `boimthinks`, BUKAN akun default `jaguarjack7777` yang dipakai di repo lain).
- **Local commit identity** (only applies to THIS repo, stored in `.git/config`, not global):
  - `user.name = boimthinks`
  - `user.email = boimthinks@users.noreply.github.com` (privacy email default GitHub; ganti ke email biasa via `git config user.email "..."` jika perlu)
- **Auth flow**: Windows Credential Manager menyimpan token `git:https://github.com`. Push pertama trigger browser popup untuk login `boimthinks`; token di-generate & di-store otomatis. Tidak perlu PAT manual.
- **Kalau 403 / `Permission denied to jaguarjack7777`**: credential lama masih tersimpan. Hapus lalu push ulang:
  ```bash
  cmdkey /delete:git:https://github.com
  git push -u origin main
  ```
  Pop-up browser akan muncul lagi untuk akun `boimthinks`.
- **Fallback kalau browser popup tidak muncul** (embed PAT di URL — token akan tersimpan di Windows Credential Manager):
  ```bash
  git remote set-url origin https://boimthinks:ghp_xxxxxxxxxxxx@github.com/boimthinks/sriwijayagrafika.git
  git push -u origin main
  ```
  Generate PAT di https://github.com/settings/tokens (scope: `repo`).
- **Tip**: cek auth aktif sebelum push kalau ragu: `git config --get user.name && git config --get user.email && git remote -v`.

## Layout (source of truth)

```
src/
├── content.config.ts            # Zod schema for "layanan" collection
├── content/layanan/*.md         # 31 service files, one per layanan
├── components/                  # .astro = static, .tsx = client island
│   ├── ServiceCard.astro        # REUSABLE — used in /layanan listing, / (featured), and related-services on detail
│   ├── Navbar.astro, Footer.astro, Hero.astro, Credentials.astro, AboutAndMediaIsland.tsx
│   ├── CalculatorModal.tsx      # EXISTS but currently UNUSED (kalkulator UI removed from detail page per request)
│   └── OrderHistory.tsx, PortfolioGallery.tsx
├── layouts/Layout.astro         # <head> + JSON-LD LocalBusiness. Accepts `structuredData` prop.
├── lib/data.ts                  # Static business data (BUSINESS_INFO, PORTFOLIOS, MEDIA_COVERAGES, VIDEOS, COMPETITORS, FULL_ARTICLES, CORE_TAGLINES, GENERAL_DESCRIPTION). No service data — that's in markdown.
├── pages/
│   ├── index.astro              # Uses getCollection('layanan') + ServiceCard
│   ├── layanan/index.astro      # Static card grid + filter tabs (vanilla TS inline script)
│   ├── layanan/[...slug].astro  # Dynamic detail from content collection
│   ├── portofolio.astro, media.astro, sitemap.astro, 404.astro
└── styles/global.css            # Tailwind v4 + .prose-article (custom markdown styling, no @tailwindcss/typography plugin)
```

## Layanan content collection

- 31 files in `src/content/layanan/*.md`. Filename = slug = URL segment (`huruf-timbul.md` → `/layanan/huruf-timbul`).
- Frontmatter schema (see `src/content.config.ts`): `name`, `description`, `category: 'utama'|'secondary'`, `subcategory`, `basePrice`, `priceUnit`, `features[]`, `materials[]`, `hasCalculator`, `calculatorType?`, `imageUrl?` (use `/img/layanan/<id>.webp`), `order`, `published`.
- Markdown body sections: Tentang, Keunggulan, Material/Tabel (primary), Aplikasi, Proses, FAQ. Body is in **Bahasa Indonesia**.
- To add a new service: copy any existing md, change frontmatter + filename + body. List/detail/related all auto-update.

## Gotchas

- **Pre-existing `astro check` errors** in `AboutAndMediaIsland.tsx`, `OrderHistory.tsx`, `CalculatorModal.tsx`: they use `class` instead of `className` in JSX (lucide-react and React). Build still passes; do NOT silently rewrite unless asked — it's a repo-wide TS-strict mismatch the maintainer hasn't prioritized.
- **`z` deprecation warning** in `src/content.config.ts` (`astro:content` zod import). Harmless, current API still works. Astro 7 will require migration.
- **`hasCalculator` field in schema is unused in UI** (kalkulator badge and "Hitung Estimasi Harga" button were removed). Field stays for data integrity; can be repurposed later.
- **No `CatalogExplorer.tsx`** — it was deleted when the listing became a static card grid. If you need search/filter or calculator-on-listing, recreate (don't resurrect the old file).
- **No `ai-konsultan.astro` page** despite README claim. AI consultant functionality was merged into `AboutAndMediaIsland.tsx` (or never existed in this Astro rewrite).
- **Dist + node_modules are gitignored outputs.** Never edit `dist/`. Sitemap is auto-generated by `@astrojs/sitemap` on build from the route list.
- **Brand colors** are CSS vars in `global.css` (`--color-sriwijaya-blue`, `--color-sriwijaya-orange`). Use Tailwind utilities `bg-[#224da8]`, `text-[#ff6634]`, etc. directly — both forms appear, prefer the bracket form for inline new values.
- **Icons**: import from `lucide-react` even in `.astro` files (it's a React lib, but Astro can render it). Example: `import { ArrowRight } from 'lucide-react'` then `<ArrowRight className="w-4 h-4" />`.
- **Bahasa Indonesia for all user-facing copy** (button text, headings, descriptions, md body, WhatsApp messages). Schema/JSON-LD field names stay English.
- **No emoji** in code or output (per project convention).

## Adding images to a layanan

1. Drop file at `public/img/layanan/<service-id>.<ext>` (e.g. `huruf-timbul.webp`).
2. Add `imageUrl: "/img/layanan/huruf-timbul.webp"` to the md frontmatter.
3. `ServiceCard.astro` and detail page hero auto-render `<img object-cover>` (aspect 16:10); without `imageUrl` they show the gradient+icon placeholder (per-subcategory icon map in the component). All 31 existing services already have real `.webp` images at this path.

## Deployment

Static-only. Any host that serves `dist/` works. Build = `npm run build`, output dir = `dist`. Sitemap at `/sitemap-index.xml` is auto-generated.

## Progress (recent session work)

- **katalog → layanan rename**: file `katalog.astro` → `layanan.astro`; title/schema/navbar/current state updated (`current: 'services'`). URL is now `/layanan`.
- **Layanan migrated to content collection**: 31 service files in `src/content/layanan/*.md` (10 `category: utama` + 21 `secondary`); schema in `src/content.config.ts`; listing + detail pages in `src/pages/layanan/`. `PRIMARY_SERVICES` / `SECONDARY_SERVICES` / `ALL_PRODUCTS` exports removed from `src/lib/data.ts`.
- **ServiceCard.astro refactored** as reusable card, used in: `index.astro` (featured), `layanan/index.astro` (listing), `layanan/[...slug].astro` (related services).
- **Filter tabs added** on `/layanan`: Semua / Advertising & Reklame / Percetakan & Penunjang, with sticky bar, count badge, empty state. Pure vanilla TS inline script, no React island.
- **Kalkulator UI removed** from detail page hero (badge + button) and from ServiceCard. `CalculatorModal.tsx` still exists in components but is not imported anywhere.
- **Image placeholders** in ServiceCard: gradient + lucide icon per subcategory, dot pattern, "Placeholder" badge, initials corner mark. Real images via `imageUrl` frontmatter → `public/img/layanan/<id>.webp`, aspect 16:10.
- **Hero image on detail page** (`src/pages/layanan/[...slug].astro`): section between hero and content, same `data.imageUrl` + placeholder pattern, `max-w-6xl`, `aspect-[16/10]`, rounded + shadow. Image (when present) also added to JSON-LD `Service` schema as `image` field.
- **Detail page sidebar** shows price + material list + trust signals; JSON-LD `Service` schema auto-generated per page.
- **Global prose styles** added to `src/styles/global.css` (`.prose-article`) as alternative to `@tailwindcss/typography` plugin (which is not installed).

## Planning (roadmap)

All planned single-page sections will follow the **same pattern as layanan**. When implementing, replicate the structure documented above ("Layanan content collection" + "Adding images" + filter tabs).

### Portofolio → single pages
- New collection: `src/content/portofolio/*.md` (one md per project showcase).
- Schema: `title`, `client` (brand/customer name), `description`, `category` (use existing taxonomy: `huruf-timbul`, `neon-box`, `pylon-totem`, `rambu-rambu`, `plang-toko-kantor`, `booth-event-desk`, `produk-akrilik`, `gantry-huruf-led`, `neon-flex`, etc.), `location` (city), `year`, `imageUrl` (cover), `galleryImages?[]` (extra angles), `featured?`, `order`, `published`.
- Pages: `src/pages/portofolio/index.astro` (grid + filter by `category`) and `src/pages/portofolio/[...slug].astro` (detail: cover image, client/year/location, description body, gallery, link ke `/layanan/<category>` CTA, related portofolio).
- New reusable card: `src/components/PortfolioCard.astro` (aspect 4:3 cover image + title + client badge + category pill).
- Source of truth: migrate `PORTFOLIOS` from `src/lib/data.ts` into md frontmatter, then delete the array.
- `PortfolioGallery.tsx` (current React island) becomes redundant — replace with static listing + a new lightbox `.astro` or vanilla TS modal if needed. Old file can be deleted once ported.

### Liputan Media → single pages
- New collection: `src/content/media/*.md` (one md per press article / video / coverage).
- Schema: `title`, `publisher` (Sriwijaya Post, Berita Sumsel, PAL-TV, YouTube channels, etc.), `date`, `editor?`, `url` (external article link), `kind: 'article' | 'video' | 'tv-coverage'`, `imageUrl` (screenshot or thumbnail), `videoId?` (YouTube ID for embed), `excerpt` (short summary), `order`, `published`.
- Pages: `src/pages/media/index.astro` (listing grouped by `kind`, filter by publisher/year) and `src/pages/media/[...slug].astro` (detail: cover, full article body if available, embedded YouTube for videos, "Baca di sumber asli" CTA, related coverage).
- Reuse existing `MEDIA_COVERAGES`, `VIDEOS`, `FULL_ARTICLES` from `src/lib/data.ts` as seed data — migrate into md frontmatter, then delete arrays.
- `AboutAndMediaIsland.tsx` (current media page React island) can be slimmed down or replaced with static Astro markup.

### Blog — IMPLEMENTED (long-form SEO content)

- **Collection**: `src/content/blog/*.md` (filename = slug = URL segment, e.g. `5-tips-huruf-timbul.md` → `/blog/5-tips-huruf-timbul`).
- **Schema** (see `src/content.config.ts`, validated with Zod):
  - `title` (string, **max 5 kata** via `.refine()`) — short display title, dipakai di card heading
  - `titleSeo` (string, **max 12 kata**) — dipakai di `<h1>`, `<title>`, og:title, JSON-LD `headline`
  - `excerpt` (string, 20–300 char) — card excerpt + meta description
  - `date` (**string format Indonesia "DD NamaBulan YYYY"**, contoh `"12 Desember 2025"`, validated dengan regex) — di-parse oleh `parseIndonesianDate()` di `src/lib/blog.ts` untuk sort
  - `topik` (enum: `tips` | `studi-kasus` | `berita` | `panduan` | `press-release`) — label Indonesia via `TOPIK_LABELS`
  - `imgurl` (**WAJIB**) — feature image, og:image, JSON-LD Article `image`. Convention: `public/img/blog/<id>.<ext>`
  - `imgalt` (string, optional) — fallback ke `titleSeo` kalau kosong
  - `pengantar` (string, 50–500 char) — lead paragraph dirender sebelum body, plain style
  - `kesimpulan` (string, 50–500 char) — closing paragraph dirender setelah body, plain style
  - `published` (boolean, default `true`) — `getStaticPaths` di `[...slug].astro` filter `published: true` (draft TIDAK di-generate)
- **Author**: hard-coded `AUTHOR_NAME = 'Tim Sriwijaya Grafika'` di `src/lib/blog.ts` (tidak ada field `author` di frontmatter, tapi `Article` JSON-LD sertakan sebagai `author: { @type: 'Organization', name: 'Tim Sriwijaya Grafika' }`).
- **Reading time**: auto-calc via `calcReadingTime(pengantar, body, kesimpulan)` — strip markdown, count words, bagi 200 wpm. Ditampilkan di BlogCard footer + slug page meta bar.
- **Body structure**: HANYA berisi H2 sections (`## Judul Section`) + sub-content. **TIDAK boleh** ada `#` H1 (sudah di `titleSeo`), paragraph pembuka/penutup (sudah di `pengantar`/`kesimpulan`), atau tags/image di body.
- **Pages**:
  - `src/pages/blog/index.astro` — hero gradient blue + sticky filter bar (`?topik=` deep link) + 3-col grid (sort by `date` desc, newest first) + bottom CTA
  - `src/pages/blog/[...slug].astro` — hero (topik pill + h1 = titleSeo + meta bar) + hero image 16/9 + content grid 1/3 sidebar (ShareButtons + SidebarCTA variant light) + 2/3 article (pengantar → Content → kesimpulan) + related (by topik, exclude current)
- **Components**:
  - `src/components/BlogCard.astro` — aspect 16/9 cover, topik pill, title (line-clamp-2), excerpt (line-clamp-3), date + reading time footer
  - `src/components/ShareButtons.astro` — WA + FB + X + Copy Link (vanilla TS untuk clipboard, with toast feedback)
- **RSS**: `src/pages/blog/rss.xml.ts` — `@astrojs/rss` endpoint, items di-sort newest first, pubDate dari `parseIndonesianDate(date)`, language `id-ID`.
- **JSON-LD**:
  - Index: `CollectionPage` (per jawaban user) dengan `hasPart: Article[]`
  - Slug: `Article` lengkap (headline, image, datePublished ISO, wordCount, author Organization, publisher LocalBusiness mirror `#business`, articleSection, mainEntityOfPage, isPartOf) + `BreadcrumbList` terpisah
- **Helpers** (`src/lib/blog.ts`): `parseIndonesianDate`, `toIsoDate`, `stripMarkdown`, `calcReadingTime`, `TOPIK_LABELS`, `AUTHOR_NAME`.
- **Navbar**: item `{ id: 'blog', label: 'Blog & Tips', href: '/blog' }` di posisi **setelah Galeri Portofolio**. Union `Props.current` extend ke `'blog'`.
- **Sitemap**: entry `/blog` + link RSS `/blog/rss.xml` di `src/pages/sitemap.astro`.
- **Sample data**: 4 MD (3 published: tips/studi-kasus/panduan, 1 draft `published: false` untuk verify filter — TIDAK di-render ke `dist/`).

### Conventions to copy when implementing any new collection

- `src/content/<name>/` folder, one md per entry, filename = slug.
- Add schema to `src/content.config.ts` using `glob` loader + Zod (mirror `layanan` block).
- `src/pages/<name>/index.astro` — listing with `getCollection`, sort by `order` then `date`, filter UI via vanilla TS inline script (no React island unless search-as-you-type is needed).
- `src/pages/<name>/[...slug].astro` — `getStaticPaths` from collection, `render(service)`, related entries by category/tags.
- Card component in `src/components/<Name>Card.astro` accepting `CollectionEntry<'<name>'>`; include image placeholder fallback mirroring `ServiceCard.astro` pattern (gradient + lucide icon map).
- Image convention: `public/img/<name>/<id>.<ext>` referenced as `<name>Url` in frontmatter.
- Markdown body in **Bahasa Indonesia**; English for schema/JSON-LD field names.
- Add Navbar entry if user-facing (e.g. add `blog` to `current` union and `menuItems` array). Update `src/pages/sitemap.astro` HTML sitemap.
- If a section needs an island (e.g. comment widget, share buttons), create a small `.tsx` with `client:visible` — don't reach for full React unless necessary.

