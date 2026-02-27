import { getCollection } from 'astro:content';

function getExcerpt(body: string, length = 200) {
  const plain = body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/!?\[.*?\]\(.*?\)/g, '')
    .replace(/[#*>`~_\-]/g, '')
    .replace(/\n+/g, ' ')
    .trim();
  return plain.length > length ? plain.slice(0, length) + '...' : plain;
}

export async function GET() {
  const posts = (await getCollection('blog'))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const data = posts.map(post => ({
    title: post.data.title,
    url: `/posts/${post.id}`,
    categories: post.data.categories?.join(', ') ?? '',
    tags: post.data.tags?.join(', ') ?? '',
    date: post.data.date.toISOString(),
    snippet: getExcerpt(post.body ?? ''),
  }));

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
