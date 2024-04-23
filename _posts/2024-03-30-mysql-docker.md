---
title: "MySQL | MySQL Docker 설치"
author: Hve
date: 2024-03-30 14:26:00 +0900
categories: ["공부", "MySQL"]
math: false
mermaid: false
tags: ["sql"]
---

## 1. docker, docker-compose 설치

- [docker 설치 및 사용](https://hve4638.github.io/posts/docker-man/)
- [docker-compose 설치 및 사용](http://hve4638.github.io/posts/docker-compose-man/)

## 2. docker 네트워크 생성

```bash
docker network create --subnet=10.10.10.0/24 net-db
```

`10.10.10.0/24` 주소 범위를 갖는 `net-db` 네트워크를 생성했으며, 서브넷과 이름을 자유롭게 지정하면 된다

컨테이너 간 db 접속을 위해 필요한 것으로 필요하지 않다면 건너뛰어도 된다

## 3. docker-compose.yml 작성

```bash
version: "3"

services:
  mysql-service:
    image: mysql:latest
    container_name: mysql-service
    restart: unless-stopped
    ports:
        - "3306:3306"
    networks:
      net-db:
    volumes:
      - /your/mysql/path/mysql:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=12345

networks:
  net-db:
    external: true
```

위 코드를 `docker-compose.yml` 에 저장한다

**volume 지정**

호스트의 특정 경로를 컨테이너의 `/var/lib/mysql`의 볼륨으로 지정해 컨테이너가 삭제되도 정보가 남아있도록 한다

**환경변수 지정**

`MYSQL_ROOT_PASSWORD` 환경변수로 root 비밀번호를 추가한다

**네트워크 지정**

컨테이너 간 통신을 위해 사용한다

다른 컨테이너에서도 동일한 네트워크 인터페이스를 추가해 DB에 연결할 수 있다

컨테이너에서 DB에 접속하지 않는다면 제거해도 된다

**포트 지정**

외부(호스트)에 포트를 노출한다 mysql에서 사용하는 기본 포트는 3306로 해당 포트를 노출시키면 된다

외부에서 DB에 집적 접속하지 않는다면 제거해도 된다 (권장)

## 4. MySQL 컨테이너 실행

```bash
docker-compose start
```

작성한 `docker-compose.yml`이 있는 디렉토리에서 위 명령을 수행시 컨테이너가 실행된다

```bash
docker-compose stop
docker-compose restart
```

종료 및 재시작은 위 명령을 사용하면 된다

## 5. MySQL 프롬프트 접속

```bash
docker exec -it mysql-service mysql -u root -p
```

## 6. 다른 컨테이너에서 DB 연결

```bash
# MySQL 컨테이너와 동일한 네트워크
docker run --network net-db node /bin/bash
```

다른 컨테이너에서 MySQL 컨테이너에서 사용한 네트워크를 사용하도록 옵션을 준다

이후 컨테이너 내에서 MySQL 컨테이너의 컨테이너명을 주소로 사용해 DB 접속할 수 있다

아래는 자바스크립트로 DB에 연결하는 예시이다

```js
import mysql from 'mysql2';

const dbconfig = {
  host: "mysql-service",
  port: "3306",
  user: "root",
  password: "1234",
  database: "yourdbname",
};
const connection = await mysql.createConnection(dbconfig);
```

