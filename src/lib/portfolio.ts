import matter from 'gray-matter';
import rawPortfolio from '@data/portfolio.md?raw';

export interface PortfolioItem {
  id: string;
  src: string;
  category: string;
  categoryLabel: string;
  caption: string;
}

export interface PortfolioCategory {
  id: string;
  label: string;
  count: number;
}

const KNOWN_CATEGORIES: Record<string, string> = {
  'huruf-timbul': 'Huruf Timbul LED',
  'neon-box': 'Neon Box',
  'pylon-totem': 'Pylon / Totem',
  'rambu-rambu': 'Rambu K3',
  'plang-toko-kantor': 'Plang Toko / Kantor',
  'booth-event-desk': 'Booth Event',
  'produk-akrilik': 'Produk Akrilik',
  'gantry-huruf-led': 'Gantry Huruf LED',
  'neon-flex': 'Neon Flex',
  'billboard': 'Billboard',
};

function deriveId(src: string, fallbackIndex: number): string {
  const filename = src.split('/').pop() ?? '';
  const stem = filename.replace(/\.[^.]+$/, '');
  return stem || `item-${fallbackIndex}`;
}

function deriveCategoryLabel(category: string): string {
  if (KNOWN_CATEGORIES[category]) return KNOWN_CATEGORIES[category];
  return category
    .split('-')
    .map((w) => (w.length <= 2 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
    .join(' ');
}

interface RawItem {
  src?: string;
  category?: string;
  caption?: string;
}

const { data } = matter(rawPortfolio);
const rawItems: RawItem[] = Array.isArray(data.items) ? data.items : [];

export const PORTFOLIO_ITEMS: PortfolioItem[] = rawItems
  .filter((item): item is Required<RawItem> =>
    typeof item?.src === 'string' && typeof item?.category === 'string' && typeof item?.caption === 'string'
  )
  .map((item, idx) => ({
    id: deriveId(item.src, idx),
    src: item.src,
    category: item.category,
    categoryLabel: deriveCategoryLabel(item.category),
    caption: item.caption,
  }));

export function getPortfolioCategories(): PortfolioCategory[] {
  const counts = new Map<string, number>();
  for (const item of PORTFOLIO_ITEMS) {
    counts.set(item.category, (counts.get(item.category) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([id, count]) => ({ id, label: deriveCategoryLabel(id), count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}
