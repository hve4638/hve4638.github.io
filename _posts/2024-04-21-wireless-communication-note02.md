---
title: "공부 | 무선 통신 - 2"
author: Hve
date: 2024-04-21 01:46:23 +0900
categories: ["공부", "무선 통신"]
math: false
mermaid: false
tags: []
---

## 다중화 (Multiplexing)

일반적으로 (전송매체 용량 > 단일 신호 전송 용량)

즉, 단일 신호만 사용하는 것은 낭비

Multiplexing
- 하나의 매체로 여러 신호를 전송하는 것

### 사용 이유

- 데이터 속도 증가에 따른 전송 설비의 kbps당 가격 감소
    - 전송 속도 증가, kbps당 가격 감소
- 데이터 속도 증가에 따른 송수신 장비 비용 감소
    - 전송 속도 증가, 경제성 증가
- 대부분의 개별 데이터 통신 장치는 비교적 낮은 데이터 속도 지원 필요

## Multiplexing 기술

![alt](/assets/img/wireless/09.png)

- 주파수 분할 다중화 (FDM)
- 시분할 다중화 (TDM)

### Frequency-division-multiplexing (FDM)

- 전송 매체의 유효 대역폭이 주어진 신호의 필요 대역폭보다 크다는 것을 이용

### Time-division-multiplexing (TDM)

- 전송 매체의 달성 가능한 비트 전송률이 디지털 신호의 필요한 전송률보다 크다는 것을 이용

### FDM vs TDM

FDM : 각 주파수의 다른 부분 사용
- 각 사용자는 비교적 낮은 전송 속도를 가짐
- 하드웨어가 좀 더 비쌈
TDM : 각 사용자는 서로 다른 시간에 전송됨
- 일부 시간동안 최고 속도로 전송할 수 있음
- 슬롯 사이 전환 시간이 존재

두 solution을 결합 할 수도 있다

## 다중화? 다중접속?

다중화 (Multiplexing)
- 통신 자원을 나누는 방법
다중접속 (Multiple Access)
- 나눈 자원을 각 사용자가 사용하는 방법
- 방법
    - FDMA : 주파수 분할
    - TDMA : 시분할
    - CDMA : 코드 분할

## LAN, WAN

### WAN

- 넓은 지리적 영역 커버
- 통신사업자가 제공하는 회선
- 상호 연결된 스위칭 노드로 구성

### LAN

### LAN과 WAN의 차이점

- LAN 범위가 더 작음
- LAN은 일반적으로 연결된 디바이스를 소유한 조직이 소유함
- WAN의 경우 대부분의 네트워크 자산은 동일한 조직이 소유하지 않음
- LAN의 데이터 속도가 훨씬 높음

## Switching

스위칭 노드
- 데이터를 이동하는 중간 스위칭 장비

단말 (Station)
- 통신을 원하는 end point
- 각 단말은 스위칭 노드에 연결됨

통신망 (Communications Network)
- 스위칭 노드의 집합

## 스위칭 기술

### 서킷 스위칭 (curcuit switching)

사람 또는 기계가 직접 스위칭

물리적인 회선을 설정

특징
- 비효율적 
    - 연결 기간동안 한 통신만 점유
    - 100%가 아닌 사용률
    - 설정을 통한 신호 전송 전 지연
- 고정 데이터 속도로 정보 전송

#### 서킷 스위칭 예시

![alt](/assets/img/wireless/10.png)

- Subcriber : 네트워크 연결되는 장치 (보통 전화기)
- Subcriber line : 가입자와 네트워크 사이 link(회선)
- Exchanges (교환기) : 스위칭 센터
- Trunk : Exchanges 사이 지점

### 패킷 스위칭

메시지는 일련의 패킷

각 노드는 각 패킷의 다음 전속 구간을 결정

작동 방식
- 패킷이라는 블록 단위로 전송
- 이동 중인 각 노드에서 패킷을 수신하고 다음 노드 전달

