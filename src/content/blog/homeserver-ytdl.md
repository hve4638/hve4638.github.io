---
title: "홈서버 | 유투브 다운로드 서버"
author: Hve
date: 2024-05-30 01:31:17 +0900
categories: ["인프라", "홈서버"]
math: false
mermaid: false
tags: ["docker"]
---

## 설명

Github : [YoutubeDL-Material](https://github.com/Tzahi12345/YoutubeDL-Material)

유투브 다운로더를 자체 호스팅한다

## docker-compose.yml

```yml
version: "2"

services:
    ytdl_material:
        environment: 
            ytdl_mongodb_connection_string: 'mongodb://ytdl-mongo-db:27017'
            ytdl_use_local_db: 'false'
            write_ytdl_config: 'true'
        restart: always
        depends_on:
            - ytdl-mongo-db
        volumes:
            - /ytdl/config/appdata:/app/appdata
            - /ytdl/config/subscriptions:/app/subscriptions
            - /ytdl/config/users:/app/users
            - /ytdl/download/audio:/app/audio
            - /ytdl/download/video:/app/video
        ports:
            - "17442:17442"
        image: tzahi12345/youtubedl-material:latest
    ytdl-mongo-db:
        # If you are using a Raspberry Pi, use mongo:4.4.18
        image: mongo:4
        logging:
            driver: "none"          
        container_name: mongo-db
        restart: always
        volumes:
            - /dmnt/ytdl/db/:/data/db
```

*ports*
- 17442 포트를 통해 웹 서버로 접속할 수 있다 

*volumes*
- /app/appdata
- /app/subscriptions
- /app/user
- /app/video
- /app/audio