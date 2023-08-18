---
title: "C++ | vector 정리"
author: Hve
date: 2023-08-17 20:35:04 +0900
categories: [프로그래밍, C++]
math: false
mermaid: false
tags: ["c++"]
---

# Vector

vector는 동적 배열을 구현하는 컨테이너다.

내부 원소의 증가 및 감소에 따라 알아서 메모리를 할당 및 해제 한다.

## 예시

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> vec; // 선언
    
    // 원소 증가
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(4);
    vec.push_back(5);

    int value;
    cout << vec.size() << endl; // vector 크기 출력

    cout << vec[0] << endl; // 0번째 원소 출력
    cout << vec.pop_back() << endl; // 마지막 원소 제거 후 출력
    
    // Range-based for loop
    for(int ele : vec) {

    }
}

```

## 필요 헤더

```cpp
#include <vector>
```

## 선언

> std::vector\<자료형\>

```cpp
// 비어있는 vector 생성
vector<int> vec;

// 크기 10의 기본값으로 초기화된 상태로 생성
// int, char등 기본 자료형의 경우 0, 클래스의 경우 기본 생성자로 생성된 객체로 채워짐
vector<int> vec(10); 

// 크기 10의 1로 초기화된 상태로 생성
vector<int> vec(10, 1); 

// src의 원소를 복사해 dst를 생성
vector<int> src(10, 5);
vector<int> dst(src);
```

## 원소 추가 & 삭제

> std::vector::push_back()

> std::vector::pop_back()

```cpp
// 원소 5 추가
vec.push_back(5);

// 마지막 원소 제거
vec.pop_back();
```

## 원소 가져오기

> std::vector::at()

> std::vector::operator[]

```cpp
// 2번째 원소를 가져온다
value = vec.at(2);

// 2번째 원소를 가져온다
value = vec[2];
```

**`at()` 과 `operator[]` 의 차이?**

*`at()` 의 경우 범위 체크를 하여 예외처리를 해준다.*

*반면 `operator[]`의 경우 범위 체크를 하지 않으며, 범위를 벗어난 곳을 접근하는 경우는 정의되지 않은 동작 (undefined behavior) 이다.*

*`at()`이 좀더 안전한 방법이지만 범위를 벗어난 접근은 일반적으로 정상적인 상황은 아니기 때문에 `at()`을 쓰는 대신 먼저 범위를 확인하고 `operator[]`를 쓰는 것이 좋다.*

## 기타

### size

> std::vector::size()

```cpp
// 저장된 원소의 크기 가져오기
value = vec.size();
```

### resize

> std::vector::resize()

```cpp
// 크기를 3으로 변경
// 늘어난 크기만큼 기본값으로 채워짐
vec.resize(3);
```

### capacity

> std::vector::capacity()

```cpp
// vector의 capacity 가져오기
value = vec.capacity();
```

size는 원소의 갯수, capacity는 원소가 저장될 공간의 크기를 의미하며 capacity가 size보다 같거나 더 크다.

