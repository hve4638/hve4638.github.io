---
title:  "공부 | 무선 통신 - 3"
author: Hve
date: 2024-04-21 17:10:09 +0900
categories: ["공부", "무선 통신"]
math: false
mermaid: false
tags: []
---

## 프로토콜

통신을 위한 약속

통신하려는 시스템 간 무엇을 언제 어떻게 통신할 것인지 미리 정해놓는 약속

- Syntax (무엇을)
- Semantics (어떻게)
- Timing (언제)

## 통신에 관여하는 요소(agent)

- 어플리케이션
    - ex. 전자 메일
- 컴퓨터
- 네트워크

## TCP/IP Layers

- Layer 5 : Application layer 응용 계층
- Layer 4 : Transport layer 전송 계층 TCP
    - 세그먼트 단위
    - 포트 주소로 구붐
- Layer 3 : Internet layer 인터넷 계층 (IP)
    - end-to-end
    - 패킷 단위
- Layer 2 : Network access layer/datalink layer 네트워크 접속 계층 (MAC)
    - node-to-node
    - 프레임 단위
- Layer 1 : Physical layer 물리 계층

### 물리 계층 (Layer 1)

- 전송장치, 전송매체, 네트워크 간 물리적 인터페이스를 다룸
- 물리적 계층은 다음을 지정함
    - 전송 매체의 특성
    - 신호의 성격
    - 데이터 속도
    - 기타 관련사항

### 네트워크 전송 계층 / 데이터링크 계층 (Layer 2)

- `인접한 장치와 연결에 관련됨`
- end system과 그것이 견결된 네트워크 사이의 데이터 교환과 관련됨
- 네트워크 유형에 따라 사용하는 소프트웨어가 다름
    - 회선 전환
    - 서킷 스위칭
    - 패킷 스위칭

### 인터넷 계층 / 네트워크 계층 (Layer 3)

- `종단간 연결에 관련됨`
- `에러 및 순서에 대해 신경쓰지 않음`
    - 레이어4의 역할
- 인터넷 프로토콜(IP) 사용
    - 데이터가 상호 연결된 여러 네트워크를 통과할 수 있도록 라우팅 기능을 제공
    - end system 및 router에 구현됨

### 전송 계층 (Layer 3)

- `전송 에러 및 순서를 정정`
- TCP 사용
- 데이터 교환시 신뢰성 제공
    - 완전성
    - 정렬

### 응용 계층

- 로직은 사용자 어플리케이션 지원
- 각기 다른 유혀으이 어플리케이션에 고유한 별도의 모듈 사용

## 캡슐화 과정 과정

![alt](/assets/img/wireless/11.png)

## 무선 통신 과정 예시

![alt](/assets/img/wireless/12.png)

## OSI 계층

![alt](/assets/img/wireless/13.png)

## Internetworking 용어

- 통신망 : 네트워크 접속된 기기간 데이터 전송 서비스를 제공하는 시설
- 인터넷 : 브리지/라우터로 상호 연결된 통신 네트워크의 집합
- 인트라넷 : 조직에서 내부 목적으로 사용하는 인터넷
- End System(ED) : 최종 사용자 어플리케이션이나 서비스를 지원하는 데 사용되는 장치
- intermediate System(IS) : 두 개의 네트워크를 연결하는데 사용되는 장치
    - 스위치 : 두 LAN을 연결하는데 사용하는 IS
    - 라우터 : 두 네트워크를 연결하는데 사용되는 IS

## 라우터의 기능

- 네트워크간 링크 제공
- 서로 다른 네트워크에 연결된 ES의 프로세스간 데이터 라우팅 및 전달을 제공