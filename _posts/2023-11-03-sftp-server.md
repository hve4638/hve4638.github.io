---
title: Linux | SFTP 서버
author: Hve
date: 2023-11-03 13:00:12 +0900
categories: ["개발", "레퍼런스"]
math: false
mermaid: false
tags: ["linux"]
---

## SFTP 서버

sftp는 SSH 통신을 이용해 서버 접속 및 파일 전송을 하는 방법이다

따라서 sftp 서버를 만들기 위해 ssh서버가 필요하다

### SSH 서버 설치

```bash
sudo apt install openssh-server -y
```

### sftp 그룹, 유저 생성

```bash
sudo groupadd sftp_group
```

sftp 접속 유저를 위한 `sftp_group` 그룹을 만든다

```bash
sudo useradd -g sftp_group sftp_user
```

해당 그룹에 속한 `sftp_user` 유저를 만든다

```bash
sudo passwd sftp_user
```

접속을 위한 패스워드를 지정한다

```bash
sudo mkdir /sftp_access
sudo chown root:sftp_group /sftp_access
sudo chmod 755 /sftp_access
```

sftp 유저가 접속할 디렉토리를 생성하고 다음과 같이 권한을 설정한다

### 설정 및 재시작

```bash
vim /etc/ssh/sshd_config
```

다음 파일에 들어가 마지막 줄에 다음과 같이 추가한다

```bash
Match Group sftp_group
ChrootDirectory /sftp_access/
ForceCommand internal-sftp
```

```bash
sudo systemctl restart sshd
```

이후 ssh 서버를 재시작한다

### 접속

`sftp` 명령을 통해 `sftp_user` 유저명으로 접속을 시도한다

접속 중 `client_loop` 등의 에러가 나타난다면, `/var/log/auth.log` 에 저장된 로그를 확인하며 에러를 찾아본다