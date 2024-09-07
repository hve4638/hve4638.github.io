---
title: "VSCode | 팁"
author: Hve
date: 2024-05-26 01:06:07 +0900
categories: ["개발", "개발환경"]
math: false
mermaid: false
tags: []
---

## 단축키

- `CTRL + ,` : 설정 열기
- `CTRL + K` + `CTRL + S` : 단축키 설정 열기
- `CTRL + K` + `F` : 현재 폴더 닫기
- `CTRL + SHIFT + P` : 명령 표시
- `SHIFT + ALT + F` : 자동 들여쓰기 정렬

## 단축키 재지정

`CTRL + K` + `CTRL + S` 로 단축키 설정 창을 연다.

*추천하는 단축키*
- 아래에 줄 복사 : `CTRL + D` 로 지정


## 유용한 익스텐션

### 프론트엔드 관련

*WIP*

## pylint : python 가상 환경에서 사용하기

1. python `venv`를 생성하고, 가상 환경 내에서 `pylint`를 설치한다.
2. `CTRL + ,` 로 설정에 들어간다.

![alt](/assets/img/vscode/vscode-pylint-01.png)

3. 위의 `사용자 / 작업 영역` 중 `작업 영역`을 클릭한다.
    - `사용자`는 전역 설정이다.
    - `작업 영역`은 현재 열려있는 작업 영역(디렉토리)에만 적용되는 설정으로 설정시 현제 작업영역에 `.vscode` 디렉토리가 생성되어 설정 파일이 저장된다.
    - 위 사진에 보이는 `원격 [...]`은 wsl이나 ssh 등으로 원격 접속시 나타나는 설정으로 해당 원격 환경에서의 전역 설정이다.
    - 지금 지정하고자 하는 것은 pylint는 특정 venv에만 적용할 것이므로 전역으로 설정할 필요가 없다.

3. `Pylint : path` 옵션을 검색해서 찾은 후 `항목 추가`를 누르고 다음 경로를 입력한다.
    - `'가상환경_디렉토리'/lib/python3.10/site-packages/pylint`

4. 이후 vscode를 재실행 해 pylint가 제대로 적용되었는지 확인한다. 

