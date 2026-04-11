---
title: "Arch Linux 셋업"
date: 2026-03-03 17:19:54 +0900
categories: []
tags: []
---

## ip 임시 설정

```bash
ip addr flush dev eth0

# 수동 설정
ip addr add 192.168.10.10/24 dev eth0
ip route add default via 192.168.0.1 dev eth0

# DHCP 자동설정
dhcpcd eth0

ping archlinux.org
```

## archinstall

```bash
archinstall
```

실행시 설치 tui 창으로 이동한다. 


굳이 명령어로 하나하나 입력하겠다면 가이드를 따라하면 된다
- [https://wiki.archlinux.org/title/Installation_guide]()
