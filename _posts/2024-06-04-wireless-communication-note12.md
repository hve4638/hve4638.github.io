---
title: "공부 | 무선 통신 - 12"
author: Hve
date: 2024-06-04 00:21:53 +0900
categories: ["공부", "무선 통신"]
math: false
mermaid: false
tags: []
---

## 셀룰러 네트워크

- 모바일 사용자의 가용 용량 증가를 위한 수단
- 각 영역을 셀로 나눔
    - 육각형 패턴
    - 주파수 대역 할당


## 주파수 재사용

![alt](/assets/img/wireless/45.png)

- 인접한 셀에는 다른 주파수 할당
- 인접하지 않은 근처의 셀의 주파수를 재사용

## Capacity 증가에 대처하는 방법

- 새로운 채널 추가
    - 미리 할당된 채널중 일부만 사용할 경우, 나머지 채널도 추가
- 혼잡한 셀이 주변 셀로부터 주파수 임대
    - 모든 할당된 채널을 사용한 경우, 근처 셀에서 주파수 임대
- Cell splitting
    - 일반적 방법
    - 셀을 더 작게 분리하기 (기지국 증가)
- Cell sectoring
    - 한 셀에서 안테나 방향성을 조정해 여러개의 섹터로 분할
- Network densification (네트워크 밀집화)
    - Picocell (피코셀)
        - 기본 셀보다 작게 나눈 것
    - Femtocells (펨토셀)
        - 더 세분화 (건물 내에 기지국 설치)
- Interference coordination (간섭 조정)
    - 셀과 셀 사이 구간에서 처리하는 것 (가장자리)
    - WIP

### Cell Splitting

### Cell Sectoring

![alt](/assets/img/wireless/46.png)

## 셀룰러 시스템 용어

- BS (Base Station, 기지국)
- Mobile telecommunications switching office (MTSO, 이동전화 교환국)

## MTSO(이동전화 교환국)

![alt](/assets/img/wireless/47.png)

- Mobile unit Initialization (이동국 초기화)
    - 가장 강한 제어 채널(BS) 스캔
- Mobile-originated call (이동국 발신 호)
- Paging
    -  MTSO가 호출된 이동국을 찾기 위해 기지국에게 페이징 메시지 전송
- Handoff
    - 이동국이 한 셀에서 다른 셀 이동

## Handoff

Handoff : device가 한 셀에서 다른 셀 이동
- 하드 핸드오프 (break before make)
    - device가 하나의 기지국과 통신
    - 새 기지국과 통신 설정 전 이전 기지국과 통신 끊음
- 소프트 핸드오프 (mkae before break)
    - device가 2개의 기지국과 통신
    - 이전 기지국과 통신을 끊기 전 새로운 기지국과 통신 가능

## Power Control

- 디바이스가 기지국으로부터 떨어졌다고 판단하면(신호 강도 약함) 출력을 높힘
- 기지국에서 파일럿 신호(단순한 사인파)를 보내서 판단

Open-loop power control (개방 루프)
- 이동국만 의존
- BS로부터 피드백 없음
- 이동국이 파일럿 신호를 수신해 송신 전력 설정
- 정확도 떨어지지만, 빠른 반응

Closed-loop power control (폐쇄 루프)
- 성능 측정치를 기반으로 채널의 신호강도 설정
- BS가 전력조정 결정을 내리고 제어채널을 통해 이동국 통신

## Secuity in 1G, 2G, 3G

- 1세대 : 보안없음
    - eavedropping
- 2세대 : 기지국 인증X
    - IMSI Catcher : 기지국으로 위장한 가짜 기지국
- 3세대 : 양방향 인증 도입
    - 스마트폰 자체의 취약점 발생

## Physical Layer Security

- RF fingerprinting : 송신기 고유한 하드웨어 특성을 기반으로 전자지문 추출
- MIMO : 특정 방향으로만 데이터 송수신
- Artificial Noise : 공격 감지시 인위적 잡음 생성