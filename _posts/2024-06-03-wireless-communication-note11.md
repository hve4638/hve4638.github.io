---
title: "공부 | 무선 통신 - 11"
author: Hve
date: 2024-06-03 05:30:36 +0900
categories: ["공부", "무선 통신"]
math: false
mermaid: false
tags: []
---

## 802.15 : Wireless Personal Area Network (WPAN)

- Short-range communication
- 저비용, 저에너지
- WPAN은 여러 표준이 제공됨

## Bluetooth

- short-range wireless capbility
- 주파수 도약 통신
- AP가 없음, Adhoc 방식 (master-slave 통신)
- 인증

## 피코넷 (Piconet)

피코넷 (Piconet)
- 블루투스 네트워킹 기본 단위
- master(1) slave(7)
- 마스터가 channel, phase를 결정

![alt](/assets/img/wireless/40.png)

스캐터넷 (Scatternet)
- 한 피코넷에 속한 디바이스가 다른 피코넷의 구성원(마스터/디바이스) 일 수 있음
- 많은 장치가 동일 영역을 공유할 수 있게 함
- 대역폭 효율적 사용

## Frequency Hopping

주파수 도약 (Frequency Hopping)
- 총 대역폭은 79의 물리적 채널
- 각 채널의 대역폭은 1MHz
- 초당 1600번 도약
- 채널 지속 시간(=time slot) : 625µs
- 도약 순서는 피코넷의 모든 장치와 공유됨
- 피코넷 접근
    - 블루투스 장치는 TDD(time division duplex) 이용해 송수신 교대
    - 접근 기술은 TDMA(시분할 다중 접속) 사용

## 송신기 클래스

- Class 1
    - 최대 100mW 출력, 100m 통신 (가잔 큰 거리)
- Class 2 (일반적으로 사용)
    - 최대 2.4mW 출력, 10m 통신
- Class 3
    - 기본 1mW 출력, 1m 통신


## 데이터 전송 방식

![alt](/assets/img/wireless/41.png)

![alt](/assets/img/wireless/42.png)

- 동기식 데이터 전송 (SCO, Synchronous connection oriented)
    - 두 기기간 일정한 시간 간격으로 데이터 송수신
        - 실시간 데이터 (헤드셋 연결 등)
        - 64kps 속도
    - time slot 번갈아가며 할당
        - 홀수번은 Master 할당
        - 짝수번은 Slave 할당

- 비동기식 데이터 전송 (ACL, Asynchronous connectionless)
    - timeslot이 예약되지 않음, 필요한 만큼 timeslot을 점유
    - 기기간 경쟁을 막기위해 `CSMA/CA` 사용
    - 데이터 전송속도가 빠르므로, 일반데이터 전송에 적합

p29

## 블루투스 패킷 필드

- Access code (접속 코드)
- Header
- Payload

## 블루투스 3.0 4.0

*Bluetooth 3.0*
- 최대 24Mbps

*Bluetooth Smart (bluetooth 4.0)*
- Bluetooth Low Energy로도 알려짐
- 저전력 버전
- IoT를 위한 기술

## Bluetooth 보안

- 블루투스 디바이스는 PIN과 블루투스 주소 사용
- 데이터 암호화
- 블루투스 자체적으로 일정수준의 보안 제공하는 전송 방식
- FHSS 사용
- 저전력 전송으로 radio 신호가 멀리 전팢되는것을 방지
- 패킷 페이로드 정보는 암호화됨

## Bluetooth 해킹

- Bluejacking
    - 요청하지 않은 메시지를 전송
- Bluesnarfing
    - 패킷을 수집해서 복원하는 것
- Bluebugging
    - 블루투스 장비를 장악하고, 백도어를 심는 등의 행위
- BlueBorne
    - 원격에서 장비를 컨트롤

## IEEE 802.15.4 : ZigBee

- IEEE 802.15.4 표준
- 저속 데이터전송률, 긴 배터리 수명, 안전 네트워킹
- 데이터 전송률 : 20-250kbps
- 절전에서 빠르게 깨어남
    - 30ms, 블루투스의 경우 최대 3초까지 걸림

보통 센서에 뿌려놓을때 사용

몇년간 장기간 사용

## ZigBee Network

![alt](/assets/img/wireless/43.png)

- Coordinator : 네트워크 관리자
- Router
- End Device