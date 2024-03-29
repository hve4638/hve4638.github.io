---
title: "이산수학 | 추론 규칙(Rules of Inference) - 1"
author: Hve
date: 2023-10-02 14:25:25 +0900
categories: [ "공부", "이산수학" ]
math: true
mermaid: false
tags: []
---

## 논증 (The Argument)

술어 논리(predicate logic)에서 전제(premise)와 결론(conclusion)의 나열을 논증(argument)라고 한다

### 예시 : 소크라테스의 삼단논법

1. 사람은 죽는다 (전제)
2. 소크라테스는 사람이다 (전제)
3. 소크라테스는 죽는다 (결론)

이를 논증(argument)으로 변환할 수 있다

- `∀x(Man(x)→Mortal(x))` - 전제
- `Man(Socrates)` - 전제
- ∴ `Mortal(Socrates)` - 결론

---

## 타당한 논증 (valid arguments)

명제 논리의 추론은 명제의 나열(sequence of propositional)이다

마지막 명제를 제외한 명제가 전제(premises), 마지막 명제가 결론(conclusion)이다

전제가 결론을 암시하는 경우, 유효한 추론이라 할 수 있다

### 명제 변항 치환

*명제를 명제 변항으로 치환하는 경우에도 유효한 추론이다*

- 전제 : $$ p_1, p_2, p_3, ... $$

- 결론 : $$ q $$

이라면,

$$ (p_1 ∧ p_2 ∧ p_3 ...) → q $$

는 항진식(tautology)이다.

---

## 추론 규칙 (Rules of Inference)

### 전건 긍정 (Modus Ponens)

- `p → q`
- `p`
- ∴ `q`

항진식 : `(p ∧ (p→q)) → q`

### 후건 부정 (Modus Tollens)

- `p → q`
- `¬q`
- ∴ `¬p`

항진식 : `(¬q ∧ (p→q)) → ¬p`

### 가언적 삼단 논법 (Hypothetical Syllogism)

- `p→q`
- `q→r`
- ∴ `p→r`

항진식 : `((p→q) ∧ (q→r)) → (p→r)`

### 선언적 삼단논법 (Disjunction Syllogism)

- `p∨q`
- `¬p`
- ∴ `q`

항진식 : `(¬p ∧ (p ∨ q)) → q`


### 선언 도입 논법 (Addition)

- `p`
- ∴ `p∨q` (`q`가 무엇이든 신경쓰지 않는다)

항진식 : `p → (p ∨ q)`

### 연언 소거 논법 (Simplification)

- `p∧q`
- ∴ `p`

항진식 : `(p ∧ q) → p`

### 연언 도입 논법 (Conjunction)

- `p`
- `q`
- ∴ `p∧q`

항진식 : `(p ∧ q) → (p ∧ q)`

### 분해 증명 (Resolution)

- `¬p∨r`
-  `p∨q`
- ∴ `q∨r`

항진식 : `((¬p∨r)∧(p∨q)) → (q ∨ r)`

---

## 문제

### 문제 1

    모든 아테네 사람은 영리하고(1), 모든 스파르타인은 영웅적이다(2).

    두 도시간 깊은 불신이 있어 이중도시 시민권이 불가능하다. (3)

    연구자들은 회의의 손님으로 그리스를 방문했는데, 연구원을 제외하고 회의에 참석한 모든 사람은 두 도시 중 한 곳에서 왔다(4).

    연구자들은 데오게네스, 플라톤, 유클리드라는 세 사람과 대화를 나눴다.

    유클리드는 "플라톤이 스파르타라면 디오게네스는 겁쟁이다!" 라고 말했다. (5)

    플라톤은 "유클리드가 스파르타라면 디오게네스는 겁쟁이다!" 라고 말했다. (6)

    또, "그러나 디오게네스가 아테네인이라면 유클리드는 겁쟁이다!" 라고 말했다. (7)

    디오게네스는 "플라톤이 아테네인이라면 유클리드는 바보다!" 라고 말했다. (8)

    날카로운 언변에도 불구하고, 세 명은 모두 진실을 말하고 있다. 누가 어느 도시에서 왔는가?
    

#### 풀이

