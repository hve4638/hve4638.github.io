---
title: "이산수학 | 이산 확률 (Discrete Probability)"
author: Hve
date: 2023-12-10 17:46:40 +0900
categories: ["공부", "이산수학"]
math: true
mermaid: false
tags: []
---

## Laplace의 정의 

키워드
- `experiment`는 일련의 가능한 결과 중 하나를 산출하는 절차
- `표본 공간(sample space)`는 가능한 결과의 집합
- `사건(event)`는 `표본 공간`의 하위 집합

> 정의 : $S$가 유한한 표본 공간이고 $E$가 하나의 사건, 즉 $S$의 부분 집합이라면, $E$의 확률은 $P(E) = \mid E \mid / \mid S \mid$ 이다

모든 사건 E에 대해, $0 \le P(E) \le 1$이다

## 문제 : Laplace의 정의 

> 문제 1: 항아리에 파란공 4개와, 빨간 공 5개가 들어있다. 항아리에서 파란 공이 선택될 확률은?

*풀이*

가능한 결과는 $9$이고 이 중 $4$개가 파란 공이 나오므로 $4/9$ 이다

> 문제 2: 두 주사위를 굴렸을 때, 두 주사위의 숫자 합이 7이 될 확률은?

*풀이*

곱셈 규칙에 따라 $6^2 = 36$ 가지의 가능한 결과가 있고, 이 중 두 합이 7이 되는 결과는 $6$가지이므로, 나올 확률은 $6/36 = 1/6$ 이다

> 문제 3: 복권에서 플레이어가 임의로 지정된 4개의 숫자를 맞추면 큰 상금을 받는다. 플레이어가 상금을 받을 확률은?

*풀이*

플레이어가 선택하는 방법은 $10^4 = 10000$가지이다

정확한 숫자를 고르는 방법은 한가지이므로 당첨 확률은 $1/10^4 = 0.0001$ dlek

> 문제 4: *문제 4*에서 3자리만 맞추면 작은 상금을 받는다. 작은 상금을 받을 확률은?

*풀이*

한 자리가 틀리는 방법은 각 $9$개이다

따라서 합 규칙에 따라 총 36개의 방법이 있고 작은 상금을 받을 확률은$36/10000 = 0.0036$이다

> 문제 5: 복권에서 40개의 숫자중, 7개의 숫자를 정확히 고를 확률은?

*풀이*

$1 / {40 \choose 7}$ 

> 문제 5 : 숫자가 적은 공 50개가 들어있는 상자에서 11,4,17,39,23이 순서대로 뽑힐 확률은?

*풀이*

두가지 경우가 있다

1. 선택된 공이 다시 상자로 들어가지 않는다 (비복원 추출)
2. 선택된 공이 다시 상자로 들어간다 (복원 추출)

*1번의 경우*

확률은 $\frac{1}{50 \cdot 49 \cdot 48 \cdot 47 \cdot 46 \cdot 45}$ 이다

*2번의 경우*

확률은 $\frac{1}{50^5}$ 이다


## 사건의 여집합

> 정리 1: 사건 $E$는 표본 집합 $S$의 부분 집합이라고 하자
>
> $E$의 여집합$E^c = S / E$의 확률은 다음과 같이 쓸 수 있다

$$P(E^c) = 1 - P(E)$$

*문제*

> 임의의 10bit 값이 선택되었을 때, 이 bit중 하나 이상의 bit가 0일 확률은?

*풀이*

$$P(E) = 1 - P(E^c) = 1 - \frac{\mid E^c \mid}{\mid S \mid} = 1 - \frac{1}{2^{10}} = \frac{1023}{1024}$$

## 사건의 합집합

> 정리 2: 사건 $E_1$과 $E_2$가 표본 집합 $S$의 부분 집합이라고 하자. 그럼 다음과 같다

$$P(E_1 \cup E_2) = P(E_1) + P(E_2) - P(E_1 \cap E_2)$$

*문제*

> 100을 초과하지 않는 양의 정수 중 임의의 양의 정수가 2또는 5로 나눌수 있는 확률은 얼마인가?

*풀이*

$S$를 1과 100 사이의 정수를 가진 표본 집합이라고 하자

- $E_1$은 2로 나눌 수 있는 $S$의 부분 집합
- $E_2$은 5로 나눌 수 있는 $S$의 부분 집합

그럼, 다음과 같다

- $E_1 \cup E_2$은 2 또는 5로 나눌 수 있는 $S$의 부분 집합
- $E_1 \cap E_2$은 2와 5로 나눌 수 있는 $S$의 부분 집합

