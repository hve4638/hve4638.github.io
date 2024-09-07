---
title: "저장용 | React.js 프로젝트 세팅"
author: Hve
date: 2025-01-11 00:32:18 +0900
categories: ["저장용"]
math: false
mermaid: false
tags: []
---

## 프로젝트 생성

```bash
npm create vite@latest
```

- framework : `React`
- varient : `typescript`

## React.js 디렉토리 구조 생성

```
mkdir src/data
mkdir src/components
mkdir src/context
mkdir src/utils
mkdir src/lib
mkdir src/api
mkdir src/types
mkdir src/assets
mkdir src/pages
mkdir src/features
```

## vite.config.ts 지정

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

function alias(find:string, replacement:string) {
    return {
        find : find,
        replacement : path.resolve(__dirname, replacement)
    }
}

export default defineConfig({
    server: {
        port : 3600,
    },
    plugins: [react()],
    resolve: {
        alias: [
            alias('@', 'src'),
            alias('data', 'src/data'),
            alias('components', 'src/components'),
            alias('context', 'src/context'),
            alias('utils', 'src/utils'),
            alias('lib', 'src/lib'),
            alias('api', 'src/api'),
            alias('types', 'src/types'),
            alias('hooks', 'src/hooks'),
            alias('assets', 'src/assets'),
            alias('pages', 'src/pages'),
            alias('features', 'src/features'),
        ]
    }
})
```

## tsconfig.app.json 수정

```js
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noUncheckedSideEffectImports": true,
    
    "noImplicitAny": false, // 암시적 any 타입 허용
    "noImplicitReturns": false, // 모든 코드 경로에서 반환이 리턴 타입과 일치하는지 확인
    "noFallthroughCasesInSwitch": false, // switch fall-through 허용
    "noUncheckedIndexedAccess": false, // 배열 및 객체 필드 접근시 undefined 체크 없음
    "noPropertyAccessFromIndexSignature": true, // 확인 불가한 key에 대한 dot 연산자 사용 금지
    "noImplicitOverride": true, // 명시적 메서드 오버라이드
    "allowUnreachableCode": true, // 도달할 수 없는 코드 허용
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    
    "baseUrl": "src",
  },
  "include": ["src"]
}
```

## 라이브러리 설치

```bash
yarn add -D @types/node
yarn add sass
```