- `A(x)` is "아테네 인이다"
- `S(x)` is "스파르타 인이다"
- `R(x)` is "연구원이다"
- `C(x)` is "영리하다"
- `H(x)` is "영웅적이다"

각 주장을 추론 논리로 변환

1. ∀x (A(x) → C(x))
1. ∀x (S(x) → H(x))
1. ∀x ¬(S(x) ∧ A(x))
1. ∀x (Meeting(x) → S(x) ∨ A(x) ∨ R(x))
1. S(p) → ¬H(d)
1. S(e) → ¬H(d)
1. A(d) → ¬H(e)
1. A(p) → ¬C(e)

4-8번 전제를 1-4번 전제에 따라 아테네 인과 스파르타 인이다로 바꾼다

1. S(p) → A(d)
1. S(e) → A(d)
1. A(d) → A(e)
1. A(p) → S(e)

3번 명제에 따라 아테네 인인지만 고려한다

1. ¬A(p) → A(d)
1. ¬A(e) → A(d)
1. A(d) → A(e)
1. A(p) → ¬A(e)

술어 논리로 변환한다

- `(¬A(p) → A(d)) ∧ (¬A(e) → A(d)) ∧ (A(d) → A(e)) ∧ (A(p) → ¬A(e))`
- `≡ (A(p) ∨ A(d)) ∧ (A(e) ∨ A(d)) ∧ (¬A(d) ∨ A(e)) ∧ (¬A(p) ∨ ¬A(e))`

진리표를 작성한다

| A(p) | A(d) | A(e) | ¬A(p) | ¬A(d) | ¬A(e) | A(p) ∨ A(d) | A(e) ∨ A(d) | ¬A(d) ∨ A(e) | ¬A(p) ∨ ¬A(e) | (A(p) ∨ A(d)) ∧ (A(e) ∨ A(d)) ∧ (¬A(d) ∨ A(e)) ∧ (¬A(p) ∨ ¬A(e)) |
|------|------|------|-------|-------|-------|--------------|--------------|---------------|---------------|------|
|  T   |   T  |  T   |   F   |   F   |   F   |      T       |      T       |       T       |       F       |  F   |
|  T   |   T  |  F   |   F   |   F   |   T   |      T       |      T       |       F       |       T       |  F   |
|  T   |   F  |  T   |   F   |   T   |   F   |      T       |      T       |       T       |       F       |  F   |
|  T   |   F  |  F   |   F   |   T   |   T   |      T       |      F       |       T       |       T       |  F   |
|  F   |   T  |  T   |   T   |   F   |   F   |      T       |      T       |       T       |       T       |  `T` |
|  F   |   T  |  F   |   T   |   F   |   T   |      T       |      T       |       F       |       T       |  F   |
|  F   |   F  |  T   |   T   |   T   |   F   |      F       |      T       |       T       |       T       |  F   |
|  F   |   F  |  F   |   T   |   T   |   T   |      F       |      F       |       T       |       T       |  F   |

따라서 결론은

- `∴ S(p) ∧ A(d) ∧ A(e)`

이 된다

---

### 문제 2

`p ∧ (p→q)`

*q가 결론이 되도록 추론하기*

1. `p ∧ (p→q)`  *추론(Premise)*
2. `p`      *연언 소거(Simplification)*
3. `p→q`    *연언 소거(Simplification)*
4. ∴ `q`   *전건 긍정(Modus Ponens)*

#∨# 문제 3

*가설을 추론으로 변환하기*

가설:

1. "It is not sunny this afternoon and it is colder than yesterday"
2. "We will go swimming only if it is sunny"
3. "If we do not go swimming, then we will take a canoe trip."
3. "If we take a canoe trip, then we will be home by sunset."

결론:

- "We will be home by sunset"

#### 풀이

명제 논리 변환

- p : "It is sunny this afternoon"
- q : "it is colder than yesterday"
- r : "we will go swimming"
- t : "we will be home by sunset"
- s : "we will take a canoe trip"

추론

1. `¬p ∧ q` *추론*
2. `¬p` *연언 소거*
3. `r → p` *추론*
4. `¬r` *연언 소거 using (2), (3)*
5. `¬r → s` *추론*
6. `s`  *전건 긍정 using (4), (5)*
7. `s → t` *추론*
8. ∴ `t` *전건 긍정*
