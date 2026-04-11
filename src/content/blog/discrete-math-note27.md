---
title: "이산수학 | Counting 재귀 함수"
author: Hve
date: 2023-12-05 18:11:32 +0900
categories: ["학습", "강의노트"]
math: true
mermaid: false
tags: ["이산수학"]
---

DN_09

## Basic Counting Principle : 곱 규칙

> 곱 규칙 : 절차는 두 가지 순서가 있는 task로 나눌 수 있고 첫 일을 수행하는 방법이 $n_1$개, 두번째 일을 수행하는 방법이 $n_2$라면, 절차를 수행하는 방법은 $n_1 \cdot n_2$가지 이다

*예시*

> 각 번호판에 영문 대문자 3개와 숫자 3개가 순서대로 포함되어 있으면 몇개의 서로 다른 번호판을 만들 수 있나?

*풀이*

$26 \cdot 26 \cdot 26 \cdot 10 \cdot 10 \cdot 10$ 가지의 다른 번호판을 만들 수 있다

## Counting Function

> Counting Function : m개 요소로 구성된 집합에서 n개 요소로 구성된 집합으로 가도록 하는 함수는 총 몇개가 있는가?

*풀이*

정의역 m개 요소 각각에 대해 공역 n개 요소 중 하나를 선택하는 것이므로 $n \cdot n \cdot n \cdots n = n^m$ 개의 함수가 있다

## Counting Subsets of a Finite Set

> Counting Subsets of a Finite Set : 곱 규칙을 이용해 유한 집합 $S$의 서로 다른 부분집합의 수가 $2^{\mid S \mid}$임을 보여라

*풀이*

$S$의 요소가 임의의 순서로 나열되면, $S$의 부분 집합과 길이 $\mid S \mid$의 비트 문자열 간에 일대일 대응이 있다

$i$번째 요소가 부분 집합에 있으면, 비트 문자열의 $i$번째 위치는 1이고 그렇지 않다면 0이다.

곱의 규칙에 따르면, 이러한 $2^{\mid S \mid}$ 개의 비트 문자열을 만들 수 있다 그러므로 $2^{\mid S \mid}$개의 부분 집합이 존재한다

## Product Rule in terms of sets

$A_1, A_2, \cdots A_m$ 이 유한 집합인 경우, 이러한 집합의 데카르트 곱의 요소 수는 각 집합의 요소 수의 곱이다

데카르트 곱 $A_1 \times A_2 \times \cdots \times A_m$에서 요소를 선택하는 방법은 각 $A_i$에서 요소를 선택해 수행된다. 즉, 다음과 같다

$$\mid A_1 \times A_2 \times \cdots \times A_m \mid = \mid A_1 \mid \cdot \mid A_2 \mid \cdots \mid A_m \mid $$

## 더하기 규칙 (Sum Rule)

> Sum Rule: $n_1$가지 방법 중 하나또는 $n_2$가지 방법 중 하나로 작업을 수행할 수 있고 $n_1$과 $n_2$에 겹치는 방법이 없는경우, 작업을 수행하는 방법은 $n_1 + n_2$ 가지다

$\mid A \cup B \mid = \mid A \mid + \mid B \mid$ 

## 문제 : Counting Password

> 각 사용자는 길이가 6-8이고 각 문자는 대문자 또는 숫자인 비밀번호를 가지고 있다. 각 문자에는 숫자가 하나 이상 포함되어야 한다. 가능한 비밀번호는 몇개인가?

*풀이*

$P$를 가능한 총 비밀번호의 개수라고 하자. $P_6, P_7, P_8$을 길이가 6, 7, 8인 비밀번호를 나타낸다고 하자

- $P = P_6 + P_7 + P_8$ 이다
- $P_6, P_7, P_8$를 찾는다 (계산은 생략)
    - $P_6 = 36^6 - 26^6$
    - $P_7 = 36^7 - 26^7$
    - $P_8 = 36^8 - 26^8$

## 빼기 규칙 (Subtraction Rule)

> Subtraction Rule : $n_1$가지 방법 중 하나또는 $n_2$가지 방법 중 하나로 작업을 수행할 수 있다면, 작업을 수행하느 총 방법 수는 $n_1 + n_2$에서 공통된 방법 수를 뺀 값이다

## 나누기 규칙 (Division Rule)

> Division Rule : $n$ 방식으로 수행하는 방법은 $n/d$ 개의 방식이 있다. 모든 $w$ 방식에 대해, $n$ 방식 중 $d$ 방식이 정확히 $w$ 방식에 해당된다

집합의 관점에서, 유한 집합 A가 각각 d요소를 갖는 n 쌍의 서로소 부분 집합의 합집합이라면, $n=\mid A \mid / d$

## 문제 : 나누기 규칙 좌석 

> 원형 테이블에 4명이 앉을 수 있는 방법은 몇가지인가? 각 사람의 오른쪽과 왼쪽 사람이 동일할 때 그 두 좌석은 동일한 것으로 간주된다

*풀이*

테이블 주위의 좌석에 1-4까지 번호를 매긴다. 이 경우 $4! = 24$가지 방법이 있다

그러나 각 사람의 왼쪽과 오른쪽 이웃이 동일한 경우는 배제해야 하므로, $24/4 = 6$가지의 방법이 있다

## 트리 다이어그램 (Tree Diagrams)

> Tree Diagrams : branch가 가능한 선택, leaves가 가능한 결과를 나타내는 Tree Diagrams을 이용해 여러 계산 문제를 풀 수 있다

![IMAGE](/assets/img/discretemath/91.png)

