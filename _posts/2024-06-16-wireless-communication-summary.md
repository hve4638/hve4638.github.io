---
title: "공부 | 무선 통신 - 14 정리"
author: Hve
date: 2024-06-16 01:52:18 +0900
categories: ["공부", "무선 통신"]
math: false
mermaid: false
tags: []
---

## 무선랜

- Evil twin AP : 합법적인 AP와 동일한 SSID를 사용하는 가짜 AP
- Rogue AP : 승인되지 않은 AP를 설치
- MDM (Mobile Device Management)
    - 특정 지역에서 디바이스 기능을 제한
    - 포괄적인 관리 필요시
- MAM (Mobile Application Management)
    - MDM의 기능 세분화. 어플리케이션 관리
    - 특정 어플리케이션의 데이터 보호 중점
- Layer2 (브로드캐스트 특성의 공유매체에서)
    - MAC, LLC 계층 세분화
    - LLC 계층 : 공유 매체에 대한 접속권한 조정
- WIFI에서 BS의 역할 수행하는것 : 무선 AP
- Adhoc : 기반구조 네트워크와 달리 AP가 없는 임시 네트워크
- 무선랜 표준안 : IEEE 802.11
- 블루투스 표준안 : IEEE 802.15
- 매체접근제어(Media Acess Control) 방법
    - 유선랜 : CSMA/CD
    - 무선랜 : CSMA/CA
- Collision(충돌) : 공유 전송 매체에서 두 개 이상의 노드가 동시에 데이터를 전송할 때 일어나는 현상
- 무선랜에서 CSMA/CD를 사용하지 않는 이유
    - Hidden terminal 문제와 같이 모든 충돌 감지가 불가능하기 때문
- Hidden terminal
    - A, B가 서로를 모르는 상태에서 동시에 C에게 데이터 전송시 A, B는 충돌을 감지할 수 없음
- CSMA/CA
    - RTS/CTS
        - 각 단말이 RTS 전송
        - AP가 RTS 브로드캐스트로 상태 전송
        - 유휴 상태를 알리기 위해 ACK 브로드캐스트
        - RTS는 충돌 가능성 있으나 충돌 기간이 짧음
        - hidden terminal 문제 해결
    - 프레임 공간 (IFS)
    - backoff 시간 (타이머)
    - ACK 응답
- CSMA/CD과 CSMA/CA 차이
    - CD : 충돌 발생시 감지, 재전송
    - CA : 전송전 채널 상태 확인해 충돌 회피
- 다중 접속 방식
    - TDMA : 시분할
    - FDMA : 주파수 분할
    - CDMA : 사용자에게 코드 할당. 직교 성질 이용
- 무선랜 단말 연결 과정
    - Assoiation (결합) : AP 초기 연결
    - Re-Assoiation (재결합) : AP->다른 AP
    - Disassoiation (분리)
- WIFI 단말기 AP 검색 과정
    - Passive Scanning : AP가 주기적으로 beacon frame 브로드캐스팅
    - Active Scanning : 단말이 Probe Reqeust Frame 브로드캐스팅
- Mobility (이동) 형태
    - No transition : 무전이
    - BSS transition : handoff
    - ESS transition : 로밍
- BSS : 하나의 AP에 연결된 무선단말그룹
- ESS : 여러 BSS가 DS를 통해 연결되어 더 넓은 지역을 담당하는 무선단말그룹
- 무선랜 보안 3대 요구사항
    - CIA
        - 기밀성, 무결성, 인증
- 무선보안 두가지 과제 : 암호화, 상호인증
    1. Discovery
    2. Authentication
        - AP 혹은 AS(인증서버)에서 인증 수행
    3. Key management
    4. Protected data transfer
    5. Connection termination
- 무선랜 보안체계
    - WEP : 초기 WEP은 40비트 RC4암호화로 취약
    - WPA : RC4, TKIP 사용, 취약
    - WPA2 : AES, CCMP 적용. 현재 사용
- 무선랜 보안 강화
    - 무선네트워크 암호화 여부 (WPA2)
    - 긴 비밀번호
    - 허용가능한 MAC주소 지정

## 블루투스 관련

