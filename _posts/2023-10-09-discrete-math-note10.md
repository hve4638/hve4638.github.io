---
title: "이산수학 | 집합 (Sets)"
author: Hve
date: 2023-10-09 19:08:03 +0900
categories: [ "공부", "이산수학" ]
math: true
mermaid: false
tags: []
---

# 집합 (Set)

집합은 이산수학에서 고려되는 객체유형의 기본구성 요소중 하나다

`집합(set)`은 순서가 없는 객체의 모음(collection of objects)이다

`집합`의 개체를 `원소(element)`또는 `구성원(member)`라고 한다

$a∈A$ 표기는 $a$가 집합 $A$의 요소임을 나타낸다

## 객체의 순서

집합은 원소의 순서가 중요하지 않다
- $S = \{a,b,c,d\}= \{b,c,a,d\}$ 

또, 중복이 의미가 없다. 각각의 고유한 개체는 구성원이거나 구성원이 아니다
- $S = \{a, a, b, c\} = \{a, b, c\}$

패턴이 확실한 경우 모든 구성원을 나열하지 않고 *줄임표(...)*를 사용할 수 있다
- $S = \{a, b, c, ... , z\}$

### 원소 표기법 (Roaster Notation)

10보다 작은 모든 양수인 홀수 집합
- $V = \{1,3,5,7,9\}$

100보다 작은 모든 양수 집합
- $O = \{1,2,3,...,99\}$

0보다 작은 모든 정수 집합
- $S = \{...,-3,-3,-1\} = \{-1,-2,-3,...\}$

## 중요한 집합

- $N$ = 자연수 집합 = $\{0, 1, 2, 3,...\}$
- $Z$ = 정수 집합 = $\{..., -3, -2, -1, 0, 1, 2, 3, ...\}$
- $Z^+$ = 양수 집합 = $\{1,2,3,...\}$
- $Q$ = 유리수 집합
- $R$ = 실수 집합
- $R^+$ = 양수인 실수 집합
- $C$ = 복수수 집합

## set-builder 표기법

모든 구성원이 만족하는 속성을 지정한다

- $S = $ \{ $x∈Z \mid$ $x$ 는 100보다 작은 양수 \}
- $O = $ \{ $x∈Z \mid$ $x$ 는 100보다 작은 양수인 홀수 \}
- $O = $ \{ $x∈Z \mid$ $x$ is odd and $x < 100$ \}

술어를 사용할 수도 있다

- $S = $ \{ $x∈Z \mid P(x)$ \}
- 예시:
    - $S = $\{ $x∈Z \mid Prime(x)$ \}
    - $Q^+ = $\{ $x∈R \mid$ $x=\frac{p}{q}$, for some positive $p$ and $q$ \}

## 구간 표기법 (Interval Notation)

| Notation | description |
|----------|-------------|
| (a, b)   | \{$x \mid a < x < b$\} |
| [a, b]   | \{$x \mid a \leq x \leq b$\} |
| [a, b)   | \{$x \mid a \leq x < b$\} |
| (a, b]   | \{$x \mid a < x \leq b$\} |
| (a, ∞)   | \{$x \mid a < x $\} |
| [a, ∞)   | \{$x \mid a \leq x$\} |
| (-∞, b)   | \{$x \mid x < b$\} |
| (-∞, b]   | \{$x \mid x \leq b$\} |
| (-∞, ∞)   | $R$ (set of all real numbers) |

- 열린구간 : (a, b), (a, ∞), (−∞, b), (−∞, ∞)
- 닫힌구간 :  [a, b], [a, ∞), (−∞, b], (−∞, ∞)
- 열렸으면서 닫힌구간 (Both open and closed interval) : (-∞, ∞), ∅ = (a, a)
- 열리지도 닫히지도 않은 구간 : [a, b), (a, b] 
    - half open interval, half closed intervals 로 부르기도 한다

## 전체집합과 공집합 (Universal Set and Empty Set)

