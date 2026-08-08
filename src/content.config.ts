import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const MAX_TITLE_WORDS = 5;
const MAX_TITLE_SEO_WORDS = 12;
const DATE_PATTERN = /^(\d{1,2})\s+(Januari|Februari|Maret|April|Mei|Juni|Juli|Agustus|September|Oktober|November|Desember)\s+(\d{4})$/i;

const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

const blogger = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blogger' }),
  schema: z.object({
    title: z.string().default(''),
    date: z.coerce.string(),
    labels: z.array(z.string()).default([]),
    slug: z.string(),
    metaDescription: z.string().default(''),
    published: z.boolean().default(true),
  }),
});

const layanan = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/layanan' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.enum(['utama']),
    subcategory: z.string(),
    basePrice: z.number(),
    priceUnit: z.string(),
    features: z.array(z.string()).default([]),
    materials: z.array(z.string()).default([]),
    hasCalculator: z.boolean().default(false),
    calculatorType: z.enum(['huruf_timbul', 'neon_box', 'rambu', 'printing_standard']).optional(),
    imageUrl: z.string().optional(),
    order: z.number().default(99),
    published: z.boolean().default(true),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().refine((s) => wordCount(s) <= MAX_TITLE_WORDS, {
      message: `title maksimal ${MAX_TITLE_WORDS} kata`,
    }),
    titleSeo: z.string().refine((s) => wordCount(s) <= MAX_TITLE_SEO_WORDS, {
      message: `titleSeo maksimal ${MAX_TITLE_SEO_WORDS} kata`,
    }),
    excerpt: z.string().min(20).max(300),
    date: z.string().regex(DATE_PATTERN, {
      message: 'date harus format "DD NamaBulan YYYY", contoh "12 Desember 2025"',
    }),
    topik: z.enum(['tips', 'studi-kasus', 'panduan', 'kabar']),
    imgurl: z.string().min(1, { message: 'imgurl wajib (feature image + og:image)' }),
    imgalt: z.string().optional(),
    pengantar: z.string().min(50).max(500),
    kesimpulan: z.string().min(50).max(500),
    published: z.boolean().default(true),
  }),
});

export const collections = { layanan, blog, blogger };
