---
title: "공부 | 무선 통신 - 13"
author: Hve
date: 2024-06-15 19:36:14 +0900
categories: ["공부", "무선 통신"]
math: false
mermaid: false
tags: []
---

# LTE

## LTE

- Ultra-mobile broadband access 가 가능
- 모든 패킷이 네트워크
- peak data rates를 충족함
- handover가 자연스럽게 이루어짐
- 음성 전화를 패킷망으로 처리됨 (voIP=voLTE) 더이상 서킷 스위칭 지원하지 않음
- spread spectrum(3G)이 OFDM으로 처리됨

## 3G -> 4G LTE로 오면서 일어난 변화

Long Term Evolution(LTE)

evovled NodeB (eNodeB)
- 3세대 기지국(BS) : NodeB
- 4세대 기지국 : eNodeB (evolved NodeB)
- CDMA 대신 OFDMA 기반
- Radio Network Controller 대신 자체 제어기능 보유
    - 무선 자원 제어, 접속 제어, 이동선 관리 지원
    - 3세대에선 RNC의 기능

## LTE 구조

- 무선 엑세스망 (RAN, E-UTRAN) : 단말기 - 기지국간 무선접속
- 코어 망 (Core Network, EPC) : 중앙에서 단말/기지국 제어 및 데이터 제공

## 4세대 LTE 단말기로부터 인터넷 망까지의 흐름

- UE
- eNodeB
- S-GW : 서빙 게이트웨이
    - 기지국-코어망 연결
- p-GW : 패킷망 게이트워에 
    - 외부 인터넷망 연결
- 인터넷망

## EPC(코어망)의 기능

이동성 관리 (Mobility management)
- X2 인터페이스 : 같은 MME 하에 조정된 RAN 내에서 이동시사용
- S1 인터페이스 : 다른 MME로 이동 시 사용

## Inter-cell interface coordination (ICIC, 셀간 간섭 제어)

- 인접 셀에서 동일한 주파수 사용
- 목표는 보편적인 주파수 재사용 (N=1, 재사용계수=1)
    - UE(디바이스)가 가장자리에 있을때의 간섭을 피해야 함 (간섭 제어)
        - 간섭 무작위화, 제거, 조정 등의 방법
- eNodeB는 다음 지표를 제공
    - 고간섭

## LTE 네트워크

- MIMO, OFDM 사용
    - 다운링크에서 ODFMA 사용
    - 업링크에서 SC-FDMA 사용
        - 더 나은 에너지 비용 및 효율성

## OFDMA, SC-OFDM

- OFDM은 여러 QPSK 심볼을 보냄(N=4 subacrriers) 높은 PAPR(Peak to average ratio)을 가짐
    - 모바일 디바이스에서 부담
    - 다운링크에서 사용
- SC-FDMA 하나의 QPSK 심볼을 보내 신호의 변동이 적음
    - 업링크에서 사용
- 업링크와 다운링크 방식이 다른 이유
    - 모바일 디바이스의 전력 효율성

## LTE Radio Access Network

TDD, FDD 둘 다 사용
- TDD (Time Division Duplexing)
    - uplink, downlink가 동일 주파수 대역에서 시간상 교대되어 전송됨
- FDD (Frequency Division Duplexing)
    - uplink, downlink가 다른 주파수 대역에서 전송됨

Cyclic prefixes (CP)
- 전파 지연에 따른 심볼 간섭에 의해 발생할 수 있는 직교성 파괴를 방지하기 위해 맨 뒤의 신호를 복사하여 앞으로 삽입
    - 직교성을 유지하기 위한 방법
    - 신호가 지연되는 등의 간섭으로 직교성이 깨지는 것을 방지한다

## Resource Block

> LTE는 무선통신에서 데이터 전송을 위한 다양한 물리적 자원을 효율적으로 관리하여 사용합니다. 여기서 Resource Block은 이러한 물리적 자원의 단위입니다.

- Normal CP : 7개의 slot당 OFDM symbol 구성
- Extended CP : 6개의 OFDM symbol
    - Extended CP 사용시 처리량 감소, but multipath에 대한 더 나은 보상
- Radio frame은 10ms
- special subframe 포함
- Resource Block 구성
    - 12개 subcarriers
    - 6~7개 OFDM symbols
    - 따라서, 총 72 or 84개의 resource block

추가설명
- RB는 (정상적 CP의 경우) 7개의 심볼에 12개의 부반송파를 곱한 값인 84개의 RE로 구성됨
- RE는 하나의 OFDM 심볼동안 지속되는 하나의 반송파

## LTE-Advanced

