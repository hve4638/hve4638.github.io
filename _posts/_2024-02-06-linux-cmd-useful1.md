---
title: "Linux | 명령어"
author: Hve
date: 2024-02-06 14:26:01 +0900
categories: ["개발", "Linux"]
math: false
mermaid: false
tags: []
---

## netstat

옵션: 

- -l : `listen` 상태인 포트만 확인
- -n : 포트 확인
- -t : tcp만
- -u : udp만
- -p `PID` : PID 확인
- -r : 라우팅 테이블 확인
- -s : 네트워크 통계

## fuser

파일이나 소켓을 사용하는 프로세스를 확인한다

```bash
fuser <>
```