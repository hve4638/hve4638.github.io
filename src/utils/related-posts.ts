import type { CollectionEntry } from 'astro:content';

/**
 * 관련 포스트 추천: 태그(1점) + 카테고리(0.5점) 점수 기반 상위 N개 반환
 */
export function getRelatedPosts(
  current: CollectionEntry<'blog'>,
  allPosts: CollectionEntry<'blog'>[],
  limit = 3
): CollectionEntry<'blog'>[] {
  const currentTags = new Set(current.data.tags);
  const currentCategories = new Set(current.data.categories);

  return allPosts
    .filter(post => post.id !== current.id)
    .map(post => {
      let score = 0;
      for (const tag of post.data.tags) {
        if (currentTags.has(tag)) score += 1;
      }
      for (const cat of post.data.categories) {
        if (currentCategories.has(cat)) score += 0.5;
      }
      return { post, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
}
