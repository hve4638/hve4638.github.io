---
title:  "공부 | 무선 통신 - 7"
author: Hve
date: 2024-04-23 04:08:40 +0900
categories: ["학습", "강의노트"]
math: true
mermaid: false
tags: ["무선통신"]
---

## ARQ (Automatic Repeat Reqeust)

- 데이터 링크 제어에 사용되는 프로토콜
- 오류 탐지 코드 사용에 의존
- 흐름 제어, 오류 제어

### Stop-And-Wait ARQ

![alt](/assets/img/wireless/24.png)

- ACK를 받아야 다음꺼 보내줌

### Go-back-N ARQ

![alt](/assets/img/wireless/25.png)

- 처리못한 부분부터 다시 돌아가 받음

### Selective-Repeat-ARQ

![alt](/assets/img/wireless/26.png)

- 계속해서 받지만, 에러난 부분만 선택적으로 받음

## Hybrid ARQ

- FEC, ARQ 모두 실제 상황에서 적합하지 않음
    - FEC : 불필요한 중복성
    - ARQ : 재전송으로부터 과도한 지연 야기
- FEC + ARQ 조합

![alt](/assets/img/wireless/27.png)

에러 검출시 NACK를 보내고 또 에러가 생기면 이전 에러와 합쳐서 오류정정

## Flow Control

- 수신자의 데이터를 감당할 수 있도록 제어하는 것
- 송수신자간 윈도우 사이즈를 지정하고 그 안에서 탄력적으로 조절하는 메커니즘이다

## OFDM (Orthogonal Frequency Division Multiplexing)

- 직교하는 수많은 협대역 부반송파에 디지털 데이터를 나누어 싣고 이를 다중화해 고속으로 전송하는 기술
- 서로 다른 주파수 carrier를 여러개 사용해 병렬로 전송
    - 더 효율적으로 주파수 사용
- 더 많은 데이터를 보낼 수 있음
- 4G 5G 6G의 기본 통신 방식
- 에러 극복이 쉬움
    - 각각의 subcarrier 속도가 느림 (파장이 김) -> 노이즈에 강함
- 백터의 내적이 제로이므로 사인 함수간 연관성이 없음
- ISI 에 강함
    - ISI : 데이터의 순서가 뒤바뀌어 오는 것
    - 속도가 낮아서 극복됨


## OFDMA (Orthogonal Frequency Division Multiple Access)

나중에


## 대역 확산 Spread Spectrum

- 주파수 대역을 확산시키면 보안성 증가, 노이즈에 강해짐
- 빠른놈하고 곱해주면 대역이 커짐

## FHSS

- 정해진 시간에 따라 주파수를 이동하며 통신하는방법
- 겉보기엔 무작위로 보이는 무선 주파수를 통해 보내짐
- 송신기는 한번에 한 채널만 방속됨
- 연속적인 간격마다 새 반송파 주파수가 선택됨

## DHSS

- 확산 부호 비트 스트림과 xor 연산을 통해 결합해 보내는 방법

## CDMA

코드를 이용해 다중접속을 지원하는 방식이다