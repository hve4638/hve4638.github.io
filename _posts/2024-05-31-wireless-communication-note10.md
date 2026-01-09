---
title: "공부 | 무선 통신 - 10"
author: Hve
date: 2024-05-31 03:26:05 +0900
categories: ["학습", "강의노트"]
math: false
mermaid: false
tags: ["무선통신"]
---

## 무선랜

## Link Layer

특징
- node-to-node
- nodes : host 또는 router
- 종류
    - Wired
    - Wireless

신뢰적 전달을 위한 요건
- 에러 정정
    - 유선 환경의 경우 에러율이 적음
    - 무선 환경의 경우 에러율이 높음

## link의 타입

*point to point*
- 점대점 연결
- 유선

*broadcast*
- 무선은 기본적으로 broadcast

## Multiple access protocols (다중 접속)

single shared broadcast channel에서의 문제
- 둘 이상의 노드가 동시 전송시 : 간섭(interference) 발생
- 노드가 둘 이상의 신호를 수신받는 경우 : 충돌(collision) 발생

필요한 것
1. 노드가 접속시 R 속도로 전송
2. M개의 노드 접속시 각각은 R/M 속도로 전송
3. 완전한 탈중앙화
    - 전송을 조정하는 마스터 노드가 없음
        - 마스터 노드가 조정시, 마스터에 오류시 그 네트워크 전체가 망가짐
    - 클럭이나 슬롯의 동기화가 없음
4. 단순함

분류
- channel partitioning (채널 분할)
- random access (랜덤 접속)
- taking turns (순번)

## Channel Partitioning MAC protocols

### TDMA (Time Division Multiple Access)

![alt](/assets/img/wireless/29.png)

- '라운드' 단위 채널 엑세스
- 각 스테이션은 각 라운드에서 고정 길이(=패킷 전송시간)을 할당받음
- 사용하지 않는 슬롯은 idle 상태 (낭비됨)

### FDMA (Frequency Division Multiple Access)

![alt](/assets/img/wireless/30.png)

- 주파수 대역으로 패널 스펙트럼 분할
- 각 스테이션에 고정 주파수 대역 할당
- 사용하지 않는 주파수 대역은 idle 상태 (낭비됨)

## Random access protocols (랜덤 접속)

특징
- 충돌을 감지
- 충돌을 복구 (ex. 지연 재전송 등)

랜덤 접속 프로고콜의 예시
- CSMA/CD (유선)
- CSMA/CA (무선)

## Wireless link의 특징

wired link(유선)와의 주요한 차이
- 신호 강도 감소 
- 다른 소스로부터 간섭 : 여러 장치에 의한 간섭 발생
- 다중 경로 전파

SNR (signal-to-noise ratio)
- 잡음 대비 신호
- SNR이 클수록 좋다

SNR과 BER의 트레이드오프
- 전력 증가 -> SNR 증가 -> BER 감소

*Hidden Terminal 문제*

![alt](/assets/img/wireless/31.png)

- A, C는 서로의 존재를 몰라서 신호 충돌의 여부를 알 수 없음

## CDMA (Code Division Multiple Access)

각 사용자에게 고유한 '코드'를 할당
- 각 사용자는 동일한 주파수를 이용하지만, 데이터를 인코딩하기 위한 chipping 시퀀스(=코드)를 가짐. 직교의 성질을 이용한다
- 여러 사용자가 공존하며 최소한의 간섭으로 동시에 전송 가능 (코드가 직교하는 경우)

## 802.11 LAN 아키텍쳐

관련 용어
- 802.11 = 와이파이
- base station = access point(AP)
- Basic Service Set(BSS, aka `cell`) 의 구성요소
    - Wireless host
    - AP
    - adhoc mod : host only (AP가 없음)

## 802.11 : Channel, Association

*Channel*

- 스펙트럼은 다양한 주파수 채널로 나뉜다
- AP 관리자는 사용할 채널를 선택한다
    - 이때 동일한 채널 선택시 간섭 발생


*Association (연결, 결합)*
- 도착하는 호스트 : AP와 결합해야 한다
- 채널을 스캔해, AP 이름, MAC 주소를 포함한 beacon frame 수신
- 연결 AP를 선택후 인증 수행
- 이후 DHCP를 실행해 AP의 서브넷에서 IP 주소 할당

## 802.11 : passive/active scanning

![alt](/assets/img/wireless/32.png)

Passive Scanning
1. AP가 주기적으로 beacon frame을 보냄
2. 단말이 AP에게 연결 연결 요청

