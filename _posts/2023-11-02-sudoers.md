---
title: Linux | sudo 권한 부여
author: Hve
date: 2023-11-02 16:58:51 +0900
categories: ["개발", "메모"]
math: false
mermaid: false
tags: []
---

## Sudo 권한 문제

> "User is not in the sudoers file. This incidnet will be reported."

`sudo` 명령을 사용했을 때 다음과 같은 메세지가 나온다면, 현재 사용자가 sudo 권한을 가지지 않은 것이다 

## sudo 권한 지정

```
su
```

`su` 명령을 통해 root 계정으로 전환한다

```bash
vim /etc/sudoers
```

```
<username> ALL=(ALL:ALL) ALL
```

다음 파일에 위 텍스트를 추가한다.

 `<username>`에 실제 유저명을 추가한다

이후 다시 현 사용자로 돌아오면 정상적으로 사용할 수 있다