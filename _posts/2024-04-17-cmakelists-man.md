---
title: "CMake | CMakeLists.txt 작성 (WIP)"
author: Hve
date: 2024-04-17 10:08:11 +0900
categories: ["개발", "CMake"]
math: false
mermaid: false
tags: []
---

## 예시

```cmake
cmake_minimum_required(VERSION 3.10) # 버전 명시
set(CSV_CXX_STANDARD 20) # 변수 정의 : CSV_CXX_STANDARD=20
project(CanReplay) # 프로젝트 명

include_directories(include) # 헤더를 찾을 디렉토리 추가 

file(GLOB SRC_CPP src/*.cpp) # src/.*cpp 파일 목록을 SRC_CPP 변수에 추가
file(GLOB SRC_CPP src/*.c)

add_executable(a.out ${SRC_CPP} ${SRC_C}) # 빌드 결과물은 a.out이며 뒤에 오는 파일로 빌드
```