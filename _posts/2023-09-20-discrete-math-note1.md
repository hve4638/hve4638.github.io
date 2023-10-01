---
title: "이산수학 | 명제, 논리 연산자, 진위표"
author: Hve
date: 2023-09-20 10:42:20 +0900
categories: [ "공부", "이산수학" ]
math: false
mermaid: false
tags: []
---

## 명제 (proposition)

- 참 또는 거짓을 나타내는 선언문

### 명제 논리 (Propositional Logic)

- 명제 변항 (Propositional Variable) : `p`, `q`, `r`, `s`, ...
    - 항상 참이라면 `T`, 항상 거짓이라면 `F` 로 표시
- 원자 명제 (Atomic Propositions) : 더 간단한 명제로 나눌 수 없는 명제
- 복합 명제 (Compound Propositions) : 명제와 논리 연산자(logical connectives)로 구성된다.

---

## 논리 연산자 (Logical Connectives)

- Negation(부정) : `¬`
- Conjunction(연언, 논리곱) : `∧`
- Disjunction(선언, 논리합) : `∨`
- Implication(함의, 조건문) : `→`
- Biconditional(동등, 쌍조건문) : `↔`

### 논리 연산자의 연산 순서 (Precedence of logical operators)

아래 순으로 먼저 계산한다

- `¬`
- `∧`
- `∨`
- `→`
- `↔`

--- 

## 역, 대우, 이 (Converse, Contrapositive, Inverse)

`p → q` 에 대해서

**역 (Converse)**
- `q → p`

**대우 (Contrapositive)**
- `¬q → ¬p`

**이 (Inverse)**
- `¬p → ¬q`

--- 

## 조건문, 함의 (Implication)

| p | q | p → q |
|---|---|-----|
| T | T |  T  |
| T | F |  F  |
| F | T |  T  |
| F | F |  T  |

- `p`가 `T`인 경우, `q`에 따라 참, 거짓이 결정된다.
- `p`가 `F`인 경우, `q`는 독립적으로 결정되는 요소기 때문에 `p→q`는 항상 참이 된다.

### 여러 표현 방법

- `p → q`
- if `p`, then `q`
- if `p`, `q`
- `q` unless `¬p`
- `q` if `p`
- `q` whenever `p`
- `q` follows from `p`

- `p` implies `q`
- `p` only if `q`
- `q` when `p`

- `p` is sufficient for `q`
- `q` is neccessary for `p`

---

## 쌍조건문 (Biconditional)

| p | q | p → q |
|---|---|-----|
| T | T |  T  |
| T | F |  F  |
| F | T |  F  |
| F | F |  T  |

- 두 명제의 진리값이 같은 경우 `T`가 되고 그렇지 않다면 `F`가 된다.

### 표현법

`p ↔ q`

`p` is necessary and sufficient for `q`

if `p` then `q`, and conversely

`p` iff `q`

--- 

## 진위표 (truth table)

**Rows**
- 모든 atomic propositions(원자 명제)의 가능한 조합만큼 필요
- n개의 aotmic propositions이 있다면 2^n개의 행 필요

**Columns**
- compound proposition(복합 명제)에 대한 열
- compound proposition가 구축될 때, 각 표현식의 진리값에 대한 열
- aotmic propositions을 포함한다

### 예시

`p ∨ q → ¬r` 에 대해 진위표 구성

| p | q | r | ¬r | p ∨ q | p ∨ q → ¬r |
|---|---|---|----|--------|-------------|
| T | T | T | F  |   T    |      F      |
| T | T | F | T  |   T    |      T      |
| T | F | T | F  |   T    |      F      |
| T | F | F | T  |   T    |      T      |
| F | T | T | F  |   T    |      F      |
| F | T | F | T  |   T    |      T      |
| F | F | T | F  |   F    |      T      |
| F | F | F | T  |   F    |      T      |

---

## 동등 (Equivalent)

두 명제의 진위값이 항상 같을 경우 동등(equivalent)하다.

ex) 명제와 그 대우(contrapositive)는 동등하다.


<!-- $$ x = \frac{-b \pm \sqrt{b^2-4ac}}{2a} $$ -->
