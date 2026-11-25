import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/**
 * Ambil artikel blog yang layak tayang.
 *
 * Aturannya:
 *   - published: false -> tidak dibangun, tidak tayang
 *   - draft: true      -> tidak dibangun, tidak tayang
 *   - selain itu       -> dibangun dan ikut terdeploy
 *
 * Tanggal TIDAK dipakai untuk menyaring. Tanggal hanya label yang tampil di
 * halaman. Kapan artikel benar-benar tayang ditentukan oleh kapan status draft
 * dilepas lalu situs di-deploy, sehingga tanggalnya selalu tanggal sungguhan.
 *
 * Semua halaman yang menampilkan artikel WAJIB memakai helper ini, bukan
 * getCollection('blog') langsung, supaya tidak ada draft yang bocor ke build.
 */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  return getCollection('blog', ({ data }) => !data.draft && data.published);
}

/** Urutkan artikel dari tanggal terbaru ke terlama. */
export function sortPostsDesc(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => {
    const da = parseIndonesianDate(a.data.date)?.getTime() ?? 0;
    const db = parseIndonesianDate(b.data.date)?.getTime() ?? 0;
    return db - da;
  });
}

const MONTHS_ID: Record<string, number> = {
  januari: 0,
  februari: 1,
  maret: 2,
  april: 3,
  mei: 4,
  juni: 5,
  juli: 6,
  agustus: 7,
  september: 8,
  oktober: 9,
  november: 10,
  desember: 11,
};

const MONTHS_ID_REV = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

export function parseIndonesianDate(str: string): Date {
  const trimmed = str.trim();
  // Jika format ISO YYYY-MM-DD atau timestamp
  if (/^\d{4}-\d{2}-\d{2}/.test(trimmed)) {
    const [y, m, d] = trimmed.substring(0, 10).split('-').map(Number);
    return new Date(y, m - 1, d);
  }
  const parts = trimmed.toLowerCase().split(/\s+/);
  const [dayStr, monthName, yearStr] = parts;
  const day = parseInt(dayStr ?? '', 10);
  const month = MONTHS_ID[monthName ?? ''] ?? 0;
  const year = parseInt(yearStr ?? '', 10);
  return new Date(year, month, day);
}

export function formatIndonesianDate(date: Date | string): string {
  const d = typeof date === 'string' ? parseIndonesianDate(date) : date;
  if (isNaN(d.getTime())) return String(date);
  return `${d.getDate()} ${MONTHS_ID_REV[d.getMonth()]} ${d.getFullYear()}`;
}

export function toIsoDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function stripMarkdown(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]+`/g, '')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[#*_>~`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function calcReadingTime(pengantar: string, body: string, kesimpulan: string, wpm = 200): number {
  const all = [pengantar, body, kesimpulan].join(' ');
  const stripped = stripMarkdown(all);
  const words = stripped.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wpm));
}

export const TOPIK_LABELS: Record<string, string> = {
  'tips': 'Tips & Trik',
  'studi-kasus': 'Studi Kasus',
  'panduan': 'Panduan',
  'kabar': 'Kabar',
  'teknis': 'Teknis',
};

export const TOPIKS = ['tips', 'studi-kasus', 'panduan', 'kabar', 'teknis'] as const;

export type Topik = (typeof TOPIKS)[number];

export function isTopik(value: string): value is Topik {
  return (TOPIKS as readonly string[]).includes(value);
}

export const AUTHOR_NAME = 'Tim Sriwijaya Grafika';
