---
title: "Go | 설치"
author: Hve
date: 2025-03-24 16:01:36 +0900
categories: ["개발", "Go"]
math: false
mermaid: false
tags: []
---

## 1. 설치

[go.dev](https://go.dev/doc/install)

홈페이지에서 플랫폼에 맞는 tar 파일을 내려받는다

이 글에서는 Linux를 기준으로 설명한다

## 2. 이전 버전 해 삭제 및 설치

```bash
rm -rf /usr/local/go
```

```bash
tar -C /usr/local <tar 파일 경로>
```

`sudo`가 필요할 수 있다.

## 3. 환경변수 지정

```bash
echo "export PATH=\$PATH:/usr/local/go/bin" >> ~/.profile
```

## 4. 설치 확인

```bash
go version
```