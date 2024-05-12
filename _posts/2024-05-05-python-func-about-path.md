---
title: "Python | 경로, 파일 관련 함수"
author: Hve
date: 2024-05-05 05:57:03 +0900
categories: ['프로그래밍', 'Python']
math: false
mermaid: false
tags: []
---

## 절대 경로 구하기

```python
os.path.abspath('') # 현재 경로 리턴
os.path.abspath('./') # 현재 경로 리턴
os.path.abspath('../') # 부모 경로 리턴
```

## 두 경로 합치기

```python
os.path.join('/workspace', 'target') # /workspace/target 리턴
os.path.join('/workspace', 'target', 'file') # /workspace/target/file 리턴
os.path.join('/workspace/', 'target') # /workspace/target 리턴

# 사용시 유의
os.path.join('/workspace', '/target') # /target 리턴
os.path.join('/workspace', './target') # /workspace/./target 리턴
```

## 파일, 경로 존재 여부 확인

```python
os.path.exists() # 해당 경로의 파일 또는 디렉토리 존재 여부
os.path.isdir() # 디렉토리 존재 여부
os.path.isfile() # 파일 존재 여부
```