Active Scanning
1. 단말이 Probe Request Frame을 브로드케스팅
2. AP이 Probe Response Frame을 보냄
3. 단말이 AP에게 연결 요청

## 802.11 : Multiple Access

충돌 감지를 하지 않음
- 충돌 감지의 어려움
    - 전송 신호는 강하고 수신신호는 약함 (fading에 의해)
- 어떤 경우에도 모든 충돌 감지 불가능 : Hidden terminal, Fading 문제
- 목표 : CSMA/CA (Collision Avoid, 충돌 회피)

## 802.11 MAC Protocal : CSMA/CA

![alt](/assets/img/wireless/33.png)

802.11 Sender
1. `DIFS` 시간동안 채널이 유휴 상태라면 전체 프레임 전송
2. 채널이 사용중인 것으로 감지되면, 무작위 backoff 시간을 가짐
    - 채널이 유후 상태라면 카운트다운 시작
    - 타이머 만료시 전송
    - ACK가 없다면, 반복

802.11 Receiver
1. frame이 올바르게 수신되었다면 `SIFS` 시간 후 송신자에게 ACK를 반환

idea: 송신자가 작은 예약 패킷을 사용해, data frame의 채널 사용을 '예약'한다
- 송신자는 RTS(Request-To-Send) 패킷을 BS에 전송
    - 여전히 RTS는 충돌 가능성이 있음 (그러나 짧음)
- BS는 RTS에 대한 응답으로 CTS(Clear-To-Send)를 브로드케스트
- CTS는 모든 노드에게 수신됨
    - 송신자가 data frame 전송
    - 다른 station은 전송 유예
- BS가 ACK를 브로드캐스트
    - 다시 유휴 상태임을 알림

## 무선 LAN 구성

무선랜 (Wireless LAN, WLAN)
- 유선랜의 보조
- 무선 장치는 WLAN을 이용
    - 연결의 주 소스로서
    - 또는 셀룰러 커버리지를 대체하기 우해

![alt](/assets/img/wireless/34.png)

Simple Wireless LAN
- 백본 유선 LAN이 존재
- User Module (워크스테이션, 서버, 디바이스 등)
- Control Module (CM, AP와 동일) 인터페이스
    - 라우터 기능 제공
    - 접근을 조절하는 제어 로직
    - 다른 유선 네트워크에 무선 연결 제공

![alt](/assets/img/wireless/35.png)

Multiple-Cell Wireless LAN
- 여러 CM이 유선랜으로 연결됨
- 셀 로딩 균형 조정 및 사용자 모듈의 최적 연결 제공과 관련된 여러 문제 야기

![alt](/assets/img/wireless/36.png)

Adhoc Networking
- 중앙서버 없음
- 임시 네트워크
- WLAN, 블루투스, ZigBee 등을 통해 제공되는 무선 연결

## 프로토콜 아키텍쳐

![alt](/assets/img/wireless/37.png)

Medium Access Control(MAC) Layer 기능
- 전송시, 주소와 주소와 오류검출 필드를 포함한 프레임으로 데이터 조립
- 수신시, 프레임 분해하고 주소 인식 및 오류 검출
- *LAN 전송 매체에 대한 접근 관리*

Logical Link Control (LLC) Layer 기능
- 상위 계층에 인터페이스 제공, 흐름 제어 및 오류 제어 수행

LLC와 MAC의 분리
- 전통적 2계층 (데이터 링크 제어)에서는 공유 접근 매체에 대한 접근 제어가 없음
- 동일한 LLC에 대한 여러 MAC 옵션 제공

## IEEE 802.11 아키텍처

![alt](/assets/img/wireless/38.png)

- Acess Point (AP)
    - 여러 무선 단말이 DS(인터넷)에 접속할 수 있게 하는 장치
- Distribution system (DS)
    - 여러 AP를 연결하는 백본 네트워크/시스템
- Basic service set (BSS)
    - 하나의 AP에 연결된 무선단말그룹
- Extended service set (ESS)
    - 여러 BSS가 DS를 통해 연결돼 넓은 지역을 담당하는 무선단말그룹
    - 여러 BSS가 DS에 의해 연결됨

DS에서의 메시지 분산
- Distribution service (분산 서비스)
    - 한 BSS 스테이션에서 다른 BSS 스테이션으로 MAC 프레임 교환시 사용
- Integration service (통합 서비스)
    - 유선 LAN을 통한 데이터 전송

## Mobility

