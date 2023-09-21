---
title: "이산수학 | 술어 논리, 양화사"
author: Hve
date: 2023-09-21 03:56:57 +0900
categories: [정리, 이산수학]
math: false
mermaid: false
tags: []
---

## Predicate logic (술어 논리)

- **변항 (Variable)** : x, y, z, ...
- **술어 (Predicates)** : P(x), M(x), ...
- **양화사 (Quantifier)**

## 명제 함수 (Propositional functions)

명제 함수(Propositional functions)는 명제의 일반화

- 여기에는 변항과 술어가 포함된다.
- 변항은 정의역(domain)의 요소로 대체된다.

### 예시

`P(x)` denotes `x > 0` 경우

then:

- `P(-3)` : false
- `P(0)` : false
- `P(3)` : true

정의역(domain)은 `U`로 나타낸다. 이 예시에서 `U`는 정수이다.

`P(x)` 를 만족하는 정의역 `U`의 요소 a (`P(a)`가 참이 되는 경우) 를 술어 `P(x)`에 대한 `정례 (example)`라고 한다.

그렇지 않은 경우를 `반례 (counterexample)`이라고 한다.

---

## Compound Expressions

`P(x)` denotes `x > 0` 경우

다음 표현은 진리값을 갖는다.
- `P(3) ∨ P(-1)` : `T`
- `P(3) ∧ P(-1)` : `F`
- `P(3) → P(-1)` : `F`
- `P(3) → ¬P(-1)` : `T`

변항을 가진 표현은 명제가 아니기 때문에 진리값을 가지지 않는다.

예시
- `P(3) ∧ P(y)`
- `P(x) → P(y)`

## 양화사, 한정자 (Quantifier)

- 전칭 양화사, 전체 한정자 (Universal Quantifier)
- 특칭 양화사, 존재 한정자 (Existential Quantifier)

### 전칭 양화사 (Universal Quantifier)

`∀x P(x)` 는 다음을 의미한다
- "For all `x`, `P(x)`"
- "For every `x`, `P(x)`"
- "모든 `x` 마다 `P(x)`"
- "`x`가 무엇을 취하든 `P(x)`"

any 라는 표현은 사용되지 않는다, every라는 의미인지 some라는 의미인지 모호하기 때문이다.

#### 예시

`Z`는 정수, `N`은 자연수를 의미한다

- If `P(x)` denotes `x > 0` and `U = Z`, then `∀x P(x)` is false
- If `P(x)` denotes `x > 0` and `U = N`, then `∀x P(x)` is true
- If `P(x)` denotes `x is even` and `U = Z`, then `∀x P(x)` is false

### 특칭 양화사 (Existential Quantifier)

`∃x P(x)`는 다음을 의미한다.
- "For some `x`, `P(x)`"
- "There is an `x` such that `P(x)`"
- "`P(x)`인 `x`가 존재한다"
- "적어도 하나의 `x`가 존재해서 `P(x)`"

#### 예시

- if `P(x)` denotes `x > 0` and `U = Z`, then `∃x P(x)` is true
- if `P(x)` denotes `x < 0` and `U = N`, then `∃x P(x)` is false

### 유일칭 양화사 (Uniqueness Quantifier)

`∃!x P(x)`는 다음을 의미한다.
- `P(x)` is ture for one and only one `x` in the universe of discourse
- `P(x)`는 참을 만족하는 `x`는 논의 영역(universe of discourse)에서 하나 있다
- There is a unique `x` such that `P(x)`

#### 예시

- If `P(x)` denotes `x + 1 = 0` and `U = Z`, then `∃!x P(x)` is true
- If `P(x)` denotes `x > 0` and `U = Z`, then `∃!x P(x)` is false

---

### 양화사 평가

논의 영역(universe of discourse)가 유한한 경우, 정의역의 요소를 루프를 돌며 양화할 수 있다

정의역의 모든 `x`에 대해 `∀x P(x)`를 평가할 때
- 모든 경우 `P(x)`가 참이면, `∀x P(x)`도 참이다.
- `P(x)`가 거짓인 경우가 있다면, `∀x P(x)`도 거짓이며 루프를 끝낸다.

정의역의 모든 `x`에 대해 `∃x P(x)`를 평가할 때
- `P(x)`가 참인 경우가 있다면, `∃x P(x)`도 참이며 루프를 끝낸다.
- 모든 경우 `P(x)`가 거짓이면, `∃x P(x)`도 거짓이다.

## 양화사의 우선순위 (Precedence of Quantifiers)

양화사 `∀`와 `∃` 는 모든 논리 연산자보다 우선순위가 높다.

- `∀x P(x) ∨ Q(x)` 는 `(∀x P(x)) ∨ Q(x)` 와 같다


## Translate from English to Logic

### 전칭 양화사의 경우

**"Every student in this class has taken a course in Java" 라는 문장을 변환한다면**

1. 먼저 정의역 `U`를 결정한다
    - `U` = "Every student in this class"`
2. 술어 `J(x)` 를 정의한다
    - `J(x)` = "x has taken a course in Java"
3. 결론
    - `∀x J(x)`

**정의역 `U`가 "all people" 인 경우**

4. 술어 `S(x)` 를 정의한다
    - `S(x)` = "x is a student in this class"
5. 결론
    - `∀(S(x) → J(x))`

**주의**
- `∀x (S(x) ∧ J(x))` 는 틀린 결론이다
- 해당 식은 학생인지 아닌지를 판단하지 않기 때문

### 특칭 양화사의 경우

**"Some student in this class has taken a course in Java"라는 문장을 변환한다면**

1. 정의역 `U`를 결정한다
    - `U` = "All student in this class"
2. 결론
    - `∃x J(x)`

**정의역 U가 "all people" 인 경우**

3. 결론
    - `∃x (S(x) ^ J(x))`

**주의**
- `∃x (S(x) → J(x))` 는 틀린 결론이다.
- "Java 수업을 듣는 것"은 반드시 "학생"이기 때문