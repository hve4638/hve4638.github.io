---
title: "Node.js | Getting Start"
author: Hve
date: 2024-08-22 14:29:55 +0900
categories: ["개발", "node.js"]
math: false
mermaid: false
tags: []
---

## node.js 프로젝트 생성 및 지정
## 프로젝트 생성

```bash
yarn init
```

## Typescript 설치

**패키지 설치**

```bash
yarn add typescript ts-node @types/node --dev
```

**tsconfig.json 설정파일 생성**

```bash
npx tsc --init
```

## 스크립트 지정

```json
"scripts": {
  "start": "ts-node <Entrypoint파일경로>"
}
```

`package.json`에 다음을 추가한다

`<Entrypoint파일경로>`는 일반적으로 `index.ts`이다

## 모듈 임포트 별칭 지정

```json
"compilerOptions": {
    "baseUrl": "src",
    "paths": {
        "assets/*": ["assets/*"],
        "components/*": ["components/*"],
        "context/*": ["context/*"],
        "data/*": ["data/*"],
        "features/*": ["features/*"],
        "hooks/*": ["hooks/*"],
        "libs/*": ["libs/*"],
        "services/*": ["services/*"],
        "utils/*": ["utils/*"],
        "pages/*": ["pages/*"]
    },
}
```

`tsconfig.json`에 다음을 추가한다.