---
title: "Linux | 마운트 관련 명령어"
author: Hve
date: 2023-10-16 11:50:41 +0900
categories: ["개발", "Linux"]
math: false
mermaid: false
tags: []
---

## mount 명령어

Unix 시스템에서 엑세스할 수 있는 모든 파일은 하나의 큰 트리, 즉 `/`로 시작하는 단일 디렉토리로 부터 시작한다

`mount`명령은 특정 장치에서 찾은 파일시스템은 큰 파일 트리에 연결하는 역할을 한다

```bash
mount -t type device dir
```
일반적인 명령어 사용법은 위와 같다

해당 명령은 커널이 디바이스에서 찾은 파일시스템은 dir에 마운트한다. `-t` 옵션은 선택사항이다

마운트된 동안, 원래 해당 경로의 이전 파일과 소유자 및 dir모드가 보이지 않게된다

```bash
mount
```
mount 명령만 실행할 경우, 현재 시스템에 마운트된 정보를 확인할 수 있다

## fdisk 

```bash
fdisk -l
```
디바이스 파티션을 확인한다

### fdisk를 이용한 포맷

*WIP*

## df

```bash
df
```

현재 마운트된 디바이스 정보를 확인한다