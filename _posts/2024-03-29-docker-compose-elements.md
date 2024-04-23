---
title: "Docker | docker-compose 작성법"
author: Hve
date: 2024-03-29 17:47:52 +0900
categories: ["개발", "Docker"]
math: false
mermaid: false
tags: []
---

## 서비스 정의

```yaml
service:
    container1:
        ...
    container2:
        ...
```


## 컨테이너 하위 요소

### image

```yaml
image: ubuntu:latest
```

사용할 이미지를 지정한다

### build

```yaml
build:
    context: . # 경로
    dockerfile: Dockerfile # 파일명
image: myimage:latest # (선택) 생성할 이미지명
```

사용할 `Dockerfile`을 지정한다

### command

```yaml
command: bash
```

컨테이너 실행시 수행할 명령어를 지정한다

### container_name

```yaml
container_name: mycontainer
```

*docker run `--name`* 에 대응하는 옵션

컨터이너 명을 지정한다

지정하지 않는 경우 임의의 이름이 지어짐

### hostname

```yaml
hostname: myname
```

*docker run `--hostname`* 에 대응하는 옵션

호스트 명을 지정한다

### tty, stdin_open

```yaml
tty: true
```

*docker run* `-t`과 `-i` 에 대응하는 옵션

컨테이너와 상호작용 여부를 지정한다

### detach

```yaml
detach: true
```

*docker run* `-d` 에 대응하는 옵션

컨테이너를 백그라운드로 실행한다

### restart

```yaml
restart: unless-stopped
```

*docker run* `--restart` 에 대응하는 옵션

- `no` (기본값) : 다시 시작되지 않는다
- `on-failure` : 0이 아닌 exitcode로 종료된 경우 컨테이너를 재시작한다
- `always` : 컨테이너 중지시 항상 재시작한다
- 수동으로 중지한 경우 docker daemon이 재시작되거나 수동으로 시작한 경우에만 재시작한다
- `unless-stopped` : `always`와 유사하나, 수동 중지시 docer daemon 재시작시에도 시작하지 않는다

### networks

```yaml
networks:
    my-network:
        ipv4_address: 10.110.13.2
```

## network_mode

```yaml
network_mode: "host"
```

*docker run* `--net` 에 대응하는 옵션

`bridge/host/none` 중 선택할 수 있다

### volumes

```yaml
volumes:
    - /home/ubuntu/vol1:/vol1
    - /home/ubuntu/vol2:/vol2:ro
```

*docker run* `-v` 에 대응하는 옵션

호스트와 컨테이너 간 볼륨을 공유한다

`<호스트 경로>:<컨테이너 경로>` 형태로 지정하고 읽기 전용인 경우 뒤에 `:ro` 를 추가한다

### working_dir

```yaml
working_dir: /vol1
```

*docker run* `-w` 에 대응하는 옵션

컨테이너 시작시 경로를 지정한다

### ports

```yaml
ports:
    - "8080:80"
```

*docker run* `-p` 에 대응하는 옵션

컨테이너의 포트를 호스트에게 노출한다

tcp/udp/sctp 를 명시적으로 지정할 수 있으며 지정하지 않는다면 tcp로 해석된다
- ex. `8080:80` : 컨테이너의 TCP 포트 80을 호스트의 포트 8080로 노출
- ex. `8080:80/tcp` : 컨테이너의 TCP 포트 80을 호스트 포트 8080 로 노출
- ex. `8080:80/udp` : 컨테이너의 UDP 포트 80을 호스트 포트 8080 로 노출

### environment

```yaml
environment:
    - PORT=1234
# 또는
environment:
    - PORT:1234
```

*docker run* `-e` 에 대응하는 옵션

환경 변수를 지정한다

`=`,`:` 사이에 공백이 있으면 안된다

### user

```yaml
user: "1000"
user: "user"
```

*docker run* `-u` 에 대응하는 옵션

지정한 UID 또는 사용자명으로 컨테이너를 연다

기본값은 이미지(Dockerfile의 USER)에 의해 결정되며 지정되지 않았다면 root로 실행된다

## Reference

- [https://docs.docker.com/compose/compose-file](https://docs.docker.com/compose/compose-file/)