따라서 확률은 다음과 같다

$$P(E_1 \cup E_2) = P(E_1) + P(E_2) - P(E_1 \cap E_2) = \frac{50}{100} + \frac{20}{100} - \frac{10}{100} = \frac{3}{5} = 0.6 0 $$

## 확률 이론

이전 Laplace 정의는 모든 결과가 동일하다고 가정했다

$S$를 유한한 수의 결과를 같는 실험의 표본 집합이라고 하고, 각 결과 s에 확률 P(s)를 할당하면 다음과 같다

- $0 \le P(s) \le 1$ for each $s \in S$
- $\sum_{s \in S}P(s) = 1$


표본 집합 $S$의 모든 결과 집합에서 나온 함수 $P$를 확률 분포라고 한다

## 균등 분포

> 정의 : $S$가 $n$개의 요소로 구성된 집합이라고 가정하자.
>
> 균일 분포는 S의 각 요소에 $1/n$을 할당한다 (여기에 Laplace의 정의를 사용할 수도 있다)

*예시*

- 앞뒤가 나올 확률이 같은 동전 던지기를 했을때 각 면이 나올 확률은 다음과 같다
    - $P(H) = P(T) = 1/2$

## 사건의 확률

> 정의: (유한한) 사건 $E$의 확률은 $E$의 결과 확률의 합이다

$$P(E) = \sum_{s \in E}P(s)$$

## 문제

> 문제 : 주사위가 편향되어 3이 다른 면보다 두 배 자주 나타나지만 나머지 5면이 나올 확률은 동일하다고 가정하자. 이 주사위를 굴려 홀수가 나올 확률은 얼마인가?

*풀이*

이 문제에서 우리는 사건 $E=\set{1,3,5}$의 확률을 알고 싶다

$P(3) = 2/7$이며 나머지는 $1/7$ 임을 알고 있다

따라서 $P(E) = P(1) + P(3) + P(5) = \frac{1}{7} + \frac{2}{7} +\frac{1}{7} = \frac{4}{7}$ 이다

## 새로운 정의에서 여집합과 합집합의 유효성

여집합 : 여전히 유효하다

합집합 : 여전히 유효하다

## 사건의 조합

> 정리: 표본 집합 $S$에서 $E_1, E_2, \cdots E_n$이 서로소 사건(parewise disjoint events)라면, 다음과 같다

$$ P(\bigcup^n_{i=1}E^i) = \sum^n_{i=1} P(E^i) $$

## 조건부 확률

> 정의: $E, F$를 사건이라 하고 $P(F) > 0$이라고 하자. $F$가 주어졌을 때, $E$의 조건부 확률은 $P(E\mid F)$로 표시되며 다음과 같이 정의된다

$$P(E\mid F) = \frac{P(E \cap F)}{P(F)}$$

## 문제 : 조건부 확률

*예시*

> 길이4 비트 문자열이 무작위로 생성되어 16개의 비트문자열이 동등한 확률을 가질 때, 첫번째 비트가 0이라고 가정할 때, 이 문자열에 연속된 0이 두 개 이상 포함될 확률은?

*풀이*

$E$를 연속된 0이 둘 이상 포함된 비트문자열의 사건이라고 하고, $F$를 첫 비트가 0인 사건이라고 하자

- $E \cap F = \set{0000,0001,0010,0011,0100}, P(E \cap F) = 5/16$ 이다
- 0으로 시작하는 비트문자열은 16개 중 8개이다 : $P(F) = 8/16 = 1/2$

따라서 다음과 같다

$$P(E \mid F) = \frac{P(E \cap F)}{P(F)} = \frac{\frac{5}{16}}{\frac{1}{2}} = \frac{5}{8}$$


*예시 2*

> 두 자녀를 둔 가정에 적어도 한명의 남아가 있을 때, 그 가정에 두명의 남아가 있을 조건부 확률은 얼마인가? 단, { BB, BG, GB, GG } 의 각 가능성은 모두 동일하다 (B가 남아, G가 여아)

*풀이*

$E$를 남아가 둘인 사건이라 하고, $F$를 적어도 한명이 남아인 사건이라 하자

- $F = $ {BB, BG, GB}, $P(F) = 3/4$
- $E = $ {BB}, $P(E) = 1/4$
- $F \cap E$ = {BB}, $P(F \cap E) = 1/4$

따라서 다음과 같다

$$P(E \mid F) = \frac{\frac{1}{4}}{\frac{3}{4}} = \frac{1}{3}$$

## 독립 (Independence)

> 정의 : 사건 $E, F$가 독립적일때 if and only if $P(P \cap F) = P(E)P(F)$ 이다

