---
title: "Linux | 스크립트 저장용"
author: Hve
date: 2023-07-09 18:17:53 +0900
categories: [개발, Linux]
math: false
mermaid: false
tags: []
---

## python 설치

```bash
curl https://hve4638.github.io/assets/sh/py-install.sh | sh
```

sudo 명령이 포함된 스크립트

```bash
curl https://hve4638.github.io/assets/sh/nosudo-py-install.sh | sh
```

sudo 명령이 포함되지 않은 스크립트 (docker container용)

### 코드

```bash
apt install python3 -y
echo "alias python='python3'" >> ~/.bashrc
source ~/.bashrc

curl https://bootstrap.pypa.io/get-pip.py | python3 
```

## docker 초기 세팅

```bash
curl https://hve4638.github.io/assets/sh/docker-init.sh | sh
```

## Ruby 설치 및 Jekyll 블로그 세팅

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

## docker 설치 스크립트

```bash
curl -sSL get.docker.com | sh
sudo usermod -aG docker $USER
```

### docker 명령어 편의용 alias

```bash
alias dockcp='docker cp'
alias dockls='docker container ls'
alias dockrm='docker container rm'
alias dockst='docker start -i'
```

`~/.bashrc` 에 추가

## 자동 스크립트 레코드

```bash
if [ -z "$SCRIPT_RECORD_ENABLED" ]; then
    SP_PATH="$HOME/scripts"
    SP_DATE=`date +"%y%m%d_%H%M%S"`
    export SCRIPT_RECORD_ENABLED=1
    script $SP_PATH/record_`date +"%y%m%d%H%M%S"`_`whoami`_`id -u`.log
    unset SCRIPT_RECORD_ENABLED
fi
```

`.bashrc`의 최하단에 놓는다

## (VirtualBox) 리눅스 공유폴더 마운트

```
mount -t vboxsf <공유할디렉토리명> <마운트위치>
```