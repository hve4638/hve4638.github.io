---
title: "Rust | rust 개념 정리 - 구조체"
author: Hve
date: 2025-02-09 22:51:37 +0900
categories: ["개발", "rust"]
math: false
mermaid: false
tags: []
---

## 구조체 정의

```rust
// 구조체 정의
struct User {
    name : String,
    email: String,
}

// 구조체 생성
let user = User {
    name : String::from("hve"),
    email: String::from("hve@example.com")
}
```

## 필드 초기화 단축 문법 (field init shorthand syntax)

```rust
fn main() {
    let name = String::from("hve");
    let email = String::from("hve@example.com");
    
    let user = get_user2(name, email);

    println!("{}", user.name);
    println!("{}", user.email);
}

fn get_user1(name:String, email:String) -> User {
    User {
        name : name,
        email: email
    }
}
fn get_user2(name:String, email:String) -> User {
    User {
        name,
        email
    }
}
```

구조체의 필드명과 변수명이 동일하다면 `필드명 : 변수명` 대신 `필드명`만 적어도 된다.

위의 예시에서 `get_user1`와 `get_user2`는 동일한 역할을 수행한다.

## 구조체 갱신 문법 (struct update syntax)

```rust
let user2 = User {
    name : String::from("new user"),
    ..user1
}
```

기존 구조체를 기반으로 새 구조체를 생성하고 싶다면, `..` 를 통해 기존 구조체의 값을 그대로 가져올 수 있다.

새 필드를 추가로 입력하여 기존 구조체에서 갱신할 새 필드를 지정할 수도 있다.

새 구조체로 옮겨진 필드는 소유권이 이동했으므로 기존 구조체의 필드는 유효하지 않지만, 새 값을 추가해 새 구조체로 옮겨가지 않은 필드는 그대로 유지된다.

필드와 타입이 완벽하게 동일하더라도, 다른 구조체간 이동할 수는 없다.

## 튜플 구조체

```rust
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

let color = Color(0, 0, 0);
let point = Point(0, 0, 0);
```

## 메소드 정의

```rust
struct Rect {
    width : i32,
    height : i32,
}

impl Rect {
    fn square(width:i32) -> Rect {
        Rect {
            width : width,
            height : width,
        }
    }
    // 메소드 생성
    fn area(&self) -> i32 {
        self.width * self.height
    }
}

impl Rect {
    // 구조체당 여러개의 impl 블럭도 허용됨
    fn show(&self) {
        println!("({}, {})", self.width, self.height);
    }
}

fn main() {
    let rect = Rect::square(16);

    println!("{}", rect.area());
    rect.show();
}
```

메서드의 첫번째 인자로는 `self`(소유권 이동), `&self`(불변 참조), `&mut self`(가변 참조)가 올 수 있다.

어떤 방식이든 `변수.메서드()` 로 접근한다. 

첫번째 인자로 self 매개변수를 사용하지 않을 수 있으며 이때는 `구조체::함수()`로 접근하게 된다.



