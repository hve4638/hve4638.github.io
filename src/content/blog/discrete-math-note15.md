---
title: "이산수학 | 행렬 (Matrix)"
author: Hve
date: 2023-10-15 03:26:16 +0900
categories: ["학습", "강의노트"]
math: true
mermaid: false
tags: ["이산수학"]
---

# 행렬 (Matrix)

> 정의 : 행렬(matrix)는 유한하게 많은 숫자의 직사각형 배열이다.
>
> 행이 n개, 열이 m개인 행렬을 $n \times n$ 행렬이라 이를 행렬의 차원(dimension of the martix)이라고 한다
>
> $m \times n$은 "m by n"으로 읽는다

## 표기법

$m$과 $n$이 양수라고 했을때,

$$M = 
\left[
\begin{matrix} 
    a_{11} & a_{12} & \cdots & a_{1n} \\
    a_{21} & a_{22} & \cdots  & a_{2n} \\
    \vdots  & \vdots & \vdots  & \vdots  \\
    a_{m1} & a_{m2} & \cdots  & a_{mn} \\
\end{matrix}
\right]
$$

이것은 $ i \in [m] \text{ and } j \in [n]$ 에 대해 (i,j)-element가 $a_{ij}$인 ($m \times n$) 행렬이다

이를 다음과 같이 나타낼 수 있단

$$ M = [a_{ij}]_{1 \le i < m , 1 \le j < n} = [a_{ij}]$$

$(1 \times n)$ 행렬은 `row matrix`, $(m \times 1)$ 행렬은 `column matrix`이라고 부른다

$M$의 i번째 row(행)은 $1 \times n$ 행렬$[a_{j1}, a_{j2}, ..., a_{jn}]$이다

$M$의 j번째 열은 $m \times 1$ 행렬이다


## 행렬 연산 : 더하기 (Addition)

> 정의 : $A = [a_{ij}]$ 와 $B = [b_{ij}]$ 를 $m \times n$ 행렬이라고 하자.
>
> $A$와 $B$의 합은(denoted by $A + B$) $(i,j)$-element가 $a_{ij}+b_{ij}$를 가지는 $m \times n$ 행렬이다. 즉, $A + B = [a_{ij} + b_{ij}]$ 이다

## 행렬 연산 : 곱하기 (Multiplication)

> 정의 : $A$를 $m \times p$ 행렬, $B$를 $p \times n$ 행렬이라고 하자.
>
> $A$와 $B$의 곱은(denoted by $AB$) $(i,j)$-element가 $A$의 i번째 row(행)과 $B$의 j번째 column(열)의 곱의 합인 $m \times n$ 행렬이다.
>
> 즉, $AB = [c_{ij}]$ 라면, $c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \cdots + a_{ip}b_{pj} $이다. 이를 summation notation으로 표현하면 다음과 같다
>
> $$ c_{ij} = \sum_{k=1}^p a_{ik}b_{kj} $$

두 행렬의 곱은 오직 첫 행렬의 column 크기와 두번째 행렬의 row의 크기가 같을때만 정의된다


## 행렬 곱의 Commutative

> 행렬 $A, B$ 를 다음과 같이 정의하자
>
> $$A = \left[\begin{matrix}1 & 1 \\ 2 & 1\end{matrix}\right], B = \left[\begin{matrix}2 & 1 \\ 1 & 1\end{matrix}\right]$$ 
>
> $AB = BA$가 성립하는가?

### 풀이

$AB \neq BA$이다

$$

AB = \left[\begin{matrix}3 & 2 \\ 5 & 3\end{matrix}\right], 

BA = \left[\begin{matrix}4 & 3 \\ 3 & 2\end{matrix}\right]

$$ 

두 행렬이 같은 차원을 가졌어도 교환법칙은 성립하지 않는다

## 행렬의 상수곱 (Constant Multiple of Matrix)

> $A$를 $m \times n$ 행렬이고 $c$를 상수라고 하자.

$$
cA = \left[ \begin{matrix}
1 & 2 & -3 \\
2 & 3 & 1 \\
0 & 1 & 3 \\
\end{matrix}
\right]
$$

For $c=-2$

$$
cA = \left[ \begin{matrix}
1 & 2 & -3 \\
2 & 3 & 1 \\
0 & 1 & 3 \\
\end{matrix}
\right]
= \left[ \begin{matrix}
(-2) \times 1 & (-2) \times 2 &  (-2) \times -3 \\
(-2) \times 2 &  (-2) \times 3 &  (-2) \times 1 \\
(-2) \times 0 &  (-2) \times 1 &  (-2) \times 3 \\
\end{matrix}
\right]
= \left[
\begin{matrix}
-2 & -4 &  6 \\
-4 &  6 & -2 \\
0  & -2 & -6 \\
\end{matrix}
\right]
$$


## 항등행렬 (Identity Matrix)

> `정의` : The identity matrix of order n은 $\delta_{ij}$ = 1 if $i = j$이고, $\delta_{ij} = 0$ if $i \neq j$인 $n \times n$ 인 $I_n = [\delta_{ij}]$ 행렬이다
>
> $\delta_{ij}$를 `Kronecker’s delta`라고 부른다

$m \times n$ 행렬 $A$에 대해, 

$$
AI_n = I_mA = A
$$

## Powers of Matrix

Square martix의 지수승은 다음과 같이 정의된다

$$A^0 := I_n$$

$$
A^{n+1} := AA^{n}
$$

## Transpose of Matrix

