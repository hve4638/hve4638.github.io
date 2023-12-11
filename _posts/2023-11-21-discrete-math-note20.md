---
title: "이산수학 | Division, 합동"
author: Hve
date: 2023-11-21 16:23:51 +0900
categories: ["공부", "이산수학"]
math: true
mermaid: false
tags: []
---

## Division (나누기)

> 정의 : $b = ac$인 정수 $c$가 있다면 $a$ divides $b$라고 한다 ($a$와 $b$가 정수이고 $a \ne 0$인 경우)

notation : $\mid$

- $a \mid b$ 는 $a$ divides $b$를 뜻한다

- $a \mid b$ 는 $b / a$를 뜻한다

- $a$ divides $b$가 아니라면

## Division의 속성

> 정리 : $a$, $b$, $c$는 정수이면 $a \ne 0$일 때 다음과 같다

1. if $a \mid b$ and $a \mid c$ 라면, $a \mid (b+c)$ 이다

2. if $a \mid b$라면, then $a \mid kb$ ($k$ is integer)

3. if $a \mid b$ and $b \mid c$ 라면, then $a \mid c$이다

## 나눗셈 알고리즘 (Division algorithm)

> 정리 : $a$가 정수이고 $d$가 양의 정수라면, $a = dq + r$가 되는 $0 \le r < d$ 가 되는 정수 $q$, $r$가 있다

- $d$ : 제수 (divisor)
- $a$ : 피제수 (dividend)
- $q$ : 몫 (quotient)
- $r$ : 나머지 (remainder)

### 예시

> 101을 11로 나누었을때 몫과 나머지는?

The quotient is $9 = 101 \text{ div } 11$, and the remainder is $2 = 101 \text{ mod } 11$

---

## 합동 관계 (Congruence relation)

> 정의 : $a$, $b$가 정수이고 $m$이 양의 정수일 때, $m$ divides $a-b$라면 $a$ is congruent to $b$ modulo $m$이다

- $a ≡ b (\text{ mod } m)$ 표기법은 $a$는 $b$와 modulo $m$에서 합동이다
- $a ≡ b (\text{ mod } m)$ 에서 $a$는 congruence, $m$은 modulus라고 한다

### 예시

> 문제 : $17$ 이 $5$와 modulo $6$에서 합동인가?

*풀이*

17 ≡ 5 (mod 6) 이다. because 6 divides $17 - 5 = 12$

> 문제 : $24$ 이 $14$와 modulo $6$에서 합동인가?

*풀이*

24 $ \not\equiv $ 14 (mod 6) 이다. $24 - 14 = 10$ 은 6으로 나누어지지 않기 때문이다

## 합동 정리

> 정리 : $m$을 양의 정수라고 하자. 정수 $a$과 $b$는 modulo $m$에서 합동이다 if and only if $a = b + km$ 인 정수 $k$가 존재할 때

*증명*

If $a \equiv b$ (mod $m$), then $m \mid a - b$ (정의에 의해)

그러므로 $a - b = km$ 인 정수 $k$가 존재하며 $a = b + km$ 과 동일하다

반대로, $a = b + km$ 인 정수 $k$가 존재한다면, $km = a - b$이다.

그러므로 $m \mid a - b$이고 $a ≡ b$ (mod $m$)이다

## mod의 관계식 정리

a ≡ b (mod m) 과 a mod m = b는 다르다

- a ≡ b (mod m)은 정수 집합에 대한 관계이다
- a mod m = b 표기는 함수를 나타낸다

따라서 다음과 같이 정리할 수 있다

> 정리 : $a$, $b$가 정수이고 $m$이 양의 정수라고 할 때, $a ≡ b (\mod m)$ iff $a \mod m = b \mod m$ 이다

## 합과 곱의 합동에 대한 정리

> 정리 : $m$이 양의 정수라고 할 때, if $a ≡ b (\mod m)$ 과 $c ≡ d (\mod m)$ 라면, $a+c$ ≡ $b+d$ (\mod m)이며 $ac ≡ bd (\mod m)$ 이다

*증명*

$a ≡ b$ (mod m)이고 $c ≡ d$ (mod m) 이므로, $b = a + sm$이고 $d = c +tm$인 정수 $s, t$가 존재한다

그러므로

- $b + d = (a + sm) + (c + tm) = (a + c) + m(s + t)$
- $bd = (a + sm)(c + tm) = ac + m(at + cs + stm)$

*예시*

$7 ≡ 2 (\mod 5)$와 $11 ≡ 1 (mod 5)$ 에 대해서

- $18 = 7 + 11 ≡ 2 + 1 = 3 (\mod 5)$
- $77 = 7 \times 11 ≡ 2 \times 1 = 2 (\mod 5)$

## 합동의 대수적 조작

유효한 합동의 양변에 동일한 정수를 곱해도 합동은 유효하다

- $a ≡ b (\mod m)$이라면, 모든 정수 $c$에 대해 $ac ≡ bc (\mod m)$이다.

유효한 합동의 양변에 동일한 정수를 더해도 합동은 유효하다 

- $a ≡ b (\mod m)$이라면, 모든 정수 $c$에 대해 $a + c ≡ b + c (\mod m)$이다.

유효한 합동의 양변에 동일한 정수를 나누었을 때 항상 유효한 합동을 가지지 않는다

*예시*

- $14 ≡ 8 (\mod 6)$ 에 대해 $2$로 나누면 $14/2 = 7$, $8/2=4$이다. 그러나 $7 \not\equiv 4 (\mod 6)$ 이다

## 곱셈과 나누셈 mod 연산

> 추론 : $m$을 양의 정수로 하고 $a, b$를 정수라 했을때 다음과 같다
>
> $(a + b)(\mod m) = ((a \mod m) + (b \mod m)) \mod m$
>
> $ab \mod m = ((a \mod m)(b \mod m)) \mod m$

## 산술 modulo 연산

### modulo 덧셈, 곱셈 연산

> 정의 : $Z_m$을 $m$보다 작은 음수가 아닌 정수의 집합이라 하자 : $\set{0,1,...,m-1}$
>
> $+_m$은 다음과 같이 정의된다 : $a +_m b = (a + b) \mod m$
>
> $\cdot_m$은 다음과 같이 정의된다 : $a \cdot_m b = (a \cdot b) \mod m$
>
> 이를 `addition modulo` m, `multiplication modulo` m 이라고 한다

*예시*

> $7 +_11 9$ 와 $7 \cdot_{11} 9$ 을 풀어라

$7 +_11 9 = (7 + 9) \mod 11 = 16 \mod 11 = 5$

$7 \cdot_{11} 9 = (7 \cdot 9) \mod 11 = 63 \mod 11 = 8$

### 덧셈 역원 (Additive inverses)

만약 $a \ne 0$ 인 $Z_m$에 속한 $a$가 있다면, $m - a$을 덧셈 역원이라 한다

0은 0 스스로 덧셈 역원이다

### 분배 법칙 (Distributivity)

$a, b, c$가 $Z_m$에 속한다면, 분배 법칙을 만족한다

- $a \cdot_m (b +_m c) = (a \cdot_m b) +_m (a \cdot_m c)$
- $a +_m (b \cdot_m c) = (a +_m b) \cdot_m (a +_m c)$

