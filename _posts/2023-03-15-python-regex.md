---
title: "Python | 정규표현식 문법"
author: Hve
date: 2023-03-15 10:45:00 +0900
categories: ["개발", "python"]
math: false
mermaid: false
tags: [python]
---

pyhton의 regex를 기준으로 작성되었다

## 메타문자

|문자| 설명 |
| --- |------|
| `.` | 모든 문자열 매치 |
| `\|` | or 처럼 사용됨 |
| `^` | 파일의 처음과 매치 |
| `$` | 파일의 끝과 매치 |
| `\A` | 파일의 처음과 매치 (MULTILINE) |
| `\Z` | 파일의 끝과 매치 (MULTILINE) |
| `\b` | 단어구분자 (whitespace) |
| `\B` | `\b`의 부정 |

### 반복

| 문자 | 설명 |
| --- |------|
| `*` | 0~번 반복 |
| `+` | 1~번 반복 |
| `{m,n}` | m~n 번 반복 |
| `?` | 0~1번 반복 |

### 문자 클래스

|문자| 설명 |
| --- |------|
| `[...]` | 문자클래스 매치 |
| `\d` | `[0-9]` 와 동일 |
| `\s` | `[ \t\n\r\f\v]` 와 동일 |
| `\w` | `[a-zA-Z0-9_]` 와 동일 |
| `[^...]` | `[...]` 의 부정 |
| `\D` | `\d` 의 부정 |
| `\S` | `\s` 의 부정 |
| `\W` | `\W` 의 부정 |

## Grouping

|문자| 설명 |
|--- |------|
| `()` | 그루핑 문자열 |

```python
c = re.compile(r"(hello)\b(world)")
m = p.match("hello world")

g0 = m.group(0) # 'hello world'
g1 = m.group(1) # 'hello'
g2 = m.group(2) # 'world'
```

### 그루핑 문자열 재참조

|문자| 설명 |
|--- |------|
| `\1` | 첫번째 그룹 재참조 |
| `\숫자` | n번째 그룹 재참조 |
| `(?P<이름>)` | Named Group |
| `(?P=이름)` | Named Group 재참조 |

매치된 동일한 문자열에 대한 매치

```python
c = re.compile(r"(?P<Numbers>\d+) (?P=Numbers)+")
m1 = c.match("100 100") # 매치됨
m2 = c.match("100 200") # 매치되지 않음
```

## 전방 탐색

|문자| 설명 |
|--- |------|
| `(?=...)` | 긍정형 전방 탐색 |
| `(?!...)` | 부정형 전방 탐색 |

문자열을 소비하지 않고 탐색

```python
c = re.compile(r".*[.](?!bat$|msi$).*$")

c.match("readme.txt") # 매치됨
c.match("hello.exe") # 매치됨
c.match("run.bat") # 매치되지 않음
c.match("setup.msi") # 매치되지 않음
```

## 문자열 변환

```python
p = re.compile('(red|green|blue)')

p.sub('color', 'red and blue')
# 'color and color'

p.sub('color', 'red and blue', count=1)
# 'color and blue'
```

### 참조 구문 사용

```python
p = re.compile(r'([a-zA-z]+):([a-zA-z]+)')
p.sub(r"\g<1> and \g<2>", "Daegu:Seoul")
# Daegu and Seoul
```

`\g<name>` 등 named group도 사용가능

### 함수 넣기

```python
def filter(match):
    value = int(match.group())
    return hex(value)

p = re.compile(r'\d+')
p.sub(filter, 'result: 100208')
# result: 0x18770
```

## Non-Greedy

non-greedy 문자 `?`

`*?`, `+?`, `??`, `{m,n}?` 등으로 사용가능

```python
s = '<html><head></head></html>'
greedy = re.compile('<.*>')
non_greedy = re.compile('<.*?>')

greedy.match(s)
# '<html><head></head></html>' 매치
non_greedy.match(s)
# '<html>' 매치
```
