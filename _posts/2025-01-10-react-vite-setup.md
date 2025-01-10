---
title: "React.js | vite 기반 React 프로젝트 생성"
author: Hve
date: 2025-01-10 22:12:35 +0900
categories: []
math: false
mermaid: false
tags: []
---


## Vite 기반 React 프로젝트 생성

```bash
npm create vite@latest
```

생성할 디렉토리에서 다음 명령을 통해 간단히 실행할 수 있다.

생성 중 framework와 varient를 물어보는데, 방향키를 통해 선택하고 Enter로 진행할 수 있다.

framework는 `React`를 선택하면 되며 variant의 경우 일반적으로 `typescript`를 권장한다. `typescript + SWC`는 SWC(Speedy Web Compiler)에 대한 지식이 없다면 설정이 복잡해지므로 권장하지 않는다.

## 개발 서버 실행

`npm run dev`를 실행해 개발 서버를 열 수 있다.

이러한 명령은 `package.json`의 `script` 부분에서 추가/수정할 수 있다.

## 프로덕션 빌드

`npm run build`를 실행해 프로덕션 빌드를 수행한다.빌드된 결과물을 

빌드 결과물은 기본적으로 `dist` 디렉토리에 저장된다.

`npm run preview`로 빌드된 결과물을 확인할 수 있다.


## (선택) vite.config.ts 수정

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

`vite.config.ts`를 열면 

### 개발 서버 실행 포트 변경

```ts
export default defineConfig({
    server: {
        port : 4000,
    },
  plugins: [react()],
})
```

다음과 같이 수정해 개발 서버의 포트를 변경할 수 있다.

### 경로 alias 지정

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
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

`tsconfig.json`에서 `compilerOptions`의 `paths` 기능과 유사하다.

alias를 설정하면 import 경로를 단축할 수 있다.
- 기존의 `import HomePage from '../../../pages/Home'` 를
- `import HomePage from 'pages/Home'` 과 같이 지정할 수 있게 된다.