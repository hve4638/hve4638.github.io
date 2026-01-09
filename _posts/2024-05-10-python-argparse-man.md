---
title: "Python | argparse - 명령줄 옵션 처리 파서"
author: Hve
date: 2024-05-10 08:12:36 +0900
categories: ["개발", "언어"]
math: false
mermaid: false
tags: ["python"]
---

## Quick Start

```python
import argparse

parser = argparse.ArgumentParser()

parser.add_argument('target')           # 1번째 인자 (필수)
parser.add_argument('index', type=int)  # 2번째 인자, 정수만 허용 (필수)
parser.add_argument('-c', '--count')    # -c, --count 옵션
parser.add_argument('-n', '--number', type=int, default=0)    # -n 옵션, 정수만 허용하며 기본값 0
parser.add_argument('-v', '--verbose', action='store_true')  # -v, --verbose 옵션, boolean

args = parser.parse_args() # 파서 실행 및 결과 리턴

print(args.target) # 필수 인자이므로 반드시 값이 저장됨
print(args.index)
print(args.count) # -c,--count 옵션의 값 또는 None(옵션 미사용시)
print(args.number) # -n 옵션의 값 (미지정시 기본값 0)
print(args.verbose) # True 또는 False
```



## Reference

- [docs.python.org : argparse](https://docs.python.org/ko/3/library/argparse.html)