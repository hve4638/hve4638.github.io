---
title: "국제거래(교양) | 대금 결제"
author: Hve
date: 2024-06-09 17:46:09 +0900
categories: ["공부", "국제거래"]
math: false
mermaid: false
tags: []
---

## Bill of Exchangde 환어음

> 국제거래에서 채권자인 어음 `발행인(drawer)`이 채무자인 `지급인(drawee)`에게 어음상 표시금액을 `수취인(payee)` 또는 `지시인(order)` 또는 `소지인(bearer)`에게 일정한 기일 내, 일정한 장소에서 제시할 경우 무조건 지급할 것을 위탁하는 `요식유가증권(formal instrument)` 이자 `유통증권(negotiable instrument)`

- drawer : 발행인, 수출업자
- drawee : 지급인
- payee : 수취인, 대금을 받는 사람 *pay to ~~*

- order : 지시인
- bearer : 소지인, 환어음을 소지한 사람
- 요식유가증권 (formal instrument) : 일정한 형식을 가짐
- 유통증권 (negotiable instrument) : 

### documentary bill of exchange (화환어음)

- 화물과 관련된 서류가 첨부된 화환어음
- bill of exchange + document(선적 서류 등) 형태

## 환어음 : 지급기일의 표시 방법

- at sight (일람출급, 청구 시 즉시 지급)
- at *XX days* after sight (일함 후 정기출급)
- at *XX days* after date (일자 후 정기출급, 환어음 발행 일자 이후로부터 며칠 후 지급)
- on a fixed date (확정일 출급)

## Letter of Guarantee (L/G, 수입화물선취 보증서)

> 수입물품과 관련된 `선적 서류`(예: B/L) `원본`이 도착하기 전, 해당 물품을 선취득하기 위해 원복 서류 대신에 `수입자`와 신용장 `개설은행`이 `연대보증`으로 `해운회사` 앞으로 제출하여 `수입화물`을 인도받을 수 있는 `보증서`

- B/L 서류 도착 전 물품을 먼저 취득하고, 이에 대해 보증한다
- 수입자와, 개설 은행(Issuing Bank)가 보증

요건
- 수입지에 수입물품 도착되어 있을 것
- 원본이 개설은행에 도착하지 않았을 것
- 수입자가 사본을 가지고 있을 것

효과
- 선적 서류 원본 도착시, 원본 전통(full set)을 즉시 해운회사에 제출
- 원본 서류에 하자가 있는 경우에도 지급을 거절할 수 없음
    - complying presentation이 아닌 경우에도 이의제기가 불가


## Trust Receipt (T/R, 수입화물대도)

> 일람출급 결제방법에 의해 수입을 한 경우 환어음을 결제하지 않으면 수입자가 선적서류를 인도받을 수 없으나, 개설은행이 수입자에게 환어음 대금결제 전이라도 수입자로 하여금 수입화물을 처분할 수 있도록 하는 방법

- 일람 출급 : at sight

- 개설은행(Issuing Bank)이 Applicant에게 사용
- 일람출급 방식
- Applicant가 대금 결제 전에도 Issuing Bank가 Applicant에게 처분 권한을 줌
- 대금 결제 전아라도, 수입 화물을 처리할 수 있도록 함
    - 개설은행 입장에서 물품을 가지고 있으면 창고료, 보험료 등으로 부담이 됨

효과
- 개설은행이 수입 대금을 결제받지 않았음
- 담보로 취득한 수입 화물의 경우 개설은행이 소유권을 가짐
- 수입자는 제조, 가공, 판매 권한을 가짐
    - 제 3자가 해당 화물을 매입할 수 있음 (수입자-제3자 간의 권한은 보호됨)
    - 해당 상황에서 수입자가 도망친다면 손해는 은행이 지게 됨
- 따라서 개설은행이 수입자를 신뢰하는 경우에만 T/R을 사용

## L/G 와 T/R의 차이

- 둘다 수입업자가 회물을 선취함
- (찾아볼것)
WIP


## Collection (추심)

신용장과 추심
- Issuing Bank는 신용장 개설시 수수료를 받음
    - Applicant의 신용에 따라 담보를 요구하기도 함
- 점차 신용장 외의 방식의 거래가 많아짐
- 주된 방식은 collection (추심) 방식
    - 신용장이 개입되지 않는 방식

