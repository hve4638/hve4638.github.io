---
title: Docker 설치 및 사용
author: Hve
date: 2023-06-10 22:53:35 +0900
categories: [ 개발, 개발환경 ]
math: false
mermaid: false
tags: []
---

## Docker 설치

```bash
curl -sSL get.docker.com | sh
```

공식 홈페이지에서 스크립트를 가져와 실행하면 자동으로 설치된다.

WSL의 경우 Docker Desktop을 이용하라는 경고가 나오지만 기다리면 설치가 진행된다.

## 일반 계정에서 Docker 사용하기

```bash
sudo usermod -aG docker $USER
```

docker 명령을 루트 권한 없이 일반 계정에서 사용하도록 해준다.

## 컨테이너 생성

```bash
docker run hello-world
```

위 예시는 `hello-world` 이미지를 가져와 컨테이너를 실행한다

## 컨테이너 생성 옵션

`-d`, `--detach` : 컨테이너를 백그라운드에서 실행한다.

`-it` : -i, -t 옵션을 보통 같이 사용한다. 컨테이너를 종료하지 않고 터미널을 통해 상호작용하기 위해 사용한다

`-v` : volumn을 지정한다. 컨테이너는 호스트와 저장공간이 독립적이다. 볼륨을 지정해 호스트와 공유하는 공간을 가질 수 있다
- ex. `-v /home/ubuntu/volume:/host` : 호스트의 `/home/ubuntu/volume` 공간을 컨테이너의 `/host`와 연결한다

`-p` : `--publish` 호스트에게 컨테이너의 포트를 연결한다
- ex. `-p 8080:80` : 호스트의 8080 포트를 컨테이너의 80 포트로 연결한다

`--net` : 네트워크 모드 설정. 자세한 내용은 후술한다

### 이름 지정 (\-\-name)

```bash
docker run --name my_container ubuntu:latest
```

### 인터렉티브 모드 (-it)

```bash
docker run -it --name my_container ubuntu:latest
```

ubuntu 이미지에서 my_conatiner라는 컨테이너를 생성한다.

`-t` : preudo-TTY 을 할당한다

`-i` : STDIN(표준입력) 을 유지한다. 즉, 인터렉티브 환경을 제공한다

일반적으로 두 옵션을 같이 사용한다

### 백그라운드 실행 (-d)

```bash
docker run -d -it --name my_container ubuntu:latest
```

`-d` : 컨테이너를 백그라운드에서 생성한다

### 네트워크 모드 설정 (\-\-net)

기본적으로 컨테이너는 3가지 네트워크 모드를 가진다.


|  모드  | 설명 |
|--------|----------|
| bridge | 독립적인 docker 네트워크 영역을 가짐 (기본값) | 
| host   | 호스트와 동일한 네트워크를 사용 |
| none   | lo(루프백) 네트워크 인터페이스를 가지지 않음 |

```bash
# bridge : 독립된 docker 네트워크 영역을 가짐
docker run -it --name my_container1 --net bridge ubuntu:latest

# host : 호스트의 네트워크 환경을 그대로 사용
docker run -it --name my_container2 --net host ubuntu:latest

# none : 호스트를 포함한 네트워크 사용하지 않음
# lo (루프백) 만 가능
docker run -it --name my_container3 --net none ubuntu:latest
```

---

## 컨테이너에서 이미지 가져오기

```bash
docker commit -a "author" -m "commit message" my_container mycontainer:latest
```

`docker commit <container> <image>` 을 이용해 컨테이너의 현재 상태를 이미지화 할 수 있다.

`-a` : 저자 이름

`-m` : commit 메세지

## 컨테이너로 파일 복사

```bash 
docker cp ~/file mycontainer:/root/Download
```

`docker cp <src> <dest>`

호스트-컨테이너 사이 파일을 복사한다.

컨테이너 내 경로 지정시 `컨테이너명`:`경로` 포맷으로 지정한다.

## 추가 : 유용한 alias

```bash
alias dockcp='docker cp'
alias dockls='docker container ls'
alias dockrm='docker container rm'
alias dockrun='docker run'
alias dockst='docker start'
alias dockimg='docker images'
alias dockex='docker exec'
alias dockat='docker attach'
```

`.bashrc`에 추가해 alias로 축약해 사용할 수 있다