---
title: "Electron | 데스크톱 앱 배포"
author: Hve
date: 2024-09-22 18:34:35 +0900
categories: []
math: false
mermaid: false
tags: []
---

## Electron-builder 설치

```bash
# npm
npm install --save-dev electron-builder

# yarn
yarn add --dev electron-builder
```

## package.json에 script 추가

```
electron-builder -c.extraMetadata.main=./dist/main.js
```