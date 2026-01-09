---
title:  "공부 | 무선 통신 - 6"
author: Hve
date: 2024-04-23 03:19:15 +0900
categories: ["학습", "강의노트"]
math: false
mermaid: false
tags: ["무선통신"]
---

## 코딩 및 에러 제어

- Error detection codes
    - 오류 발생 여부 감지
- ARQ 프로토콜 (Auto repeat request, 자동반복요청)
    - 오류 있는 데이터 폐기
    - 송신기가 재전송
- Error correction code, foward correction code (FEC)
    - 에러 감지하고 수정하도록 디자인됨
    - 블록 코딩

## 오류 탐지 프로세스

- 송신기
    - 오류 감지 코드(체크 비트)가 데이터비트에 계산되어 데이터 비트에 추가됨
- 수신기
    - 들어오는 프레임을 데이터비트와 체크 비트로 분리
    - 수신된 데이터 비트에서 체크 비트 계산
    - 오류 감지

## 패리티 비트

홀, 짝수 여부를 비트로 표시
- 기존 데이터와 합쳐 홀/짝이 되도록 비트 추가

## 무선 전송 오류

- 오류 검출은 재전송을 요구함 (ARQ)
- 무선 어플리케이션에 비적합
    - 무선 링크의 오류률이 높아 수차례의 재전송 요청 가능성
    - 긴 전파 지연
- 따라서 수신기가 오류 수정하도록 하는 것이 바람직
- 오류 수정 프로토콜 : FEC
    - 최근엔 Hybrid ARQ 사용 (ARQ + FEC)

## 블록 오류 수정 코드

![alt](/assets/img/wireless/20.png)

- 본질적으로 에러 정정은 전송된 메시지에 중복성을 추가하여 작동함
- 송신기
    - FEC 인코더가 각 k-bit 블럭을 n-bit 블럭으로 codeword
- 수신기
    - 수신 신호를 demodulation (복조)
    - FEC 디코더를 통과

## Hamming distance

![alt](/assets/img/wireless/21.png)

2개의 n-bit 바이너리 시쿼스에서 서로 다른 비트의 개수

*예시*

![alt](/assets/img/wireless/23.png)

## LDPC (Low density parity check) codes

- 매우 긴 블록 코드 사용 (1000비트 이상)
- 여러 패리티가 들어감
- 고속으로 처리가 가능하다

## Block Interleaving

- 데이터가 서로 다른 순서로 쓰고 읽도록 한다
    - 각 데이터 비트와 그에 대응하는 체크 비트는 다른 블록들의 비트에 분산된다
- 발생하는 에러가 다수의 블록으로 분산되어 에러 정정이 가능하게 된다

## Convolutional Codes

- 인코더에 이전 상태의 메모리가 존재

## Turbo Code

- 3G, 4G 셀룰러 시스템에 사용가능
- 3가지 신호가 함께 전송되고 인터리빙됨
