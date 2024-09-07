---
title: "SSH | SSH 리버스 터널링"
author: Hve
date: 2025-01-06 14:55:27 +0900
categories: []
math: false
mermaid: false
tags: []
---

## SSH 리버스 터널링 (SSH 포트포워딩)

SSH 리버스 터널링은 SSH 서버를 경유해 타 서버로 연결할 수 있도록 해준다.

접속하려는 서버에서 경유 서버에 리버스 터널링으로 연결하면, 다른 사용자가 서버에 직접 접근하지 않고 경유 서버에 연결함으로써 서버에 접근할 수 있다.

따라서 다음과 같은 경우에 사용이 가능하다.

- 네트워크에서 공유기의 사설 IP만 할당받고, NAT 등으로 외부에 노출되지 않은 경우
- 방화벽 정책으로 서버 외부에서 내부로 접근이 불가하지만, 내부에서 외부 접근은 가능한 경우

## 경유 서버의 ssh_config 설정

ssh 서버가 설치되어 있다면 리버스 터널링을 구축할 수 있다.

`/etc/ssh/sshd_config`를 열어 설정을 몇가지 수정하여야 한다.


### 필수 사항

```
GatewayPorts yes
AllowTcpForwarding remote
```

다음과 같이 변경하여야 리버스 터널링 연결을 구축할 수 있다.

`GatewayPorts`의 경우 yes는 모든 리버스 터널링 연결을 허용하겠다는 의미로 `GatewayPorts clientspecified`를 통해 특정 주소의 연결만 허용하도록 할 수 있다.

### 권장 사항

```
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
ChallengeResponseAuthentication no
PermitTunnel yes
X11Forwarding no
PermitTTY no
```

해당 서버가 리버스 터널링만을 목적으로 한다면, 다음 설정도 권장된다.

## 리버스 터널링 연결

연결하려는 서버에서 다음 명령을 통해 리버스 터널링을 수행할 수행할 수 있다.

```bash
ssh -Nf -R $LISTEN_PORT:localhost:$CONNECT_PORT 경유서버_사용자@경유서버_주소 -p 경유서버_포트 -i 개인키_경로
```

`경유서버_사용자@경유서버_주소 -p 경유서버_포트 -i 개인키_경로` 부분은 일반 ssh 연결과 동일하다.

`-N`은 명령 실행없이 연결만 진행한다는 의미이며 `-f`는 백그라운드에서 실행하겠다는 의미이다.

`-R $LISTEN_PORT:localhost:$CONNECT_PORT`는 경유 서버의 `$LISTEN_PORT`포트로 들어온 연결을 `localhost:$CONNECT_PORT`로 포트포워딩 하겠다는 의미이다.

예시로 `-R 22:localhost:26`이라면, 경유서버의 22번 포트로 접근 시 localhost:26로 포트포워딩 되게 된다.