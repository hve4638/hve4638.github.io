---
title: "Docker | docker run 옵션 목록"
author: Hve
date: 2024-03-12 12:14:42 +0900
categories: ["개발", "레퍼런스"]
math: false
mermaid: false
tags: ["docker"]
---

## 사용법

```
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

주의할 점으로 옵션은 반드시 이미지 앞에 와야한다

한 글자 이면서 뒤에 인자가 붙지 않는 옵션은 붙여서 쓸 수 있다

- *예시: `-i -t` 과 `-it` 은 동일함*

## 주요 명령어

- `-i`, `--interactive`
    - attach 상태가 아니여도 `STDIN`을 닫지 않는다
    - 일반적으로 `-t`와 함께 사용한다
- `-t`, `--tty`
    - tty를 할당
    - 일반적으로 `-i`와 함께 사용한다
- `-d`, `--detach`
    - 백그라운드에서 작동하게 한다
- `-w`, `--workdir`
    - 컨테이너의 
- `-e`, `--env`
    - 환경변수를 생성한다
    - ex. `-e EXPORTDIR=/home/user/exports`
- `-p`, `--publish`
    - 컨테이너의 포트를 호스트에게 노출한다
    - tcp/udp/sctp 를 명시적으로 지정할 수 있으며 지정하지 않는다면 tcp로 해석된다
    - ex. `-p 8080:80` : 컨테이너의 TCP 포트 80을 호스트의 포트 8080로 노출
    - ex. `-p 8080:80/tcp` : 컨테이너의 TCP 포트 80을 호스트 포트 8080 로 노출
    - ex. `-p 8080:80/udp` : 컨테이너의 UDP 포트 80을 호스트 포트 8080 로 노출
- `-v`, `--volume`
    - 
- `-u` `--user`
    - 지정한 UID 또는 사용자명으로 컨테이너를 연다
    - 지정하지 않는경우 기본값은 root이다
    - ex. `-u 1000` : uid 1000으로 접속
- `--restart`
    - 인자 : `no|on-failure|always|unless-stopped`
        - `no` (기본값) : 다시 시작되지 않는다
        - `on-failure` : 0이 아닌 exitcode로 종료된 경우 컨테이너를 재시작한다
        - `always` : 컨테이너 중지시 항상 재시작한다
            - 수동으로 중지한 경우 docker daemon이 재시작되거나 수동으로 시작한 경우에만 재시작한다
        - `unless-stopped` : `always`와 유사하나, 수동 중지시 docer daemon 재시작시에도 시작하지 않는다
    - `docker update` 명령을 통해 이미 실행중인 컨테이너에도 적용할 수 있다
- `--rm`
    - 컨테이너 종료시 자동으로 삭제한다
- `--net`
    - 인자 : `bridge|host|none`


## 이외 명령어

- `--privileged`
    - 컨테이너가 호스트의 특권을 가지며 호스트 시스템로부터 컨테이너를 보호하기 위한 검사가 비활성화 된다
    - 정말 특수한 경우가 아니라면 일반적으로 피해야 한다
- `--device`
    - 호스트의 장치에 엑세스할 수 있도록 한다
    - ex. `--device=/dev/sda:/dev/xvdc`
- `-h` `--hostname`
    - 컨테이너의 호스트명을 지정한다
- `--expose`
    - *Dockerfile*의 EXPOSE의 기능과 동일하다
    - 노출할 포트를 명시하지만 바로 호스트에 노출되지는 않는다
    - `-P` 옵션을 통해 실제로 호스트에 노출한다
- `-P`, `--Publish-all`
    - dockerfile의 `EXPOSE`나 `--expose`로 명시한 포트를 호스트의 랜덤한 포트에 노출한다
- `--pull`
    - 명령 실행전 이미지의 pull 여부를 지정한다
    - 인자 : `always|missing|never` (기본값: "missing")
    
