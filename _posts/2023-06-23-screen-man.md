---
title: "Linux | Screen : 가상 터미널 세션 도구"
author: Hve
date: 2023-06-23 13:17:39 +0900
categories: []
math: false
mermaid: false
tags: []
---

# Screen

screen은 가상 터미널 세션을 만들고 공유할 수 있는 도구이다.

기존 세션을 종료하더라도 가상 터미널 세션을 유지할 수 있고, 다른 사용자간 세션을 공유할 수도 있다.

## 설치

```bash
apt install screen
```

## 명령어

### 세션 생성, 진입

```bash
# 새 새션 생성후 진입 (이름은 무작위)
screen

# screen -S <Session>
# 새 세션 생성후 진입
screen -S mySession

# screen -r <Session>
# 기존 세션 진입
screen -r mySession

# screen -R <Session>
# 세션이 존재한다면 재진입, 없다면 생성후 진입
screen -R mySession
```

### 세션 종료

```bash
# screen -S <Session> -X  <명령어>
screen -S mySession -X quit
```

`-X` 은 지정된 세션에 명령을 보내는 옵션이다. 해당 세션에 quit 명령을 보내 세션을 종료한다.


### 세션 삭제

```bash
# screen -S <Session> -X  <명령어>
screen -S mySession -X quit
```

### 세션 확인

```bash
screen -ls
screen -list
```

## 단축키

모든 단축키는 `Ctrl`+`a` 조합으로 실행된다.

| 단축키 | 설명 |
|-----|-----|
|  ?  | 단축키 설명 |
|  d  | 스크린 탈출 (백그라운드에서 동작) |
|  c  | 스크린에서 새 창 띄우기 |
|  n  | 다음 스크린 이동 |
|  p  | 이전 스크린 이동 |