- 반송파 결합 (Carrier Aggregation)
- MIMO enhancements to support higher dimensional MIMO
- Relay nodes 
- Heterogeneous networks involving small cells such as femtocells, picocells, and relays
- Cooperative multipoint transmission and enhanced intercell interference coordination
- Voice over LTE

### Carrier Aggregation (반송파 결합)

- 최대 3개의 Component carriers를 결합
- 최대 100MHz까지 결합
- 접근법
    - Intra-band contiguous : 서로 인접한 carrier
    - Intra-band noncontiguous : 동일한 대역에 속하는 여러 CC가 비연속적으로 사용
    - Inter-band noncontiguous : 다른 대역 사용

### Enchanced MIMO

- 8x8 로 확장해 8개의 병렬 레이어 지원
- MIMO는 최대 4개의 모바일이 동시에 신호 수신 가능
    - eNodeB는 매 subframe간 multi-user와 single-user 사이를 전환할 수 있음
- 다운링크 참조 신호는 채널 측정에 중요한 역할을 수행

### Replaying

![alt](/assets/img/wireless/48.png)

Relay Node (중계 노드)
- 신호세기가 약한 셀 변방 영역에 중계국 배치
- eNodeB의 커버리지 영역 확장
- 작은 셀 반경을 가진 새로운 기지국으로 작동

### Heterogeneous network (이기종 네트워크)

![alt](/assets/img/wireless/48.png)

*Hetnet* : 대형 셀과 소형 셀의 네트워크를 통합하여 이루어진 네트워크
- Small cells
    - 저전력 엑세스 노드
    - 10m~수백 미터 범위 제공ㄴ
    - 저속, 정지 상태의 사용자에게 유용
- Macro cells
    - 몇 킬로미터 수준의 범위 제공
    - 높은 이동성을 가진 사용자에게 적합
- Femtocell
    - 저전력, 단거리 자체 기지국
    - 주거용

Netwrok densification (네트워크 밀집화)
- 소형 셀을 사용하는 과정

### CoMP (Coordinated Multipoint Transmission and Reception)

![alt](/assets/img/wireless/50.png)

CoMP : LTE-Advanced에서 기지국들이 서로 협력하여 셀간 간섭 문제를 해결하는 기법
- Release 8 : ICIC 제공 
    - 셀 경계 단말들에게 서로 다른 주파수 자원을 할당함으로써 셀간 간섭을 줄임
    - 소형 셀에서는 간섭 문제, Release 10에서 향상된 ICIC 제공
- Release 11에서 CoMP 구현됨
    - 분산 안테나, 셀간 스케쥴링
    - Coordincated scheduling/coordincated beamforming (CS/CB)
        - nulling : 빔포밍으로 단말기 방향으로만 쏨
    - Joint processing (JT)
    - Dynamic point selection (DPS)

## 5G

- 4G 대비 대역폴 10배 이상
- 공격적인 MIMO 기술
    - 수십-수백 개의 안테나
    - 세밀한 빔포밍
- 더 많은 주파수 : milimeter band
    - 저대역 : 2GHz 이하
    - 중대역 : 6GHz 이상
    - 고대역 : 26GHz

## RAN

- D-RAN (Distributed RAN)
    - 기지국 간 기능이 서로 연동되지 않음. 즉, 분산되어 작동
- C-RAN (Centralized RAN)
    - 중앙집중식으로 작동. 현재 사용하는 방식
- O-RAN (Open RAN)
    - 하드웨어 종속적이지 않음


## NOMA (Non-Orthogonal MA)

- 전력 제어(할당)을 통한 다중접속 기술
- 먼거리에 위치한 사용자에게 더 높은 전력을 할당
- 강한 신호부터 디코딩하여 약한 신호를 받는 사용자에게 방해되지않음

# 위성

## GEO MEO LEO

- GEO 정지궤도 (자전속도와 동일)
    - 자전속도와 동일
    - 높은 커버리지
    - 약한 신호
    - 신호 전송 지연
- MEO 중궤도
    - 2000km 이상 높이
    - GPS가 위치함
- LEO 저궤도
    - 2000km 이하 높이
    - 빠른 속도
    - 커버리지가 낮지만, 지연시간이 낮고, 대역폭 효율성이 높음
    - 기지국으로 기능할 수 있음

## GPS

- 각 3개의 위성과 거리를 통해 위치를 특정한다
    - 하나의 위성으로 구 범위의 위치를 특정하고
    - 두개의 위성으로 원 범위의 위치를 특정하고
    - 3개의 위성으로 두개의 점 위치를 특정하고, 지구를 기준으로 위치를 특정한다.
    - 4번개의 위성으로 시간 신호를 보정하여 정확한 위치를 특정한다