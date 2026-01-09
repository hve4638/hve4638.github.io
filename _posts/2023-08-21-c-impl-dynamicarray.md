---
title: "C언어 | 동적 배열 구현"
author: Hve
date: 2023-08-21 03:43:20 +0900
categories: ["개발", "레퍼런스"]
math: false
mermaid: false
tags: ["c"]
---

# 동적 배열

## 전체 코드

### 헤더 (dynamicarray.h)

```c
#include <stdio.h>
#define DYNAMICARRAY_TYPE int

typedef struct DynamicArray {
    size_t size;
    size_t capacity;
    DYNAMICARRAY_TYPE* data;
} DynamicArray;

DynamicArray array_create();
void array_push(DynamicArray* arr, DYNAMICARRAY_TYPE value);
DYNAMICARRAY_TYPE array_pop(DynamicArray* arr);
void array_free(DynamicArray* arr);
```
### 소스코드

```c
#include <stdlib.h>
#include <string.h>
#include "dynamicarray.h"

void array_realloc(DynamicArray* arr, size_t capacity) {
    size_t newsize = sizeof(DYNAMICARRAY_TYPE)*capacity;
    DYNAMICARRAY_TYPE* ptr = (DYNAMICARRAY_TYPE*)realloc(arr->data, newsize);

    if (ptr == NULL) {
        ptr = (DYNAMICARRAY_TYPE*)malloc(newsize);

        memcpy(ptr, arr->data, sizeof(DYNAMICARRAY_TYPE)*arr->capacity);
        free(arr->data);
        
        arr->data = ptr;
    }

    arr->capacity = capacity;
}

DynamicArray array_create() {
    DynamicArray arr;

    arr.capacity = 4;
    arr.size = 0;
    arr.data = (DYNAMICARRAY_TYPE*)malloc(sizeof(DYNAMICARRAY_TYPE)*arr.capacity);
    return arr;
}

void array_push(DynamicArray* arr, DYNAMICARRAY_TYPE value) {
    if (arr->size+1 >= arr->capacity) {
        array_realloc(arr, arr->capacity*2);
    }
    
    arr->data[arr->size++] = value;
}

DYNAMICARRAY_TYPE array_pop(DynamicArray* arr) {
    return arr->data[--arr->size];
}

void array_free(DynamicArray* arr) {
    arr->size = 0;
    arr->capacity = 0;
    free(arr->data);
}
```

## 사용

```c
// 선언 및 할당 방법
DynamicArray array = array_create();

// 원소 추가
array_push(&array, 1);
array_push(&array, 2);
array_push(&array, 3);

// 마지막 원소 가져오기
int value = array_pop(&array);

// 저장된 원소 개수 가져오기
int size = array.size;

// 0번째 원소 가져오기
int front = array.data[0];
```

## 세부 코드 설명

### 구조체 및 매크로

```c
#define DYNAMICARRAY_TYPE int

typedef struct DynamicArray {
    size_t size;
    size_t capacity;
    DYNAMICARRAY_TYPE* data;
} DynamicArray;
```

c언어는 템플릿, 제네릭과 같은 기능을 지원하지 않으므로 유연하게 타입을 사용할 수 없다.

`DYNAMICARRAY_TYPE` 매크로를 변경해 상수를 지정해 사용한다.


`capacity`는 할당된 메모리 크기를 의미한다. (실제 할당된 크기는 capacity에 타입크기를 곱해야 한다)

`size`는 저장된 원소의 개수를 의미한다.

`data`는 배열이 저장되고 사용시 `array.data[0]` 같은 방법으로 사용한다.

### 할당 (array_create)

```c
DynamicArray array_create() {
    DynamicArray arr;

    arr.capacity = 4;
    arr.size = 0;
    arr.data = (DYNAMICARRAY_TYPE*)malloc(sizeof(DYNAMICARRAY_TYPE)*arr.capacity);
    return arr;
}
```

`capacity`는 할당된 메모리 크기를 의미한다. (실제 할당된 크기는 capacity에 타입크기를 곱해야 한다)

`size`는 저장된 원소의 개수를 의미한다.

`data`는 배열이 저장된다.


### 원소 추가 (array_push)

```c
void array_push(DynamicArray* arr, DYNAMICARRAY_TYPE value) {
    if (arr->size+1 >= arr->capacity) {
        array_realloc(arr, arr->capacity*2);
    }
    
    arr->data[arr->size++] = value;
}
```

배열을 마지막에 원소를 추가한다. 

그 과정에서 할당된 메모리보다 크기가 커지면 자동으로 메모리를 늘린다.

### 원소 제거 (array_pop)

```c
DYNAMICARRAY_TYPE array_pop(DynamicArray* arr) {
    return arr->data[--arr->size];
}
```

배열 마지막 원소를 제거한다.

실제로는 마지막 원소를 리턴하며 size를 감소시킨다.

### 원소 재할당 (array_realloc)

```c
void array_realloc(DynamicArray* arr, size_t capacity) {
    size_t newsize = sizeof(DYNAMICARRAY_TYPE)*capacity;
    DYNAMICARRAY_TYPE* ptr = (DYNAMICARRAY_TYPE*)realloc(arr->data, newsize);

    if (ptr == NULL) {
        ptr = (DYNAMICARRAY_TYPE*)malloc(newsize);

        memcpy(ptr, arr->data, sizeof(DYNAMICARRAY_TYPE)*arr->capacity);
        free(arr->data);
        
        arr->data = ptr;
    }

    arr->capacity = capacity;
}
```

array_push에서 자동으로 호출되며 직접 호출할 일은 없다.

인자로 받은 capacity만큼 메모리를 늘린다. realloc이 실패할 경우 새로운 메모리를 할당하고 후 기존 원소를 복사한다.

### 할당 해제 (array_free)

```c
void array_free(DynamicArray* arr) {
    arr->size = 0;
    arr->capacity = 0;
    free(arr->data);
}
```

동적 메모리를 할당 해제한다.