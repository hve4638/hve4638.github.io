/**
 * 페이지네이션 유틸리티
 *
 * 배열을 pageSize만큼 잘라서 페이지별 데이터를 반환한다.
 * Astro의 paginate() 내장 함수를 대체하는 명시적 구현.
 */

export interface PaginationResult<T> {
  data: T[];           // 현재 페이지의 항목들
  currentPage: number; // 현재 페이지 번호 (1부터)
  totalPages: number;  // 전체 페이지 수
  prevUrl: string | null;  // 이전 페이지 URL
  nextUrl: string | null;  // 다음 페이지 URL
}

interface PaginateOptions {
  pageSize?: number;
}

/**
 * 전체 페이지 수를 계산한다.
 */
export function getTotalPages(totalItems: number, pageSize = 20): number {
  return Math.ceil(totalItems / pageSize);
}

/**
 * getStaticPaths()에서 사용할 페이지 번호 배열을 반환한다.
 * 1페이지는 / 에서 처리하므로, 2페이지부터 반환.
 */
export function getPageNumbers(totalItems: number, pageSize = 20): number[] {
  const totalPages = getTotalPages(totalItems, pageSize);
  // 2페이지부터 마지막 페이지까지
  return Array.from({ length: totalPages - 1 }, (_, i) => i + 2);
}

/**
 * 특정 페이지의 데이터를 잘라서 반환한다.
 */
export function getPage<T>(
  items: T[],
  page: number,
  options: PaginateOptions = {},
): PaginationResult<T> {
  const pageSize = options.pageSize ?? 20;
  const totalPages = getTotalPages(items.length, pageSize);

  const start = (page - 1) * pageSize;
  const data = items.slice(start, start + pageSize);

  return {
    data,
    currentPage: page,
    totalPages,
    prevUrl: page > 1 ? (page === 2 ? '/' : `/page/${page - 1}`) : null,
    nextUrl: page < totalPages ? `/page/${page + 1}` : null,
  };
}
