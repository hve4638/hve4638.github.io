---
title: "이산수학 | 베이즈 정리"
author: Hve
date: 2023-12-17 14:07:56 +0900
categories: ["공부", "이산수학"]
math: true
mermaid: false
tags: []
---

## 베이즈 정리 (Bayes' Theorem)

> 정의 : 베이즈 정리는 두 확률 변수의 사전 확률과 사후 확률 사이의 관계를 나타내는 정리'


> 정의 : E, F가 샘플 공간 $S$의 사건라고 가정하자. $P(E) \ne 0, P(F) \ne 0$라고 가정했을 때, 다음과 같다

$$P(F \mid E) = \frac{P(E \mid F)P(F)}{P(E \mid F)P(F) + P(E \mid F^c)P(F^c)}$$

사건 F가 발생했을 때 사건 E가 발생한 확률로 볼 수 있다

다음 문제에 적용할 수 있다
- 어떤 사람이 특정 질병에 대해 양성 반응을 보였을 때 실제 질병에 걸렸을 확률은?
- 어떤 사람이 특정 질병에 대해 음성 반응을 보였을 때 실제 질병에 걸렸을 확률은?

## 문제 : 두개의 상자

> 상자가 두 개 있다. 첫번째 상자에는 녹색공 2개와 빨간공 7개가 있다 두번째 상자에는 녹색공 4개와 빨간공 3개가 들어있다
>
> 두 상자중 하나를 임의로 택한 후 무작위로 공 하나를 꺼낸다. 그 공이 빨간색이라면, 첫번째 상자에서 골랐을 확률은?

*풀이*

빨간 공을 선택한 경우를 $E$라고 하고 첫번째 상자를 선택한 경우를 $F$라고 하자.

베이즈 정리에 따라 다음과 같다

$$P(F \mid E) = \frac{\frac{7}{9} \times \frac{1}{2}}{\frac{7}{9} \times \frac{1}{2} + \frac{3}{7 } \times \frac{1}{2}} = \frac{\frac{7}{18}}{\frac{38}{63}}$$

## 베이즈의 정리 도출

> *Recall 조건부 확률*: $E, F$를 사건이라 하고 $P(F) > 0$이라고 하자. $F$가 주어졌을 때, $E$의 조건부 확률은 $P(E\mid F)$로 표시되며 다음과 같이 정의된다

$$P(E\mid F) = \frac{P(E \cap F)}{P(F)}$$

그럼 다음이 성립한다

$$P(E\mid F) = \frac{P(E \cap F)}{P(F)} \text{ and } P(F \mid E) = \frac{P(E \cap F)}{P(E)}$$

그리고 다음이 쓸 수 있다

$$P(E \mid F)P(F) = P(E \cap F) \text{ and } P(F \mid E)P(E) = P(E \cap F)$$

$P(E \mid F)$에 대한 두 공식을 동일시하면 다음과 같다

$$P(E \mid F)P(F) = P(F \mid E)P(E)$$

즉, 다음과 같다

$$P(E \mid F) = \frac{P(F \mid E)P(E)}{P(F)} \text{ and } P(F \mid E) = \frac{P(E \mid F)P(F)}{P(E)} $$

Note : $P(E) = P(E \mid F)P(F) + P(E \mid F^c)P(F^c)$

$E = E \cap S = E \cap (F \cup F^c) = (E \cap F) \cup (E \cap F^c)$ 이다 ($(E \cap F) \cap (E \cap F^c) = \empty $ 일 때)

그럼 다음을 도출할 수 있다

$P(E) = P(E \cap F) + P(E \cap F^c) = P(E \mid F)P(F) + P(E \mid F^c)P(F^c)$

그러므로 다음이 성립한다

$$P(F \mid E) = \frac{P(E \mid F)P(F)}{P(E \mid F)P(F) + P(E \mid F^c)P(F^c)}$$

## 문제 : 베이즈 정리

> 10만 명중 한 명이 특정 질병에 걸렸다고 가정하자. 해당 질병에 걸린 사람에게 검사를 수행시 $99.0$% 확률로 양성 판정이 나오며, 걸리지 않은 사람에게 검사를 수행시 $99.5$% 확률로 음성 판정이 나온다
>
> a) 양성 판정을 받은 사람이 질병에 걸릴 확률을 구해라
>
> b) 음성 판정을 받은 사람이 질병에 걸리지 않았을 확률을 구해라

*풀이 a*

사건 D를 질병에 걸린 사람이라고 하고, E를 양성 판정을 받은 경우라고 하자.

양성 판정을 받은 사람이 질병에 걸릴 확률은 P(D \mid E)$이다

$$P(D) = \frac{1}{10^5}, P(D^c) = 1 - \frac{1}{10^5}$$

$$P(E \mid D) = 0.99, P(E^c \mid D) = 0.01$$

$$P(E \mid D^c) =0.005, P(E^c \mid D^c) = 0.995$$

따라서 다음과 같다

$$P(D \mid E) = \frac{P(E \mid D)P(D)}{P(E \mid D)P(D) + P(E \mid D^c)P(D^c)}$$

$$= \frac{0.99 \cdot \frac{1}{10^5}}{0.99 \cdot \frac{1}{10^5} + 0.005 \cdot (1-\frac{1}{10^5})} = 0.0019761 \cdots$$

*풀이 b*

음성 판정을 받은 사람이 질병에 걸리지 않았을 확률은 $P(D^c \mid E^c)$ 이다

$$P(D^c \mid E^c) = \frac{P(E^c \mid D^c)P(D^c)}{P(E^c \mid D^c)P(D^c) + P(E^c \mid D)P(D)}$$