- WPAN 표준 : IEEE 802.15
    - 고속 전송 : IEEE 802.15.3
    - 저전력 : IEEE 802.15.4
- ISM 대역 : 정부의 허가 없이 사용가능한 주파수 대역
- 블루투스와 WiFi의 공통점과 차이점은?
    - 공통점 : 무선 이용, ISM 대역의 주파수를 사용
    - 차이
        - WiFi : AP 연결, 인터넷 접속이 목적, 결합 (Assoiation)
        - 블루투스 : Adhoc 방식, 두 기기간 통신, 페어링 (Pairing)
- 블루투스 통신 특징
    - 단거리 통신
    - FHSS (주파수 도약)
    - AP없음 (Adhoc)
- 주파수 호핑
    - 625us동안 한 주파수로 신호 쏘고 다른 주파수 이동
        - 625us의 시간 구간 : time slot
    - master-slave간 호핑 순서가 약속됨
    - 2.4GHz 대역, 각 채널 대역폭 1MHz, 79개 채널
    - 초당 1600hops
    - 강력한 보안 : 제3자가 변경 순서를 모른다면 정상적인 데이터수집 불가능
- Piconet : 1마스터-7슬레이브
- Scatternet : 한 피코넷의 구성원이 다른 피코넷의 구성원일 수 있음
- 블루투스 데이터 전송 방식
    - SCO (synchronous connection oriented)
        - 일정 간격 송수신, time slot 번갈아가며 할당
        - 실시간 데이터, 저지연
    - ACL (Asynchronous connectionless)
        - 필요한 만큼 timeslot 할당
            - CSMA/CA 사용
        - 일반데이터 전송, 빠른 속도
- 블루투스 스마트 (4.0, BLE)
- 블루투스 해킹 강도
    - Bluejacking : 요청하지 않은 메세지 전송
    - Blesnarfing : 패킷 수집해 복원
    - Bluebugging : 블루투스 장비 장악, 백도어 심는 등의 행위
    - Blueborne : 원격 장비 컨트롤
- Zigbee
    - IEEE 802.15.4 표준 따름
    - 저속 데이터 전송률
    - 저전력
    - 빠른 기상
    - 센서 네트워크에 적합

## 셀룰러

- 셀룰러
    - uplink : 단말->기지국
    - downlink : 기지국->단말
- 주파수 재사용
    - 가입자 용량 증대를 위해 간섭이 없는 범위내에서 주파수 재사용
    - 인접 셀에는 다른 주파수 할당
- SIM : 가입자 식별 모듈, 가입자ID, 네트워크 및 암호화키 저장
- MSC 데이터베이스
    - HLR : 
    - VLR : 
- CR (Cognitive Radio) : 무선 주파수 환경을 인지하여 통신가능한 주파수를 지능적으로 찾아내 기존 서비스에 간섭 주지않고 사용
- MIMO : 특정 방향으로만 데이터 송수신
- Carrier Aggregation
    - 반송파를 결합하는 것
    - intra-band contigous, intra-band noncontigous, inter-band noncontiguous
- Interference Coordination : 셀과 셀 사이 구간 처리
- 셀룰러 capacity 증가 대처
    - 채널 추가 : 할당되었으나 사용하지 않는 채널
    - 근처 셀 주파수 임대
    - cell splitting
        - 일반적 방법
        - 셀을 더 작게 분리 (기지국 추가)
    - cell sectoring
        - 안테나 방향성 조절해 한 셀에서 여러개 섹터 분할
    - 네트워크 밀집화
        - picocell : 더 작은 셀로 나눈것
        - femtocell : picocell보다 작은 셀
- Handoff : 통화중 셀에서 다른 셀로 넘어갈때 단말기-기지국간 사용되는 주파수 변경
    - hard handoff
        - 기지국 하나와 통신
        - 통신 끊은 후 새 통신 가능
    - soft handoff
        - 기지국 둘과 통신
        - 통신 끊기전 새 통신 가능
