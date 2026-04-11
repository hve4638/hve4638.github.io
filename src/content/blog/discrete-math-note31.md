---
title: "이산수학 | EXPECTED VALUE AND VARIANCE (完)"
author: Hve
date: 2023-12-17 18:26:26 +0900
categories: ["학습", "강의노트"]
math: true
mermaid: false
tags: ["이산수학"]
---

## 기댓값 (Expected Value)

> 정의 : 표본 공간 S에 대한 random variable X(s)의 `기댓값(expected value, expectation or mean)`은 다음과 같다

$$E(X) = \sum_{s \in S}P(s)X(s)$$

*예시*

X를 공정한 주사위를 굴렸을 때 나오는 값이라고 하자. X의 예상값은 얼마인가?
- random variable X는 1,2,3,4,5,6 의 값을 가지며 각각의 확률은 $1/6$이므로 다음과 같다

$$E(X) = (\frac{1}{6} \cdot 1) + (\frac{1}{6} \cdot 2) + \cdots + (\frac{1}{6} \cdot 6) = \frac{21}{6} = \frac{7}{2}$$

## 기댓값 정리

> 정리 1: X가 random variable이고 P(X=r)이 X이 r값을 취할 확률이라면, 다음과 같다

$$P(X=r) = \sum_{s \in S, X(s)=r}P(s)$$

$$E(X) = \sum_{r \in X(S)}P(X=r)r $$

*증명*

X를 X(S)의 범위를 갖는 random variable라 가정하고 $p(X=r)$을 X가 r값을 취할 확률이라고 하자

결과적으로, $p(X=r)$은 $X(s) = r$이 되는 결과 $s$의 확률의 합이다.

따라서 다음과 같다

$$E(X) = \sum_{r \in X(S)} P(X=r)r$$

> 정리 2: 상호 독립적인 베르누이 시행이 n번 수행될 때 예상되는 성공 횟수를 나타내는데, 여기서 각 시험에서의 성공 확률을 $p$라고 할때 기댓값은 $E(X) = np$ 이다

*증명*

참고 DN10_P57

## 기대치의 선형성

> 정리 3: $X_i$, ($i=1, 2, \cdots n, n$은 양의 정수)이 표본 공간 S의 random variable이고, $X$가 random variable이고 $a, b$가 실수라면 다음과 같다

1. $E(\sum_{k=1}^nX_k) = \sum_{k=1}^nE(X_k)$

2. $E(aX+b) = aE(x) + b$

이 정리는 기댓값이 선형임을 알려준다.
- 예) random variable의 합의 기댓값은 random variable의 기댓값의 합

## 문제 : 모자 검사 문제

> 한 직원이 고객의 모자를 정리하다가 섞여버렸다. n명의 고객이 남은 모자 중 무작위의 모자를 받았을 때, 올바르게 반환될 것으로 예상되는 모자의 수는 몇개인가?

*풀이*

$X$를 올바른 모자를 받은 사람의 수와 같은 random variable이라 하자
- $X=X_1 + X_2 + \cdots + X_n $이며, i번째 사람이 자기 모자를 찾았다면 $X_i=1$, 그렇지 않다면 $X_i=0$이다
- 모든 i번째 사람이 올바른 모자를 받을 확률은 $1/n$이다
- 따라서 다음과 같이 표현할 수 있다

$$E(X_i) = P(X_i=0)\cdot 0+P(X=1) \cdot 1 = \frac{1}{n} \cdot 0 + \frac{1}{n} \cdot 1 = \frac{1}{n}$$

- 기댓값의 선형성에 의해 다음과 같다

$$E(X) = \sum_{i=1}^{n}E(X_i)= n\cdot \frac{1}{n} = 1$$

따라서, 올바른 모자를 받은 사람의 평균 수는 1이다

## 평균 사례 계산 복잡도 (Average-case computational complexity)

알고리즘의 평균적인 경우의 계산 복잡도는 random variable의 기댓값을 계산해 구할 수 있다

실험의 표본공간을 가능한 입력 $a_i (i=1, 2, \cdots, n)$의 집합이라 하고 random variable $X$를 알고리즘이 입력으로 $a_j$이 주어졌을 때 사용한 연산 횟수라고 하자

가능한 각 입력값 $a_j$에 확률 $P(a_j)$를 할당한다

$X$의 기댓값은 알고리즘의 평균 사례의 계산복잡도이다

$$E(X) = \sum_{j=1}^mP(a_j)X(a_j)$$

## 예시 : 선형 검색 알고리즘

![IMAGE](/assets/img/discretemath/a1.png)

$x$가 목록에 있을 확률이 $p$이고, $x$가 목록의 $n$ 요소 중 하나에 있을 가능성이 동일할경우 선형 검색의 평균 사례 계산복잡도는 얼마인가?

*풀이*

