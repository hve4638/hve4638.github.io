---
title: "트러블슈팅 | \"동일한 사용자가 둘 이상의 사용자 이름으로 서버 또는 공유 리소스에 다중 연결할 수 없습니다\""
author: Hve
slug: tb-net-use-delete
date: 2025-08-14 14:16:11 +0900
categories: []
math: false
mermaid: false
tags: []
---

## 개요

![](/assets/img/troubleshooting/tb-net-use-del.png)

smb 서버 등에 여러번 연결하려고 시도할 때 발생하는 오류이다

주로 서버를 직접 구축하는 등의 상황에서 여러번 시도할때 발생한다

## 해결 방법

기본적으로 재부팅하면 연결이 끊기므로 해결된다

```bash
# 현재 연결된 서버 확인
net use

# 지정한 서버 연결 끊기
net use 서버주소 /delete
```

또는 터미널에서 위 명령어를 입력해 연결을 끊을 수 있다

```bash
# 전체 연결 끊기
net use * /delete
```

귀찮으면 전체를 끊어도 된다