---
title: "Rust | rust 개념 정리 - 기본 정리"
author: Hve
date: 2025-02-07 14:58:49 +0900
categories: ["개발", "레퍼런스"]
math: false
mermaid: false
tags: ["rust"]
---

## main문 (진입점)

```rust
fn main() {
    println!("Hello world!");
}
```

- `fn` : 함수 정의 키워드

이후 설명에서 추가 함수를 작성하지 않을 경우 main 문을 생략함

## 변수 정의

```rust
let x = 1;
let mut y = 0;
y = 2;
println!("x : {}", x);
println!("y : {}", x);
```

- `let` 키워드를 통해 정의, 기본적으로 불변
- 뒤에 `mut`를 붙이면 가변성을 가진다.

## 변수의 shadowing

```rust
let x = 5;
let x = x + 1;
let x = x * 2;
println!("x : {}", x);

let x = "Hello world!";
println!("x : {}", x);
```

`let`을 통해 새 변수를 bind하면 이전 변수는 가려짐

동일한 이름의 이전 변수와는 별개이므로, 새로 바인딩되는 변수의 유형을 변경할 수 있다.

## 상수

```rust
const X: u32 = 100_000;

println!("X : {}", MAX_POINT);
```

## 자료형

정수 자료형 (signed, unsigned)
- `i8`, `u8`, `i16`, `u16`, `i32`, `u32`, `i64` `u64`, `i128`, `u128`
- `isize` `usize` (cpu 아키텍쳐에 따라 다름)

실수 자료형
- `f32`, `f64`

부울 자료형
- `bool`

문자열 슬라이스
- `str`

## 자료형 지정

```rust
let n: f32 = 0.1;
let f: bool = false;
```

## 튜플

```rust
let t = (1, 2.5, "Hello world");
let (n, f, s) = t;
let n = t.0;
let f = f.1;
let s = f.2;
```

2번쨰 줄처럼 언팩을 하는 방식과, 3-5번째 줄처럼 접근하여 바인딩하는 방식은 동일한 결과를 가짐

튜플의 자료형은 `(자료형, 자료형...)`과 같이 적는다.

## 배열

```rust
let arr = [1, 2, 3, 4, 5];
let arr:[i32; 5] = [1; 5];
```

배열의 자료형은 `[자료형; 크기]` 와 같이 적는다. 초기화도 `[초기값; 크기]`로 작성한다.

## 함수

```rust
fn main() {
    show(12);
}

fn show(x: i32) {
    println!("result : {}", x);
}
```

함수의 인자는 암시적으로 자료형을 추론할 수 없으므로, 명시적으로 자료형을 작성해야한다.

## 함수의 리턴

```rust
fn main() {
    let x = calc(1, 2);
    println!("1 + 2 = {}", x);
}

fn calc(a: i32, b:i32) {
    a + b
}
```

`return` 키워드를 사용하지 않으며, `;`를 적지 않으면 반환값이 된다.

이 규칙은 아래에서 설명할 `if`, `match` 등에도 적용되는 규칙이다.

## 구조체

```rust
struct User {
    name : String,
    email: String,
}

let user = User {
    name : String::from("hve"),
    email : String::from("hve@gmail.com"),
}
```

- [구조체](/posts/rust-struct) 참조

## if문

```rust
let x = 6;
if x % 4 == 0 {
    println!("divisible by 4");
} else if x % 3 == 0 {
    println!("divisible by 3");
} else if x % 2 == 0 {
    println!("divisible by 2");
} else {
    println!("not divisible by 4, 3, or 2");
}
```

## if문을 표현식으로 사용

```rust
let x = 6;
let divisible = if x % 3 == 0 {
    3
} else if x % 2 == 0 {
    3
} else {
    1
};
```

함수 리턴 때와 마찬가지로 `;`을 작성하지 않으면 표현식으로 간주되어 값 바인딩에 사용할 수 있다.

## 반복

```rust
loop {
    println!("inf loop");
}

let mut x = 5;
while x != 0 {
    println!("x : {}", x);
    x -= 1;
}

let arr = [1, 2, 3];
for element in arr.iter() {
    println!("element : {}", element);
}
```
 
## enum (열거형)

```rust
enum Money {
    Won,
    Dollar
}

enum IP {
    V4(u8, u8, u8, u8),
    V6(String)
}

let ip = IP::V6("::1");
```

타 언어에서 일반적인 상수로 쓰이는 것과 달리 enum 자체가 값을 보관할 수 있다.

## 정의된 열거형 : Result, Option

```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}

enum Option<T> {
    Some(T),
    None
}
```

`Result`, `Option`는 미리 정의되어있는 열거형으로 각 용도는 다음과 같다.
- `Result` : 타 언어의 예외를 대체
- `Option` : 타 언어의 null(값이 없음)을 대체

아래의 match문과 함께 사용된다.

## match 문

```rust
let num = Some(15);
match num {
    Some(i) => {
        println!("num : {}", i);
    },
    None => {
        println!("num : None");
    }
}
```

match는 반드시 모든 분기를 처리해야 한다.

```rust
let num = Some(15);
let result = match num {
    Some(i) => i,
    None => 0
};
println!("result : {}", result);
```

마찬가지로 match 문 자체를 표현식으로 쓸 수 있다.

## if let 문

```rust
let num = Some(15);
if let Some(i) = num {
    println!("num : {}", i);
}
```

match로 처리가능한 분기중 일부만 필요한 경우 유용하다.

