---
title: "Docker | docker-compose 설치 및 사용법"
author: Hve
date: 2024-03-13 12:15:45 +0900
categories: ["개발", "도구"]
math: false
mermaid: false
tags: ["docker"]
---

## Docker compose 설치

### 저장소를 통해 설치

```bash
sudo apt-get install docker-compose-plugin
```

### 수동 설치

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

```bash
docker-compose -v
```

이후 정상 설치되었는지 확인한다

## docker-compose.yml 파일 작성

```yaml
version: "3"

services:
  your-service:
    image: node
    container_name: your-web-service
    restart: unless-stopped
    tty: true
    stdin_open: true
    ports:
      - "8080:80"
    working_dir: /web-service
    command: bash -c "npm start"
```

예시

## 명령어

```bash
alias dc='docker-compose'
alias dcbuild='docker-compose build'
alias dcup='docker-compose up'
alias dcdown='docker-compose down'
alias dcsart='docker-compose start'
alias dcstop='docker-compose stop'
```