장점
- 회선 효율성 향상
- 데이터 속도 변환 수행 가능
- 데이터 속도가 다른 두 개의 스테이션이 정보 교환 가능
- 트래픽이 많을때 통화를 차단하는 회로 스위칭 방식과 달리 패킷을 허용함
    - 단, 전송 지연 증가

단점
- 각 스위칭 노드에서 지연 발생
- 전체 패킷 지연은 크게 달라 질수 이싿
- 각 패킷에 오버헤드 정보 추가됨
    - 목적지 및 시퀀싱 정보 포함
    - 통신 용량 감소
- 각 노드에서 더 많은 처리 필요

### 회로 전환 3단계

1. 회선 설정
    - 스위칭 노드를 통해 종단 간 회로를 end-to-end 회로를 지정
2. 정보 전송
    - 실제 데이터 전송
        - 데이터는 아날로그, 디지털 음성 또는 바이너리 데이터 등
3. 회로 단절
    - 회로 종료됨
    - 각 노드는 전용 리소스를 할당 해제

## 패킷 스위칭 네트워크

### 1. 데이터그램

*특징*
- 이전 패킷과 무관하게 각 패킷을 독립적으로 처리
- 각 노드는 패킷의 경로에서 다음 노드 선택
- 패킷이 반드시 동일한 경로를 따르지 않아 순서가 바뀔수 있음
- 출구 노드는 패킷을 원래 순서로 복원
- 출구 노드 또는 목적지의 책임과 복구

*장점*
- 통화 설정 단계 생략
- 유연성 향상 (혼잡성 발생시)
- 데이터그램 전송이 더 안정적
- 짤읍 메시지의 경우, 가상 서킷 패킷 스위칭, 서킷 스위칭보다 빠름

### 2. 가성 서킷 (모든 패킷 경로 일정유지)

*특징*
- 패킷 전송전에 미리 계획된 경로 설정
- 출발지-목적지 사이 모든 패킷은 이 경로를 따름
- 각 패킷에 대한 노드의 라우팅 결정이 필요하지 않음
- 서킷 스위칭 네트워크를 에뮬레이트하지만 전용 경로(dedicated route)는 아님
- 패킷은 여전히 각 노드에서 버퍼링되고 회선을 통해 출력하기 위해 대기함

*장점*
- 패킷이 원래 순서대로 도착
- 각 노드에서 라우팅 결정 없이 패킷이 더 빠르게 전송됨
- 긴 메세지의 경우 사용하기 좋음

## 서비스 품질 (QoS, Quality of Service)

- 대역폭, 지연시간 패킷 손실 등 네트워크의 특정 서비스나 애플리케이션에 대해 일정 수준의 서비스를 보장하는 기술

*음성, 오디오, 비디오 : 실시간, 패킷 손실*
- 요구사항
    - 안정적인 전송
    - 지연 제한, 지연 변동, throughput 최소화
    - 일부 패킷 손실 허용
- 유형
    - 스트리밍의 경우 : 일보 딜레이 및 패킷 손실 허용

*데이터 트래픽* : 오류X, 비실시간
- 요구사항
    - 오류 없는 전송
    - 처리량이 더 높을수록 좋음
    - 탄력적
        - 전송중 처리량의 변동은 허용됨
- 유형
    - 대화형 : 웹페이지 상호 작용 등
    - 비대화형 : 파일, 이메일 다운로드

### Provisioning(제공) of QoS 

Overprovisioning (과제공)
- 높은 데이터 속도와 낮은 혼잡
- 모든 트래픽은 원할함
- 대역폭이 풍부한 무선 시스템에서만 실용적

Prioritization without guarantees (우선순위를 주나, 꼭 품질 보증을 하지 않음)
- 더 높은 우선순위로 표시된 패킷
- 승인 제어 프로세스는 사용자와 흐름을 식별하는데 사용

Prioritization with guarantees (품질을 보장하는 우선순위 제공)
- 패킷이 추적됨
- 중요한 작업에 대한 특정수준의 성능보장 제공
