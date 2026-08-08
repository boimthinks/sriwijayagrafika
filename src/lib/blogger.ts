import type { CollectionEntry } from 'astro:content';

export type BloggerPost = CollectionEntry<'blogger'>;

const SLUG_PATTERN = /^(\d{4})-(\d{2})-(.+)\.html$/;

export function parseBloggerSlug(slug: string): { year: string; month: string; rest: string } | null {
  const match = SLUG_PATTERN.exec(slug);
  if (!match) return null;
  return { year: match[1], month: match[2], rest: match[3] };
}

export function bloggerOldPath(post: BloggerPost): string {
  const parsed = parseBloggerSlug(post.data.slug);
  if (parsed) {
    return `/${parsed.year}/${parsed.month}/${parsed.rest}.html`;
  }
  return `/${post.id}`;
}

export function bloggerDateLabel(dateStr: string): string {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function bloggerIsoDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return '';
  return date.toISOString();
}

export function isUsableBloggerPost(post: BloggerPost): boolean {
  return post.data.published && post.data.title.trim().length > 0;
}

export function sortBloggerPosts(posts: BloggerPost[]): BloggerPost[] {
  return posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
}
