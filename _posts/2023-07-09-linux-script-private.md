---
title: "Linux | 저장용 스크립트"
author: Hve
date: 2023-07-09 18:17:53 +0900
categories: [Dev, Linux]
math: false
mermaid: false
tags: []
---

## docker 컨테이너 용 초기 세팅

```bash
apt update -y && apt upgrade -y
apt install vim build-essential iproute2 -y

echo "export PS1='\[\e]0;\u@\h: \w\a\]\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w$\[\033[00m\] '" >> ~/.bashrc
source ~/.bashrc
```

`ubuntu` 이미지로 컨테이너를 생성했을때 기준

## Rubt 설치 및 Jekyll 블로그 세팅

```bash
apt install ruby-full build-essential zlib1g-dev -y
gem install jekyll bundler
bundle install
```

```bash
# jekyll 블로그 폴더에서 실행
bundle exec jekyll serve --host 0.0.0.0
```

## Code-Server 설치

```bash
curl -fsSL https://code-server.dev/install.sh | sh
```

## OpenMediaVault 설치

```bash
sudo curl -sSL https://github.com/OpenMediaVault-Plugin-Developers/installScript/raw/master/install | sudo bash
sudo omv-confdbadm populate
```

스크립트 실행중 네트워크 재설정을 하기 때문에 원격 환경일 경우 연결이 끊긴다.