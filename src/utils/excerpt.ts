/**
 * Markdown 본문에서 plain text 발췌문을 생성한다.
 * SEO meta description, 검색 결과 snippet 등에서 공통으로 사용.
 */
export function getExcerpt(body: string, length = 150): string {
  const plain = body
    .replace(/```[\s\S]*?```/g, '')       // 펜스 코드 블록 제거
    .replace(/`([^`]+)`/g, '$1')           // 백틱만 제거, 내용 보존
    .replace(/^#{1,6}\s+.*$/gm, '')       // 헤더 라인 전체 제거
    .replace(/!?\[.*?\]\(.*?\)/g, '')     // 이미지/링크 제거
    .replace(/[*>`~_\-]/g, '')            // 마크다운 기호 제거
    .replace(/\n+/g, ' ')
    .trim();
  return plain.length > length ? plain.slice(0, length) + '...' : plain;
}
