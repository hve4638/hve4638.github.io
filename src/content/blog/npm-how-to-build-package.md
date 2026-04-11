---
title: "Node.js | npm 패키지 프로젝트 세팅"
author: Hve
date: 2025-03-11 05:29:44 +0900
categories: ["개발", "메모"]
math: false
mermaid: false
tags: []
---

## 개요

npm 패키지의 기반 프로젝트 세팅에 대해 작성한다.

- typescript 사용
- alias import 사용
- rollup을 통한 빌드 및 번들링
- `*.cjs`, `*.mjs`에 대해 각각 결과물 출력
- `*.d.ts` 를 통한 타입 지원

## 배경지식

WIP

**ESM, CommonJS 차이**



### 프로젝트 생성

### yarn

이 포스트에서는 npm 대신 yarn을 기준으로 설명한다.

## 종속성 설치

```bash
yarn add -D ts-node typescript
```

## package.json 설정 추가

```json
{
  "scripts": {
    "build": "npm run build-esm && npm run build-cjs",
    "build-cjs": "tsc --project tsconfig.cjs.json",
    "build-esm": "tsc --project tsconfig.esm.json"
  },
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.js"
    }
  }
}
```

### tsconfig.json 설정

```js 
{
    "compilerOptions": {
        "isolatedModules": true,
        "moduleResolution": "node10",
        
        "target": "es2022",
        
        "forceConsistentCasingInFileNames": true, /* 대소문자 구분 규칙 */
        "esModuleInterop": true, /* ES 모듈 호환성 */
        
        /* Type Checking */
        "strict": true,
        "noImplicitAny" : false, // 암시적 any 타입 허용
        "exactOptionalPropertyTypes" : true, // 선택 필드에 대한 undefined 금지
        "noImplicitReturns": false, // 모든 코드 경로에서 반환이 리턴 타입과 일치하는지 확인
        "noFallthroughCasesInSwitch": false, // switch fall-through 허용
        "noUncheckedIndexedAccess" : false, // 배열및 객체 필드 접근시 undefined 체크 없음
        "noPropertyAccessFromIndexSignature" : true, // 확인 불가한 key에 대한 dot 연산자 사용 금지
        "noImplicitOverride" : true, // 명시적 메서드 오버라이드
        "allowUnreachableCode" : true, // 도달할 수 없는 코드 허용

        "importHelpers": true,
        "skipLibCheck": true,
        
        "outDir" : "./dist",
        "baseUrl": "./",
        "paths": {
          "types": ["src/types/index"],
          "errors": ["src/errors/index"],
          "types/*": ["src/types/*"],
          "features/*": ["src/features/*"],
          "data/*": ["src/data/*"],
          "utils": ["src/utils/index"],
          "utils/*": ["src/utils/*"],
        }
    },
    "include": [
        "./src/**/*"
    ],
    "exclude": [
        "node_modules",
        "dist"
    ]
}
```

## rollup.js 작성

```js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import dts from 'rollup-plugin-dts';

export default [
  {
      input: 'src/index.ts',
      output: [
          {
              file: 'dist/bundle.cjs',
              format: 'cjs',
              sourcemap: true,
          },
          {
              file: 'dist/bundle.mjs',
              format: 'es',
              sourcemap: true,
          },
      ],
      plugins: [
          resolve(), // Node.js 모듈 해석
          commonjs(), // 필요시 CommonJS 변환
          json(),
          typescript({ tsconfig: './tsconfig.json' }), // TypeScript 변환
          // terser(), // 코드 압축 (필요시 활성화)
      ],
  },
  {
      input: 'src/index.ts', // 또는 .d.ts 합친 엔트리
      output: {
          file: 'dist/index.d.ts',
          format: 'es',
      },
      plugins: [
          dts({
              compilerOptions: {
                  "baseUrl": "./",
                  "paths": {
                    "types": ["src/types/index"],
                    "types/*": ["src/types/*"],
                    "errors": ["src/errors/index"],
                    "features/*": ["src/features/*"],
                    "data/*": ["src/data/*"],
                    "utils": ["src/utils/index"],
                    "utils/*": ["src/uitls/*"]
                  }
              },
          }),
      ],
  }
];
```

