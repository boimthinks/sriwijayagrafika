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

export function parseIndonesianDate(str: string): Date {
  const parts = str.toLowerCase().trim().split(/\s+/);
  const [dayStr, monthName, yearStr] = parts;
  const day = parseInt(dayStr ?? '', 10);
  const month = MONTHS_ID[monthName ?? ''] ?? 0;
  const year = parseInt(yearStr ?? '', 10);
  return new Date(year, month, day);
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
};

export const TOPIKS = ['tips', 'studi-kasus', 'panduan', 'kabar'] as const;

export type Topik = (typeof TOPIKS)[number];

export function isTopik(value: string): value is Topik {
  return (TOPIKS as readonly string[]).includes(value);
}

export const AUTHOR_NAME = 'Tim Sriwijaya Grafika';
