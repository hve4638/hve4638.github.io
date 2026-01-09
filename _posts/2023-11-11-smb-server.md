---
title: Linux | SMB 서버 설치 (Samba)
author: Hve
date: 2023-11-11 22:21:53 +0900
categories: ["개발", "시스템"]
math: false
mermaid: false
tags: ["linux"]
---

## samba 설치

```bash
sudo apt-get install samba
```

## smbpasswd 설정

```bash
sudo smbpasswd -a <유저명>
```

## 설정 파일 수정

```bash
sudo vim /etc/samba/smb.conf
```

### 설정 정보

```
[Section 이름]
   comment = [섹션 정보]
   browseable = [브라우징 옵션]
   path = [공유할 디렉토리]
   guest ok = [게스트 허용여부 (yes/no)]
   read only = [읽기전용 여부 (yes/no)]
   writable = [읽기가능 여부 (yes/no)]
   create mask = [파일 접근권한 ]
   directory mask = [ 디렉토리 접근권한]
```

다음 포맷에 맞게 섹션을 추가하면 된다

```
[NAS]
   comment = nas
   browseable = yes
   path = /nas
   guest ok = no
   read only = no
   writable = yes
   create mask = 0700
   directory mask = 0771
```

추가 예시

## samba 재시작

```
sudo service smbd restart
```