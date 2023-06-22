---
title: "Linux | Netcat : 네트워크 통신 유틸리티"
author: Hve
date: 2023-05-27 00:11:05 +0900
categories: [Dev, Linux]
math: false
mermaid: false
tags: [linux]
---

# Netcat

간단한 네트워크 테스트를 하는데 유용한 도구

여러 기능을 지원하지만 통신중 보안 기능이 없기 때문에 테스트를 위해서만 사용해야 한다.

## 설치

Debian 계열 (ex. Ubuntu)
```bash
apt install netcat
```

Red Hat 계열
```bash
yum install nc
```

## 사용

서버 열기
```bash
# nc -l -p [포트명]
nc -l -p 2000
```

서버 접속
```bash
# nc -v [IP주소] [포트]
nc -v 192.168.0.15 2000
```