> `정의` : $A = [a_{ij}]$를 $m \times n$ 행렬이라고 하자. $A$의 transpose는 $A^T$로 나타내고, 행과 열을 반전한 행렬이다. 이는 다음과 같이 표현할 수 있다
>
> If $A^T=[b_{ij}]$, then $b_{ij} = a_{ji}$ for $i \in [n]$ and $j \in [m]$
>

*예시:*

$$
A = 
\left[
\begin{matrix}
1 & 2 & 3 \\
3 & 5 & 6 \\
\end{matrix}
\right]
\text{,  }
A^T = 
\left[
\begin{matrix}
1 & 4 \\
2 & 5 \\
3 & 6 \\
\end{matrix}
\right]
$$

---

### Symmetric

> `정의` : $A = A^T$가 동일한 square matrix를 symmetic하다고 부른다. 즉, 다음과 같다
>
> $A = [a_{ij}]$ is `symmetric` if $a_{ij} = a{ji}$ for $j$ and $i$ with $1 \le i \le n, 1 \le j \le m$

*예시:*

$$
A = A^T = 
\left[
\begin{matrix}
1 & 4 & 1\\
4 & 2 & 5\\
1 & 5 & 3\\
\end{matrix}
\right]
$$

---

## Zero-One Matrix

> `정의` : 모든 값이 0 또는 1인 행렬을 `zero-one matrix`라고 부른다

### join

A와 B의 `join`은 각 ($i,j$)-entry에 대해 $a_{ij} ∨ b_{ij}$인 행렬이고 $A ∨ B$로 나타낸다

### meet

A와 B의 `meet`는 각 ($i,j$)-entry에 대해 $a_{ij} ∧ b_{ij}$인 행렬이고 $A ∧ B$로 나타낸다

### 예시 

$$A = \left[\begin{matrix}1 & 0 & 1 \\ 0 & 1 & 0\end{matrix}\right], B = \left[\begin{matrix}0 & 1 & 0 \\ 1 & 1 & 0\end{matrix}\right]$$

$A$와 $B$의 `join`은 다음과 같다
$$A ∨ B = \left[\begin{matrix}1∨0 & 0∨1&1∨0\\0∨1 & 1 ∨1& 0∨0\end{matrix}\right] = \left[\begin{matrix}1 & 1 & 1 \\ 1 & 1 & 0\end{matrix}\right]$$

$A$와 $B$의 `meet`는 다음과 같다
$$A ∧ B = \left[\begin{matrix}1∧0 & 0∧1&1∧0\\0∧1 & 1 ∧1& 0∧0\end{matrix}\right] = \left[\begin{matrix}0 & 0 & 0 \\ 0 & 1 & 0\end{matrix}\right]$$

---

## 부울 곱 (Boolean Product of Zero-One Matrix)

> `정의` : $m \times p$인 zero-one 행렬 $A = [a_{ij}]$가 있고, $p \times n$인 zero-one 행렬 $B = [b_{ij}]$가 있을 때, $A$와 $B$의 부울 곱(boolean product)는 $m \times n$인 zero-one matrix이며 $A \odot B$로 표현한다

$$c_{ij} = (a_{i1} ∧ b_{1j}) ∨ (a_{i2} ∧ b_{2j}) ∨ \cdots ∨ (a_{ip} ∧ b_{pj})$$

*예시:*
$$
A = \left[\begin{matrix}1 & 0\\0 & 1\\ 1 & 0\end{matrix}\right],
B = \left[\begin{matrix}1 & 1 & 0\\ 0 & 1 & 1\end{matrix}\right]
$$

$$
A \odot B = \left[\begin{matrix}
(1∧1)∨(0∧0) & (1∧1)∨(0∧1) & (1∧0)∨(0∧1) \\
(0∧1)∨(1∧0) & (0∧1)∨(1∧1) & (0∧0)∨(1∧1) \\
(1∧1)∨(0∧0) & (1∧1)∨(0∧1) & (1∧0)∨(0∧1) \\
\end{matrix}\right] = 
\left[\begin{matrix}
1 & 1 & 0 \\
0 & 1 & 1 \\
1 & 1 & 0 \\
\end{matrix}\right]
$$

## 부울 거듭제곱 (Boolean Power of Zero-One Matrix)

> `정의` : square zero-one 행렬인 $A$가 있고, $n$을 양수라고 했을 때, $A$의 $n$번째 부울 거듭제곱(boolean power)는 $A$를 $n$번 부울 곱한 것과 같고, $A^{[n]}$  으로 나타낸다. $A^{[0]}$은 $I_n$으로 정의한다

*예시*
$$A = 
\left[\begin{matrix}
0 & 0 & 1 \\
1 & 0 & 0 \\
1 & 1 & 0 \\
\end{matrix}\right]
$$

$$
A^{[2]} = A \odot A =
\left[\begin{matrix}
1 & 1 & 0 \\
0 & 0 & 1 \\
1 & 0 & 1 \\
\end{matrix}\right]
$$

$$
A^{[3]} = A \odot A^{[2]} =
\left[\begin{matrix}
1 & 0 & 1 \\
1 & 1 & 0 \\
1 & 1 & 1 \\
\end{matrix}\right]
$$

$$
A^{[4]} = A \odot A^{[3]} =
\left[\begin{matrix}
1 & 1 & 1 \\
1 & 0 & 1 \\
1 & 1 & 1 \\
\end{matrix}\right]
$$

$$
A^{[5]} = A \odot A^{[4]} =
\left[\begin{matrix}
1 & 1 & 1 \\
1 & 1 & 1 \\
1 & 1 & 1 \\
\end{matrix}\right]
$$

그러므로, $n \ge 5$ 일 때 $A^{[n]} = A^{[5]}$이다