추심 거래 당사자
- Remitting Bank : 추심의뢰은행
- Collecting Bank : 추심은행
- Presenting bank : 제시 은행
- Principle : 추심의뢰인
- Drawee : 지급인

### 거래 절차

1. 추심의뢰인 - 지급인 : sales contract (매매 계약)
    - D/A 또는 D/P 방식 (대부분 D/A)
2. principle(추심의뢰인) -> drawee(지급인) : 물품 선적
    - 운송 서류 (B/L) 등을 받음
3. Principle -> Remitting Bank : 추심서류 제시
4. Remitting Bank -> Colling Bank : 추심 의뢰
5. Collecting Bank -> Drawee(지급인) : 추심서류 도착 통지
    - Collecting Bank이 직접 접근할 수 없는경우 Presenting Bank를 경유
6. Drawee -> Collecting Bank 
    - D/P의 경우 : 어음 지급 *payment*
    - D/A의 경우 : 어음 인수 *acceptance*
7. Collecting Bank -> Drawee : 서류 인도 
    - 이후 물품 인도
8. Collecting Bank -> Remitting Bank : 송금
9. Remitting Bank -> Priciple : 수출 대금 인수

### Docuemnts against Payment (D/P)

> 수출자가 수입자와의 매매 계약에 따라 물품을 선적하고, 구비된 서류에 일람출급환어음(sight bill of exchange)을 발행하여, 자신의 거래은행(remitting bank)를 통해 수입국의 은행(collecting bank) 앞으로 어음 대급을 추심의뢰하면 추심은행은 수입자에게 해당 어음 제시하여 어음금액을 일람지급을 받고 선적서류를 인도하는 방식

### Docuemnts against Acceptance (D/A)

- DP와 유사하나, 수출자가 일람후 정기 출금 또는 확정일 출급 환어음을 발행하고, 추심은행이 수입자에게 제시하여, 인수(acceptance)를 받음으로서 선적서류를 인도한 후에 만기일에 대금을 지급받는 방식
- payment(지급) 대신 acceptance(인수)
- 대부분의 Collection 방식은 D/A 방식

### L/C(신용장)과 차이
- L/C는 Issuing Bank가 대금 확약
- D/P, D/A는 은행의 지급확약이 없음
    - 대금결제상의 위헙이 따를 수 있음

### 추심 관련 규칙

- Uniform Rules for Collection

## Forfaiting (포페이팅)

*forfaiting 이란?*
- 현금을 받고 외상채권을 포기 또는 양도한다는 의미

*forfaiter 이란?*
- 포페이팅 업무를 취급하는 금융기관을 의미함
- 어음을 할인하여 매입하는 금융기관
    - 채권을 수출업자로부터 할인하여 매입

> 수출 시점부터 `수출대금의 회수 기간까지의 기간이 길고` `위험이 높은 국가`로 수출할 경우에 주로 이용됨
>
> 즉, 대부분 자본재(기계, 공장 설비 등) 수출에 따른 연지금 수출어음에 활용됨

- 대금지급 회수 시간이 오래걸림 - 주로 자본재 수출
- 위험이 높은 국가 - ex. 이란

방식
1. seller->forfaiter : Forfaiter에게 접촉
    - forfaiting 업무의 수락 가능 여부를 확인
2. seller-buyer 간 거래 채결 (신용장 방식 등의 거래 수행)
3. seller->forfaiter : 어음 할인 관련 서류 제시
    - 수출업자로부터 매입
4. forfaiter->bank->seller : 할인된 금액을 은행을 통해 지급
5. issuing bank->forfaiter : 어음 만기일에 은행이 대금 지급

> 수출거래에서 발생하는 환어음이나 약속어음 등의 청구권이 자유롭게 유통가능한 증서를 이전의 소지인에게 `무소구적`으로, 즉 상환 청구권 없이 만기일까지의 해당하는 이자를 `고정금리`로 할인하여 매입하는 방식

- 무소구적(without recourse)
    - 대금 지급을 받지 못해도 채권 매도자(seller)에게 책임을 묻지 않음
- 고정금리(fixed rate)
    - 할인시 고정금리로 이자를 매김

*aval* 
- 포페이터가 수입자의 `신뢰성에 대한 확신을 못하는 경우` 어음상의 지급보증인 `aval` 요구
- 수입자의 거래은행이 보증은행이 되어 지급 보증을 함

*인수와의 차이*
- 인수(acceptance)와 유사하나, 인수에 비해 장기간

