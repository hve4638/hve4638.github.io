---
title: "Node.js | \"...was compiled against a different Node.js version using\" 문제"
author: Hve
date: 2024-08-25 22:08:06 +0900
categories: ["개발", "트러블슈팅"]
math: false
mermaid: false
tags: []
---

## "...was compiled against a different Node.js version using" 에러

```
Error: The module '라이브러리 경로' was compiled against a different Node.js version using
NODE_MODULE_VERSION 115. This version of Node.js requires
NODE_MODULE_VERSION 125. Please try re-compiling or re-installing
```

설치된 node.js 버전과 해당 라이브러리에서 요구하는 버전이 불일치해 발생하는 에러로 보통 node.js 버전을 업데이트 한 후 발생한다

### 해결책 1

**해당 라이브러리 재설치**

```bash
# npm
npm rebuild 라이브러리

# yarn
yarn remove 라이브러리
yarn add 라이브러리
```

### 해결책 2 : electron 설치 및 사용 중인 경우

**1. electron-rebuild 설치**

```bash
# npm
npm i -D electron-rebuild

# yarn
yarn add -D electron-rebuild
```

yarn의 경우

**2. electron-rebuild 설치**

```bash
rm -rf node_modules\
rm packages-lock.json
```

`node_modules`, `packages-lock.json` 를 제거한다

**3. 라이브러리 재설치**

```bash
# npm
npm i

# yarn
yarn
```

**4. electron-rebuild 실행**

```bash
./node_modules/.bin/electron-rebuild
```