$$= \frac{0.995 \cdot (1-\frac{1}{10^5})}{0.995 \cdot (1-\frac{1}{10^5}) + 0.01 \cdot \frac{1}{10^5}} = 0.99997 \cdots$$

## 일반화된 베이즈 정리

> 일반화된 베이즈 정리: 표본 공간 $S$의 사건 $E$라고 하고 $F_1, F_2 \cdots F_n$을 상호 배제 사건(mutually exclusive events)이고 $\bigcup_{i=1}^nF_i = S$ 라고 했을 때
>
> $i = 1, 2, \cdots n$ 일 때 $P(E) \ne 0$ 라고 가정하면 다음과 같다

$$ P(F_k \mid E) = \frac{P(E \mid F_k)P(F_k)}{\sum_{i=1}^nP(E \mid F_i)P(F_i)} $$

## 베이지안 스팸 필터 (Bayesian spam filters)

> 이메일이 스팸의 가능성이 이쓴지 판단하는 도구를 개발했다
>
> 스팸 메시지의 집합 B와 스팸이 아닌 메세지의 집합 G가 있다고 가정하자
>
> 베이즈 법칙을 사용해 이메일 메세지가 스팸일 확률을 예측할 수 있다

특정 단어 w를 살펴보고, 이 단어가 B와 G에 나타나는 횟수를 다음과 같이 나타낼 수 있다 : $n_B(w), n_G(w)$

- 스팸 메시지에 w가 포함될 확률은 다음과 같다
    - $p(w) = n_B(w) / \mid B \mid$
- 스팸이 아닌 메시지에 w가 포함될 확률은 다음과 같다
    - $p(w) = n_G(w) / \mid G \mid$

S는 메세지가 스팸인 사건이라 하고, E는 메세지에 단어 w가 포함된 경우라고 하자

베이즈 법칙을 사용한다면,

$$P(S \mid E) = \frac{ P(E \mid S)P(S) }{ P(E \mid S)P(S) + P(E \mid S^c)P(S^c) }$$

임의의 메세지가 스팸일 확률과 아닌 확률이 같다고 가정하자. 즉, $P(S) = 1/2$ 이다

그럼 다음과 같다

$$P(S \mid E) = \frac{ P(E \mid S) }{ P(E \mid S) + P(E \mid S^c) }$$

따라서 w가 포함된 메시지가 스팸일 확률은 다음과 같다

$$r(w) = \frac{p(w)}{p(w) + q(w)}$$

참고: 스팸 메시지의 빈도에 대해 알 수 있다면, 더 나은 추정치를 얻을 수 있다

## 문제 : 스팸 필터

> 스팸 메시지 2000개 중 250개에 Rolex라는 단어가 포함되어 있고, 스팸이 아닌 메시지 1000개중 5개에 Rolex라는 단어가 포함되어 있는 것으로 나타났다.
>
> 수신 메시지가 스팸일 확률을 추정하라. 이메일을 거부하는 임계값이 0.9라고 가정한다

*풀이*

- $p(Rolex) = 250/2000 = 0.125$
- $q(Rolex) = 5/1000 = 0.005$

따라서

$$r(Rolex) = \frac{p(Rolex)}{p(Rolex) + q(Rolex)} = \frac{0.125}{0.125+0.005} = 0.96\cdots$$

따라서 Rolex가 포함된 메세지를 스팸으로 간주하고 거부한다

## 여러 단어를 사용하는 스팸 필터

2개 이상의 단어를 증거로 고려시 정확도를 높일 수 있다

사건 $S$는 메세지가 스팸인 경우, 사건 $E_1$와 $E_2$는 각각 $w1$, $w2$를 포함하는 경우라고 생각하자

여기서는 각 사건이 독립적이라고 단순화하여 가정하자.

또, $p(S) = 1/2$ 이라고 가정하자

$$P(S \mid E_1 \cap E_2) = \frac{P(E_1 \mid S)P(E_2 \mid S)}{P(E_1 \mid S)P(E_2 \mid S) + P(E_1 \mid S^2)P(E_2 \mid S^2)}$$

$$r(w_1, w_2) = \frac{p(w_1)p(w_2)}{p(w_1)p(w_2) + q(w_1)q(w_2)}$$

## 문제 : 여러 단어를 사용하는 스팸 필터

> 2000개의 스팸 메시지와 1000개의 스팸이 아닌 메시지를 가지고 있다
>
> "stock" 단어는 스팸 메시지 중 400개에 포함되어있고 스팸메시지가 아닌 메시지 중 60개 포함되어 있다
>
> "undervalued" 단어는 스팸 메시지 중 200개에 포함되어 있고 스팸 메시지가 아닌 메시지 중 25개 포함되어 있다

*풀이*

- $p(\text{stock}) = 400/2000, q(\text{stock})=60/1000$
- $p(\text{undervalued}) = 200/2000, q(\text{undervalued})=25/1000$

$$r(w_1, w_2) = \frac{p(\text{stock})p(\text{undervalued})}{p(\text{stock})p(\text{undervalued}) + q(\text{stock})q(\text{undervalued})}$$

## 여러 단어를 사용하는 스팸 필터

일반적으로 고려하는 단어가 많을수록 스팸 필터의 정확도가 높아진다

$k$개의 단어를 고려할 때 독립성 가정을 적용하면 다음과 같다

$$ P(S \mid \bigcap_{i=1}^kE_i) = \frac{\prod_{i=1}^kP(E_i \mid S)}{ \prod_{i=1}^kP(E_i \mid S) + \prod_{i=1}^kP(E_i \mid S^c) } $$

$$r(w_1, w_2, \cdots w_k) = \frac{\prod_{i=1}^kp(w_i)}{ \prod_{i=1}^kp(w_i) + \prod_{i=1}^kq(w_i) }$$

