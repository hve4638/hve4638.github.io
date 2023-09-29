---
title: "이산수학 | 양화사의 논리적 동등과 드모르간 법칙, bound와 free, scope"
author: Hve
date: 2023-09-30 01:51:28 +0900
categories: [ 정리, "이산수학" ]
math: false
mermaid: false
tags: []
---

## 논리적 동등 (Logically equivalent)

술어를 포함하는 문은 동등한 진리값을 가질 경우 논리적으로 동등(logically equivalent)하다

`≡` 표기는 두 statement가 논리적으로 동등함을 나타낸다

### 예

- `∀x ¬(¬S(x)) ≡ ∀x S(x)`

---

## 양화사(Quantifier)와 논리곱(Conjunction), 논리합(Disjunction)

정의역(domain)이 유한할 경우

전체 양화사(universally quantifier)를 가진 술어는 술어들의 논리곱(conjunction)과 동일하다

존재 양화사(existentially quantifier)를 가진 술어는 술어들의 논리합(disjunction)과 동일하다

### 예

`U = {1, 2, 3}` 의 경우

- `∀x P(x) ≡ P(1)∧P(2)∧P(3)`
- `∃x P(x) ≡ P(1)∨P(2)∨P(3)`

*정의역이 무한한 경우도 이렇게 생각할 수 있지만 식이 무한히 늘어나게 될 것이다*

## 양화사의 부정 (드모르간의 법칙)

- `¬(∃x J(x)) ≡ ∀x ¬J(x)`
- `¬(∀x J(x)) ≡ ∃x ¬J(x)`

---

## 루이스 캐롤의 예시

첫 두개의 문장은 `가정(premises)`이고, 세번째 문장은 `결론(conclusion)`이다

1. "All lion are fierce"
2. "Some lions do not drink coffee"
3. "Some fierce creatures do not drink coffee"

위 문장을 아래 술어 논리문으로 변환할 수 있다.

1. `∀x (P(x) → Q(x))`
2. `∃x (P(x) ∧ ¬R(x))`
3. `∃x (Q(x) ∧ ¬R(x))`

---

## valid, satisfiable, unsatisfiable

### valid

술어와 양화사를 포함하는 문장이 다음과 같은 경우 `타당하다(valid)`

- 모든 정의역에 대해서
- 모든 명제 함수에 대해 참일 경우

#### 예시

- `∀x ¬S(x) ↔ ¬(∃x S(x))`

### satisfiable

다음과 같은 술어의 경우 `성립한다(satisfiable)`

- 몇몇 정의역에 대해
- 몇몇 명제 함수가 술어로 대체가능

#### 예시

- `∀x (F(x) ↔ T(x))` : 타당하지 않지만(not valid) 성립한다(satisfiable)

### unsatisfiable

satisfiable 하지 않은경우

#### 예시

- `∀(F(x) ∧ ¬F(x))` : 성립하지 않음(unsatisfiable)

---

## bound, free variable

변항 `x`에 대해, 양화사에 의해 `x`가 사용되는 경우, 이를 범위에 든다(bound)고 한다

양화사에 의해 bound되어 있지 않거나, 특정 값이 지정되지 않은 경우(상수가 아닌경우), 이를 범위를 벗어났다고(free) 한다

### 예시

- `∃x (x + y = 1)`
- `x` 는 `bound variable (기속 변항)`
- `y` 는 `free variable (자유 변항)`

---

## 양화사의 범위 (scope)

양화사의 범위는 변항이 양화사에 의해 bound되는 assertion의 부분을 의미한다

### 예시

- `∀x (F(x ∨ S(x)))` : `x` 는 넓은 범위를 가진다
- `(∀x F(x)) ∨ (∀y S(y))` : `x` 는 좁은 범위를 가진다

