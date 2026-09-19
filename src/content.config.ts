import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const MAX_TITLE_WORDS = 5;
const MAX_TITLE_SEO_WORDS = 12;
const DATE_PATTERN = /^(\d{1,2})\s+(Januari|Februari|Maret|April|Mei|Juni|Juli|Agustus|September|Oktober|November|Desember)\s+(\d{4})$/i;
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}/;

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
    heroAlt: z.string().optional(),
    titleSeo: z.string().optional(),
    metaDescription: z.string().optional(),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    keywords: z.array(z.string()).default([]),
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
    excerpt: z.string().default(''),
    date: z.union([z.string(), z.date()]).transform((val) => {
      if (val instanceof Date) {
        const y = val.getFullYear();
        const m = String(val.getMonth() + 1).padStart(2, '0');
        const d = String(val.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
      }
      return val;
    }),
    topik: z.enum(['tips', 'studi-kasus', 'panduan', 'kabar']),
    imgurl: z.string().min(1, { message: 'imgurl wajib (feature image + og:image)' }),
    imgPrompt: z.string().optional(),
    imgalt: z.string().optional(),
    pengantar: z.string().default(''),
    kesimpulan: z.string().default(''),
    published: z.boolean().default(true),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]),
  }),
});

export const collections = { layanan, blog, blogger };
