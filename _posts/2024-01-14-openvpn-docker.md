---
title: "Docker에서 openvpn 서버 실행 및 연결"
author: Hve
date: 2024-01-14 16:47:18 +0900
categories: ["개발", "개발환경"]
math: false
mermaid: false
tags: []
---

## 준비

*서버*

- docker
    - [링크 참조](https://hve4638.github.io/posts/docker-man/)
- make
    - `apt install make` 을 통해 설치할 수 있다

설치 방법은 `Ubuntu 22.04` 기준으로 작성되었다

*클라이언트*

- 각 플랫폼에 맞는 OPENVPN 클라이언트

## OPENVPN 서버 열기

### Makefile

```makefile
info:
	@echo OVPN_NAME : $(OVPN_NAME)
	@echo OVPN_HOST : $(OVPN_HOST)
	@echo OVPN_PORT : $(OVPN_PORT)
	@echo OVPN_PORT_HTTP : $(OVPN_PORT_HTTP)

start:
	docker run -it --cap-add=NET_ADMIN -p $(OVPN_PORT):1194/udp -p $(OVPN_PORT_HTTP):8080/tcp -e HOST_ADDR=$(OVPN_HOST) --name $(OVPN_NAME) alekslitvinenk/openvpn

stop:
	docker container rm $(OVPN_NAME) -f

version:
	docker exec $(OVPN_NAME) ./version.sh

open:
	docker exec -it $(OVPN_NAME) /bin/bash

pull:
	docker pull alekslitvinenk/openvpn
```

다음을 복사해 Makefile로 저장한다

### 환경변수 등록

```bash
export OVPN_NAME="dockovpn"

export OVPN_HOST="<IP주소>"

export OVPN_PORT="1194"
export OVPN_PORT_HTTP="80"
```

다음 환경변수를 등록한다

`OVPN_NAME`은 docker의 이름을 적는다

`OVPN_HOST`에는 사설IP가 아닌 공용 IP를 적어야 함에 주의해야 한다

`OVPN_PORT`는 VPN 연결을 위한 포트로 AWS같은 클라우드 서비스라면 해당 포트를 열어놓아야 하며, 홈서버에서 연다면 공유기에서 포트포워딩을 하는 등의 작업이 필요하다

`OVPN_PORT_HTTP`는 실행 후 클라이언트 설정 파일을 내려받기 위한 http서버의 포트로, 한번 내려받은 후에는 서버가 닫힌다. 따라서 계속 포트를 열어둘 필요는 없다

### 서버 열기

```bash
make info
```

현재 환경 변수의 상태를 확인한다

```bash
make start
```

OPENVPN 서버를 실행한다

- `CTRL+P CTRL+Q` 를 통해 터미널로 나갈 수 있다
- `CTRL+C`로 인터럽트를 사용 시 컨테이너가 종료된다

```bash
make stop
```

openvpn 서버를 종료한다

## 클라이언트에서 vpn 연결

OPENVPN 서버 실행시 `OVPN_PORT_HTTP` 포트로 http 서버가 열린다

해당 http 서버에 접속시 클라이언트 설정 파일(.ovpn)을 다운로드하고 http 서버가 종료된다

각 플랫폼에서 OPENVPN 클라이언트를 받고 해당 설정 파일을 이용해 서버에 접속할 수 있다

### 특정 대역만 vpn 이용하기

내부망에 접속하기 위한 목적으로 vpn 사용시 내부망 접속이 아닌 경우에도 vpn서버를 통해 접속하는 것은 불필요하다

특정 클라이언트 설정 파일에 다음을 추가해 특정 대역만 vpn을 이용할 수 있다

```
route-nopull
route 192.168.0.0 255.255.255.0
```

`route-nopull`은 모든 연결을 vpn을 통해 연결하는 것을 비활성화하며

`route 192.168.10.0 255.255.255.0`는 `192.168.10.0/24` 대역은 vpn 연결을 사용하겠다는 의미이다