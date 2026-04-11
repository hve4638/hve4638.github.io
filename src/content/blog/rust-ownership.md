---
title: "Rust | rust 개념 정리 - 소유권"
author: Hve
date: 2025-02-09 21:47:38 +0900
categories: ["개발", "언어"]
math: false
mermaid: false
tags: ["rust"]
---

# 소유권

소유권(ownership)은 메모리 안전성을 보장하기 위한 개념으로 세가지 규칙을 가진다.

1. 각 값은 소유자(owner)라 불리는 변수를 가진다.
2. 한 시점에 특정 값의 소유자는 단 하나 뿐이다.
3. 소유자의 생명 주기가 끝나면 그 값은 자동으로 해제(drop)된다.

`c++`에서 사용되는 RAII와 유사한 개념으로 볼 수 있으며, 해당 개념이 언어 단계에서 통합되어 더 적은 런타임 비용과 더 나은 편의성을 제공한다.

## 소유권 이전

```rust
let s1 = String::from("hello"); // s1에 소유권 생성
let s2 = s1; // s1->s2 소유권 이전

println!("s1 : {}", s1); // 컴파일 에러
println!("s2 : {}", s2);
```

힙에 저장되는 데이터의 경우, 동시에 두 변수가 소유권을 가질 수 없다.

따라서 '얕은 복사'는 일어나지 않는다.

## 깊은 복사

```rust
let s1 = String::from("hello");
let s2 = s1.clone(); // 깊은 복사

println!("s1 : {}", s1); // 정상 작동
println!("s2 : {}", s2);
```

## 함수를 통한 소유권 이동

```rust
fn main() {
    let s1 = String::from("hello");
    print_str(s1); // 소유권 상실

    let s2 = get_str(); // 소유권 획득
    println!("s2 : {}", s2);
}

fn print_str(s:String) { // 소유권 획득
    println!("s : {}", s);
}

fn get_str() {
    return String::from("hello"); // drop하는 대신 소유권 이전
}
```

## 참조

```rust
fn main() {
    let s = String::from("hello");
    let len = get_len(&s); // s1의 소유권 유지

    println!("length : {}", len);
}

fn get_len(s: &String) -> usize {
    s.len()
}
```

타입 앞에 `&`를 붙이면 값을 *이동*하는 대신 *빌리게(borrow)* 된다.

호출 시 넘기는 매개변수도 앞에 `&`를 붙여야 한다.

```rust
fn main() {
    let mut s = String::from("hello");
    let len = add_char(&s);
}

fn add_char(s: &String) -> usize {
    s.push_str("world"); // 컴파일 에러
}
```

참조는 불변이므로 값을 변경할 수 없다.

아래의 가변 참조와 구분하기 위해 `불변 참조`라고도 부른다.

## 가변 참조

```rust
fn main() {
    let mut s = String::from("hello");
    let len = add_char(&mut s);
}

fn add_char(s: &mut String) -> usize {
    s.push_str("world")
}
```

가변 참조를 통해 내부에서 값을 변경할 수 있다.

당연히 원본이 되는 변수가 가변이어야 한다.

## 참조 규칙

> 불변 참조는 여러개 존재할 수 있다.
>
> 가변 참조는 하나만 존재할 수 있다.
>
> 불변 참조와 가변 참조는 동시에 있을 수 없다.

```rust
fn main() {
    let mut s = String::from("hello");
    let ref1 = &s;
    let ref2 = &s;
    let ref3 = &s;
}
```

불변 참조는 여러개 만들 수 있다.

```rust
fn main() {
    let mut s = String::from("hello");
    let ref1 = &mut s;
    let ref2 = &mut s; // 컴파일 에러
}
```

가변 참조는 스코프 내에 하나만 있을 수 있다.

```rust
fn main() {
    let mut s = String::from("hello");
    let ref1 = &s;
    let ref2 = &s;
    let ref3 = &mut s; // 에러 발생
}
```

참조의 불변성이 깨질 수 있기 때문에, 불변 참조와 가변 참조를 함께 사용할 수 없다.

## 슬라이스

```rust
let s = String::from("hello");
let sliced1:&str = s[..2]; // he
let sliced2 = s[0..3]; // hel
let sliced3 = s[3..]; // llo
```

