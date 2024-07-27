---
title: "Electron | 프로젝트 세팅"
author: Hve
date: 2024-06-29 20:27:00 +0900
categories: ["개발", "Electron"]
math: false
mermaid: false
tags: []
---

## node.js, npm 설치

설치 후 `node -v`, `npm -v` 명령어로 확인

## Electron 설치 및 프로젝트 생성

### 프로젝트 생성

```bash
mkdir my-electron-project
cd my-electron-project
npm init
```

### electron 패키지 설치

```bash
npm install --save-dev electron
```

### package.json 편집

```json
{
    "scripts": { 
        "start": "electron ." 
    }
}
```

- `scripts`에 해당 내용을 추가

### index.js 추가

```js
const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
```

### index.html 추가

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
    <meta http-equiv="X-Content-Security-Policy" content="default-src 'self'; script-src 'self'">
    <title>My First Electron<title>
  </head>
  <body>
    <h1>Test Page</h1>
  </body>
</html>
```

### 실행 및 결과확인

```bash
npm start
```

![alt](/assets/img/electron/01.png)

## 프로젝트 빌드

### Electron Forge 패키지 설치

```bash
npm install --save-dev @electron-forge/cli
npx electron-forge import
```
또는
```bash
yarn add --dev @electron-forge/cli
yarn run electron-forge import
```

### 빌드

```bash
npm run make
```

실행 파일은 `out/프로젝트명-win32-x64/`에서 확인할 수 있다.
