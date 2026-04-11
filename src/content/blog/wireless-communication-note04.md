---
title:  "공부 | 무선 통신 - 4"
author: Hve
date: 2024-04-21 20:15:23 +0900
categories: ["학습", "강의노트"]
math: true
mermaid: false
tags: ["무선통신"]
---

## 안테나

- 안테나는 전기 도체 또는 도체 시스템
    - 전송 : 전자기 에너지를 공간으로 방출
    - 수신 : 공간에서 전자기 에너지를 수집
- 양방향 통신에서 송수신에 동일한 안테나를 사용할 수 있음
- 안테나의 효율성은 신호의 파장에 상대적인 크기에 따라 달라짐
- 안테나 사이즈가 중요

### 안테나의 길이

안테나의 길이는 신호의 $1/2$ 파장 길이 (효율적), 또는 $1/4$ 파장 길이
- $1/2$, $1/4$만 알아도 전체 파장의 길이를 알 수 있기 때문

### 공식

$$f = \frac{c}{2L}$$

- f : 주파수
- c : 빛의 속도 (상수)
    - 약 $3 \times 10^8$
- $\lambda$ : 식에는 없으나, 파장 길이를 나타냄
- $L$ : 안테나 길이
    - 반파장 안테나의 경우 : $2L= \lambda$

*예시*

> 10m 길이의 반파장 다이폴 안테나에 대한 최적 주파수는?

1. $L = 10$
2. $f = \frac{c}{20}$
3. $f = \frac{3 \times 10^8}{20}$
4. $f = 1.5 \times 10^7$
5. 따라서 f(주파수)는 약 15MHz
    - 키로 : $10^3$
    - 메가 : $10^6$
    - 기가 : $10^9$

- $\lambda$ : 파장
- c : 빛의 속도 (약 $3 \times 10 ^ 8$)
- 


- 어떤 주파수가 있을때 그거에 대한 최적의 안테나 길이가 얼마 정도인가
- 어떤 안

### 방사 패턴

![alt](/assets/img/wireless/14.png)

안테나의 방사 특성을 그래픽으로 표현

### 안테나 종류

- 모든 방향으로 균등하게 전력 방출
- 다이폴 안테나
- 포물선형 반사 안테나
- 지향성 안테나

## 스펙트럼 고려사항

- 규제기관의 통제를 받음
    - 주파수
    - 신호 전력
    - 다중 접속 방식
- Dynamic Sepectrum Access(DSA)
    - 주파수 자원을 효율적으로 관리하기위해 동적으로 관리, 할당
    - Cognitive Radio : 수신기가 사용하지 않는 대역을 찾아 자동으로 할당
- ISM band
    - 정부의 라이센스 없이 쓸 수 있는 대역
        - 2.4GHz, 5.8GHz

## 전파 모드 (Propagation Modes)

- Ground-wave propagation(지상파 전파, GW)
- Sky-wave propagation(공중파 전파, SW)
- Line-of-sight(LOS) propagation(가시거리 전파)

![alt](/assets/img/wireless/15.png)

### 지상파

- 지구 곡률을 따라감
- 상당한 거리까지 전파가능
- 최대 3MHz
- 사용
    - AM 라디오

### 공중파

- 전리층과 지구 표면 사이를 오가며 여러 홉을 이동
- 수천 킬로미터를 이동할 수 있음
- 3-30MHz 에서 작동
    - 30MHz 이상의 신호는 전리층에 의해 잔사X
- 굴절로 인한 반사 효과

### 가시거리 전파

- 송수신 안테나가 가시거리 내에 위치해야 함

## 기본 전파 메커니즘

![alt](/assets/img/wireless/16.png)

- 자유 공간 전파 (Free-space propagation)
- 전송 (Transmission)
    - 매체를 통해
    - 굴절은 경계에서 발생
- 반사 (reflection)
- 회절 (diffraction)
    - 날카로운 모서리를 가진 물체 뒤의 2차 파동
- 산란 (scattering)
    - 작은 물체나 거친 표면 사이의 상호작용

