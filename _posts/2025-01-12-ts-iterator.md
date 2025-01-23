---
title: "Typescript | Iterator 이해"
author: Hve
date: 2025-01-12 04:23:10 +0900
categories: ["개발", "javascript/typescript"]
math: false
mermaid: false
tags: []
---

## Iterable, Iterator 타입

선정리를 하면 다음과 같다.

- `Iterable`은 `Symbol.iterator` 필드에 `()=>Iterator`을 가진 객체
- `Iterator`는 `next` 필드에 `()=>IteratorResult`을 가진 객체
- `IteratorResult`는 `{ value:any, done:boolean }` 형식의 타입

제네릭 타입에 대해서는 후술한다.

### Iterable

```ts
interface Iterable<T, TReturn = any, TNext = any> {
    [Symbol.iterator](): Iterator<T, TReturn, TNext>;
}
```

`Iterable`은 *반복 가능한 객체*를 의미한다. `[Symbol.iterator]` 필드에 `Iterator<T, TReturn, TNext>` 형식의 함수가 있다면 `Iterable`을 충족한다.

`Iterable` 이라면 `for of` 구문이나 `...` 스프레드 연산자를 통해 반복할 수 있다. 배열, 문자열 등이 Iterable하다.

```ts
const iterable1 = [1, 2, 3]; // Iterable함 
const iterable2 = 'hello';   // Iterable함 

for (const item of iterable1) {
    console.log(item);
}
for (const item of iterable2) {
    console.log(item);
}
```

## Iterator와 IteratorResult

```ts
interface Iterator<T, TReturn = any, TNext = any> {
    next(...[value]: [] | [TNext]): IteratorResult<T, TReturn>;
}
```

`Iterator`는 `{ value : 결과, done: boolean }`을 반환하는 함수를 next 필드로 가진 객체를 의미한다.

`done : false`라면, 계속 반복한다는 의미이며, `done : true`라면 반복이 끝났다는 의미이다.

`done : true` 인 경우의 `value`는 일반적으로 무시된다.

```ts
let index = 0;
const iter:Iterator<number> = {
    next() {
        if (index < 10) {
            return { value: index++, done: false }
        }
        else {
            return { value: undefined, done: true }
        }
    }
}
```

`Iterator` 자체는 `for of` 구문이나 `...` 스프레드 연산자에 직접 사용할 수 없다. 이러한 문법을 사용해야 한다면 Iterable로 객체로 만들어야 한다.

## 제네릭 타입 T, TReturn, TNext

```ts
interface Iterable<T, TReturn = any, TNext = any> {
    [Symbol.iterator](): Iterator<T, TReturn, TNext>;
}

interface Iterator<T, TReturn = any, TNext = any> {
    next(...[value]: [] | [TNext]): IteratorResult<T, TReturn>;
}
```

`Iterable` 및 `Iterator`에는 제네릭 타입 `<T, TReturn = any, TNext = any>`이 존재한다.

각 타입의 용도를 정리하면 다음과 같다.
- `T` : *done: false* 일 때의 value 타입.
- `TReturn` : *done: true* 일 때 value 타입
- `TNext` : `Iterator`에서 next() 함수의 인자로 들어가는 값

### T, TReturn

```ts
let index = 0;
const iter:Iterator<number, string> = {
    next() {
        if (index < 2) {
            return { value: index++, done: false }
        }
        else {
            return { value: 'done!', done: true }
        }
    }
}

console.log(iter.next()) // { value : 0, done : false }
console.log(iter.next()) // { value : 1, done : false }
console.log(iter.next()) // { value : 'done!', done : true }
```

`T`는 반복 중 일 때(done: false) 값 타입, `TReturn`는 반복이 끝났을 때(done: true) 값 타입을 의미한다.

위 코드에서 iterable을 반복했을 때 number 타입으로 받고, 종료 시 string 타입을 받게 된다.

`TReturn`은 `for of` 및 `...` 스프레드 연산자에서 반복 종료 시 리턴 값을 받을 방법이 없으므로 의미가 없다. 직접 `Iterator`를 가져와 next를 호출하는 경우에만 리턴 값을 받을 수 있다.

### TNext

```ts
let index = 0;
const iter:Iterator<number, undefined, number> = {
    next(add:number) {
        if (index < 10) {
            return { value: (index++) + add, done: false }
        }
        else {
            return { value: undefined, done: true }
        }
    }
}

console.log(iter.next(1)) // { value : 1, done : false }
console.log(iter.next(2)) // { value : 3, done : false }
console.log(iter.next(3)) // { value : 5, done : false }
```

`TNext`는 `TReturn` 보다도 사용할 일이 적은데, next에 값을 명시적으로 넣어야 하지만 `for of`와 `...` 스프레드 연산자는 next() 인자로 `undefined`를 넣게 되므로 위 연산 자체를 할 수 없다.

## Generator

```ts
function* gen() {
    yield 1;
    yield 2;
    return 'done';
}

const iter = gen();
iter.next(); // { value: 1, done: false }
iter.next(); // { value: 2, done: false }
iter.next(); // { value: 'done', done: true }
iter.next(); // { value: undefined, done: true }
```

function 키워드 뒤에 `*`를 붙이면 `Generator`가 되며 내부에서 `yield` 키워드를 사용할 수 있다.

`yield`를 만나면 해당 위치에서 실행을 잠시 중단하고, `next()` 호출 시 그 이후부터 재개된다.

`return`을 만나면 반복이 종료된다. 일반적인 Iterator에서 `{ value: 반환값, done: true }`을 리턴하는 것과 유사하다.

```ts
function* gen() {
    yield 1;
    yield 2;
    return 'done';
}

const iterable:Iterable<number, string> = gen();
const iterator:Iterator<number, string> = gen();

for (const item of iterable) { }

iterator.next()
iterator.next()
```

`Generator`를 호출한 결과는 `Iterable`이면서 `Iterator`이다. `for of` 같은 반복자를 사용할 수도 있고, next()로 직접 반복도 가능하다.

```ts
class Range {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}
```

Generator가 `Iterator`라는건 `Iterable` 객체의 `Symbol.iterator` 필드에 Generator가 들어 갈 수 있다는 의미이기도 하다.

```ts
function* range(begin:number, end:number) {
    for (let i = begin; i < end; i++) {
        yield i;
    }
}

for (const item of range(15, 20)) {
    console.log(item); // 15~19 까지 출력
}
```

`Generator`에는 인자도 넣을 수 있으며 `yield`의 위치도 자유롭다.