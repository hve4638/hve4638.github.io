---
title: "이산수학 | Big-Omega, Bit-Theta Notation - WIP"
author: Hve
date: 2023-11-21 15:24:15 +0900
categories: ["공부", "이산수학"]
math: true
mermaid: false
tags: []
---

## The Big-Omega Notation

> *정의* 
> 
> $f$와 $g$를 양의 실수의 무한한 부분집합에 대해 정의된 함수라고 하고, $g$는 $x$의 충분히 큰 모든 실수 값에 대해 음수가 아닌 값이라고 하자
>
> $x > x_0$일 때마다 $ f(x) > C \mid g(x) \mid$ 되는 양의 상수 $C$와 $x_0$ 이 있다면 $f$ is $Ω(g)$ 라고 한다

그러므로 $f$ is $Ω(g)$ ↔ $g$ is $O(f)$

읽는 방법

- $f$ is big-Omega of g

growth of function에 대해 Big-O는 상한을 제공하고 Big-Omega는 하한을 제공한다

즉, Big-Omega는 한 함수가 적어도 다른 함수만큼 빠르게 성장한다고 말한다

## The Big-Theta Notation

> *정의* 
> 
> $f$와 $g$를 양의 실수의 무한한 부분집합에 대해 정의된 함수라고 하고, $g$는 $x$의 충분히 큰 모든 실수 값에 대해 음수가 아닌 값이라고 하자
>
> $f \in O(g)$ and $g \in O(f)$ 라고 하면, "f is big-Theta of g" 또는 $f$와 $g$는 같은 차수라고 말하며 $f \in Θ(g)$ 로 표기한다

그러므로, $f \in Θ(g)$ ↔ "$x > x_0$일 때 $c_1g(x) < f(x) < c_2g(x)$ 인 $C_1$, $C_2$와 $x_0$가 존재한다"

즉, 다음과 같다

$$ f \in Θ(g) ↔ g \in Θ(f)$$

### 예시 1

> 첫 n개의 양수의 합이 $Θ(n^2)$ 임을 보여라

*풀이*

$f(n)$을 첫 n개의 양수의 합이라고 하자

이미 $f$ is $O(n^2)$ 임을 알고 있다

$f$ is $Θ(n^2)$ 을 보이기 위해, 충분히 큰 n에 대해 $f(n) > Cn^2$가 되는 양의 상수 $C$가 필요하다

우리는 $2/n$보다 큰 합만 합산해, 답을 도출한다

$$1 + 2 + ... + n = 1 + 2 + .. + \lceil \frac{n}{2} \rceil + (\lceil \frac{n}{2} \rceil + 1) + ... n$$

$$ \ge \lceil \frac{n}{2} \rceil + (\lceil \frac{n}{2} \rceil + 1) + ... + n \ge \lceil \frac{n}{2} \rceil + \lceil \frac{n}{2} \rceil + ... + \lceil \frac{n}{2} \rceil $$

$$ = [n - (\lceil \frac{n}{2} \rceil - 1)] \lceil \frac{n}{2} \rceil \ge \frac{n}{2} \times \frac{n}{2} = \frac{n^2}{4} $$

그러므로 $C = \frac{1}{4}$와 $f(n) > Cn^2$을 얻을 수 있다.

따라서 $f \in Ω(n^2)$ 이며 $f \in Θ(n^2)$ 이다


O Θ Ω

### 예시 2

> $f(x) = 3x^2 + 8x \ln x \in Θ(x^2)$ 임을 보여라

*풀이*

$f(x) = 3x^2 + 8x \ln x > 3x^2 + 8x^2 = 11x^2$

따라서 $f \in O(x^2) $

$x > 1$ 일 때, $f(x) = 3x^2 + 8x \ln x \ge 3x^2 > 0$

따라서 $f \in Ω(x^2) $

그러므로 $f \in Θ(x^2)$ 이다

