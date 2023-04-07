---
title: Dev | 자잘한 것들
author: Hve
date: 2023-04-07 14:17:48 +0900
categories: [Dev, etc]
math: false
mermaid: false
tags: []
---

# VSCode

## VSCode 단축키 변경

`ctrl+k` `ctrl+s` 를 눌러 단축키 변경 가능

`ctrl+d`를 `아래에 줄 복사` 로 변경하면 코딩할때 좀 편하다

# Windows

## 라우팅 테이블


```bash
# route add (IP주소) mask (서브넷마스크) (게이트웨이) metric 10

route add 192.168.100.0 mask 255.255.255.0 192.168.1.1 metric 10
# 192.168.100.0/24 로 보내는 패킷은 192.168.1.1로 보냄
```

## 포트포워딩

```bash
netsh interface portproxy add v4tov4 listenport=2222 listenaddress=192.168.0.10 connectport=22 connectaddress=192.168.1.1
# 192.168.0.10:2222 로 들어오는 패킷을 192.168.1.1:22 로 포트포워딩함

netsh interface portproxy delete v4tov4 listenport=2222 listenaddress=192.168.0.10
# 192.168.0.10:2222 로 들어오는 패킷에 대한 규칙 삭제
```

한 컴퓨터의 WSL나 가상머신을 다른 컴퓨터에서 접속해야 할때 유용하다

