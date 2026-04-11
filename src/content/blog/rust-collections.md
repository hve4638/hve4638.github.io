---
title: "Rust | rust 개념 정리 - 컬렉션"
author: Hve
date: 2025-02-10 13:24:10 +0900
categories: ["개발", "언어"]
math: false
mermaid: false
tags: ["rust"]
---

## vector

```rust
let v: Vec<i32> = Vec::new();
let v: Vec<i32> = vec![];
let v = vec![1, 2, 3, 4];
```

크기가 가변적인 배열이다.

초기값을 지정하지 않는다면 명시적으로 타입을 지정해야 한다.

### 메서드

```rust
//push()로 추론이 가능하므로 타입 생략 가능
let mut v = vec![];

// 값 추가
v.push(0);
v.push(1);
v.push(2);

// 값 읽기
let value: &i32 = &v[2]; // 값을 벗어나면 패닉 발생
let value: Option<&i32> = v.get(2); // 값을 벗어나면 None 반환

// 반복자
for i in &v {
    println!("{i}");
}
```

## String

```rust
let s = String::new();
let s = String::from("hello world");
let s = "hello world".to_string();

let hello = String::from("السلام عليكم");
let hello = String::from("Dobrý den");
let hello = String::from("Hello");
let hello = String::from("שָׁלוֹם");
let hello = String::from("नमस्ते");
let hello = String::from("こんにちは");
let hello = String::from("안녕하세요");
let hello = String::from("你好");
let hello = String::from("Olá");
let hello = String::from("Здравствуйте");
let hello = String::from("Hola");
```

String은 UTF-8로 저장되므로 적절하게 인코딩된 모든 문자를 넣을 수 있다.

### String 사용

```rust
let mut s = String::from("hello");
s.push(' ');
s.push_str("world");

// 문자열 단위 반복
for c in s.chars() {
    println!("{c}");
}
// 바이트 단위 반복
for b in s.bytes() {
    println!("{b}");
}
```

### 인덱싱 / 슬라이싱

```rust
let s = String::from("안녕하세요");

let v = &s[0]; // 컴파일 에러
let v = &s[..2]; // 패닉 발생
let v = &s[..3]; // 정상 실행
```

문자열은 `UTF-8`으로 저장되므로 인덱서를 통한 접근이 불가능하며 컴파일 단계에서 에러가 발생한다.

슬라이싱을 통한 경우에도 유효하지 않은 구간을 슬라이싱하면 패닉이 발생한다.

위 예시에서 `[..2]` 범위를 슬라이싱 했지만, '안'은 UTF-8 기준 3바이트이므로 가져온 범위는 유효한 문자가 아니므로 패닉이 발생한다.

슬라이싱을 통한 에러는 컴파일 단계에 확인할 수 없으므로 런타임 단계에서 패닉이 발생한다.

## HashMap

```rust
use std::collections::HashMap;

let scores:HashMap<String, i32> = HashMap::new();
```

해당 `use` 구문이 필요하다.

### HashMap 사용

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();

// 값 추가
scores.insert(String::from("Blue"), 10);

// 이미 필드가 있다면 덮어쓰기
scores.insert(String::from("Blue"), 20);

// 필드가 없는 경우에만 추가하기
scores.entry(String::from("Yellow")).or_insert(50);
scores.entry(String::from("Yellow")).or_insert(50);
```