## Impairments(장애) 종류

- Attenuation (감쇄)
- Free space loss (자유공간 손실)
- Noise (잡음)
- Atmospheric absorption (대기흡수)
- Multipath (다중경로)
- Refraction (굴절)

### Attenuation (감쇄)

신호 세기는 전송 매체에 따라 떨어짐

유도되지 않은 미디어의 감쇠 계수
- 수신 신호는 수신기가 신호를 해석가능 하도록 충분히 커야함
- 주파수가 높을수록 감쇄가 커져 왜곡이 생김

##### Free Space Loss

자유 공간에서도 시간이 지날수록 감쇄됨

### Noise (잡음)

- 잡음 (Noise) : 송수신기간 추가적인 원치않는 신호가 삽입됨
- 열 잡음
    - 전자의 교반에 의한 열소음
    - 모든 전자 장치 및 전송 장치에 존재
    - 주파수 스펙트럼에 걸처 존재 (화이트 노이즈)
    - 제거할 수 없음
- 상호변조 잡음 (intermodulation noise)
    - 주파수가 다른 신호가 동일한 매체 공유시 발생
- 누화 (crosstalk)
    - 신호 경로간 원치않는 커플링
- 임펄스 잡음 (Impulse noise)
    - 불규칙한 펄스 노이즈 스파이크
    - 짧은 지속 시간과 높은 진폭(amplitude)
    - 외부 전자파 장애 또는 결함으로 인해 발생

### 대기 흡수 (Atmospheric absorption)

- 수증기 및 산소가 감쇠에 기여

### 다중 경로 (Multipath)

- 장애물이 신호를 반사해 다양한 지연이 있는 여러 복사본이 수신됨

###### 다중 경로 전파의 영향

- 전파 메커니즘
    - 반사, 회절 및 산란
- 신호의 여러 복사본이 서로 다른 위상(phase)에 도착할 수 있음
    - 위상이 파괴적으로 추가되면 노이즈에 대한 신호레벨이 감소해 감지가 어려워짐
- 심볼간 간섭
    - 

### 굴절 (Refraction)

- 전파가 대기중으로 전파되며 휘어지는 현상

## Channel Correction Mechanism

- 전진 에러 수정 (FEC)
- 적응형 등화 (Adaptive Equalization)
- Adaptive modulation and coding
- Diversity techniques and `MIMO`
- `OFDM`
- Spread spectrum
- Bandwidth expansion

### 전진 에러 수정 (FEC)

- 오류 수정 코드 추가
    - 코드는 데이터 비트의 함수
- 수신기에서 들어오는 데이터 비트에서 오류 수정 코드 계산
- 수신기가 수신 데이터만을 활용
- 리던던시가 큼

### 적응형 등화


### Diversity techniques

- 개별 채널이 독립적인 페이딩 이벤트를 경험한다는 사실에 기초함
- space diversity 공간 다양성
    - 송신 안테나를 공간적으로 이격
- frequency diversity 주파수 다양성
    - 각각 다른 주파수로 동일한 데이터를 보냄
- time diversity
    - 시간 간격을 두고 동일한 데이터를 전송
- diversity 활용
    - 가장 좋은 신호 선택
    - 또는 신호 합성

### MIMO (Multi Input Multi Output)

안테나 에러이 사용
- diversity 
- multiple stream
    - 여러 데이터를 병렬로 보낼 수 있다
- beamforming
    - 지향성 안테나
- multi-user MIMO 
    - 여러 사용자로부터 신호를 받기위해 각각의 지향성 안테나로 사용


### Adaptive modulation and coding (AMC)

### OFDM

## Bandwidth expansion

신호는 제한된 bps/Hz만 제공가능 -> 더 만흥ㄴ 대역폭이 필요하다

Carrier aggregation
- 여러 주파수 대역을 결합해 더 넓은 대역폭 제공
- 예
    - LTE는 3세대 carrier를 통합한다
- 주파수 재사용
    - 영역
