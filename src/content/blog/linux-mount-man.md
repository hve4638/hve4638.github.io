---
title: "Linux 명령어 | 마운트 관련 명령어"
author: Hve
date: 2023-10-16 11:50:41 +0900
categories: ["개발", "시스템"]
math: false
mermaid: false
tags: ["fstab", "mount", "fdisk", "linux"]
---

## 마운트 관련 명령어

### mount : 디바이스 마운트

Unix 시스템에서 엑세스할 수 있는 모든 파일은 하나의 큰 트리, 즉 `/`로 시작하는 단일 디렉토리로 부터 시작한다

`mount`명령은 특정 장치에서 찾은 파일시스템은 큰 파일 트리에 연결하는 역할을 한다

```bash
mount [-t type] device dir
```

해당 명령은 커널이 디바이스에서 찾은 파일시스템은 dir에 마운트한다. `-t` 옵션은 선택사항이다

마운트된 동안, 원래 해당 경로의 이전 파일과 소유자 및 dir모드가 보이지 않게된다

```bash
mount
```
mount 명령만 실행할 경우, 현재 시스템에 마운트된 정보를 확인할 수 있다

## 디바이스 확인 및 파티션 생성, 포맷 명령어

### 디바이스 파티션 확인

```bash
fdisk -l
```

디바이스 파티션 정보를 확인한다

### 파티션 분할

```bash
fdisk [ 디바이스명 ]
```

디바이스명은 `/dev` 디렉토리에 위치하며, `fdisk -l`을 통해 확인할 수 있다.

명령 실행시 파티션을 설정하는 CLI 창으로 들어가게 된다

![alt](/assets/img/linux/fdisk01.png)

자주 사용하는 명령어 목록
- n : 새 파티션 생성
- d : 기존 파티션 삭제
- w : 변경 내용을 적용후 나감
- q : 변경 내용을 저장하지 않고 나감

이외 명령어 목록
- p : 파티션 테이블 확인
- i : 파티션의 정보 확인
- F : 파티션에 할당되지 않은 용량 확인
- v : 파티션 테이블의 유효성 확인
- m : 이외 다른 명령어 목록 일람

### 파티션 포맷

```bash
mkfs.ext4 [ 디바이스명 ]
```

## /etc/fstab : 부팅시 자동 마운트

```bash
vim /etc/fstab
```

`/etc/fstab` 에 

`<file system> <mount point> <type> <options> <dump> <pass>`
- file system : 디바이스 식별자를 나타낸다 (ex. /dev/sda1)
    - 디바이스 식별자는 디바이스 명 외의 다른 값을 넣을 수 있다. 아래 참조
- mount point : 마운트 할 경로를 나타낸다
- type : 마운트 타입을 지정한다. 일반적으로 ext4를 지정한다.
- options : 마운트 옵션을 나타내며 defaults, ro, rw, nosuid, nodev 등이 있다
- dump : 덤프 유틸리티에 의한 백업 여부를 나타낸다. 기본값은 0 (덤프X)
- pass : 파일 검사 순서를 의미하며 기본값은 0 이다.

일반적으로 ext4 포맷의 디바이스를 마운트할때 다음을 입력하면 된다.
- `<디바이스명> <마운트경로> ext4 defaults 0 0`

공백의 개수는 무시되므로 공백을 늘려 줄을 맞추어도 된다.


## 디바이스명 외 식별자 추가 

`/etc/fstab` 이나 `mount`, `unmount` 명령에서 디바이스명 대신 LABEL, UUID를 대신 식별자로 넣을 수 있으며 디바이스명을 직접 넣는 것보다 권장되는 방식이다.

디바이스 명은 장치의 추가 및 삭제에 따라 순서가 바뀔 수 있기 때문이다.

### LABEL 생성

*EXT시리즈 파일시스템의 LABEL 조회 및 생성*
```bash
e2label /dev/sda1 # 라벨 조회
e2label /dev/sda1 PARTION1 # 라벨 추가
```

*MSDOS 파일시스템의 LABEL 조회 및 생성*
```bash
dosfslabel /dev/sda1 # 라벨 조회
dosfslabel /dev/sda1 PARTION1 # 라벨 추가
```

## df : 디스크 용량 확인

```bash
df  # 마운트된 디스크 용량 확인
df -h # 디스크 용량을 M, G등의 단위로 보여준다
```

*disk free*

현재 마운트된 디바이스의 용량을 확인한다

## du : 디렉토리 용량 확인

*disk usage*

```bash
df # 현제 디렉토리의 용량 및 하위 디렉토리의 용량 확인
df [ 경로 ] # 해당 경로의 용량 및 하위 디렉토리의 용량 확인
df -h # 용량을 M, G 등의 단위로 표현
df -s # 지정한 경로만 확인하고 하위 디렉토리의 정보를 표시하지 않음
```