- Power control (전력제어)
    - 디바이스가 기지국과 떨어지면 출력을 높히는것 
    - BS가 파일럿 신호를 보내 판단
    - open-loop power control 개방루프
        - 이동국 의존, BS의 피드백 없음
        - 이동국이 파일럿 신호 수신해 송신 전력 설정
        - 정확도 낮음, 빠른 반응
    - closed-loop power control 폐쇄루프
        - 성능 측정치 기반 설정
        - BS가 전력조정 결정 내리고 제어채널 통해 이동국 통신
- 세대별 기지국 명칭
    - 2세대 BTS
    - 3세대 NodeB
    - 4세대 eNodeB
- 세대별 보안
    - 1세대 : 보안 없음, eavedropping (도청) 가능
    - 2세대 : 상호인증 부재, IMSI catcher (가짜 기지국)
    - 3세대 : 2세대에서의 보안상 문제 해결, But 스마트폰 취약성
- Physical Layer Security (물리계층 보안)
    - 송신기 고유 하드웨어 특성을 기반으로 전자지문 추출
    - MIMO : 특정 방향 송수신
    - 인공잡음 : 공격 감지시 인위적 잡음 생성

## LTE

- 4G LTE 특징
    - 모든 패킷이 네트워크를 통함
    - voIP (서킷 스위칭 지원안함)
    - spread spectrum이 OFDM으로 처리
    - CDMA -> OFDM
- LTE 망 구조
    - 무선 엑세스망 E-UTRAN : 단말기-기지국
    - 코어망 (EPC) : 중앙에서, 단말/기지국 제어
- 단말기-인터넷 흐름
    - UE
    - eNodeB
    - S-GW : 기지국-코어망 데이터 교환
    - P-GW : 외부 인터넷망 연결
    - 인터넷망
- EPC 코어망 : 이동성 관리 (Mobility Management)
    - X2 인터페이스 : eNodeB가 서로 상호작용
    - S1 인터페이스 : E-UTRAN과 EPC간의 상호작용
- 다중경로 채널에서 OFDM이 유리한 이유
    - 각 부반송파의 속도가 느림(파장이 김), 따라서 노이즈에 강함
    - 각 속도가 낮으므로 ISI(심볼간 간섭)이 줄어들어 강함
- PAPR (Peak to average power ratio)
    - 부반송파가 동위상으로 더해질 때, peak power가 매우 높아짐
    - 기지국은 이를 감당할 수 있지만, 모바일 디바이스에게는 부담
- LTE 전송방식
    - uplink : SC-FDMA, 하나의 QPSK 신호
    - downlink : OFDMA 
- LTE에서의 셀
    - 주파수 재사용 계수 : 1
        - 각 셀에서 모든 주파수 사용
- Resource Block
    - RB는 데이터 전송시 자원을 효율적으로 관리하기 위해 사용되는 단위
- LTE Advanced
    - 반송파 결합 : 최대 3개 결합, 최대 100MHz
    - MIMO
    - Relay nodes : 셀 변방 영역에 중계기 추가
    - Hetnet : small, macro, femto
    - VoIP
- ICIC : 셀 경계 단말에 서로 다른 주파수 자원 할당해 간섭 줄임
- CoMP
    - 분산 안테나, 셀 간 스케쥴링
    - 빔포밍 및 신호강도 조정
- 5G
    - 4G대비 대역폭 10배 향상
    - 공격적인 MIMO 기술 : 수십-수백 안테나, 세밀한 빔포밍
    - 더 많은 주파수 : 고대역 26GHz
- NOMA (Non-Orthogonal Multiple Access)
    - 멀리 떨어진 (신호 세기가 약한) 단말에 더 강한 신호를 보냄
    - 강한 신호부터 디코딩해 약한 신호를 받는 사용자에게 방해X
- RAN
    - D-RAN : 기지국간 기능 연동 X 
    - C-RAN : 중앙집중식
    - O-RAN : 하드웨어 독립적

## 위성

- GEO(Geostationary Earth Orbit) : 정지궤도, 높은 커버리지, 약한신호, 신호 지연
- MEO(Medium Earth Orbit) : GPS 위치, 2000km 이상
- LEO : 빠른 속도, 낮은 커버리지, 대역폭 효율 높음, 기지국으로 기능할 수 있음
- GPS
    - MEO 위치
    - 3개로 위치 특정
    - 4개를 통해 시간 신호 보정