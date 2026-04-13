---
title: "Linux | IP 세팅"
date: 2026-04-13 19:49:29 +0900
categories: ["개발", "도구"]
tags: []
---

ubuntu 기준으로 작성되었다.

## 상태 확인

```bash
ip a
```

위 명령으로 현재 인터페이스명과 상태를 확인할 수 있다.

## 임시 IP 지정

재부팅시 휘발되며, 네트워크 설정이 바뀜에 따라 다시 덮어씌워질 수 있다.

```bash
ip addr flush dev eth0
ip addr add 192.168.10.10/24 dev eth0
ip route add default via 192.168.10.1 dev eth0
```

위 명령은 `eth0` 인터페이스의 기존 설정을 제거하고 (flush)

ip를 `192.168.10.10/24`로 고정하며

게이트웨이는 `192.168.10.1` 로 지정한다는 의미이다.

## 영구 적용 방법

### nmcli 사용

```bash
ls /etc/NetworkManager
```

`ls /etc/NetworkManager` 를 했을 때, "No such file or directory" 등의 에러가 아닌 파일 목록이 나타난다면 nmcli를 사용 중으로, 아래를 따라하면 된다.

```bash
nmcli con show
```

위 명령을 통해 현재 디바이스명과 프로필명을 확인한다.

```
NAME                UUID                                  TYPE      DEVICE
Wired connection 1  57a6d568-ebbe-427e-b646-624d5ae98539  ethernet  eth0
```

다음과 같이 떴다면, `eth0`는 바꾸고자 하는 디바이스명, `Wired connection 1`는 해당 인터페이스의 프로필명이다.

```bash
# ip 주소 설정
sudo nmcli con mod "Wired connection 1" ipv4.addresses 192.168.10.10/24
# 게이트웨이 설정
sudo nmcli con mod "Wired connection 1" ipv4.gateway 192.168.10.1
# DNS 서버 설정
sudo nmcli con mod "Wired connection 1" ipv4.dns "8.8.8.8 1.1.1.1"
# DHCP 비활성화 (수동 IP 지정)
sudo nmcli con mod "Wired connection 1" ipv4.method manual
```

이렇게 적용할 수 있다.

```bash
sudo nmcli con down "Wired connection 1"
sudo nmcli con up "Wired connection 1"
```

연결 프로필을 끊었다가 다시 올리면 설정이 적용된다.