- 가능한 입력 유형은 n개의 숫자 각각에 대한 유형+목록에 없는 유형을 포함해, n+1개의 가능한 입력 유형이 있다
- Recall 
    - $x$가 목록의 $i$번째 요소와 같으면 $2i + 1$ 비교가 필요하다
    - $x$가 목록에 없는 경우 $2n + 1$ 비교가 필요하다

선형 검색 알고리즘의 평균 사례 계산 복잡도는 다음과 같다

$$E = 3 \cdot \frac{p}{n} + 5 \cdot \frac{p}{n} + \cdots + (2n+1) \cdot \frac{p}{n} +  (2n+2)q$$

$$= \frac{p}{n}\sum_{k=1}^{n}(2k+1) + (2n+2)q$$

$$= \frac{p}{n} \cdot  (2 \cdot \frac{n(n+1)}{2} + n) + (2n+2)q$$

$$= \frac{p}{n} \cdot  (n(n+1) + n) + (2n+2)q$$

$$= \frac{p}{n} \cdot  (n^2 + 2n) + (2n+2)q$$

$$= p(n+2) + 2(n+1)q = p(n+2) + 2(n+1)(1-p)$$

$$= np+2p + 2n-2np+2-2p $$

$$= 2 + np + 2n - 2np = 2 + n (p + 2 - 2p) $$

$$= 2 + (2-p)n$$

답
- $x$가 목록에 있는것이 확실할 때, $p=1, q=0$ 이므로 $E=n+2$ 이다
- $x$가 목록에 없는것이 확실할 때, $p=0, q=1$ 이므로 $E=2n+2$ 이다
- $p=1/2, q=1/2$ 라면 $E=(3n+4)/2$ 이다
- $p=3/4, q=1/4$ 라면 $E=(5n+8)/4$ 이다 

## 문제 : 삽입 정렬

![IMAGE](/assets/img/discretemath/a2.png)

> 삽입 정렬 알고리즘에서 n개의 고유 요소를 정렬하는데 사용되는 평균 비교 횟수는 얼마인가?
>
> $i=2, 3 \cdots n$일때 i번째 단계에서는, i번째 요소를 1~i-1번째 요소중 올바른 위치에 삽입한다

*풀이*

random variable $X$를 삽입 정렬에서 고유한 요소인 $a_1, a_2, \cdots$ 목록을 정렬하는데 사용되는 비교 횟수와 동일하다고 하자. 그럼 $E(X)$는 평균 비교 횟수이다

- random variable $X_i$는 $a_1, a_2, \cdots, a_{i-1}$까지 정렬 된 후 i번째 요소 $a_i$를 적절한 위치에 삽입하는데 사용된 비교 횟수와 동일하다고 하자
- 따라서 $X = X_2 + X_3 + \cdots + X_n$ 이다
- $E(X) = E(X_2 + X_3 + \cdots + X_n) = E(X_2) + E(X_3) + \cdots + E(X_n)$

$E(X_i)$를 찾기 위해, $p_j(k)$를 리스트의 $j$ 원소가 $k$번째 위치에 나타날 확률, 즉 $max(a_1, a_2, \cdots a_j)$로 설정한다 where $1 \le k \le j$

균등한 분포를 가정한다면, 다음과 같다

$p_j(k) = 1/j$ 따라서 $X_i(k) = k$ 이다

$a_i$는 $i$ 위치에 삽입 될 수 있으므로 

$$E(X) = \sum_{k=1}^{i}p_i(k) \cdot X_i(k) = \sum_{k=1}^i\frac{1}{i}\cdot k = \frac{1}{i} \cdot \frac{i(i+1)}{2} = \frac{i+1}{2}$$

다음을 도출할 수 있다

$$E(X) = \sum_{i=2}^n E(X)_i = \sum_{i=2}^n \frac{i+1}{2} = \frac{1}{2}[(\frac{n(n+1)}{2}-1) + (n-1)] = \frac{n^2+3n-4}{4}$$

따라서, 평균 사례 복잡도는 $\frac{n^2+3n-4}{4}$ 이다

## 기하학적 분포 (The Geometic Distribution)

> 정의 2: random variable X가 있다면
>
> If $P(X=k) = (1-p)^{k-1}p$ for $k = \set{1,2,3, \cdots}$, where $p$가 $0 \le p \le 1$인 실수일 때, $X$는 인자 `p에 대한 기하학적 분포`를 가진다

> 정리 4: 만약 random variable $X$가 인자 p에 대한 기하학적 분포를 가진다면, $E(X) = 1/p$ 이다

*예시*

동전이 뒷면이 나올 확률을 p라고 가정하자. 이 동전이 뒷면이 나올때까지 예상되는 뒤집기 수는?

- 표본 공간 : $\set{T, HT, HHT, HHHT, \cdots }$
- random variable $X$를 뒤집기 횟수와 동일하게 설정한다
    - ex. $X(T)=1, X(HT)=2$
- $E(X) = 1/p$ 임을 알고 있다

