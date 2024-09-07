---
title: "저장용 | jest 설치"
author: Hve
date: 2024-11-12 21:26:45 +0900
categories: ["저장용"]
math: false
mermaid: false
tags: []
---

## 의존성

```bash
yarn add -D typescript jest @types/jest ts-node ts-jest 
```

## jest.config.ts 추가

```ts
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['/node_modules/'],
};
```
프로젝트폴더의 `jest.config.ts` 에 위치

## tsconfig.json 수정

```json
{
  "compilerOptions": {
      "types" : [
          "jest"
      ]
  }
}
```

`types`에 *jest* 추가