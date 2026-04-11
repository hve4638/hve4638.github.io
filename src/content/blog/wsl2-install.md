---
title: "개발 환경 | WSL2 설치"
author: Hve
date: 2024-10-11 01:22:53 +0900
categories: ["개발", "메모"]
math: false
mermaid: false
tags: []
---

## WSL

WSL(Windows Subsystem for Linux)는 윈도우 환경에서 네이티브 Linux 환경을 설치하고 실행할 수 있게 해주는 기능이다.

## WSL 설치

### 최초 설치

```bash
wsl --install
```

`cmd` 또는 `Powershell`을 관리자 권한으로 실행하고 명령을 실행한다.
1
### 온라인 목록 확인

```bash
wsl --list --online
```

설치가능한 목록을 확인한다.

글 작성일(24년 10월) 기준 배포판 목록은 다음과 같다.

- `Ubuntu`
- `Debian`
- `kali-linux`  
- `Ubuntu-18.04`
- `Ubuntu-20.04`
- `Ubuntu-22.04`
- `Ubuntu-24.04`
- `OracleLinux_7_9`
- `OracleLinux_8_7`
- `OracleLinux_9_1`
- `openSUSE-Leap-15.6`
- `SUSE-Linux-Enterprise-15-SP5`
- `SUSE-Linux-Enterprise-15-SP6`
- `openSUSE-Tumbleweed`

### Linux 배포 설치

```bash
wsl --install 배포
```

지정한 리눅스 배포판을 설치한다.

Ubuntu 24.04 LTS 버전을 설치하려면 `wsl --install Ubuntu-24.04`

### WSL 버전 변경

기본적으로 WSL 2로 지정되어 있으며 필요시 1로 다운그레이드 할 수 있다.

WSL 1과 WSL 2의 차이는 [공식 문서](https://learn.microsoft.com/ko-kr/windows/wsl/compare-versions)를 참고

```bash
wsl -l -v
```

설치된 배포판의 WSL 버전 확인

```bash
wsl --set-default-version 버전
```

기본 WSL 버전을 변경

```bash
wsl --set-version 이름 버전
```

지정된 배포의 WSL 버전 벼경

### WSL 리눅스 배포판 제거

```bash
wsl --unregister 배포판
```

설치된 리눅스 배포판을 삭제한다
