---
title: "이산수학 | 추론 규칙(Rules of Inference) - 2"
author: Hve
date: 2023-10-03 15:07:18 +0900
categories: ["학습", "강의노트"]
math: false
mermaid: false
tags: ["이산수학"]
---

## 한정 서술문에 대한 유효한 논증 (Valid arguments for quantified statements)

유효한 논증은 일련의 서술문(a sequence of statement)이다

각 서술문은 전제(premise)이거나, 이전 서술문으로부터 추론 규칙(rueles of interence)에 의해 유도된 것이다.

---

## 추론 규칙(Rules of Inference)

### Universal Instantiation (UI, 전칭 실례화 논법)

1. `∀x P(x)`
1.  ∴ `P(c)`

*예시:*

- *정의역은 모든 개이며 Fido는 개이다*
- "모든 개는 귀엽다"
- "그러므로, Fido는 귀엽다"

### Universal Generalization (UG, 보편화 논법)

1. `P(c) for an arbitrary c` (임의의 c에 대해 P(c))
1. ∴ `∀x P(x)`

*수학적 증명(Mathematical Proof)에서 암시적으로 자주 사용된다*

### Existential Instantiation (EI, 특칭 사례화 논법)

1. `∃x P(x)`
1. ∴ `P(c) for some element c`

*예시:*
- "누군가 수업에서 A를 받았다"
- "누구를 c라고 지칭하고 c는 수업에서 A를 받았다"

### Existential Generalization (EG, 특칭 개괄화 논법)

1. `P(c) for some element c`
1. ∴ `∃x P(x)`

*예시:*
- "Michelle는 수업에서 A를 받았다."
- "그러므로, 누군가는 수업에서 A를 받았다."

---

## 문제

### 문제 1

*추론 규칙을 이용해 유효한 논증을 작성하기*

- "모든 사람은 두 다리가 있다" (전제)
- "John은 사람이다" (전제)
- "John은 두 다리가 있다" (결론)

#### 풀이

*denote*

- `P(x)` is "x는 사람이다"
- `L(x)` is "x는 두 다리가 있다"

*valid argument*

1. `∀x (P(x)→L(x))` # 전제
2. `P(John)→L(John)` # UI using (1)
3. `P(John)` # 전제
4. `L(John)` # 전건 긍정 using (2), (3)

### 문제 2

*추론 규칙을 이용해 논증을 작성하기*

- "이 반의 한 학생이 책을 읽지 않았다" (전제)
- "이 반의 모든 학생이 첫 시험에 합격했다" (전제)
- "첫 시험에 합격한 누군가가 책을 읽지 않았다" (결론)

#### 풀이

*denote*

- `C(x)` is "`x`는 학생이다"
- `P(x)` is "`x`는 시험에 합격했다"
- `R(x)` is "`x`는 책을 읽었다"

*symbolic form*

- `∃x (C(x) ∧ ¬R(x))`
- `∀x (C(x) → P(x))`
- ∴ `∃x (p(x) ∧ ¬R(x))`

*valid argument*

1. `∃x (C(x) ∧ ¬R(x))` # 전제
2. `C(a) ∧ ¬R(a)` # EI using (1)
3. `C(a)` # 연언 소거 using (2)
4. `¬R(a)` # 연언 소거 using (2)
5. `∀x (C(x) → P(x))` # 전제
6. `C(a) → P(a)` # UI using (5)
7. `P(a)` # 전건 긍정 using (3), (6)
8. `P(a) ∧ ¬R(a)` # 연언 도입 using (4), (7)
9. `∃x (P(x) ∧ ¬R(x))` # EG using (8)

### 소크라테스 삼단논법의 유효한 논증

*argument*

- `∀x (Man(x) → Mortal(x))`
- `Man(Socrates)`
- ∴ `Mortal(Socrates)`

*valid argument*

1. `∀x (Man(x) → Mortal(x))` # 전제
2. `Man(a) → Mortal(a)` # UI using (1)
3. `Man(a)` # 전제
4. ∴ `Mortal(Socrates)` # 전건 긍정 using (3)

### 추가 추론 규칙 : UNIVERSAL MODUS PONENS

전칭 실례화(universal instantiation)와 전건 긍정(modus ponens)를 규칙 하나로 합친 것

- `∀x (P(x) → Q(x))` # 전제
- `P(a)` where a is a particular element in the domain
- ∴ `Q(a)`