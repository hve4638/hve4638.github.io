---
title: "JS | funciton을 사용하지 말것"
author: Hve
slug: js-dont-use-function
date: 2025-10-09 11:10:23 +0900
categories: ["js"]
math: false
mermaid: false
tags: []
---

## 기존 function의 특징

```js
function foo() {
    console.log('bar');
}
```

function으로 생성한 함수의 용도 및 특징은 다음과 같다
- 단순 함수로 사용 가능
- 생성자 함수로 사용 가능
- 객체 메서드로 사용 가능
- this 바인딩의 비직관성

너무 범용적이기 때문에 이런 모든 상황에 대한 이해가 없다면 하기하기가 쉽다

## class 생성자

```js
class Foo {
    a() {
        return 1;
    }
}
```

## arrow function

```js
const foo = () => {
    console.log('bar');
}
```

내부적으로 prototype이 없다. 생성자로 사용할 수 없다는 의미이며, 함수로 쓸 때 function보다는 좀 더 가볍다는 뜻도 된다.

call, bind 등을 통해 this 바인딩을 적용할 수 없다.

## 메소드 축약형

```js
const foo = {
    value: 1,
    bar() {
        return this.value;
    }
}
```

arrow ow ction과 유사하게 하게 totype이 없지만, 객체에 대한 this 바인딩이 있다.


## generator

```js
function *gen() {
    yield 1;
    yield 2;
}
```

arrow funciton은 generator를 생성할 수 없으므로 function을 사용해야 한다.

객체 내에서라면 여전히 메소드 축약형을 통해 generator를 생성할 수 있다.

@WIP