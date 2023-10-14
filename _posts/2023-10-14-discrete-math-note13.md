---
title: "이산수학 | 수열과 합 (Sequences and Summations)"
author: Hve
date: 2023-10-14 01:59:28 +0900
categories: [ "공부", "이산수학" ]
math: true
mermaid: false
tags: []
---

## 수열 (Sequence)

`수열(Sequence)`은 유한하거나 무한한 원소의 `ordered lists`다

- $1,2,3,5,8$
- $1,3,9,27,81$

> 정의 : 수열(sequence)은 정수의 부분집합($N$ or $N^*= N \backslash \set{0}$)에서 `공집합이 아닌 집합`으로의 함수이다

$a_n$ 표기는 정수 $n$의 상을 표기하는데 사용한다

$N^*=\set{1,2,...}$에서 $ S $로 가는 함수 $f$에 대해 $a_n$는 $ f(n) $과 동치로 볼수 있다 

수열은 $(a_n)_{n=1}^\infty $로 표기하며 $a_n$을 수열의 `n-th term`이라 부른다

## 등비수열 (Geometric Progression)

> 정의 : `등비수열(geometric progression)`은 실수 $a$과 $r$에 대해 $a_n = ar^{n-1}$인 수열 $(a_n)_{n=1}^\infty$이다

$a$를 수열의 `initial term`이라 부르고 $r$을 `common multiplier`라 부른다

*예시:*

- $a=1$ and $ r=-1 $, then $a_n = (-1)^{n-1}$ and $(a_n)_{n=1}^\infty=\set{1,-1,1,-1,...}$
- $a=2$ and $ r=5 $, then $a_n = 2 \times 5^{n-1}$ and $(a_n)_{n=1}^\infty=\set{2,10,50,250,...}$

## 등차수열 (Arithmetic Progression)

> 정의 : `등차수열(arithmetic progression)`은 실수 $a$와 $d$에 대해 $a_n = a + (n-1)d $ 인  수열 $(a_n)_{n=1}^\infty$이다

$a$를 수열의 `initial term`이라 부르고 $d$을 `common difference`라 부른다

*예시:*

- $a=2$ and $ d=3 $, then $a_n = 3n + 1 $ and $(a_n)_{n=1}^\infty=\set{2, 5, 8, 11, ...}$

## 문자열 (Strings)

> 정의 : `문자열(string)`은 alphabet이라 불리는 유한한 집합으로 부터의 유한한 문자 수열이다
>
> 문자열을 구성하는 문자의 수를 문자열의 `길이(length)`라고 한다

빈 문자열은 length가 0인 $\lambda$로 표현한다

## 귀납식, 점화식 (Recurrence Relations)

> `귀납식(recurrence relations)`은 수열의 항 사이에서 성립하는 관계식을 말한다

수열이 귀납식을 만족하는 경우 그 수열을 귀납식의 `해(solution)`라고 부른다

수열의 `초기 조건(initial conditions)`은 귀납법이 영향을 미치는 첫 terms을 지정한다

### 문제 1


$ (a_n)_{n=1}^\infty $ 을 $ n \le 2 $에 대해 $ a_n = a_{n-1} + 3 $을 만족하는 수열이고, $a_1 = 2$라고 가정하자 [여기서 $ a_0 =2 $가 초기 조건(initial condition)이다]

$a_2, a_3, a_4$는 무엇은가?

#### 풀이

다음과 같이 귀납식을 보일 수 있다

- $a_2 = a_1 + 3 = 2+3 = 5 $
- $a_3 = a_2 + 3 = 5+3 = 8 $
- $a_4 = a_3 + 3 = 8+3 = 11 $

### 문제 2

> $ (a_n)_{n=1}^\infty $ $n \le 3$ 에 대해 $a_n = a_{n-1} + a{n-2}$ 를 만족하는 수열이라고 하고 $a_1 =3, a_2 =5$ 라고 가정하자 [여기서 $a_1 =2, a_2 =5 $가 초기 조건(initial condition)이다]
>
> $a_3, a_4$는 무엇인가?

#### 풀이 

다음과 같이 귀납식을 보일 수 있다
- $a_3 = a_2 + a_1 = 5-3 = 2 $
- $a_4 = a_3 + a_2 = 2-5 = -3 $

## 피보나치 수열 (Fibonacci Sequence)

> 정의 : 피보나치 수열 $F_0, F_1, F_2, ...$는 다음과 같이 정의된다
>
> 초기 조건 : $ F_1 = 1, F_2 = 1$
> 
> 귀납식 : $F_n = F_{n-1}+F_{n-2}$

## 반복법 (Iterative Solution)

### 방법 1 : Working upward, forward substitution

> $n \ge 2$에 대해 $ a_n = a_{n-1} + 3 $을 만족하는 수열 $ (a_n)_{n=1}^\infty $이 있고 $a_1 = 2$라고 하자

