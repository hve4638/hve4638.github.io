---
title: "C++ | Priority Queue 정리"
author: Hve
date: 2023-08-20 02:06:51 +0900
categories: ["프로그래밍", "C++"]
math: false
mermaid: false
tags: ["c++"]
---

# Priority Queue

Priority Queue(우선순위 큐) 는 FIFO 방식으로 처리되는 큐와 달리, 원소의 우선순위에 따라 정렬되어 우선순위가 높은 순서대로 처리된다.

내부적으로 `Heap` 구조로 구현된다.

## 예시

```cpp
#include <queue>
#include <iostream>

int main() {
    std::priority_queue<int> pq; //선언

    // 원소 추가
    pq.push(1);
    pq.push(3);
    pq.push(2);

    // 우선순위가 가장 높은 원소 리턴
    pq.top();

    // 우선순위가 가장 높은 원소 삭제
    pq.pop();
}
```

## 필요 헤더

```cpp
#include <queue>
```

`queue`와 동일한 헤더를 사용한다

## 선언

> std::priority_queue<자료형>

> std::priority_queue<자료형, 컨테이너, 비교함수>


```cpp
// int형 원소를 담는 우선순위 큐
// 내림차순으로 정렬된다
std::priority_queue<int> t;

// 내부적으로 vector<int> 컨테이너에 원소를 저장하는 우선순위 큐
std::priority_queue<int, vector<int>> t;

// 오름차순으로 정렬되는 우선순위 큐
std::priority_queue<int, vector<int>, greater<int>> t;
```

일반적으로 비교함수를 저장하지 않는다면 

`컨테이너` 는 empty(), size(), front(), push_back(), pop_back() 함수를 지원하는 클래스여야 하며 STL 컨테이너중 `vector`와 `deque`가 이를 충족한다.

``

### 클래스를 담는 priority_queue

```cpp
struct Label {
    int index;
    int value;
}

struct LabelCompare {
    bool operator()(const Label& a, const Label& b) {
        return a.value < b.value;
    }
};

int main() {
    // Label 객체를 담는 우선순위 큐
    // value 멤버변수를 비교해 우선순위를 정한다.
    std::priority_queue<Label, vector<Label>, LabelCompare> pq;
}
```

## 원소 추가 & 제거

> std::priority_queue::push()

> std::priority_queue::pop()

```cpp
// 우선순위큐에 원소를 추가
pq.push(3);
pq.push(2);
pq.push(1);

// 우선순위가 높은 원소를 제거
pq.pop();
```

## 원소 가져오기

> std::priority_queue::top()

```cpp
// 우선순위가 높은 원소를 리턴
pq.top();
```

## 기타

> std::priority_queue::empty()

> std::priority_queue::size()

```cpp
// 우선순위 큐 내 원소의 개수를 구한다
int size = pq.size();

// 우선순위 큐가 비어있는지 여부를 가져온다
bool is_empty = pq.empty();
```