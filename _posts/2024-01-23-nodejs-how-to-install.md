---
title: "Node.js | 리눅스 개발 환경 구축"
author: Hve
date: 2024-01-23 12:51:31 +0900
categories: ["개발", "도구"]
math: false
mermaid: false
tags: ["리액트", "nodejs"]
---

## node.js & npm 설치 (Ubuntu)

[https://nodejs.org/dist/](https://nodejs.org/dist/)

- node.js 버전 전체 일람

[https://nodejs.org/dist/v20.11.0/](https://nodejs.org/dist/v20.11.0/)

- `v20.11.0` 버전

원하는 버전을 찾아 다운로드한다

```bash
curl -O https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.gz
```

위 예시에선 linux-x64 환경에서 v20.11.0을 다운받는다

```bash
tar -xzvf node-v20.11.0-linux-x64.tar.gz
```

압축을 해제한다

이후 압축이 풀린 디렉토리에 들어가 `./bin/node` 를 실행시키면 정상적으로 설치된 것을 확인할 수 있다

```bash
cd node-v20.11.0-linux-x64
cp * /local/usr/ -r 
```

`PATH` 경로 내에 추가하기 위해 디렉토리 내 파일을 `/local/usr/` 위치로 복사한다

복사 전, `CHANGELOG.md`, `LICENSE`, `READMD.md` 등의 파일은 미리 제거하는 것을 추천한다

```bash
node --version
npm --version
```

이제 위 명령을 통해 정상적으로 설치되었음을 확인할 수 있다

## react.js 환경 설치

```bash
apt-get install build-essential
```

직접 확인해보진 않았으나 `npm install` 명령시 `build-essential`에 종속성이 있을 수 있다고 하니 설치한다


```bash
npm install -g create-react-app
```

`create-react-app`을 설치한다

```bash
create-react-app --version
```

정상 설치 여부 및 버전을 확인한다

## react 프로젝트 생성 및 실행

```bash
create-react-app <프로젝트명>
```

## Memo

```bash
npm start

npm run build

npm test

npm run eject
```

## 설치 스크립트

```bash
#!/bin/bash
curl -O https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.gz
tar -xzvf node-v20.11.0-linux-x64.tar.gz

cp node-v20.11.0-linux-x64 /local/usr/ -r
sudo ln -s /local/usr/node-v20.11.0-linux-x64/bin/node /usr/bin/node
sudo ln -s /local/usr/node-v20.11.0-linux-x64/bin/npm /usr/bin/npm
```