- No transition (무 전이)
    - BSS내에서 이동
- BSS transition (BSS 전이)
    - 동일 ESS내 BSS 이동
    - `Handoff`
- ESS transition (ESS 전이)
    - 다른 ESS로 이동
    - 로밍

## Assoiation-Related Services

- Assoiation (결합)
    - 스테이션과 AP간 초기 연결 설정
- Re-Assoiation (재결합)
    - 한 AP에서 다른 AP로 연결을 전송
    - 스테이션이 BSS->다른 BSS 이동할 수 있도록 함
- Disassociation (분리)
    - 스테이션 또는 AP에서 연결종료 알림


## IEEE 802.11 Medium Access Control (MAC)

Mac layer의 기능
- Reliable Data Delivery (신뢰성있는 데이터 전송)
- Access control (접근제어)
- Security (보안)

### Reliable Data Delivery

- 프레임 교환 프로토콜
    - Source 스테이션이 데이터 전송
    - Destination은 ACK으로 응답
    - Source가 ACK를 받지 못했다면 재전송
- 네번의 프레임 교환
    - source : 전송 요청(RTS) 발신
    - destination : 전송 확인(CTS) 응답
    - source : 데이터 전송
    - destination : ACT로 응답

### Access control

- Point coordination function (PCF)
    - 사용 X
- Distributed coordination funciton (DCF)
    - 탈중앙화 방식
    - 매체 청취 (공기 중에서 사용중인지 감지)
        - if idle, 전송
        - if not, 랜덤시간 대기
    - 다시 사용중이면, 대기 시간을 늘리고 무작위로 기다린후 시도
    - Binary exponential backoff
        - backoff : 일정 시간동안 데이터전송 보류
        - 평균 랜덤 대기시간이 기하급수적으로 커짐
            - 매번 2의 배수만큼 커지므로, '이진'이라는 용어 사용
            - 과부하 대응

- IFS(Inter-Frame Space) : 프레임 간의 간격
    - SIFS
        - ACK
        - CTS
        - Poll response
    - PIFS
    - DIFS

## Gigabit wi-fi

- 802.11ac
    - 기가비트 wifi
    - 여러 대역대를 사용

## WLAN Security

공격자의 공격 지점
- Client (휴대폰, 컴퓨터)
- AP (기지국)
- Wireless medium (공기)

## 802.11i WPA

기존의 WEP (Wired Equivalent Privacy)는 보안상 매우 취약함
- 취약한 표준으로 몇시간 컴퓨팅에 키 해독 가능
- 암호화 키 분배 프로토콜 X
- 인터셉션에 취약
- WEP는 모든 스테이션에 단일 공유 키 사용
- CRC32 체크 취약해 데이터 무결성X

이후 802.11i에서 WPA (Wi-Fi Protected Access) 제공

![alt](/assets/img/wireless/39.png)

1. Discovery
    - Client-AP간 존재 확인, 보안 능력(암호화 목록) 확인
2. Authentication
    - 소규모 네트워크의 경우 AP에서 인증 수행
    - 기업 등에선 AS(인증서버)에서 인증 수행
3. Key management : 키 교환
4. Protected data transfer
5. Connection termination

위 절차를 통한 암호화는 무선 구간에서만 사용된다.

## RSN

WIP

## WLAN Security Exploits

- Insertion attack
- 스니핑
- AP 비밀번호 무차별 대입
- 암호화 공격 (WEP의 알려진 취약점 이용)
- 잘못된 구성
- 전파 방해 (Jamming)

## 802.11i : WPA2

- WPA를 기반으로 하여 다양한 취약점을 수정
- AES를 암호화에 사용 (TKIP 버전은 더 이상 사용되지 않음)
- 사전 공유 키(PSK)와 엔터프라이즈 옵션

## MAC Filitering

- 각 클라이언트는 802.11 MAC 주소로 식별 가능
- AP는 화이트리스트 세팅 가능
- 매우 간단한 솔루션
    - 화이트리스트를 유지하는데 약간의 오버헤드
- MAC 위조의 가능성 존재

## WiFi 보안

- 무선 네트워크의 암호화 여부 확인
    - WEP가 아닌 WPA2 암호화 사용
- 네트워크 인증을 위한 긴 비밀번호
    - 크래킹 공격 회피
- SSID 브로드캐스팅, 비공개 SSID 브로드캐스팅 의미 고려
- 허용가능한 MAC 주소 지정 (화이트리스트)
    - MAC의 변조가능성을 염두할 것