## 문제 : 독립

*예시 1*

> 임의로 생성된 길이 4 비트문자열을 생성했을 때, 비트 문자열이 1로 시작하는 경우를 사건 E라고 하고, 비트 문자열에 짝수 개의 1이 포함된 경우를 F라고 가정하자
>
> 임의로 생성된 16개의 비트 문자열의 확률이 동일하다면 E와 F는 독립적인가?

*풀이*

- $E \cap F = \set{1111,1100,1010,1001} $, $P(E \cap F) = 1/4$
- $E$는 16개 중 8개, $P(E) = 1/2$
- $F = \set{0000, 1100, 1010, 1001, 0110, 0101, 0011, 1111}, P(F) = 1/2$

$$P(E \cap F) = \frac{1}{4} = \frac{1}{2}\frac{1}{2} = P(E)P(F)$$

따라서 E, F는 독립적이다

*예시 2*

> 두 자녀를 둔 가정이 있고 자녀의 성별이 결정되는 방법의 확률이 동일하다고 가정하자 (BB, BG, GB, GG)
>
> 자녀가 둘인 가정에 남아가 2명인 경우인 사건 E와, 남아가 1명이상인 경우인 사건 F는 독립적인가?

*풀이*

- E = {BB}, $P(E) = 1/4$
- F = {BB, BG, GB}, $P(F) = 3/4$
- $E \cap F$ = {BB}, $P(E \cap F) = 1/4$

$$P(E \cap F) = \frac{1}{4} \ne \frac{1}{4} \cdot \frac{3}{4} = P(E)P(F)$$

따라서 E, F는 독립적이지 않다

## 쌍별 독립, 상호 독립 (Paiswise and Mutual Independence)

> 정의 : 사건 $E_1, E_2, \cdots E_n$은 쌍별 독립(pairwise independence)이다 iff $P(E_i \cap E_j) = P(E_i)P(E_j)$ 인 경우라면

> 정의 : $P(E_{i_1} \cap E_{i_2} \cdots E_{i_k}) = P(E_{i_1}) P(E_{i_2}) \cdots P(E_{i_k})$ 인 경우를 상호 독립(mutual independence)이라고 한다

두 사건이 독립이라면 그 둘을 쌍별 독립이라고 한다. 모든 사건이 서로 독립인 경우 상호 독립이라고 한다

$E_1$과 $E_2$가 쌍별 독립이고 $E_2$와 $E_3$이 쌍별 독립이라도 $E_1$과 $E_3$이 쌍별 독립인 것은 아니다

## 베르누이 시행 (Bernoulli trail)

> 정의 : 실험(experience)의 결과가 주가지 결과만 존재한다고 가정하자 (ex. 동전 던지기)

- 실험의 각 결과를 베르누이 시행이라 한다
- 이러한 결과를 success, failure라고 한다
- p가 성공 확률이고 q가 실패 확률이라면 $p+q = 1$이다

여러 experience가 상호 독립적인 n개의 베르누이 시행으로 구성될 때, k개의 성공 확률을 결정하는 문제가 많다

## 문제 : 동전 던지기

> 동전이 편향되어 앞면이 나올 확률이 2/3이다. 동전을 일곱 번 던졌을 때 정확히 앞면이 4개 나올 확률은?

*풀이*

$2^7=128$개의 가능한 결과가 있다

7번의 뒤집기 중, 앞면이 될 수 있는 경우의 수는 ${7 \choose 4}$ 이며 각 결과의 확률은 $(2/3)^4(1/3)^3$ d이다.

따라서 정확히 4개가 앞면이 나올 확률은 다음과 같다

$${7 \choose 4}(\frac{2}{3})^4(\frac{1}{3})^3$$

## n개의 독립적인 베르누이 시행에서 k개를 성공할 확률

> 정의 2: 성공확률 p, 실패확률 q=p-1 인 n번의 독립적인 베르누이 시행에서 정확히 k번 성공할 확률은 다음과 같다

$${n \choose k}p^{k}q^{n-k}$$

이를 다음과 같이 나타낼 수 있다

$$b(k: n, p) = C(n, k)p^{k}(1-p)^{n-k}$$

## Random variable

> 정의 : `random variable`은 실험의 표본 공간에서 실수 집합으로의 함수이다. 즉, random variable은 각 가능한 결과에 실수를 할당한다

*주의:* Random variable은 **함수**이며 변수가 아니고, 랜덤하지도 않다

