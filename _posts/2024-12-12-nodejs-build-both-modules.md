---
title: "Node.js | npm 패키지 개발시 ESM, CommonJS 모두 대응하기"
author: Hve
date: 2024-12-12 00:01:01 +0900
categories: ["개발", "도구"]
math: false
mermaid: false
tags: ["nodejs"]
---

```js
// CommonJS (CJS) 방식
const MyPackage = require("my-package");

// ECMAScript Modules (ESM) 방식
import MyPackage from "my-package";
```

현재 Node.js에서는 크게 두가지의 모듈 시스템을 지원하는데, CommonJS (CJS)와 ECMAScript Modules (ESM) 이다.

CJS 방식은 Node.js 환경(백엔드)에서 사용되며 `require`/`modules.exports`을 사용한다.

ESM 방식은 브라우저(프론트엔드)에서 사용되었으나 Node.js 환경도 점차 CJS를 대체하고 있는 추세이다. `import`/`export`를 사용한다.

어느 방식 할 것 없이 모두 사용되고 있으며, 이 두 시스템은 호환되기가 매우 어렵기 때문에 패키지를 배포할 때는 두 방식으로 코드를 작성해 주는 것이 좋다.

이 포스트에서는 typescript를 이용한 케이스에 대해 설명한다.

## 요약

- esm, cjs에 각각 대응하는 `tsconfig.json`를 작성
- `package.json` require, import 문법에 따른 entrypoint를 각각 다르게 지정

## 준비: 프로젝트 세팅

- 모든 소스코드(ts)는 `./src` 폴더 내 위치해야 하며 entrypoint는 `./src/index.ts`라고 가정한다.

## 준비: typescript 설치

```bash
yarn add -D ts-node typescript
```

## tsconfig 설정

ts 소스코드를 js로 빌드하는 `tsc` 명령은 `--project <파일명>` 옵션을 통해 tsconfig 설정 파일을 지정할 수 있다. (기본값은 tsconfig.json)

여기서는 cjs, esm 별로 각각 tsconfig 파일을 작성한다.

```
- tsconfig.base.json
- tsconfig.esm.json
- tsconfig.cjs.json
```

프로젝트 디렉토리(package.json이 위치한 경로)에 다음과 같이 3개의 파일을 생성한다.

`tsconfig.base.json`의 경우 기존에 사용하던 `tsconfig.json`를 그대로 사용해도 된다.

**tsconfig.base.json (예시)**
```json
{
    "compilerOptions": {
        "isolatedModules": true,
        "moduleResolution": "node10",
        
        "target": "es2020",
        
        "forceConsistentCasingInFileNames": true, /* 대소문자 구분 규칙 */
        "esModuleInterop": true, /* ES 모듈 호환성 */
        
        /* Type Checking */
        "strict": true,
        "noImplicitAny" : false, // 암시적 any 타입 허용
        "exactOptionalPropertyTypes" : false, // 선택 필드에 대한 undefined 금지
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

**tsconfig.cjs.json**
```json
{
    "extends": "./tsconfig.base.json",
    "compilerOptions": {
        "incremental": true,
        "tsBuildInfoFile": "./.tsbuildinfo.cjs",

        "target": "es2020",
        "module": "CommonJS",
        
        "rootDir": "./src",
        "outDir": "./dist/cjs",
    }
}
```

**tsconfig.esm.json**
```json
{
    "extends": "./tsconfig.base.json",
    "compilerOptions": {
        "incremental": true,
        "tsBuildInfoFile": "./.tsbuildinfo.esm",
        
        "target": "es2020",
        "module": "es2020",

        "rootDir": "./src",
        "outDir": "./dist/esm",
    }
}
```

`tsconfig.cjs.json`, `./tsconfig.esm.json` 파일에 위와 같이 추가한다.

**`extends`**
- `tsconfig.base.json`의 설정을 가져온다. 따라서 cjs, esm 빌드시 공통된 설정(ex. 타입체크)은 `tsconfig.base.json`에 넣는 것이 좋다.

**`incremental`, `tsBuildInfoFile`** *(선택사항)*
- 증분 빌드 설정으로, 수정 사항이 없는 파일에 대해 컴파일하지 않으므로써 빌드 속도를 높힌다. `tsBuildInfoFile`는 증분 빌드에 대한 메타데이터 파일 경로이다.
- cjs, esm 모듈 시스템에 대해 각각 빌드를 수행해야 하므로 `tsBuildInfoFile`를 서로 다른 이름을 지정한다.
- 증분 빌드를 사용하지 않는다면 해당 옵션을 제거해도 된다.

**`module`**
- JS 모듈 시스템을 지정한다.
- cjs 빌드 시 "CommonJS"를 사용해야 하며, esm 빌드 시 "ES2015/ES6/ES2020/ES2022/ESNext" 중 하나를 사용해야 한다.


**`rootDir`, `outDir`**
- rootDir은 ts 소스파일 경로, outDir은 빌드 결과물의 경로를 의미한다.
- outDir은 서로 다른 위치를 지정해야 한다. cjs는 `./dist/cjs`에, esm는 `./dist/esm`에 빌드 결과(js 파일)이 저장되게 된다.

## package.json에 빌드 스크립트 추가

```json
// package.json
{
  "scripts": {
    "build": "npm run build-esm && npm run build-cjs",
    "build-cjs": "tsc --project tsconfig.cjs.json",
    "build-esm": "tsc --project tsconfig.esm.json"
  },
}
```

터미널에서 `npm run build` 또는 `yarn build`를 통해 cjs, esm 모듈 시스템으로 각각 빌드할 수 있다.

## package.json에 exports 추가

```json
// package.json
{
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.js"
    }
  }
}
```

exports는 패키지의 entrypoint를 지정하는 필드로, 위 설정은 `require` (cjs)로 가져오거나, `import` (esm)로 가져올 때의 js파일을 지정하는 경로를 각각의 빌드 결과로 연결하게 된다.

## 최종 결과물

### package.json

```json
{
  "main": "dist/esm/index.js",
  "types": "dist/esm/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.js",
      "types": "./dist/esm/index.d.ts"
    }
  },
  "scripts": {
    "build-cjs": "tsc --project tsconfig.cjs.json",
    "build-esm": "tsc --project tsconfig.esm.json",
    "build": "npm run build-esm && npm run build-cjs",
    "pub": "npm publish --access=public"
  }
}
```