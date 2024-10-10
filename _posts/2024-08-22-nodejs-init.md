---
title: "Node.js | 설치 및 프로젝트 세팅"
author: Hve
date: 2024-08-22 14:29:55 +0900
categories: ["개발", "Node.js"]
math: false
mermaid: false
tags: []
---

## Node.js 환경 세팅

### Node.js 설치

- [Node.js 설치](https://nodejs.org/en)

```bash
# 설치 확인
npm -v
```

### yarn 설치 (선택)

```bash
npm install -g yarn
```

```bash
# 설치 확인
yarn --version
```

### 프로젝트 생성

```bash
npm init
```

명령 실행 후 필요한 정보를 입력하면 `package.json` 파일이 생성된다.

```bash
npm test
# 또는
yarn test
```

다음을 실행시 `"Error: no test specified"`가 뜨면 정상적으로 생성된 것이다.

## package.json 설정

자세한 정보는 [공식 문서](https://docs.npmjs.com/cli/v10/configuring-npm/package-json) 참조

### scripts

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

scripts 섹션은 `npm run <stage>` 또는 `yarn <stage>`로 실행되는 스크립트를 정의한다.

`npm init`로 통해 실행했을때 