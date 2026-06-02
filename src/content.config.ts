import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const layanan = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/layanan' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.enum(['utama', 'secondary']),
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

export const collections = { layanan };
