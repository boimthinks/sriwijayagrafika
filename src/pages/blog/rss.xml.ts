import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { BUSINESS_INFO } from '@lib/data';
import { AUTHOR_NAME, TOPIK_LABELS, parseIndonesianDate } from '@lib/blog';

export async function GET(context: { site: URL | undefined }) {
  const posts = (await getCollection('blog', ({ data }) => data.published)).sort(
    (a, b) => parseIndonesianDate(b.data.date).getTime() - parseIndonesianDate(a.data.date).getTime()
  );

  return rss({
    title: `${BUSINESS_INFO.name} — Blog & Tips Advertising Palembang`,
    description:
      'Tips, studi kasus, sorotan, dan panduan seputar huruf timbul, neon box, papan nama, rambu K3 Palembang.',
    site: context.site ?? 'https://sriwijayagrafika.com',
    items: posts.map((post) => ({
      title: post.data.titleSeo,
      description: post.data.excerpt,
      pubDate: parseIndonesianDate(post.data.date),
      link: `/blog/${post.data.topik}/${post.id}/`,
      categories: [TOPIK_LABELS[post.data.topik], AUTHOR_NAME],
      author: AUTHOR_NAME,
    })),
    customData: `<language>id-ID</language>`,
  });
}
