---
title: "이산수학 | 증명(proof) - 1"
author: Hve
date: 2023-10-04 11:06:45 +0900
categories: [ "공부", "이산수학" ]
math: true
mermaid: false
tags: []
---
## 용어

### 증명 (Proof)

증명은 서술문(statement)의 진실을 입증하는 유효한 논증(valid argument)이다

### 정리 (theorem)

`theorem`는 다음을 이용해 참임을 보여줄 수 있는 서술문이다

- 정의 (definition)
- 또다른 정리 (other theorem)
- 공리 (axioms)
- 추론 규칙 (rules of inference)

### (보조정리) lemma

`lemma`는 정리를 증명하는데 필요한 'helping theorem' 또는 결과이다.

### 따름정리 (corollary)

`corollary`는 정리에서 바로 이어지는 결과이다

### 가설 (conjecture)

`conjecture`는 참으로 제안되는 statement다.

`conjecture`에 대한 증명이 발견되면 이것은 정리가 된다. 거짓으로 판명날 수도 있다.

### theorems의 형태 (Forms of Theorems)

종종 전칭 양화사(theorems의 정확한 서술문을 위해 필요한 경우)는 생략되는 경우가 많다.

예시 :

- statement : "If x > y, where x and y are positive real numbers, then x^2 > y^2"
- 실제로는 다음을 의미한다 : "For all positive real number x and y, if x > y, then x^2 > y^2"

## Proving Theorems

*실제로 정리를 증명할 필요는 없지만 아래에서 학습을 위해 threorm을 증명해본다*

많은 theorems 는 다음 형태를 가진다:

- `∀(P(x)→Q(x))`

이를 다음처럼 나타낼 수 있다

- where c is an arbitrary element of the domain
- `P(c)→Q(c)` 

보편화(Universal generalization)을 통해 원래 공식을 나타내게 된다

이런 과정으로 다음 형태를 증명(proof) 할 수 있다

- `p→q`

---

## 조건문 증명 : P→Q (Proving conditional statements)

### 사소한 증명 (Trivial Proof)

*`q`가 참이면, `p → q` 또한 참이다*

- "비가 내린다면, `1 = 1` 이다."

### 공허한 증명(Vacuous Proof)

*`p`가 거짓이면, `p → q` 는 참이다*

- "내가 부자이면서 거지면, `1+1 = 3`이다"

### 직접 증명 (Direct Proof)

*`p`가 참이라고 가정한다. 추론 규칙, 공리와 동치를 이용해 `q`도 참임을 보인다*

### 예시 1

*theorem "if n is an odd integer, then n^2 is odd"을 직접 증명하기*

#### 증명(Proof):

Assume that n is odd. Then `n = 2k+1` for an integer k.

$$
n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1 = 2m + 1
$$

where $ m = 2k^2 + 2k $ an integer. QED

### 예시 2

Definition : q != 0이고 r = p/q인 정수 p와 q가 있다면, 실수 r은 유리수다.

*Prove that the sum of two rational numbers is rational*

*두 유리수의 합이 유리수인걸 증명하기*

#### Proof

Assume that

- "r과 s은 유리수다"
- "그렇다면, 다음과 같은 정수 p, q, t, u가 존재해야 한다"

$$
    r = \frac{p}{q}, s = \frac{t}{u}
$$

where q != 0 and u != 0

$$
    r + s = \frac{p}{q} + \frac{t}{u} = \frac{pu + qt}{qu}
$$

where the numerator are integer and denominator are non-zero integers.

그러므로 합의 결과는 유리수다. QED

### 예시 3

*"정수 n에 대해  n^2이 홀수라면, n은 홀수다"를 증명하기*

#### Proof

($ n^2 $ is odd) → ($n$ is odd)

대우를 이용한 증명을 사용한다

n이 짝수라고 가정한다. 그럼 n = 2k 인 k가 존재한다

