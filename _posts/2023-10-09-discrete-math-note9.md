---
title: "이산수학 | 증명(proof) - 2"
author: Hve
date: 2023-10-09 01:11:20 +0900
categories: [ "공부", "이산수학" ]
math: true
mermaid: false
tags: []
---

## Proof by cases

`(p1 ∨ p2 ∨ p3 ∨ ... ∨ pn) → q`

Use the tautology:

- `[(p1 ∨ p2 ∨ p3 ∨ ... ∨ pn) → q] ↔ [(p1 → q) ∨ (p2 → q) ∨ ... (p1 → q)]`

Each of the implications `pi → q` is a case

### 예시1 : Proof by cases

$$ a @ b= Min\{a,b\} = \begin{cases} a, if a \geq b  \\ b, otherwise \end{cases} $$ 

실수 a, b, c 에 대해

$ (a @ b) @ c = a @ (b @ c) $ 임을 보여라

#### 증명

`a, b, c` 가 임의의 실수라고 가정하자

그럼, 6가지 경우를 생각 할 수 있다

1. $ a \geq b \geq c $ 
2. $ a \geq c \geq b $ 
3. $ b \geq a \geq c $ 
4. $ b \geq c \geq a $ 
5. $ c \geq a \geq b $ 
6. $ c \geq b \geq a $ 

*1번째 케이스의 경우* : $ a \geq b \geq c $

$ a @ b = a, a @ c = a, b @ c = b $

그러므로, $ (a @ b) @ c = a = a @ (b @ c) $

따라서 첫번째 케이스의 경우 eqaulity가 유지된다.

나머지 다섯가지 케이스에 대해서도 같은 방식으로 동등성이 유지됨을 증명할 수 있다.

## Without loss of generality

### 예시2 : Without loss of generality

*`x`와 `y`가 정수이며 `x*y`와 `x+y`가 짝수라면, `x`와 `y` 모두 짝수임을 증명하라*

#### 증명

대우에 의한 증명(proof by contraposition)을 사용한다.

`x`와 `y`가 모두 짝수가 아니라고 가정하자. 그럼, `x*y`또는 `x+y` 중 하나 혹은 모두가 홀수이다

일반성을 잃지 않기 위해(Without loss of generality), `x`가 홀수라 가정하면, `x = 2m + 1`인 정수 `m`이 존재한다.

*Case 1: y가 짝수인 경우*

`y`가 짝수라면, `y = 2n` 인 정수 `n`이 존재한다

- `x + y = 2m + 1 + 2n = 2(n + m) + 1` 는 홀수이다

*Case 2: y가 홀수인 경우*

`y`가 홀수라면, `y = 2k + 1` 인 정수 `k`가 존재한다

- `x * y = (2m + 1) * (2k + 1) = 4km + 2m + 2k + 1 = 2(2km + k + n) + 1` 은 홀수이다

위에서는 `x`가 홀수인 경우만 다루었는데, `y`가 홀수인 경우와 동일하기 때문이다.

이를 `without loss of generality(WLOG)`라고 부른다

## 존재 증명 (Existence Proofs)

$ ∃x P(x) $ 형식의 theorems 증명

*구성적 존재 증명법 (constructive proof of existence)*
- `P(c)` 가 참인 명시적인 값 `c`을 찾는다
- 그렇다면 $ ∃x P(x) $ 는 특칭 개괄화(Existential Generalization, EG)에 의해 참이다 

### 예시

*두가지 다른 방법으로 양의 정수의 세제곱의 합으로 쓸 수 있는 양의 정수가 있음을 보여라*

#### 증명

*1729*가 존재한다

$$ 1729 = 10^3 + 9^3 = 12^3 + 1^3 $$

## 비구성적 존재 증명 (Nonconstructive Proof of Existence)

직접 `P(c)`를 참으로 하는 `c`를 찾지 않고 배치됨을 찾는다

### 예시

$x^y$ *가 유리수가 되게 하는 무리수 x와 y가 있음을 보여라*

#### 증명

$\sqrt{2}$ 는 무리수임을 알고 있다

$\sqrt{2}^{\sqrt{2}}$ 에 대해

- 이것이 유리수라면, $ x = \sqrt{2}, y = \sqrt{2} $ 인 `x`, `y`가 존재한다.
- 이것이 무리수사면, $ x = \sqrt{2}^{\sqrt{2}}, y = \sqrt{2} $ 인 `x`, `y`가 존재한다.
    - $x^y = (\sqrt{2}^{\sqrt{2}})^{\sqrt{2}} = \sqrt{2}^{\sqrt{2} \sqrt{2}} = \sqrt{2} ^ 2 = 2$ 
    - $x^y$는 유리수다

## 반례 (Conterexamples)

Recall $ ∃x¬P(x) ↔ ¬(∀xP(x)) $ .

$¬(∀xP(x))$가 참이라고 했을 때 (또는 $∀xP(x)$이 거짓이라고 했을 때), $¬P(c)$가 참이거나 $P(c)$가 거짓인 `c`를 찾는다

이 경우, `c`를 assertion $∀xP(x)$ 에 대한 반례(counterexample)라고 한다

