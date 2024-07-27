---
title: "Electron | 리액트 기반 프로젝트 세팅"
author: Hve
date: 2024-06-29 23:57:34 +0900
categories: ["개발", "Electron"]
math: false
mermaid: false
tags: []
---

## node.js, npm, yarn 설치

설치 후 `node -v`, `npm -v`, `yarn -v` 명령어로 확인

## React.js 프로젝트에 Electron 연동

### 리액트 프로젝트 생성

```bash
npx create-react-app 프로젝트명
cd 프로젝트명
```

### 패키지 설치

```bash
yarn add --dev electron concurrently wait-on
```

### package.json 수정

```json
{
  "main": "src/main.js",
  "scripts": {
    "start": "concurrently \"yarn react-scripts start\" \"yarn electron\" ",
    "electron": "wait-on http://localhost:3000 && electron ."
  }
}
```

기존 내용은 그대로 두고, 추가된 설정을 갱신한다.

### src/main.js 추가

```js
const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow () { 
  const win = new BrowserWindow({ 
    width: 800, 
    height: 600
  })
  win.loadURL('http://localhost:3000')
}
app.whenReady().then(() => { 
  createWindow() 
}) 
app.on('window-all-closed', function () { 
  if (process.platform !== 'darwin') app.quit() 
})
```

### 환경변수 파일 생성

```
BROWSER=none
```

프로젝트 폴더에 `.env` 파일을 생성하고 위 내용을 추가한다.

react 실행 시 기본값으로 브라우저가 같이 실행되는데 이를 비활성화한다.

### 실행 및 결과 확인

```
yarn start
```

![text](/assets/img/electron/react-01.png)

## React-Electron 간 IPC 통신

### src/ipc.js 추가

```js
module.exports = {
    SEND_MAIN_PING: 'send_main_ping'
}
```

### main.js 수정

```js
const { app, BrowserWindow, ipcMain } = require('electron') 
const path = require('path') 
const { 
  SEND_MAIN_PING 
} = require('./ipc'); 

function createWindow () { 
  const win = new BrowserWindow({ 
    width: 800, 
    height: 600,
    // 리액트 내에서 IPC를 사용하기 위한 추가 설정
    webPreferences: { 
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    } 
  }) 
  win.loadURL('http://localhost:3000')
} 

// IPC 통신 핸들러
ipcMain.on(SEND_MAIN_PING, (event, arg)=>{ 
    console.log('Receive Main Ping');
    console.log(arg);
})

app.whenReady().then(() => { 
  createWindow() 
}) 
app.on('window-all-closed', function () { 
  if (process.platform !== 'darwin') app.quit() 
})
```

`ipcMain` 에서 PING을 핸들링하는 코드가 추가되었다.

### src/App.js 수정

```js
import logo from './logo.svg';
import './App.css';
import { SEND_MAIN_PING } from './ipc'; 

function App() {
  const { ipcRenderer } = window.require("electron");
  function onSend() {
    ipcRenderer.send(SEND_MAIN_PING, "message from react");
  }
  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={onSend}
        >
          Click
        </button>
      </header>
    </div>
  );
}

export default App;
```

`ipcRenderer` 를 통해 PING과 인자를 전송하는 코드가 추가되었다.

### 실행 및 결과 확인

![text](/assets/img/electron/react-02.png)

버튼 클릭시 main.js에서 핸들링한 것을 확인할 수 있다