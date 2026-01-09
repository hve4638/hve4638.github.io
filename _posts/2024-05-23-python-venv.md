---
title: "Python | 가상 환경 (venv)"
author: Hve
date: 2024-05-23 14:08:04 +0900
categories: ["개발", "레퍼런스"]
math: false
mermaid: false
tags: ["python"]
---

## venv

`venv`는 파이썬 프로젝트 마다 서로 분리된 가상 환경을 만들어주는 파이썬 내장 모듈이다.

venv의 용도는 다음과 같다
- 프로젝트 별 다른 버전의 python 사용
- 타 프로젝트에서 사용하는 라이브러리 충돌 해결
- 종속성 문제 해결

## 가상 환경 생성

터미널에서 다음을 입력한다.

```bash
python -m venv env-project
```

env-project는 원하는 이름으로 변경하면 된다.

명령 실행시 `env-project` 디렉토리가 생성된다.

## 가상 환경 열기

**Linux 환경**

```bash
. ./env-project/bin/activate
```

쉘에서 다음 명령을 실행한다.

**Windows 환경**

```bash
./env-project/Script/activate.ps1
```

파워쉘에서 다음 명령을 실행한다.

`(env-project) user@ubuntu:~/workspace$ `

가상 환경을 성공적으로 열었다면 기존 프롬프트 앞에 `(가상환경 이름)`이 추가된다.

```bash
. ./env-project/bin/activate # 가상 환경 입장

pip install requests # 가상 환경 내에서 라이브러리 설치

deactivate # 가상 환경 종료

# 가상 환경 외부에서는 라이브러리 사용 불가
```

가상 환경 내에서 설치한 라이브러리는 외부 환경에서 사용할 수 없다.

반대로 전역으로 설치한 라이브러리도 가상 환경 내에서 사용할 수 없다.

## 가상 환경 종료

```bash
deactivate
```

다음 명령을 통해 가상 환경을 종료한다.