For $ n \ge 2$:

- $a_2 = a_1 + 3 = 2 + 1 \times 3$
- $a_3 = a_2 + 3 = (2 + 3) + 3 = 2 + 2 \times 3$
- $a_3 = a_2 + 3 = (2 + 2 \times 3) + 3 = 2 + 3 \times 3$
$$...$$
- $a_n = a_{n-1} + 3 = [2 + (n-2) \times 3 ] + 3 = 2 + (n-1) \times 3 = 3n -1$

이 공식은 $n=1$일때도 유효하다. 그러므로 $n \ge 1$일때 $a_n = 3n -1$이다

### 방법 2 : Working downward, backward subsitution

> $n \ge 2$에 대해 $ a_n = a_{n-1} + 3 $을 만족하는 수열 $ (a_n)_{n=1}^\infty $이 있고 $a_1 = 2$라고 하자

For $ n \ge 2 $:

- $ a_n = a_{n-1} + 3 = a_{n-1} + 1 \times 3 $
- $ = (a_{n-2} + 3) + 3 = a_{n-2} + 2 \times 3$
- $ = (a_{n-3} + 3) + 3 = a_{n-2} + 3 \times 3$
$$...$$
- $ = a_2 + (n-2) \times 3 = a_{2+(n-2)} + (n-2) \times 3$
- $ = (a_1 + 3) + (n-2) \times 3 = 2 + (n-1) \times 3 = 3n - 1$

이 공식은 $n=1$일때도 유효하다. 그러므로 $n \ge 1$일때 $a_n = 3n -1$이다

### 문제 : Financial application

> 어떤 사람이 연 11%의 이자가 연 복리로 지급되는 은행의 저축 계좌에 $10,000.00을 예치했다고 가정하자.
>
> n년 후에는 계좌에 얼마가 남게 될까?

#### 풀이

$P_n$를 n년 후 계좌에 남은 돈이라 가정하자. $P_n$은 다음을 만족한다

$$P_n = P_{n-1} + 0.11 \times P_{n-1} = (1.11)P_{n-1}$$

초기 조건은 $P_0 = 10,000.00$ (dollar)

For $n \ge 1$:

- $P_1 = (1.11)P_0$
- $P_2 = (1.11)^2 P_0$
- $P_3 = (1.11)^3 P_0$
$$...$$
- $P_n = (1.11)^n P_0 = (1.11)^n \times 10,000.00$

---

## 합 (Summations)

> $S$를 덧셈(특히 $S = N, Z, R, C$ etc.) 또는 덧셈과 유사한 연산을 하는 요소의 집합이라고 하자
>
> 그렇다면 S의 모든 원소의 합을 다음과 같이 표현할 수 있다
> 
> *Expression (1)* : $\sum_{s \in S}{s} $

## 합 표현식 (Summations Notation)

> $Λ$를 유한하거나, 셀수있는 무한하거나, 셀수 없는 무한한 index 집합이라고 하자 (일반적으로 양의 정수, 또는 음이 아닌 정수, 또는 정수의 하위 집합이다)
>
> S의 모든 요소가 index set $Λ$의 원소에 의해 나열되고 번호가 매겨져 있다고 가정하자 
>
> 그럼, $S = \set{a_\lambda \mid \lambda \in Λ} 이다$
>
> 그럼 *Expression(1)*은 다음과 같이 나타낼 수 있다
>
> $$\sum_{\lambda \in Λ}a_\lambda$$

더미 변항 $\lambda$는 `index of summation`로 불린다

> $Λ$가 $m$과 $n$ 사이($m \le n$) 모든 정수의 집합이라면, *Expression(1)*은 다음과 같이 나타낼 수 있다
>
> $$\sum_{m \le \lambda \le n}a_\lambda \text{ or } \sum_{\lambda = m}^{n}a_\lambda$$

*관례에 따라 $Λ = \emptyset$이면 void sum은 0으로 정의된다*

> $Λ$가 $n$보다 같거나 큰 모든 정수의 집합이라면, 합 표기법(summation notation)은 다음과 같다
>
> $$\sum_{\lambda = m}^{+\infty}a_\lambda \text{ or }\sum_{\lambda = m}^{\infty}a_\lambda$$

이것이 formal sum이며 `series`라고 부른다

> $Λ$가 $n$보다 같거나 작은 모든 정수의 집합이라면, summation은 다음과 같이 쓸수 있다
> 
> $$\sum_{\lambda= - \infty}^n a_\lambda$$

> $Λ$가 모든 정수의 집합이라면, summation은 다음과 같이 쓸수 있다
> 
> $$\sum_{\lambda= - \infty}^\infty a_\lambda$$

## 곱 표현식 (Product Notation)

> $Λ$가 index set이라면, 곱 표현식을 다음과 같이 정의할 수 있다
>
> $$\prod_{\lambda \in Λ}a_\lambda$$