$$
    n^2 = (2k)^2 = 4k^2 = 2(2k^2)
$$

이므로 $n^2$ 는 짝수다

위에서 "n가 짝수라면, $n^2$는 짝수다" 를 위해서 보였다.

그러므로 대우를 통해 "$n^2$가 홀수라면, $n$은 홀수다"를 증명하였다. QED

## 귀류법 (Reductio Ad Absurbum, RAA)

**Proof by Contradiction:**

어떤 명제가 참이라고 가정한 후, 모순을 이끌어내 그 가정이 거짓임을 증명하는 방법

- `p`를 증명하기 위해 `¬p`를 가정하고 `p ∧ ¬p` 와 같은 모순을 유도한다
- 이후 `¬p → F`가 참임을 나타내면, 대우를 이ㅍ용해 `T → p` 임을 나타낼 수 있다

### 예시1

*"네가 22일을 달력에서 고를때, 적어도 4일은 같은 주에 속한다"를 증명하기*

#### Solution

???

memo. p.49

### 예시2



*$ \sqrt{2} $ 가 무리수임을 증명하기*

#### 풀이

sqrt(2)를 유리수라고 가정하자

그렇다면, $ \sqrt{2} $ ` = a/b` 인 정수 a와 0이 아닌 정수 b가 존재한다. a와 b는 공통 요소가 존재하지 않는다.

그럼, `2 = a^2/b^2` 이며, `2b^2 = a^2` 와 동치이다

그렇다면, `a^2`는 반드시 짝수이다. 그러므로 `a` 또한 짝수이며 `a = 2c`인 정수 c가 존재한다.

`2b^2 = a^2 = (2c)^2 = 4c^2`, 따라서 `b^2 = 2c^2` 이다

그러므로 `b^2` 또한 짝수이며, `b`도 짝수이다

a와 b는 2라는 공통 요소를 가지며, 앞선 가정에서 a와 b는 공통 요소가 존재하지 않는다는 것과 배치된다

이 배치됨을 통해 초기 가정이 틀렸음을 확인할 수 있으며, 그러므로 sqrt(2)는 무리수이다

## 배치 (Contradiction)

모순되다 / 배치되다

## 문제 1 : 가장 큰 소수가 없음을 증명하기

*가장 큰 소수가 없음을 증명하기*

### Proof

가장 큰 소수가 있다고 가정하고 그것은 `P(n)` 이라고 하자

그러면, 소수의 목록을 `2, 3, ..., P(n)`으로 작성할 수 있다

$$ a = p(1) * P(2) * ... * P(n) + 1 $$

a가 1은 아니다. 또, 모든 소수의 곱으로 나누었을 때 1이 남게 되므로 소수는 a의 소인수가 될수 없으며 a는 소수이다.

이는 가장 큰 소수가 `P(n)`라는 것과 배치되며 이를 통해 첫 가정이 틀렸음을 알 수 있다.

따라서 가장 큰 소수는 존재하지 않는다

## 쌍조건문에 대한 정리 (theorems that are biconditional statements)

쌍조건문에 대한 theorem, 즉 `p↔q` 형식의 정리를 증명하려면, `p→q`와 `q→p`가 모두 참임을 보이면 된다

## 문제 2

*n이 정수라면, `n is odd iff n^2 is odd`임을 증명하기*

### Proof

이전에 이미 `p→q`와 `q→p`에 대해 증명했으니 생략한다

`p→q`, `q→p`가 모두 참이므로 `p↔q`이다

## 잘못된 증명 (Wrong Proof)

*1 = 2 를 증명하기*

1. `a = b`
2. `a^2 = ab`
3. `a^2 - b^2 = ab - b^2`
4. `(a-b)(a+b) = (a-b)b`
5. `a + b = b`
6. `b + b = 2b = b`
7. ∴ `2 = 1`

위 과정중 (5)에서 `a-b = 0`인 경우를 생각하지 않았으므로 잘못된 증명이다