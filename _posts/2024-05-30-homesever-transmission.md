---
title: "홈서버 | transmission 토렌트"
author: Hve
date: 2024-05-30 00:46:26 +0900
categories: ["인프라", "홈서버"]
math: false
mermaid: false
tags: ["docker"]
---

## 설명

transmission은 오픈소스 비트 클라이언트로, 도커에서 실행시킨 후 웹에서 접근할 수 있다.



## docker-compose

```bash
version: "2.1"

services:
  transmission:
    image: ghcr.io/linuxserver/transmission
    container_name: transmission
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Seoul
      - USER= #optional
      - PASS= #optional
    volumes:
      - /transmission/config:/config
      - /transmission/watch:/watch
      - /transmission/downloads:/downloads
    ports:
      - 9091:9091
      - 51413:51413
      - 51413:51413/udp
    restart: unless-stopped
```

*환경 변수*
- USER, PASS : 입장시 요구하는 아이디, 비밀번호

*volumnes*
- 호스트에 파일을 저장하고 컨테이너 삭제 시에도 상태를 유지하기 위해 `/config`, `/watch`, `/downloads`를 볼륨으로 연결해야 한다

*포트*
- 9091 포트를 통해 웹으로 접속한다
- 51413 포트는 토렌트 연결을 튀해 사용된다