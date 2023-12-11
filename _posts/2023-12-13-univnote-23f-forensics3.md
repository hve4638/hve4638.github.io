---
title: "컴퓨터 기술 정리 - 3"
author: Hve
date: 2023-12-13 14:15:46 +0900
categories: ["공부", "컴퓨터 시스템"]
math: false
mermaid: false
tags: []
---

## 시스템 구조

## 연산 장치

![IMAGE](/assets/img/noteforensic/19.png)

## 제어 장치

![IMAGE](/assets/img/noteforensic/20.png)

## 레지스터

![IMAGE](/assets/img/noteforensic/21.png)

- 메모지 역할

연산 관련 레지스터
- EAX (누산기)
- EDX (데이터 레지스터)
- EFLAGS (상태 레지스터)

### 세그먼트 레지스터

- CS (코드 세그먼트)
- DS (데이터 세그먼트)
- SS (스택 세그먼트)

### 상태 플래그

- CF : 캐리 발생시
- ZF : 0이라면
- OF : 오버플로 발생시, MSB가 변경시
- PF : 짝수인 경우 세트
- SF : 음수인 경우

## 메모리 구조

![IMAGE](/assets/img/noteforensic/22.png)

- 스택
- 힙
- BSS 세그먼트
    - 초기화되지않은 데이터 저장
- 데이터 세그먼트
    - 초기화된 데이터 저장

### 실제 모드

![IMAGE](/assets/img/noteforensic/23.png)

- 세그먼트 레지스터를 도입하고 중간 12비트를 중첩시켜 20비트 물리 주소 생성

### 보호 모드

- 세그멘테이션과 페이징을 이용해 메모리 관리

## 어셈블리 구조

### 문법

- Intel 문법
    - dst, src
- AT&T 문법
    - src, dst

### 데이터 저장

- 리틀 엔디안 방식으로 저장
- 