## Independent Random Variables

> 정의 3: 표본 공간 S의 random variable X와 Y는 다음 조건일 경우 독립이다:

$$P(X=r_1 \text{ and } Y=r_2) = p(X=r_1) \cdot p(X=r_2)$$

> 정리 5: X와 Y가 독립된 random variable이라면, $E(XY) = E(X)E(Y)$ 이다

## 분산 (Variance)

> 편차(Deviation) : $s \in S$ 에서 $X$의 편차는 $X(s) - E(X)$, 즉 $X$값과 $X$ 평균 간의 차이이다

> 정의 4: 표본 공간 S의 random variable $X$가 있다고 하자. $X$의 분산은 $V(X)$로 표기하고 다음과 같다

$$V(X) = \sum_{s \in S}[X(s)-E(X)]^2P(s)$$

즉, $V(X)$는 X 편차의 제곱의 평균이다. σ(X)로 표기하는 표준 편차는 $\sqrt{V(X)}$ 이다

> 정리 6: 표본 공간 S의 random variable $X$가 있다면, $V(X)=E(x^2)-E(X)^2$이다

> 따름정리 1: 표본 공간 S의 random variable $X$가 있고 $E(X)$가 $μ$라면, $V(X) = E((X-μ)^2)$이다

## 문제 : 분산

> random variable $X$의 분산은 얼마인가? 베르누이 시행이 성공하면 $X(t)=1$이고 실패시 $X(t)=0$이며 $p$는 성공 확률, $q$는 실패 확률을 의미한다

*풀이*

X는 오직 0 또는 1만 가지기 때문에, $X^2(t) = ㅌ(t)$이다.

따라서,

$$V(X) = E(X^2) - E(X)^2 = p - p^2 = p(1-p) = pq$$

## 문제 : 주사위 값의 분산

> random variable $X$의 분산은 얼마인가? 여기서 X는 공정한 주사위를 굴렸을 때 나오는 숫자이다

*풀이*

$V(X) = E(X^2) - E(X)^2$ 이며, 이전 장 문제에서 $E(X)=7/2$임을 알고 있다

$$E(X^2) = \frac{1}{6}(1^2+2^2+\cdots+6^2) = 91/6$$

따라서 다음과 같다 $V(X)=\frac{91}{6}-(\frac{7}{2})^2$

## 분산 : 비에네메 관계식

> 비에네메 관계식 : X와 Y가 표본공간 S에서 두 개의 독립된 random variable인 경우, $V(X+Y)=v(X)+V(Y)$이다.
>
> 또한, $X_i, i=\set{1,2,\cdots,n}$ (n은 양의 정수)이 $S$에 대한 pairwise independent random variables인 경우, 다음과 같다

$$V(\sum_{i=1}^{n}X_i) = \sum_{i=1}^n V(X_i)$$

## 문제 : 비에네메 관계식

> n개의 독립 베르누이 시행을 수행시 성공 횟수의 분산을 구하라
>
> 각 시행에서 $p$가 성공 확률, $q$가 실패 확률이다

*풀이*

random variable $X_i$를 $t_i$가 참이면 $X((t_1, t_2, \cdots, t_n))=1$로 설정하고 거짓이면 0으로 설정하자

$X=X_1+X_2+\cdots + X_n$이라고 하자, 그런 다음 X에서 n번의 시도중 성공한 횟수를 계산한다

- 비에네메 관계식에 따라, $V(X) = V(X_1) + V(X_2) + \cdots + V(X_n)$ 이다
- 이전 예제에 따라, $V(X_i) = pq$ for $i = 1, 2, \cdots n$ 이다

그러므로 $V(X) = npq$이다

## 분산 : 체비쇼프 부등식

> X를 표본 공간 S의 random variable 라고 하자
>
> $r$이 양의 실수라면 다음과 같다

$$P(\mid X()js)- E(X) \mid \ge r) \le \frac{V(r)}{r^2}$$

## 예시 : 체비쇼프 부등식

> $X$를 공정한 동전을 $n$번 던졌을 때, 뒷면이 나오는 횟루를 계산하는 random variable이라고 가정하자.
>
> $X$는 각각 성공 확률이 $1/2$인 n개의 독립적인 베르누이 시행을 수행할 때 성공 횟수이다. 따라서 *정리 2*에 따라 $E(X) = n/2, V(X) = n/4$ 이다

체비쇼프 부등식에 따라, $r = \sqrt{n}$이라 하면

$$P(\mid X(s) - \frac{n}{2} \mid \ge \sqrt{n}) \le \frac{n}{4} \cdot (\frac{1}{\sqrt{n}})^2 = \frac{1}{4}$$

이는 n번 던질 때, 나오는 뒷면이 나오는 수가 평균 $n/2$에서 $\sqrt{n}$ 이상 벗어날 확률이 $1/4$보다 크지 않음을 의미한다