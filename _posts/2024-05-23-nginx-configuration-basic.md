---
title: "nignx | nginx 기본 가이드"
author: Hve
date: 2024-05-23 00:24:17 +0900
categories: ["개발", "레퍼런스"]
math: false
mermaid: false
tags: ["nginx"]
---

[nginx.org의 Beginner's Guide](https://nginx.org/en/docs/beginners_guide.html)를 참고해 작성하였다.

## nignx.conf의 위치

일반적으로 다음 위치에 저장된다
- `/usr/local/nginx/conf`
- `/usr/local/etc/nginx`
- `/etc/nginx`

## nginx 실행, 종료 및 재시작

```bash
nginx -s stop # 즉시 종료
nginx -s quit # 종료 (현재 요청을 모두 처리후 종료)
nginx -s reload # 재시작 (conf 파일의 변경사항 갱신)
nginx -s reopen # 로그파일 열기 
```

## nginx.conf 기본 구조

```nginx
http {
    server {

    }
}
```

기본적으로 http 블럭 속의 server 블럭 안에 대부분을 입력한다.

server 블럭은 여러개일 수 있으며, 수신하는 포트, 서버 이름으로 각 server 블럭을 구분한다.

앞으로 이 글에서 위 포맷은 기본적으로 생략한다.

## location 블럭과 root 지시어

```nginx
location / {
    root /data/www;
}
```

`location` 블럭은 요청된 URI를 비교해 실제 연결할 경로를 지정한다. `server` 블럭 내에 작성해야 한다.

`root` 지시어는 해당 경로로 연결하라는 의미이다.

위 예시의 경우 `http://localhost/index.html` 요청이 들어온다면 `/data/www/index.html` 파일을 전송하게 된다.

```nginx
location / {
    root /data/www;
}

location /images/ {
    root /data;
}
```

요청과 일치하는 location 블럭이 여러개인 경우, 접두사가 가장 긴 location 블럭이 선택된다.

위 예시의 경우 `http://localhost/images/test.png` 요청시 `/`와 `/images/` 모두 일치하지만, 접두사가 긴 `/images/` location 블럭이 선택되어 `/data/test.png` 파일을 전송하게 된다.

```nginx
server {
    root /data;

    location / {
    }
}
```

`location` 블럭이 아닌 `server` 블럭에 바로 `root` 지시어가 올 수 있는데, `location` 블럭에 `root` 지시어가 없는 경우 `server` 블럭의 `root` 지시어가 적용된다.

## proxy_pass 지시어

```nginx
location / {
    proxy_pass http://localhost:8080/;
}
```

`proxy_pass` 는 nginx 프록시 서버로서 타 서버와 연결한다.

위 예시에서 `http://localhost/` 요청이 올 경우 nginx는 프록시 서버로서 `http://localhost:8080/`의 응답을 받아 클라이언트에게 전송한다.

## location 블럭에 정규표현식 적용

```nginx
location / { # 접두사 매치 (prefix match)
    
}

location ~ .+[.](png|jpg)$ { # 정규표현식 매치 (regex match)
    
}
```

바로 경로를 쓰는 대신 `~`를 붙이면 정규표현식으로 uri을 매칭한다.

위 예시의 경우 `.png`나 `.jpg`로 끝나는 모든 uri는 두번째 `location` 블럭이 선택된다.

## server 블럭 포트 지정

```
server {

}

server {
    listen 8080;
}
```

`server` 블럭에는 `listen` 지시어를 이용해 포트를 지정할 수 있다.

기본 포트인 80 을 사용한다면 `listen` 지시어를 생략할 수 있다.

위에서 말했듯, `server` 블럭을 여러개를 사용할 수 있다.

## events 블럭, work_connections 지시어

```nginx
events {
    worker_connections  1024;
}

http {
    server {
        # ...
    }
}
```

`events` 블럭은 최상단에 위치해야 한다.

nginx는 events 블럭이 없는경우 에러를 뱉고 종료하므로 필수 블럭이다.

`worker_connections` 지시어는 클라이언트의 최대 연결 가능 수를 지정한다.

기본값은 512 이지만 1024을 추천한다.

## 이외

### location 블럭의 매치 종류 및 우선순위

```nginx
location / {
    # 접두사가 일치할 경우 매치
    # 가장 낮은 매치 우선순위
}

location ~* REGEX {
    # 정규표현식 매치
    # 대소문자 구분 없음 
}

location ~ REGEX {
    # 정규표현식 매치
    # 대소문자를 구분함
}

location ^~ / {
    # 접두사가 일치할 경우 매치
    # 일반 접두사 매치 및 정규식 매치보다 우선순위가 높음
}

location = / {
    # '정확히' 일치할 경우 매치
    # 가장 높은 매치 우선순위
}
```

아래에서 위 순으로 매치 우선순위가 높다.

## Reference

[nginx 초보자 가이드](https://nginx.org/en/docs/beginners_guide.html)