> 정의 : 표본 공간 $S$에서 random variable $X$의 `분포`는 $r \in X(S)$에 대해 모든 쌍($r, p(X=r)$)의 집합이며, 여기서 $P(X = r)$은 $X$가 $r$을 취할 확률이다

*예시*

동전을 3번 던졌다고 가정하고, 결과가 $t$일 때, $X(t)$를 앞면이 나온 개수를 나타내는 random variable이라 하자

그럼 $X(t)$는 다음과 같다

$$X(HHH) = 3, X(TTT)=0$$

$$X(HHT) = X(HTH) = X(THH) = 2$$

$$X(TTH) = X(THT) = X(HTT) = 1$$

## 생일 문제

`생일 문제`는 실제 직관과 달리 생일이 겹치기 위해 필요한 사람의 수가 생각보다 적음을 나타내는 문제다

*풀이*

모든 생일의 확률이 똑같고, 1년이 366일이라 가정한다

먼저, $n$명 중 최소 2명의 생일이 다를 확률 $p_n$을 구한다 ($n \ge 2$)

따라서 최소 두 사람의 생일이 겹칠 확률은 $1-p_n$이다

- 두번째 사람의 생일이 첫번째 사람의 생일과 다를 확률은 $365/366$
- 세번째 사람의 생일이 다른 두 사람의 생일과 다를 확률은 $364/366$
- 일반적으로, 방에 있는 모든 사람의 생일이 다르다고 가정할 때 $j$번째 사람이 다른 사람의 생일과 다를 확률은 $\frac{366-(j-1)}{366}= \frac{367-j}{366}$ 이다

따라서 $P_n = (365/366)(364/366) \cdots (367-n)/366$ 이다

그러므로 다음과 같다

$$1-P_n = 1 - \frac{365}{366} \cdot \frac{364}{366} \cdots \frac{365-(n-1)}{366}$$

$$= 1- \frac{365!}{366^{n-1}(365-n+1)!} = 1 - \frac{366!}{366^n(366-n)!}$$

확률 확인을 위해 $n$에 22, 23을 대입해 보면
- $1-P_{22}$은 대략 $0.475$이다
- $1-P_{23}$은 대략 $0.506$이다

결과적으로, 최소 23명의 사람만 있어도 생일이 겹칠 확률은 $1/2$을 넘어간다

## Monte Carlo 알고리즘

하나 이상의 단계에서 무작위 서낵을 하는 알고리즘을 `확률적 알고리즘`이라 한다

`Monte Carlo 알고리즘`은 "참", "거짓"이 답인 문제의 결정에 사용되는 확률적 알고리즘이다

- Monte Carlo 알고리즘은 일련의 테스트로 구성된다
    - 각 테스트에 대해 알고리즘은 "참" 또는 "알 수 없음"으로 응답한다
- 응답이 "참"이면 알고리즘은 "참"이라는 답으로 종료한다
- 모든 단계가 "알 수 없음"을 산출하는 일련의 테스트를 실행 후 알고리즘은 "거짓"을 출력한다
- 충분한 수의 테스트가 수행되는 한 "거짓"을 출력할 확률은 매우 적어야 하는 것이 이 아이디어의 핵심

즉, 테스트 동안 한번이라도 "참"이라면 "참"이며 모두 "알 수 없음"이라면 "거짓"이다

## 확률적 소수 판별법 (Probabilistic Primarlity Testing)

확률적 소수 판별법은 RSA 암호화를 위한 암호키를 생성하기 위해 큰 소수를 찾는 데 사용하는 Monte Carlo 알고리즘의 예

- 1보다 큰 정수 n이 Miller's Test에 실패하면 $1 < b < n$을 기본으로 하는 임의의 정수 $b$를 사용하여 합성수로 표시할 수 있다.
    - 그러나 base b에 대해 $n$이 Miller's Test를 통과하면 소수이거나 합성수일수 있다
    - 합성수가 임의의 b에 대해 Miller's Test를 통과할 확률은 $1/4$보다 낮다
- 테스트에 실패하려면 Monte Carlo 알고리즘에서 "참"이 나와야 하며, 성공하기 위해선 모든 테스트를 "알 수 없음"으로 통과해야 한다
- 테스트가 $k$번 수행되고(매번 다른 b를 선택) 숫자 n이 모든 반복에서 밀러 테스트를 통과한다면, $n$이 합성수 일 확률은 $(1/4)^k$ 보다 작다. 따라서 충분히 $k$가 큰 경우, Miller's Test의 모든 $k$ 반복을 통과했음에도 $n$이 합성수일 확률은 낮다
    - 예를 들어 $k$가 10이라면 합성수일 확률은 $1/1000000$ 이다