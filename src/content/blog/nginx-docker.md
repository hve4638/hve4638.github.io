---
title: "nignx | docker에서 nignx 설치 및 사용하기"
author: Hve
date: 2024-05-22 23:19:10 +0900
categories: ["개발", "도구"]
math: false
mermaid: false
tags: ["nginx"]
---

## Docker 이미지 설치

[Docker 공식 이미지](https://hub.docker.com/_/nginx)

```bash
docker pull nginx:latest
```

## Quick : 정적 호스팅

1. `Dockerfile` 작성

```dockerfile
FROM nginx
COPY 정적HTML폴더위치 /usr/share/nginx/html
```

2. `Dockerfile` 빌드

```bash
docker build -t 이미지명 .
```

`Dockerfile`과 동일한 디렉토리에서 실행해야 한다.

3. 컨테이너 실행

```bash
docker run -d --name 컨테이너명 이미지명
```

4. 외부 포트로 노출

```bash
docker run -d -p 8080:80 --name 컨테이너명 이미지명
```

`-p` 옵션을 통해 내부의 80 포트를 외부로 노출한다.

## nginx.conf 수정

```bash
docker run --rm --entrypoint=cat nginx /etc/nginx/nginx.conf > ./nginx.conf
```

다음 명령을 사용해 `nginx.conf` 파일을 호스트로 가져온다.

이후 작성할 `Dockerfile`과 동일한 위치에 두어야 한다.

```dockerfile
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
```

`Dockerfile`에서 수정한 `nginx.conf` 파일을 복사하도록 한다.

