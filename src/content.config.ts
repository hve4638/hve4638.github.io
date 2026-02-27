import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // [Astro] loader: 콘텐츠를 어디서 불러올지 명시. Jekyll은 _posts/ 자동 인식이지만
  // Astro는 glob 패턴으로 직접 지정해야 한다.
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),

  // [Astro] schema: Zod로 front matter 타입을 검증한다.
  // Jekyll은 검증 없이 아무 필드나 쓸 수 있지만, Astro는 여기 정의 안 된 필드가 있으면 빌드 에러.
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),       // [Astro] coerce: 문자열 "2025-01-01"을 Date 객체로 자동 변환
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    author: z.string().default('Hve'),
    math: z.boolean().default(false),
    mermaid: z.boolean().default(false),
    pin: z.boolean().default(false),
    toc: z.boolean().default(true),
    img_path: z.string().optional(),
  }),
});

// [Astro] 반드시 collections로 export해야 Astro가 인식한다.
export const collections = { blog };