### 예시

> 모든 양의 정수는 3개의 정수의 제곱의 합이다

#### 반례 (counterexample)

정수 *7*은 반례이다. 따라서 이 주장은 틀렸다.

## 유일성 증명 (Uniqueness proof)

몇몇 theorems은 $ ∃!P(x) $ 에 대해 유일한 원소만이 그 특성을 가지는 경우가 있으며 이 경우 유일성이라 하며, 이를 증명하는 것이 유일성 증명이라 한다

유일성 증명의 두가지 부분은 아래와 같다

- Existence(존재) : `x` 가 주어진 특성을 가짐을 보인다
- Uniqueness(유일성) : `x = y`라면 `y`는 특성을 가지지 않음을 보인다

### 예시

> a와 b가 실수이며* $a \neq 0$ 이다. 그럼 $ ar + b = 0 $을 만족하는 유일한 실수 `r`이 존재한다

#### 증명

- Existence
    - $ r = -b/a $
- Uniqueness
    - $ as + b = 0 $을 만족하는 `s`가 있다고 가정하자, 그럼 $ ar + b = as + b$ 이고 $ r = -b/a$ 이다
    - 양변에서 `b`를 빼고, `a`를 나누면 $ r = s $ 이

## 증명 전략 : P→Q 증명을 위한 전략 (Proof Strategies for proving P→Q)

*방법 선택*

1. 먼저 직접 증명(Direct proof)를 시도하기
2. 안된다면, 간접적인 증명을 시도하기 (대우에 의한 증명 등)

*전략 선택*

1. 전방 추론(forward reasoning)을 시도하기
    - 공리로 알려진 정리로 시작해 결론으로 끝나는 일련의 단계를 구성
    - `p` 로 시작해 `q`를 증명하거나, `¬q`로 시작해 `¬p`를 증명하기
2. 안된다면, 후방 추론(backward reasoning)을 시도하기
    - `q`를 증명하려 할 때, `p→q` 속성으로 증명할 수 있는 `p`를 찾기

## 후방 추론, 역추론 (Backward Reasoning)

### 예시

> 두 사람이 15개의 돌로 시작하는 더미에서 한번에 1-3개의 돌을 차례로 제거하는 게임을 한다고 가정하자, 마지막 돌을 제거하는 사람이 승리한다
> 두번째 플레이어가 무엇을 하든 첫번째 플레이어가 승리할 수 있음을 보여라

#### 증명

n이 게임의 남은 진행 횟수라고 했을 때:

- `step n = 0` : Player1은 더미의 돌이 1-3개라면, 승리할 수 있다
- `step n = 1` : Player2는 더미의 돌이 4개라면, 패배한다
- `step n = 2` : Player1은 더미의 돌이 5-7개라면, 4개로 만들 수 있다
- `step n = 3` : Player2가 더미의 돌을 5-7개 남기기 위해 차례시작시 8개가 남아야 한다
- `step n = 4` : Player1은 더미의 돌이 9-11개라면, 8개로 만들 수 있다
- `step n = 5` : Player2가 더미의 돌을 9-11개 남기기 위해 차례시작시 12개가 남아야 한다
- `step n = 6` : Player1은 더미의 돌을 3개 제거해 12개를 남길 수 있다

이제 전방 추론을 통해, 첫 플레이어가 돌을 3개 제거해 돌을 12개 남기면 승리할 수 있다

## Universally Quantified Assertions

$∀x P(x)$ 형태를 증명하려면, $x$가 모든 정의역 멤버이며 $P(x)$가 항상 참임을 보여야 한다

$∀x P(x)$을 유도하기 위해 UG(보편화)를 사용한다

### 예시

> 정수 x에 대해, "$x$ is even" iff "$x^2$ is even"

#### 증명

양화사 assert문은 $∀x$ [$x$ is even ↔ $x^2$ is even] 이다

$x$가 임의의 정수라 가정하자

$p→q$는 $(p→q)∧(p←q)$와 동치라는 것을 기억하자

그럼 두가지 케이스로 나누어 생각할 수 있다

1. $ p→q $ 파트 (only if, necessity)
    - $x$는 짝수라고 가정하면, $x = 2k$인 $k$가 존재한다
    - $x^2 = (2k)^2 = 4k^2 = 2(2k^2)$
    - 그러므로 $x^2$는 짝수이다

2. $ p→q $ 파트 (if, sufficiency)
    - 대우를 통해 증명한다 ($¬q →¬p$)
    - $x$가 홀수라고 가정하면, $x = 2s+1$인 $s$가 존재한다
    - $x^2 = (2s+1)^2 = 4s^2 + 4s + 1 = 2(2s^2+2s) + 1$
    - 그러므로 $x^2$는 홀수이다
    - 대우를 통해 증명했으므로 $x^2$가 짝수이면, $x$는 짝수이다

임의의 x에 대해 두 케이스 $p ↔ q$를 증명했고 UG를 통해 $∀x$($x$ is even ∧ $x^2$ is even)을 증명할 수 있다

### 증명과 반증 (Proof and Disproof)


