export interface SearchItem {
  title: string;
  url: string;
  categories: string;
  tags: string;
  date: string;
  snippet: string;
}

let cache: SearchItem[] | null = null;

export async function fetchSearchData(): Promise<SearchItem[]> {
  if (cache) return cache;
  const res = await fetch('/search.json');
  cache = await res.json();
  return cache!;
}

export function scoreTitle(title: string, query: string): number {
  if (!title || !query) return 0;
  const tl = title.toLowerCase();
  const ql = query.trim().toLowerCase();
  if (ql === '') return 0;
  if (tl === ql) return 3;
  if (tl.includes(ql)) return 2;
  const tokens = ql.split(/\s+/).filter(Boolean);
  if (tokens.length && tokens.every(t => tl.includes(t))) return 1;
  return 0;
}

export function searchPosts(data: SearchItem[], query: string): SearchItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return data
    .filter(item =>
      item.title.toLowerCase().includes(q)
      || item.snippet.toLowerCase().includes(q)
      || item.categories.toLowerCase().includes(q)
      || item.tags.toLowerCase().includes(q)
    )
    .sort((a, b) => scoreTitle(b.title, query) - scoreTitle(a.title, query));
}

export function renderResultItem(item: SearchItem): string {
  return `<a class="search-item" href="${item.url}">
    <div class="search-item-title">${item.title}</div>
    <div class="search-item-snippet">${item.snippet}</div>
  </a>`;
}
