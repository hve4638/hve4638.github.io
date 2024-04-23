---
title: "리눅스 | 알파인 리눅스"
author: Hve
date: 2024-01-24 13:00:22 +0900
categories: ["개발", "Linux"]
math: false
mermaid: false
tags: ["alpine", "docker"]
---

## 알파인 리눅스

알파인 리눅스는 보안성, 단순성, 자원 효율성에 초점을 맞춘 리눅스 배포판이다

커널을 제외한 용량은 10MB 조차 되지 않아서 `docker` 컨테이너에서 주로 사용된다

## 설치 관리자 (apk)

`apt`나 `yum` 대신 `apk`를 패키지 관리자를 사용한다

*설치 및 제거 관련*

| 명령어 | 설명 |
|-------|------|
| apk add | 패키지를 설치한다 (>, = 등으로 버전 정보를 지정할 수 있다) |
| apk add -U | 패키지를 캐시를 무시하고  |
| apk del | 패키지를 제거한다 |
| apk update | 패키지 저장소 목록을 갱신한다 |

*환경 관련*

| 명령어 | 설명 |
|-------|------|
| apk search | 패키지 목록을 검색한다 |
| apk cache clean | 캐시를 초기화한다 |
| apk stats | 설치된 패키지 정보를 가져온다 |
| apk info | 설치된 패키지를 나열한다 |

## 패키지의 man page

알파인 리눅스는 기본적으로 `man`이 설치되어 있지 않다

따라서 man page를 열람하기 위해선 아래 명령을 통해 설치해야 한다

```bash
apk add mandoc man-pages
```

또, 패키지는 man page는 `패키지명-doc`의 형태로 분리되어 있다

따라서 아래 예시와 같이 문서를 따로 설치해야 한다

```bash
apk add vim # vim 설치
apk add vim-doc # vim의 man 문서 설치
```

## docker 에서 사용

```bash
docker pull alpine
```

24년 1월 최신버전 기준으로 약 7MB의 크기를 가진다

```bash
docker run -it alpine:latest /bin/sh
```

alpine의 기본 쉘은 `sh`이며 `bash` 등 다른 쉘을 사용하려면 

## 서비스 관련

**필요 패키지**

```bash
apk add openrc
```

**사용**

```bash
rc-service
```

`service`, `init.d` 등과 같은 서비스를 시작/중단 하기위해 사용된다

**예시**

| 명령 | 설명 |
|---------|------|
| `rc-service <서비스> start` | 서비스 시작 |
| `rc-service <서비스> stop` | 서비스 중단 |
| `rc-service <서비스> restart` | 서비스 재시작 |
| `rc-service <서비스> status` | 서비스 상태 확인 |

**/etc/init.d**

```
ls /etc/init.d
```

`/etc/init.d` 경로를 확인해 서비스 목록을 확인할 수 있다
