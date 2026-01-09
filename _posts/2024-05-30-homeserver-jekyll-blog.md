---
title: "홈서버 | jekyll 서버"
author: Hve
date: 2024-05-30 01:40:42 +0900
categories: ["인프라", "홈서버"]
math: false
mermaid: false
tags: ["docker"]
---

## 설명

Jekyll은 Ruby를 기반으로 작성된 정적 사이트 생성기로, 마크다운을 사용하여 간편하게 게시물을 작성할 수 있다.

여러 테마가 공개되어있고, Github Pages에서도 Jekyll 무료 호스팅을 지원하므로 유용하다.

또한, 홈서버에 설치하여 실제로 Github Pages에 갱신하기 전에 테스트하는 용도로 사용할 수 있다.

## Dockerfiles

```dockerfile
FROM alpine:latest

RUN set -x \
&& apk add jekyll ruby-dev build-base \
&& apk del git \
&& mkdir /blog-server

WORKDIR /blog-server

CMD "bundle install > /dev/null && bundle exec jekyll serve --host 0.0.0.0"
```

## docker-compose.yml

```yml
version: "3"

services:
  blog-service:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: blog-server
    tty: true
    stdin_open: true
    restart: unless-stopped
    ports:
      - "4000:4000"
    volumes:
      - /blog-server:/blog-server
    command: sh -c "bundle install > /dev/null &&
              bundle exec jekyll serve --host 0.0.0.0"
```

*volumes*
- `blog-server` : jekyll 파일이 위치해야 한다

## note

`/blog-server`를 연결한 호스트 디렉토리에 jekyll 파일이 있어야 한다