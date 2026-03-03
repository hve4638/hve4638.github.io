import { visit } from 'unist-util-visit';

/** 모든 <img> 태그에 loading="lazy" 속성을 추가하는 rehype 플러그인 */
export default function rehypeLazyImages() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        node.properties.loading = 'lazy';
      }
    });
  };
}
