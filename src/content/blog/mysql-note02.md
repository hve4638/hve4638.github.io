---
title: "MySQL | 기본 쿼리, 표현식"
author: Hve
date: 2024-04-08 08:10:16 +0900
categories: ["학습", "강의노트"]
math: false
mermaid: false
tags: ["mysql"]
---

## 기본 쿼리

```sql
SELECT 컬럼1
FROM 테이블
WHERE 표현식
ORDER BY 컬럼1
LIMIT 10
```

- `SELECT <컬럼> FROM <테이블>`
    - 테이블에서 특정 컬럼을 조회한다
    - 여러 컬럼을 동시에 조회할 수 있다
        - ex. `SELECT Name, Age FROM Students` : Name, Age를 조회
        - ex. `SELECT * FROM Students` : 모든 컬럼을 조회
- `WHERE`
    - 조건식에 부합하는 데이터만 조회한다
    - 아래의 [표현식](#표현식) 참조
- `ORDER BY <컬럼명|컬럼순서> [ASC|DESC]`
    - 조회한 데이터를 나열할 순서를 지정한다
    - `ASC`를 붙여 오름차순, `DESC`를 붙여 내림차순 정렬
        - 생략시 오름차순으로 정렬
- `LIMIT [n]`
    - 조회할 행의 개수를 제한한다
    - ex. `SELECT * FROM Students LIMIT 5` : 모든 컬럼을 5번째 행까지 조회

- `DISTINCT`
    - 중복되는 데이터를 제거하고 보여준다
    - SELECT 바로 뒤에 오며 컬럼 값을 
    - ex. `SELECT DISTINCT Age FROM Students` : Age를 조회하되, 중복된 결과가 나오지않음
    - ex. `SELECT DISTINCT Age, Grade FROM Students` : Age, Grade를 조회하되, 중복된 Age-Grade 쌍이 나오지않음

- `AS`
    - 컬럼에 별명을 붙임
    - ex. `SELECT Grade AS 성적 FROM Students` : Grade를 조회하지만, 성적으로 표시됨
    - 테이블에도 붙일 수 있으며, 이후 JOIN 등의 문법에서 사용

## 표현식

### 산술 연산자

- `+`, `-`, `*`, `/` : 사칙 연산
- `DIV` : 나누기(정수) 연산
- `MOD`, `%` : 나머지 연산

### 비교 연산자

두 값을 비교 후 1, 0을 리턴한다

- `=` : 같다
- `!=`, `<>` : 같지 않다
- `>`, `<` : 초과/미만
- `>=`, `<=` : 이상/이하

- ex. `SELECT * FROM 성적 WHERE 점수 >= 80` 점수가 80이상인 데이터 조회

### 논리 연산자

두 표현식을 평가한다

- `AND` : 두 조건이 모두 참이면 참
- `OR` : 하나 이상 참이면 참
- `NOT` : 부정

- ex. `SELECT * FROM 성적 WHERE 점수 >= 50 AND 점수 < 80` 점수가 50이상 80미만인 데이터 조회

### 패턴 매칭

**LIKE**

- 특정 문자열이 패턴과 일치하는지 확인
- 와일드카드 `%`, `_`를 사용한다
    - `%` : 0개 이상의 모든 문자열 매칭
    - `_` : 정확히 하나의 문자
- ex. `SELECT * FROM 성적 WHERE 이름 LIKE '김%'` : 첫 글자가 '김'인 이름의 데이터 조회
    - 매칭되는 이름 : `김길현`, `김밥말이`, `김`
    - 매칭되지 않는 이름 : `이지은`
- ex. `SELECT * FROM 성적 WHERE 이름 LIKE '이__'` : 첫 글자가 '이'이면서 3글자인 이름의 데이터 조회
    - 매칭되는 이름 : `이민수`, `이지은`
    - 매칭되지 않는 이름 : `이`, `이름`, `김민수`

**REGEXP, REGEXP_LIKE**

- 정규표현식을 통해 패턴 매칭을 수행한다
- ex. `SELECT * FROM 성적 WHERE 이름 REGEX '^김.(빈|성)$'`
    - *김으로 시작하고 중간에 아무 글자가 하나 들어가며 마지막 글자가 빈 또는 성으로 끝나는* 이름을 매칭해 데이터를 조회한다
- ex. `SELECT * FROM 성적 WHERE REGEX_LIKE(이름, '^김.?(빈|성)$')`
    - 위 예시와 동일함

### 이외

**IS NULL**

- 데이터에 값이 들어있지 않은 경우를 판정한다
- 0 또는 빈 문자열과는 다른 의미
- ex. `SELECT * FROM 성적 WHERE 점수 IS NULL` 점수가 들어있지 않은 데이터를 조회

**IN**

- 어떤 칼럼의 값이 목록 중 포함되어있는지 확인하는 연산자
- ex. `SELECT * FROM 성적 WHERE 이름 IN ('민수', '영수')` 이름이 민수거나 영수인 데이터 조회
- ex. `SELECT * FROM 성적 WHERE 이름 = '민수' OR 이름 = '영수'` 위 예시와 동일하게 작동

**BETWEEN AND**

- 칼럼의 값이 특정 범위에 포함되는지 확인하는 연산자
- ex. `SELECT * FROM 성적 WHERE 점수 BETWEEN 80 AND 100` 점수가 80점 이상 100점 이하인 데이터 조회
- ex. `SELECT * FROM 성적 WHERE 점수 >= 80 AND 점수 <= 100` 위 예시와 동일하게 작동

## UNION (집합)

- 두 SELECT문을 합치는 연산자
- 합치기 위해 각 SELECT문의 컬럼의 개수가 동일하고, 각 데이터 타입 또한 동일하거나 상호 호환이 가능해야 한다

### 예시1

```sql
SELECT 이름, 점수
FROM 체육시험
UNION
SELECT 이름, 점수
FROM 수학시험
```



