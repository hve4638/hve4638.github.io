---
title: "Dockerfile 명령어"
author: Hve
date: 2024-02-03 06:36:11 +0900
categories: ["개발", "Docker"]
math: false
mermaid: false
tags: []
---

## Dockerfile 예제

```dockerfile
FROM ubuntu:latest

RUN set -x \
&& apt update \
&& apt install -y curl openssh-server

COPY .aliaslist /home/master/.aliaslist

RUN mkdir /vol

USER master

CMD [ "echo", "hello", "world" ]
```

## 기본 명령

모든 명령은 대소문자를 구별하지 않지만, 일반적으로 모두 대문자로 사용한다

- `FROM` : base image를 지정한다
    - ex. `FROM ubuntu:latest`
    - 최초의 `FROM` 앞에는 `ARG` 만 올 수 있다

- `RUN` : 명령을 실행한다
    - ex. `RUN apt-get update`

- `WORKDIR` : 작업 디렉토리를 지정한다
    - ex. `WORKDIR /root`
    - 여러번 사용될 수 있으며, 상대 경로가 제공되면 이전 명령을 기준으로 수행된다

- `CMD` : 컨테이너 실행시 별도의 실행 인자가 없다면 이 쉘 명령을 수행한다
    - ex. `CMD "echo hello"` `CMD ["echo", "hello"]`
    - dockerfile에 하나만 존재해야 한다
    - `CMD` 뒤에 오는 쉘 명령은 문자열또는 리스트 형태로 들어올 수 있는데 일반적으로 리스트 방식을 추천한다
        - `CMD echo hello` 는 실제 실행시 `/bin/sh -c echo hello`로 변환되지만 리스트 방식은 그대로 실행된다

- `ENTRYPOINT` : 컨테이너 실행시 이 명령을 수행한다. 인자가 지정되었더라도 우선해 수행한다\
    - 문법은 `CMD`와 동일하다

- `ENV` : 환경 변수를 지정한다
    - ex. `ENV MYENV=hello MYENV2=world`
    - 컨테이너가 실행될 때도 유지되며 docker run 시 `--env` 옵션을 통해 변경될 수 있다

- `ARG` : dockerfile 내에서만 유효한 변수를 추가한다
    - 문법은 `ENV`와 동일하다
    - 주의 사항으로 `docker inspect` 명령을 통해 값을 확인할 수 있으므로 여기에 개인키 등의 민감한 정보를 저장하면 안된다

- `EXPOSE` : 컨테이너 내에서 사용하는 포트를 명시한다
    - ex. `EXPOSE 8000/TCP`, `EXPOSE 8000/UDP`
    - TCP/UDP를 명시하지 않는다면 TCP를 가정한다. TCP/UDP를 둘 다 사용한다면 두 줄에 걸쳐 명시해야 한다
    - 실제로 포트를 게시하는 것이 아니며 사용자에게 document 역할을 

- `COPY` : 호스트의 파일을 복사한다
    - ex. `COPY test.conf /etc/test.conf` `COPY *.txt /home/`
    - `*`, `?` 등의 와일드 카드를 사용할 수 있다
    - 선택 옵션으로 `[--chown=<user>:<group>] [--chmod=<perms>]`을 소유자 및 파일 권한을 지정할 수 있으며, 지정하지 않는다면 소유자는 0(root)이 된다

- `ADD` : `COPY`의 기능에 더해, url로부터 파일을 받아올 수 있다
    - ex. `ADD www.your.download.site /`

## 이외 명령 (WIP)

- `SHELL` : RUN 등의 쉘 형식의 명령에 사용되는 기본 쉘을 재정의할 수 있다
    - ex. `SHELL ["/bin/sh" "-c"]`


- `LABEL` : 이미지에 메타데이터를 추가한다
    - ex. `LABEL version="1.0"` `LABEL author="hve"`

- ~~`MAINTAINER`~~ (deprecated)
    - 저자에 대한 메타데이터를 추가하지만 더이상 사용하지 않는다
    - 대신 `LABEL` 명령을 사용한다

- `VOLUME`
- `HEALTHCHECK`
- `ONBUILD`
- `STOPSIGNAL`

## Increment build

dockerfile은 각 명령마다 중간 레이어를 생성하며 increment-build 가 적용된다. 즉, 재빌드 시 변경되지 않은 단계는 중복해서 빌드하지 않는다

따라서, 작성시 변화할 가능성이 거의 없는 작업부터 먼저 수행되어야 빌드 시간을 단축할 수 있다

또, 명령이 많아질 수록 중간 이미지도 많아지고, 최종 이미지의 크기가 커지게 된다

따라서 RUN 명령 수행시 각 쉘 명령마다 각각의 RUN을 사용하는 대신, 여러 명령을 묶어 실행하는 것이 좋다

```bash
# 개별 실행
RUN apt udpate
RUN apt install curl

# 체인 실행
RUN apt udpate \
 && apt install curl
```

## Reference

- [https://docs.docker.com/reference/dockerfile/](https://docs.docker.com/reference/dockerfile/)