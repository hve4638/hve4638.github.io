import { getCollection } from 'astro:content';
import { getExcerpt } from '../utils/excerpt';

export async function GET() {
  const posts = (await getCollection('blog'))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const data = posts.map(post => ({
    title: post.data.title,
    url: `/posts/${post.id}`,
    categories: post.data.categories?.join(', ') ?? '',
    tags: post.data.tags?.join(', ') ?? '',
    date: post.data.date.toISOString(),
    snippet: getExcerpt(post.body ?? '', 200),
  }));

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