`전체집합(universal set)` $U$는 현재 고려중인 모든 것을 포함하는 집합이다
- 암시적, 또는 명시적으로 언급된다
- 내용은 상황에 따라 바뀐다

`공집합(empty set, null set)`은 아무 원소도 없는 집합을 뜻한다

- ∅ 심볼을 사용하거나, \{\}로 표기한다

## 러셀의 역설 (Russell's Paradox)

> $ S = $ \{ $X \mid X ∉ X$ \} 인 집합에 대해서
> $S$는 스스로를 포함하는가?

## 집합의 특성

*집합은 집합을 포함할 수 있다*
- $\set{\set{1,2,3},a,\set{b,c}}$
- $\set{N,Z,Q,R}$

*공집합과 공집합을 포함한 집합은 다르다*
- ∅ ≠ \{ ∅ \}

## 집합의 상등 (Set Equality)

*Definition : Two sets are `equal` if and only if they have the same elements*

따라서 $A$와 $B$라는 집합에 대해서 다음과 같은 경우에만 동일하다
- $∀x(x∈A ↔ x∈B)$

## 부분집합 (Subset)

*Definition : The Set A is a subset of B, if and only if every element A is also an element of B*

"집합 $A$는 집합 $B$의 부분집합이다"를 표기하면 $A ⊂ B$ (또한 $B ⊃ A$)

두 집합이 완전히 동일한 경우를 포함한다면 $⊆$와 $⊇$를 사용한다

$A ⊂ B$ holds if and only is $∀x(x∈A→x∈B)$ is true
1. $a ∈ ∅$는 항상 거짓이므로, 모든 집합 $S$에 대해 $∅ ⊆ S$ 이다
2. $a ∈ S → a ∈ S$ 이므로, 모든 집합 $S$에 대해 $S ⊆ S$ 이다

*Definition : The set A is proper subset(진부분집합) of B, if and only if $A ⊆ B$ and $A \neq B$*
- *It denoted by $A ⊊ B$ or $B ⊋ A$*

### 집합의 부분집합 여부 판단하기

집합 $A$가 집합 $B$의 부분집합임을 보이기:
- $A ⊂ B$임을 보이기 위해, $x$가 $A$에 속하면 $B$에도 속함을 나타내면 된다

집합 $A$가 집합 $B$의 부분집합이 아님을 보이기:
- $A ⊈ B$임을 보이기 위해, $x ∈ A$면서 $x ∉ B$인 $x$를 찾아라
    - $x$는 $x ∈ A$이면, $x ∈ B$라는 주장에 대한 반례(counterexample)이다

*예시*

1. 학교의 *모든 컴퓨터공학 전공 학생* 집합은 *학교 모든 학생 집합*의 부분집합이다
2. *100보다 작은 제곱을 갖는 정수 집합*은 *음이 아닌 정수 집합*의 부분 집합이 아니다

## 집합의 상등 파악하기

*WIP* *DN_05_P17*

## 진부분 집합 (Proper subset)

*Definition : $A ⊂ B$이지만 $A ≠ B$ 라면, A는 B의 진부분집합(proper subset)이다.*

*$A ⊂ B$라면,* 

$$
 [∀x(x∈A → B)] ∧ [∃x(x∈B ∧ x ∉ A)]
$$
는 참이다.

## 집합의 크기 (Set Cardinality)

*Definition : $S$에 정확히 n개의 개별 요소가 있고 n이 음이 아닌 정수라면, $S$는 유한하다(finite). 그렇지 않다면 무한하다(infinite)*

*Definition : 유한한 집합 $A$의 크기(cardinality)는 \|$A$\|로 표기하며, $A$의 고유한 원소 수를 나타낸다*

### 예시

1. \|∅\| $= 0$
2. $E$를 영어 알파벳을 담은 집합이라고 했을때, \|$E$\| $= 26$
3. \|$\set{1,2,3}$\| $= 3$
4. \|\{∅\}\| $= 1$
5. 정수의 집합은 무한하다.
    - 무한한 크기를 $א_0$로 표기하고, *aleph zero(알레프 제로)*라고 읽는다
