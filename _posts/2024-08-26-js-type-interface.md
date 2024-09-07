---
title: "Typescript | type, interface 문법"
author: Hve
date: 2024-08-26 02:26:51 +0900
categories: ["개발", "JS/TS"]
math: false
mermaid: false
tags: []
---

## type 문법

```ts
// type 타입명 = 타입

type Name = string;
type Age = number;
type Address = number|string; // number 또는 string이 올 수 있음
type Sex = "male"|"female"; // 값 자체가 올 수 있음
```

## typeof를 통한 type 지정

```ts
const DATA = {
    "A" : 1,
    "B" : 2
} as const;
// 'as const'로 내부 필드를 readonly로 만들지 않으면 typeof 시 필드값이 number와 같은 타입으로 변환된다. 1, 2와 같은 값 자체를 타입으로 지정하고 싶다면 'as const'를 붙여야 한다

type Items = typeof DATA; // { "A": 1, "B": 2 }
type Keys = keyof typeof DATA; // "A" | "B"
type Values = typeof DATA[keyof typeof DATA]; // 1 | 2
```

Tree-Shaking 문제를 피하면서 enum을 구현하고 싶다면 이 방법을 사용할 수 있다

## interface의 유틸리티 타입

```ts
interface IData {
    "A" : number,
    "B" : number,
    "C" : number,
};
type PartialData = Partial<IData>; // IData의 부분 집합을 허용함
typeof PickData = Pick<IData, "A"|"B">; // IData의 특정 속성만 뽑아서 지정함
typeof OmitData = Omit<IData, "B"|"C">; // IData의 특정 속성을 제외함
```