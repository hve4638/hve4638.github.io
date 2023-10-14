---
title:  "이산수학 | 함수 (Function)"
author: Hve
date: 2023-10-13 01:41:00 +0900
categories: [ "공부", "이산수학" ]
math: true
mermaid: false
tags: []
---

## 함수 (Function)

> 정의 : A와 B가 공집합이 아닌 집합이라 가정하자. A에서 B로 가는 함수 f(denoted f: A→B)는 A의 각 원소를 정확히 B의 정확히 한 원소에 할당하는 것이다.
>
> 이것을 $b = f(a)$로 쓸 수 있다. $b$는 $B$의 고유한 원소를 의미하고 $a$는 $A$의 원소를 의미한다.

또, 함수는 $(a,b) \in A \times B$ 이면서 $(a,b') \in A \times B$라면 $b = b'$ 인 관계인 $R \subset A \times B$로 정의된다.

*함수는 mappings, transformations으로도 불린다*

## 함수 용어 정리

다음 함수에 대해서, 

$$ f: A → B $$

- $A$는 $f$의 `정의역(domain)`
- $B$는 $f$의 `공역(codomain)`
- if $f(a) = b$, then
    - $b$는 $f$에 대한 `상(image)`
    - $a$는 $f$에 대한 `원상(preimage)`
- `치역(range)`은 $f$에 대한 $A$의 모든 상 전체의 집합이다 (denote by $f(A)$)
    - 치역은 공역의 부분집합이다
- 두 함수의 정의역과 공역이 같다면, 두 함수는 `동일(equal)`하다고 한다

## 함수 표현

함수는 여러 방법으로 표현할 수 있다

- 명시적인 설명. 
- 공식 (ex. $f(x) = x + 1$)
- 컴퓨터 프로그램 등

## 단사 (Injective)

> 정의 : iff $f$의 정의역 내에 $a$, $b$에 대해서 $f(a) = f(b)$가 $a = b$를 의미한다면, 함수 $f$는 `one-to-one(일대일)` 또는 `injective(단사)`라고 말한다

## 전사 (Surjective)

> 정의 : iff 모든 $b \in B$에 대해, $f(a) = b$인 원소 $a \in A$가 존재한다면, 함수 $f$는 `surjective(전사)` 또는 `onto`라고 부른다

모든 공역의 원소에 대응된다는 의미이며 따라서 공역과 치역이 동일하다

## 전단사 (Bijection)

> 정의 : ff `one-to-one`이면서 `onto`라면(`injective`면서 `surjective`라면), 함수 $f$는 `one-to-one correspondence(일대일)` 또는 `bijection(전단사)`이라고 부른다

SHOWING THAT F IS ONE-TO-ONE OR ONTO2

--- 

## 증명 : 함수 f가 one-to-one 또는 onto임을 보이기

### 예시 1

> Let $f$ be the function from $\set{a,b,c,d}$ to $\set{1,2,3}$ defined by $f(a) =3, f(b) =2, f(c) = 1$ and $f(d) = 3$
>
> $f$는 onto 함수인가?

#### solution

$f$는 onto 함수이다.

모든 공역의 세 원소가 정의역의 원소의 상과 일치한다

만약 공역이 $\set{1,2,3,4}$가 된다면, $f$는 onto 함수가 아니다.

### 예시 2

> 함수 ($f(x) = x^2$ from `정수의 집합` to `정수의 집합`) 는 onto 함수인가?

#### solution

$x^2 = -1$인 $x$가 존재하지 않기 때문에, $f$는 onto 함수가 아니다

--- 

## 역함수 (Inverse Functions)

> 정의 : $f$를 $A$에서 $B$로 가는 bijection(전단사, 일대일대응) 함수라고 하자
>
> $f$의 `inverse(역)`은, ($B$ to $A$, denoted $f^{-1}$)는 다음과 같이 정의된다

$$ f^{-1}(y) = x \text{ iff } f(x) = y$$ 

*bijection이 아닌 함수의 경우 역함수가 존재하지 않는다*

### 문제 1

> $f$ 를 $\set{a,b,c}$ 에서 $\set{1,2,3}$으로 가는 함수라고 하고 $f(a) = 2, f(b) = 3, f(c) = 1$ 라고 하자
> 
> $f$ 는 `invertible`한가? 그렇다면 그 역은 무엇인가?

#### Solution

bijection(일대일 대응) 함수이기 때문에 $f$ 함수는 `invertible`하다

역함수 $f^{-1}$는 $f$에서 주어진 대응의 반전시킨다

그러므로 $f^{-1}(2) = a, f^{-1}(3) = b, f^{-1}(1) = c$ 이다

### 문제 2

> $f: Z \to Z$ 함수를 $f(x) = x + 1$라고 하자
> 
> 함수가 `invertible`한가? 그렇다면 그 역은 무엇인가?

#### Solution

bijection(일대일 대응) 함수이기 때문에 $f$함수는 `invertible`하다

역함수 $f^{-1}$는 $f$에서 주어진 대응의 반전시킨다

그러므로 $f^{-1}(y) = y - 1$

### 문제 3

> $f: R \to R$ 함수를 $f(x) = x^2$라고 하자
> 
> 함수가 `invertible`한가? 그렇다면 그 역은 무엇인가?

#### Solution

bijection(일대일 대응) 함수가 아니라면 $f$함수는 `invertible`하지 않다

$f(-1) = (-1)^2 = 1 = f(1)$ 이므로 bijection(일대일 대응)이 아니다

그러므로 $f$함수는 `invertible`하지 않다

--- 

## 합성 (Composition)

> 정의 $f: B \to C$, $g: A \to B$라고 하자. $f$와 $g$의 `합성(composition)`은 (denoted by $f \circ g$) 은 $A$ 에서 $C$로 가는 함수이며 다음과 같이 정의된다

$$(f \circ g)(x) = f(g(x))$$

### 예시 1

- If $f(x) = x^2$ and $f(x) = 2x+1$
    - then $(g \circ f)(x) = g(f(x)) = g(2x+1) = (2x+1)^2$

### 예시 2

> $g$를 $\set{a,b,c}$에서 자신으로 가는 함수라고 하고 $g(a) = b, g(b) = c, g(c) = a$라고 하자
>  
> $f$를 $\set{a,b,c}$에서 $\set{1,2,3}$로 가는 함수라고 하고 $f(a)=3, f(b)=2, f(c)=1$라고 하자
>
> $f$와 $g$의 합성은 무엇인가? 그리고 $g$와 $f$의 합성은 무엇인가? 

#### Solution

$f \circ g$ 합성 함수는 다음과 같다
 - $(f \circ g)(a) = f(g(a)) = f(b) = 2$
 - $(f \circ g)(b) = f(g(b)) = f(c) = 1$
 - $(f \circ g)(c) = f(g(c)) = f(a) = 3$

 $g \circ f$ 합성 함수는 정의되지 않는다, $f$의 공역은 $g$의 정의역의 부분집합이 아니기 때문이다

### 예시 3

> $f$와 $g$를 정수의 집합에서 정수의 집합으로 가는 함수이며 다음과 같이 정의된다
> 
> $$ f(x) = 2x + 3 \text{ and } g(x) = 3x + 2$$
> 
> $f$와 $g$의 합성은 무엇인가? 그리고 $g$와 $f$의 합성은 무엇인가? 

#### Solution

$f \circ g$ 합성함수와 $g \circ f$ 합성함수는 다음과 같다

- $(f \circ g)(x) = f(g(x)) = f(3x + 2) = 6x + 7$
- $(g \circ f)(x) = g(f(x)) = g(2x + 3) = 6x + 11$

--- 

## 함수의 그래프 (Graph of Functions)

> 정의 : $f$를 집합 A에서 B로 가는 함수라고 정의하자. 
> 
> 함수 $f$의 그래프 $G_f$ 는 `ordered pair`의 집합이다

$$G_f := \set{(a,b) \in A \times B \mid (a \in A) ∧ [f(a) = b] }$$

--- 

## 올림, 내림 함수 (Rounding Up and Down Functions)

> $f(x) = \lfloor x \rfloor$ 로 표시되는 `floor` 함수는 x와 같거나 작은 가장 큰 정수를 나타낸다.
>
> $n = \lfloor x \rfloor$ 라면, $n$은 $n \le x < n+1$를 만족하는 가장 큰 정수이다.

> $f(x) = \lceil x \rceil$ 로 표시되는 `ceil` 함수는 x와 같거나 큰 가장 작은 정수를 나타낸다.
>
> $n = \lceil x \rceil$ 라면, $n$은 $n-1 < x \le n$를 만족하는 가장 작은 정수이다.

*예시*

- $ \lfloor 3.5 \rfloor = 3$
- $ \lfloor 2 \rfloor = 2$
- $ \lfloor -1.3 \rfloor = -2$

- $ \lceil 3.5 \rceil = 4$
- $ \lceil 2 \rceil = 2$
- $ \lceil -1.3 \rceil = -1$

### floor, ceiling 함수의 유용한 속성 

- $\lfloor x \rfloor = n$ iff $n \le x < n+1$
- $\lceil x \rceil = n$ iff $n-1 < x \le n$

- $x-1 < \lfloor x \rfloor \le x \le \lceil x \rceil < x+1$

- $\lfloor -x \rfloor = - \lfloor x \rfloor $
- $\lceil -x \rceil = - \lceil x \rceil $

- $\lfloor x +n \rfloor = \lfloor x \rfloor + n $
- $\lceil x +n \rceil = \lceil x \rceil + n $

### 문제 : 함수의 속성 증명

> $x$가 실수라면, $ \lfloor 2x \rfloor = \lfloor x \rfloor + \lfloor x + \frac{1}{2} \rfloor$ 임을 증명하라

#### 풀이

$x = n + ε$ 이고 $n$이 정수, $0 \le ε < 1$라고 하자

*Case 1 : $ε < \frac{1}{2}$*

- $2x = 2n + 2ε$ and $\lfloor 2x \rfloor = 2n$, since $0 \le 2ε < 1$
- $\lfloor x + \frac{1}{2} \rfloor = n$, since $x + \frac{1}{2} = n + (\frac{1}{2} + ε)$ and $ 0 \le \frac{1}{2} + ε < 1$
- Hence, $ \lfloor 2x \rfloor = 2n $ and $\lfloor x \rfloor + \lfloor x + \frac{1}{2} \rfloor = n + n = 2n$

*Case 2 : $ ε \ge \frac{1}{2} $*

- $2x = 2n + 2ε = (2n+1) + (2ε - 1)$ and $\lfloor 2x \rfloor = 2n + 1$, since $ 0 \le 2ε - 1 < 1 $
- $ \lfloor x + \frac{1}{2} \rfloor = \lfloor (n + ε) + \frac{1}{2} \rfloor = \lfloor (n+1) + (ε-\frac{1}{2}) \rfloor = n + 1$, since $ 0 \le ε - \frac{1}{2} < 1$
- Hence, $ \lfloor 2x \rfloor = 2n + 1 $ and $ \lfloor x \rfloor + \lfloor x + \frac{1}{2} \rfloor = n + (n + 1)  = 2n + 1$

## 팩토리얼 함수 (Factorial Function)

> 정의 : $f:N \to Z^t$ (denoted by $f(n) = n!)은 첫 n개의 양수의 곱이다 when $n$ is a nonnegative integer and $f(0) = 0! = 1$

$$f(n) = n! = n \times (n-1) ... 3 \times 2 \times 1 $$
