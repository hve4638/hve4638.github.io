---
title: "리눅스 서버 세팅"
author: Hve
date: 2024-03-18 11:00:24 +0900
categories: ["개발", "홈서버"]
math: false
mermaid: false
tags: []
---

## 초기세팅

**패키지 정보 갱신**

```bash
sudo apt update
# sudo apt upgrade
```

*"User is not in the sudoers file. This incidnet will be reported." 가 뜨는 경우*
- root 로 계정 전환 (가능하다면 `su` 명령, 또는 바로 관리자로 접속)
- `/etc/sudoers` 파일을 열고 *"사용자명 ALL=(ALL:ALL) ALL"* 추가

**필요한 패키지 설치**

```bash
sudo apt install curl wget vim -y
```

**시간을 KST로 변경**

```bash
sudo ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
```

## SSH 서버

**SSH 서버 설치**

```bash
sudo apt install openssh-server
```

## docker 설치

**docker 설치**

```bash
curl -sSL get.docker.com | sh
```

```bash
sudo usermod -aG docker $USER
```

**docker-compose 설치**

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

**편의성 alias 등록**

```bash
echo "alias dockcp='docker cp'" >> ~/.bashrc
echo "alias dockls='docker container ls'" >> ~/.bashrc
echo "alias dockrm='docker container rm'" >> ~/.bashrc
echo "alias dockrun='docker run'" >> ~/.bashrc
echo "alias dockst='docker start'" >> ~/.bashrc
echo "alias dockimg='docker images'" >> ~/.bashrc
echo "alias dockex='docker exec'" >> ~/.bashrc
echo "alias dockat='docker attach'" >> ~/.bashrc

echo "alias dc='docker-compose'" >> ~/.bashrc
echo "alias dcbuild='docker-compose build'" >> ~/.bashrc
echo "alias dcup='docker-compose up'" >> ~/.bashrc
echo "alias dcdown='docker-compose down'" >> ~/.bashrc
echo "alias dcstart='docker-compose start'" >> ~/.bashrc
echo "alias dcstop='docker-compose stop'" >> ~/.bashrc
```

터미널 재시작시 적용된다. 바로 사용하려면 `. ~/.bashrc` 를 실행하면 된다