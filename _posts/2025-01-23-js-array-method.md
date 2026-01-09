---
title: "JS/TS | 배열 메서드"
author: Hve
date: 2025-01-23 11:50:56 +0900
categories: ["개발", "레퍼런스"]
math: false
mermaid: false
tags: ["javascript", "typescript"]
---

# 배열 메서드

아래의 배열 메서드는 모두 원본 배열을 건드리지 않는다.

`reduce`를 제외한 메서드의 인자는 공통적으로 `(element, index)=>any` 형태의 콜백 함수이며, index를 사용하지 않는다면 `(element)=>any`로 사용해도 된다.

## 반복

### foreach : 요소 반복

```js
const items = [1, 2, 3, 4]
items.forEach((ele, index)=>{
    console.log(ele); // 1, 2, 3, 4 출력
});
```

### map : 새로운 배열 생성

```js
const items = [1, 2, 3, 4];
const result = items.map((ele, index)=>ele*2);

console.log(result) // [2, 4, 6, 8]
```

### filter : 조건에 맞는 요소만 필터링

```js
const items = [1, 2, 3, 4, 5];
const odd = items.filter((ele, index)=>ele % 2 === 1);

console.log(odd); // [1, 3, 5]
```

## 조건 확인

### find : 조건에 맞는 첫번째 요소

```js
const items = ['apple', 'banana', 'chicken'];
const result = items.find((ele, index)=>ele.startsWith('b'));

console.log(result); // 'banana'
```

### findIndex : 조건에 맞는 첫번째 요소의 인덱스

```js
const items = ['apple', 'banana', 'chicken'];
const result = items.findIndex((ele, index)=>ele.startsWith('b'));

console.log(result); // 1
```

### some : 하나라도 조건에 맞는 요소가 있다면 true 반환

```js
const items = [0, 2, 4, 6, 8, 9];
const has_odd = items.some((ele, index)=>ele % 2 === 1);
const has_2 = items.some((ele, index)=>ele === 2);
const has_3 = items.some((ele, index)=>ele === 3);

console.log(has_odd); // true
console.log(has_2); // true
console.log(has_3); // false
```

### every : 모든 요소가 조건에 맞다면 true 반환

```js
const items = [0, 2, 4, 6, 8, 9];
const has_odd = items.every((ele, index)=>ele % 2 === 1);
const has_2 = items.every((ele, index)=>ele === 2);
const has_not_1 = items.every((ele, index)=>ele !== 1);

console.log(has_odd); // false
console.log(has_2); // false
console.log(has_not_1); // true
```

## 특수

### reduce : 누적 계산

```js
const items = [1, 2, 3, 4, 5];
const result = items.reduce((sum, current, index) => sum+current, 0);

console.log(result); // 15
```

`Array.reduce(콜백[, 초기값])`

reduce는 약간 복잡한데, 이전 콜백 호출의 리턴이 다음 콜백의 첫번째 인자(accumulator)으로 들어가게 되며 마지막 콜백의 리턴값이 `reduce()` 메서드의 리턴값이 된다.

콜백은 `(accumulator, currentValue, index)=>any` 형태이다. 마찬가지로 index 인자는 생략할 수 있다.

초기값은 맨 처음 들어간 accumulator의 값을 지정한다.
- 초기값을 지정하지 않는다면 배열의 첫번째 원소가 accumulator가 되고 두번째 원소부터 반복한다.

빈 배열에 `reduce()`를 호출하면 초기값이 그대로 리턴되며, 초기값을 지정하지 않은 경우 예외가 발생한다.
