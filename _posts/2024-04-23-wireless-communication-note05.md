---
title:  "공부 | 무선 통신 - 5"
author: Hve
date: 2024-04-23 00:28:08 +0900
categories: ["학습", "강의노트"]
math: true
mermaid: false
tags: ["무선통신"]
---

## 변복조

- 무선 전송 예시
    1. 소스 코딩 : 데이터 디지털화
    2. 채널 코딩 : 오류 검출 코드 추가
    3. 변조 (Modulation)  
    4. 전송
- 받을땐 반대로

## 인코딩 사용 이유

- 디지털 -> 아날로그
    - 무선 전송을 위해 변환 필요
- 아날로그 -> 디지털
    - 최진 디지털 전송 및 스위칭 장비 사용
- 아날로그 -> 아날로그
    - 쉽거 저렵하게 전송 가능
- 디지털 -> 디지털
    - 디지털->아날로그 보다 덜 복잡하지만 비용이 많이듬

## 신호 변조 (signal modulation)

- 송신자는 반송파(Carrier Signal) 보내고, 수신자가 인식가능한 방식으로 변경
    - carrier는 고정 진폭과 주파수를 가진 사인파
    - 변조에 의한 반송파 신호를 사용해 데이터 전송
    - 변조 (Modulation)는 소스 데이터를 주파수 $f_c$를 가진 반송파 신호로 인코딩하는 과정
    - 입력 신호 : 변조된 신호
    - 반송파 신호 변조 결과 : 변조 신호

- 디지털 신호 변조를 Shift Keying이라고 부름
    - ASK (Amplitude Shift Keying)
    - FSK (Frequency Shift Keying)
    - PSK (Phase Shift Keying)

## 신호 인코딩 기준 

- 수신기가 해석을 성공가능한지 여부를 결정하는 것은?
    - 신호대 잡음비 (signal-to-noise ratio)
    - 데이터속도 (data rate)
    - 대역폭 (bandwidth)
- data rate 증가는 bit error rate(BER) 감소
- SNR가 증가하면 bit 오류율 감소
- 대역폭 증가는 data rate의 증가 허용

## 신호 인코딩 기법

![alt](/assets/img/wireless/17.png)

- ASK (Amplitude Shift Keying)
    - 반송파 주파수의 진폭차
    - 일정한 진폭이 
- FSK (Frequency Shift Keying)
    - 반송파 주파수 근처의 주파수 차
- PSK (Phase Shift Keying)
    - 반송파 신호의 위상 이동

### ASK

- 이진부호
    - 일정한 진폭에서 반송파를 표시하는 1
    - 반송파의 부재로 표시되는 0
- 비효율적 변조 기법
- 광섬유를 통해 디지털 데이터 전송시 사용

### BFSK (Binary Frequency-Shift Keying)

![alt](/assets/img/wireless/18.png)

- 이진 부호가 반송파 주파수 근처의 서로 다른 주파수를 표시
- ASK보다 오류 발생 가능성 적음
- 고주파 (3-30MHz) 무선 전송에 사용됨
- 동축 케이블 사용하는 LAN에서 더 높은 주파수로 사용가능

### MFSK (Multiple Frequency-Shift Keying)

- 두 개 이상의 주파수 사용
- 높은 대역폭 효율성을 가짐 제공하지만 에러 발생이 쉬움

### PSK (Phase-Shift Keying)

![alt](/assets/img/wireless/19.png)

Two-level PSK (BPSK)
- 2개의 위상을 사용해 비트 표현

Four-level PSK (QPSK, Quadrature Phase-Shift Keying)
- 4개의 위상을 사용해 2비트 표현

### QAM (Quadrature Amplitude Modulation, 직교 진폭 변조)

QAM
- ASK와 PSK의 합성
- 동일한 반송파 주파수에서 동시에 전송되는 두개의 서로 다른 신호
- 8비트 표현

## Bit Error Rate (BER, 비트에러율)

- 노이즈가 있는 경우 성능 평가가 필요함
- BER은 확률
