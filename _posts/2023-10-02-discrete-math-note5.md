---
title: "이산수학 | 중첩된 양화사 (Nesting Quantifier)"
author: Hve
date: 2023-10-02 02:05:28 +0900
categories: [ "공부", "이산수학" ]
math: true
mermaid: false
tags: []
---

## 중첩된 양화사 (Nested quantifier)

### 예시

*"모든 실수는 덧셈 역원이 존재한다"*

- `∃x (∀y (x + y = 0))`

이를 중첩된 술어 함수로 볼 수 있다

- `∃x Q(x)`
- `Q(x)` is `∃y P(x,y)`
- `P(x,y)` is `x + y = 0`

---

## 중첩된 양화사의 평가 방법

`∀x∀y P(x, y)` 에 대해

- `x` 값에 대해 루프
    - 각 스탭에 대해 `y` 값에 대해 루프
    - `P(x, y)`가 거짓인 `x-y` 쌍이 발견된다면, `∀x∀y P(x, y)`는 거짓이므로 외부 루프 종료
- 각 스탭을 모두 통과하고 외부 루프가 종료되면 `∀x∀y P(x, y)`는 참

`∀x∃y P(x, y)` 에 대해

- `x` 값에 대해 루프
    - 각 스탭에 대해 `y` 값에 대해 루프
    - `P(x, y)`가 참인 `x-y` 쌍이 발견되면 내부 루프 종료
    - `P(x, y)`가 참인 `y`가 발견되지 않으면, `∀x∃y P(x, y)`는 거짓이므로 외부 루프 종료
- 각 스탭을 모두 통과하고 외부 루프가 종료되면 `∀x∃y P(x, y)`는 참

---

## Order of Quantifier (양화사 순서)

`P(x,y)` denotes `x + y = y + x`

- `∀x∀y P(x,y)` is true

`P(x,y)` denotes `x + y = 0`

- `∀x∃y P(x,y)` is true
- `∃x∀y P(x,y)` is false

`P(x,y)` denotes `x * y = 0`

- `∀x∀y P(x,y)` is false
- `∀x∃y P(x,y)` is true
- `∃x∀y P(x,y)` is true
- `∃x∃y P(x,y)` is true

`P(x,y)` denotes `x / y = 0`

- `∀x∀y P(x,y)` is false
- `∀x∃y P(x,y)` is false
- `∃x∀y P(x,y)` is false
- `∃x∃y P(x,y)` is true

### Quantifications of two variable

| statement | 참 | 거짓 | 예시 `P(x,y)`|
|-----------|----|-----|--------------|
| `∀x∀y P(x,y)` | 모든 `x y` 쌍이 참 | 거짓인 `x y` 쌍이 존재 | `x+y = y+x`|
| `∀x∃y P(x,y)` | 각 `x`에 대해 참인 `y`가 존재 | 모든 `y`에 대해 거짓인 `x`가 존재 | `x-y = 0` |
| `∃x∀y P(x,y)` | 모든 `y`에 대해 참인 `x`가 존재 | 각 `x`에 대해 거짓인 `y`가 존재 | `x*y = 0` |
| `∃x∃y P(x,y)` | 참인 `x y` 쌍이 존재 | 모든 `x y` 쌍이 거짓 | `x/y = 0` |

---

## Translate Statements

### Nested quantifiers를 문장으로 변환

*정의*
- `C(x)` denotes "`x`는 컴퓨터를 가진다"
- `F(x,y)` is "`x`와 `y`는 친구"
- 정의역 `x`, `y` 는 학교 내 모든 학생

`∀x( C(x) ∨ ∃y(C(y)∧F(x,y)) )`

*Translate as* "학교 내 모든 학생은 컴퓨터를 가지거나, 컴퓨터를 가진 친구가 있다"

`∃x∀y∀z( (F(x,y)∧F(x,z)∧(y!=z)) → ¬F(y,z) )`

*Translate as* "친구 중 서로 친구가 아닌 학생이 존재한다"

*의문 : `∃x∀y∀z( (F(x,y)∧F(x,z)∧(y!=z)) ∧ ¬F(y,z) )`* 도 동일하게 해석되나?

### 문장을 술어 논리로 변환

*"두 양수의 합은 항상 양수이다" 를 술어 논리로 표현*

1. 양화사와 정의역이 표현되도록 문장을 고친다
    - "모든 두 정수에 대해, 두 정수가 모두 양수라면, 두 정수의 합은 양수이다"

2. 변항 `x`,`y`를 도입하고, 정의역을 지정
    - "모든 양수 `x`와 `y`에 대해, `x + y`는 양수이다"

3. 변환 결과
    - `∀x∀y( (x > 0) ∧ (y > 0) → (x+y > 0) )` where the domain of both variables consists of all integers.

### 문장을 술어 논리로 변환

*"전 세계 항공사의 비행기를 타본 여성이 있다" 를 술어 논리로 표현*

1. 정의역과 술어 정의
    - `w`의 정의역은 "모든 여성"
    - `a`의 정의역은 "모든 항공사"
    - `f`의 정의역은 "모든 비행기"
    - `P(w, f)` denotes "w는 f를 타보았다"
    - `Q(a, f)` denotes "a는 f를 가졌다"

2. 변환 결과
    - `∃w∀a∃f(Q(a,f) ∧ P(w,f))`


### 예제 : 엡실론-델타 논법

> 실수 변수 $x$와 실수값 $a$에 대해 양화사를 사용해서 실수값 $f(x)$의 극한을 정의하기

$$ \lim_{i\to a} f(a) = L $$

#### 풀이

모든 실수 $ ε>0 $ 에 대해, $0< \mid x-a \mid < δ$ 일 때 $\mid f(x) - L \mid < ε$  인 실수 $δ > 0$가 존재한다

술어논리 변환
- $ε$, $δ$의 정의역이 모든 양의 정수이고 $x$의 정의역이 모든 실수일 때
- $∀ε∃δ( (0 < \mid x-a \mid  < δ) → ( \mid f(x) - L \mid < ε) )$


### 중첩된 양화사 부정

*"전 세계 항공사의 비행기를 타본 여성이 있다" 의 부정*

- `¬(∃w∀x∃f(P(w,f) ∧ Q(a,f)))`

*드모르간 법칙을 이용해 부정을 최대한 안쪽으로 이동*

1. `¬(∃w∀a∃f(P(w,f) ∧ Q(a,f)))`
2. `∀w ¬(∀a∃f(P(w,f) ∧ Q(a,f)))`
3. `∀w ∃a ¬(∃f(P(w,f) ∧ Q(a,f)))`
4. `∀w ∃a ∀f ¬(P(w,f) ∧ Q(a,f))`
5. `∀w ∃a ∀f (¬P(w,f) ∨ ¬Q(a,f))`
6. `∀w ∃a ∀f (P(w,f) → ¬Q(a,f))`
    - `p ∨ q ≡ ¬p → q`
    - `p` 의 경우 항상 참이다
    - `¬p`의 경우만 `q`에 따라 참/거짓을 정한다

*다시 문장 변환*

- "모든 여성에 대해, 그 여성이 비행기을 타지 않은 항공사가 존재한다. 또는 비행기를 가지고 있지 않은 항공사가 존재한다"
- "For every woman there is an airline such that for all flights, this woman has not taken that flight or that flight is not on this airline"

*이렇게 복잡하게 변환할 경우, 일상 문장으로 바꾸기 어려워진다*

