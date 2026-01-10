---
title: "Windows | 정션과 심볼릭 링크"
author: Hve
date: 2026-01-10 21:26:31 +0900
categories: ["개발", "시스템"]
math: false
mermaid: false
tags: ["junction", "windows"]
---

## 개요

정션/심볼릭 링크는 대부분 윈도우에서 사용하는 NTFS 파일 시스템의 디렉토리/파일 간 연결이다. 리눅스의 `ln`을 통한 심볼릭/하드 링크와 유사한 역할을 한다.

경로를 단순화하거나 특정 도구에서 고정된 경로를 요구하는데 옮기기 복잡한 등의 경우 유용하다.

바로가기와도 비슷해 보이지만 바로가기는 사용자가 GUI에서 상호작용할 때 사용하는 *파일*이고, 정션은 실제 해당 경로에 연결 디렉토리가 생겨 프로그램도 접근이 가능하다.

## 정션 생성

```bat
: cmd의 경우
: mklink /J <링크경로> <대상경로>

mklink /J "C:/Link" "C:/Workspace/a/b/c/target"
```

```powershell
# 파워쉘의 경우
# New-Item -ItemType Junction -Path <링크경로> -Target <대상경로>

New-Item -ItemType Junction -Path "C:/Link" -Target "C:/Workspace/a/b/c/target"
```

`대상경로`는 연결할 대상, `링크경로`는 생성할 링크의 위치를 뜻한다. `링크경로`는 비어 있어야 한다.

관리자 권한을 요구한다.

## 심볼릭 링크

```bat
: cmd의 경우
: mklink /D <링크경로> <대상경로>

mklink /D "C:/Link" "C:/Workspace/a/b/c/target"
```

```powershell
# 파워쉘의 경우
# New-Item -ItemType SymbolicLink -Path <링크경로> -Target <대상경로>

New-Item -ItemType Junction -Path "C:/Link" -Target "C:/Workspace/a/b/c/target"
```

마찬가지로 관리자 권한을 요구한다.