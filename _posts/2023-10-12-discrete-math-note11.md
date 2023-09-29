---
title:  "이산수학 | 집합 연산 (Set Operation)"
author: Hve
date: 2023-10-12 17:58:36 +0900
categories: [ "공부", "이산수학" ]
math: true
mermaid: false
tags: []
---

## 부울 대수 (Boolean Algebra)

명제 미적분과 집합록은 모두 부울 대수라고 하는 대수 체계의 일부다

집합론의 연산자는 명제적 미적분학의 연산자와 유사하다

항상 전체 집합 $U$가 존재해야 하며, 모든 집합은 $U$의 하위집합이다

## 집합의 연산

### 교집합 (Intersection)

> 정의 : $A$와 $B$의 교집합을 다음과 같이 정의한다
> - $A \cap B := \set{ x \in U \mid (x \in A) ∨ (x \in B)}$ 

*예시:*

- $\set{1,2,3} \cap \set{3,4,5} = \set{3} $
- $\set{1,2,3} \cap \set{4,5,6} =  \emptyset$

### 합집합 (Union)

> 정의: $A$와 $B$의 합집합을 다음과 같이 정의한다

$$A \cup B := \set{ x \in U \mid (x \in A) ∨ (x \in B)} $$


*예시:*

- $\set{1,2,3} \cup \set{3,4,5} = \set{1,2,3,4,5} $

#### 두 집합의 합집합의 크기 (The Cardinality of the union of two sets)

$$\vert A \cup B \vert = \vert A \vert + \vert B \vert - \vert A \cap B \vert$$s

### 차집합 (Difference)

> 정의 : $A$와 $B$의 차집합을 다음과 같이 정의한다

$$A \backslash B := \set{ x \in U \mid (x \in A) ∧ (x \notin B)}$$ 

### 여집합 (Complement)

> 정의 : $A$의 여집합을 $\overline{A}$로 나타내고, $U$ \\ $A$라고 한다

$$\overline{A} = A^c = A^`= \complement A := \set{x \in U \mid x \notin A}$$

*예시:*

- $U$가 100보다 작은 정수일때, $\set{x \mid x > 70}$의 여집합은?
    - 답 : $\set{x \mid x < 70}$


### 대칭차집합 (Symmetric Difference)

> 정의 : $A$와 $B$의 대칭 차집합은 $A ⊕ B$, $A △ B$로 표시하고 다음과 같이 정의한다

$$ A ⊕ B = A △ B = (A \backslash B) \cup (B \backslash A)$$

### 집합의 항등원 (Set Indentities)

항등 법칙 (Identity laws)
- $A \cup \emptyset = A$
- $A \cap U = A$

지배 법칙 (Domination laws)
- $A \cup U = U$
- $A \cap \emptyset = \emptyset$

멱등 법칙 (Idempotent laws)
- $A \cup A = A$
- $A \cap A = A$

멱등 법칙 (Idempotent laws for complementation)
- $\overline{\overline{A}} = A$

교환 법칙 (Commutative laws)
- $A \cup B = B \cup A$
- $A \cap B = B \cap A$

결합 법칙 (Associative laws)
- $A \cup (B \cup C) = (A \cup B) \cup C$ 
- $A \cap (B \cap C) = (A \cap B) \cap C$ 

드모르간 법칙 (De Morgan’s laws)
- $\overline{A \cup B} = \overline{A} \cap \overline{B}$
- $\overline{A \cap B} = \overline{A} \cup \overline{B}$

흡수 법칙 (Absorption laws)
- $A \cup (A \cap B) = A$
- $A \cap (A \cup B) = A$

보 법칙 (Complement laws)
- $A \cup \overline{A} = U$
- $A \cap \overline{A} = \emptyset$

## 집합의 항등원 증명

여러 방법

1. 각 집합이 서로의 부분집합임을 증명하기
2. set-builer 표기법을 사용하고 술어 논리를 적용하기
3. 멤버십 테이블 (Membership Tables)

## 드모르간 법칙의 증명

> $\overline{A \cap B} = \overline{A} \cup \overline{B}$ 임을 증명하기

### 증명1 : 서로의 부분집합임을 증명

다음을 증명해 항등임을 증명할수 있다
1. $\overline{A \cap B} \subset \overline{A} \cup \overline{B}$
2. $\overline{A \cap B} \supset \overline{A} \cup \overline{B}$

#### $\overline{A \cap B} \subset \overline{A} \cup \overline{B}$ 풀이

1. $x \in \overline{A \cap B}$          <span style="color:green"># 전제</span>
2. $x \notin A \cap B$                  <span style="color:green"># complement 법칙</span>
3. $¬[(x \in A) ∧ (x \in B)]$          <span style="color:green"># intersection 법칙</span>
4. $¬(x \in A) ∨ ¬(x \in B)$           <span style="color:green"># 드모르간 법칙 적용</span>
5. $(x \notin A) ∨ (x \notin B)$       <span style="color:green"># 술어논리의 부정 적용</span>
6. $(x \in \overline{A}) ∨ (x \in \overline{B})$    <span style="color:green"># complement 법칙</span>
7. $\overline{A} \cup \overline{B}$     <span style="color:green"># union 법칙</span>

#### $\overline{A \cap B} \supset \overline{A} \cup \overline{B}$ 풀이

1. $x \in \overline{A} \cup \overline{B} $      <span style="color:green"># 전제</span>
2. $(x \in \overline{A}) ∨ (x \in \overline{B}) $
3. $(x \notin A) ∨ (x \notin B) $
4. $¬(x \in A) ∨ ¬(x \in B) $
5. $¬((x \in A) ∧ (x \in B)) $
6. $¬(x \in A \cap B) $
7. $x \in \overline{A \cap B}$

### 증명2 : set-builder 표기 : 드로므간 법칙

- $\overline{A \cap B}$
- $ = \set{x \in U \mid \overline{A \cap B}}$ 
- $= \set{x \in U \mid ¬[x \in (A \cap B)] }$
- $= \set{x \in U \mid ¬[(x \in A) ∧ (x \in B)] }$
- $= \set{x \in U \mid ¬(x \in A) ∨ ¬(x \in B) }$
- $= \set{x \in U \mid (x \notin A) ∨ (x \notin B) }$
- $= \set{x \in U \mid (x \in \overline{A}) ∨ (x \notin \overline{B}) }$
- $= \set{x \in U \mid x \in (\overline{A} \cup \overline{B}) }$
- $= \overline{A} \cup \overline{B} $

---

## Membership Table

### 예시

분배 법칙이 성립함을 보이기 위해 Membership 테이블을 구성하기

$$A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$$

| $A$ | $B$ | $C$ | $B \cup C$ | $A \cup (B \cap C)$ | $A \cup B$ | $A \cup C$ | $(A \cup B) \cap (A \cup C)$ |
|-----|-----|-----|------------|---------------------|------------|------------|------------------------------|
|  1  |  1  |  1  |     1      |  1                  |  1         | 1          | 1                            |
|  1  |  1  |  0  |     0      |  1                  |  1         | 1          | 1                            |
|  1  |  0  |  1  |     0      |  1                  |  1         | 1          | 1                            |
|  1  |  0  |  0  |     0      |  1                  |  1         | 1          | 1                            |
|  0  |  1  |  1  |     1      |  1                  |  1         | 1          | 1                            |
|  0  |  1  |  0  |     0      |  0                  |  1         | 0          | 0                            |
|  0  |  0  |  1  |     0      |  0                  |  0         | 1          | 0                            |
|  0  |  0  |  0  |     0      |  0                  |  0         | 0          | 0                            |