합 표현식과 비슷하게, 다음과 같이 비슷하게 정의된다

$$\prod_{m \le \lambda \le n}a_\lambda =\prod_{\lambda = m}^na_\lambda$$

$$
    \prod_{\lambda = m}^\infty a_\lambda, 
    \prod_{\lambda = -\infty}^n a_\lambda,
    \prod_{\lambda = -\infty}^\infty a_\lambda
$$

*관례에 따라 $Λ = \emptyset$이면 void product는 1로 정의된다*

## 합 표현식 연산 (Arithmetic in Summation Notation)

$S = \sum_{i = m}^{n} a_i$ 이며 $ T = \sum_{i = m}^{n} b_i$ 이며 c를 상수라고 가정하자

1. $ S + T = \sum_{i = m}^{n} + \sum_{i = m}^{n} b_i = \sum_{i = m}^{n} (a_i + b_i)$
2. $ S - T = \sum_{i = m}^{n} - \sum_{i = m}^{n} b_i = \sum_{i = m}^{n} (a_i - b_i)$
3. $ cS = c \sum_{i = m}^{n} = \sum_{i = m}^{n} (c a_i)$
4. $ S = \sum_{i = m}^{n} = \sum_{i = m+k}^{n+k} (a_{i-k})$

### 연산

$m \le n$일때, $\sum_{i=m}^n a_i = \sum_{i=n}^m a_i $ 인가?

답은 X

$a_i$를 역순으로 추가하려면 다음과 같이 해야 한다

$$\sum_{i=m}^n a_i = \sum_{i=m}^n a_{n+m-i}$$

## 이중합 (Double Summation)

> `Λ` and `M'`가 Index set이라고 했을 때, 모든 원소 $S$는 두개의 index를 가진다.
>
> $$\text{for } s \in S, s = a_{\lambda,\mu} = a_{\lambda \mu}$$
>
> 단일 합을 이중 합 표기법으로 쓸 수 있다
>
> $$\sum_{s \in S}s = \sum_{\lambda \in Λ}(\sum_{\mu \in M}a_{\lambda \mu}) = \sum_{\lambda \in Λ}\sum_{\mu \in M}a_{\lambda \mu}$$

### 예시

doubly index finite sequence $(a_{ij})_{m \le i \le n, r \le j \le s}$ 하자

i.e. 
$$
\begin{matrix}
a_{m,r} & a_{m,r+1} & ... & a_{m,s} \\
a_{m+1,r} & a_{m+1,r+1} & ... & a_{m+1,s} \\
... & ... & ... & ...\\
a_{n,r} & a_{n,r+1} & ... & a_{n,s} \\
\end{matrix}
$$

그렇다면 다음 식으로 쓸 수 있다

$$\sum_{i=m}^n\sum_{j=r}^s a_{i,j} =\sum_{j=r}^s\sum_{i=m}^n a_{i,j}$$

### 예시 2

$(a_{ij})_{m \le i \le n, r \le j \le s}$ 를 doubly index finite sequence라고 하자

대각선을 따라 n - m + 1 행의 low triangular part를 만든다고 하자

i.e.
$$
\begin{matrix}
a_m,r \\
a_{m+1,r} && a_{m+1,r+1} \\
a_{m+2,r} && a_{m+2,r+1} && a_{m+3,r+2} \\
... && ... && ... && ... \\
a_{n,r} && a_{n,r+1} && a_{n,r+2} && a_{n,r+3} && ... &&  a_{n,r+n-m} \\

\end{matrix}
$$

그렇다면 다음 식으로 쓸 수 있다

$$
    \sum_{i=m}^{n}\sum_{i=r}^{r-m+i} a_{i,j}
     = \sum_{i=r}^{r-m+i} \sum_{i=m}^{n} a_{i,j}
$$

### 등비수열의 합 (Sum for Geometric Sequence)

등비수열의 합은: $n \ge 1, a_n = ar^{n-1}$ 일 때,

$$
S = \sum_{i=1}^n ar^{i-1} = \begin{cases} 
    \frac{a(1-r^n)}{1-r} & (r \neq 1) \\
    n & (r = 1)\\
\end{cases} 

$$

*WIP : DN_05 p.94*

## Useful Summation Formula

1. $$\sum_{i=1}^n ar^{i-1} = \begin{cases} \frac{a(1-r^n)}{1-r} & (r \neq 1) \\ n & (r = 1) \end{cases}$$
2. $$ \sum_{i=1}^n [a+(n-1)d] = n \times \frac{a_1 + a_n}{2} = \frac{n [2a + (n-1)d]}{2}$$ 
3. $$ \sum_{i=1}^n i = \frac{n(n+1)}{2} $$
4. $$ \sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}$$
5. $$ \sum_{i=1}^n i^3 = \frac{n^2(n+1)^2}{4} = (\sum_{i=1}^n i)^2$$


