---
title: "Node.js | rollup + typescript 환경 구성"
author: Hve
date: 2025-01-18 14:11:55 +0900
categories: []
math: false
mermaid: false
tags: []
---

## node.js 프로젝트 세팅

```bash
yarn init
```

## 패키지 설치

### electron 설치

```bash
yarn add electron
```

### typescript 설치

```bash
yarn add -D typescript
yarn add tslib
```

### rollup 설치

```bash
yarn add -D rollup
yarn add -D @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript @rollup/plugin-json
```

## 설정 파일 추가/수정

### tsconfig.json 추가

```json
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

        "importHelpers": true, /* Import emit helpers from 'tslib'. */
        "skipLibCheck": true, /* Skip type checking all .d.ts files. */
        "declaration": true,
        "declarationDir": "./dist",
        "declarationMap": false
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

tsconfig.json 설정은 자유롭게 작성하면 된다

- 패키지로 출력할 것이 아니라면 `declaration`, `declarationDir`(d.ts 파일 생성 여부)옵션은 제거해도 된다

### rollup.config.ts 추가

```ts
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/main.cjs',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
  external: ['electron'],
};
```

external 옵션을 통해 electron을 번들링에서 명시적으로 제외해야 한다.

### package.json 수정

```json
{
    "main": "dist/main.js",
    "scripts": {
        "start": "electron .",
        "build": "rollup -c"
    },
}
```

## alias 지정

```js
// tsconfig.json
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
          "@utils/*": ["src/utils/*"],
          "@lib/*": ["src/lib/*"],
          "@features/*": ["src/features/*"]
        }
    }
}
```

import문에서 경로를 프로젝트 기준의 절대 경로처럼 별칭을 통해 사용할 수 있다.

위 설정은 typescript 단독 사용시 적용되는 사항이 아니며(린트만 적용됨), 대부분의 경우 rollup과 같은 번들링 도구를 같이 사용해야 할 수 있다.

rollup의 경우 위 `rollup.config.ts`를 그대로 사용하면 alias가 적용된다.