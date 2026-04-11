---
title: "MySQL | Join"
author: Hve
date: 2024-04-08 10:10:05 +0900
categories: ["학습", "강의노트"]
math: false
mermaid: false
tags: ["mysql"]
---

## JOIN

- 두 개 이상의 테이블을 연결하여 데이터를 검색하는 방법
- 서로 다른 테이블에 저장된 관련 데이터를 가져와 표시한다

## JOIN 쿼리문

조인의 종류
- 크로스 조인, 내부 조인, 외부 조인, 셀프 조인 등
- `CROSS|INNER|OUTER` 키워드는 생략 가능

```sql
SELECT *
FROM TABLE1
JOIN TABLE2
ON 조인조건
WHERE 조건;
```

```sql
SELECT *
FROM TABLE1, TABLE2
WHERE 조인조건_또는_일반조건;
```

## CROSS JOIN (상호 조인)

```sql
SELECT *
FROM TABLE1
JOIN TABLE2
WHERE 조건;
```

- 한 테이블의 모든 행과 다른 테이블의 모든 행을 조인시키는 기능
- 두 테이블의 행의 조합의 모든 경우의 수를 나타냄
- 카티션 곱(Cartesian Product) 이라고도 부름

## INNER JOIN (내부 조인)

- 조인 조건에 일치하는 데이터만 가져오는 기능
- 상호 조인에 `조인 조건`이 추가된 형태

```sql
SELECT *
FROM TABLE1
INNER JOIN TABLE2
ON 조인조건
WHERE 조건;
```

- `INNER` 키워드는 생략할 수 있다

### 예시1

> 사원 테이블에 (이름, 부서번호)이 있고 부서 테이블에 (부서명, 부서번호)가 있을때, 'John' 사원의 이름과 부서명을 가져오기

```sql
SELECT 이름, 부서.부서명
FROM 사원
JOIN 부서
ON 사원.부서번호 = 부서.부서번호
WHERE 이름='John';
```

### 예시2

> `시험결과` 테이블에 (이름, 점수)이 있고 `등급기준` 테이블에 (하한점수, 상한점수, 등급)가 있을때, 'John'의 이름과 등급을 가져오기

```sql
SELECT 이름, 등급
FROM 시험결과
INNER JOIN 등급기준
ON 점수 BETWEEN 하한점수 AND 상한점수
WHERE 이름='John';
```

## OUTER JOIN (외부 조인)

- 조건에 맞지 않는 행도 출력할 수 있음
- 매칭되는 데이터가 없다면 NULL로 표시됨

```sql
SELECT *
FROM Table1
[LEFT|RIGHT] OUTER JOIN TableB
ON 조인조건
WHERE 기타조건;
```

### LEFT/RIGHT

- LEFT : 왼쪽에 있는 테이블 결과를 기준으로 오른쪽 테이블 데이터 매칭
- RIGHT : 오른쪽에 있는 테이블 결과를 기준으로 왼쪽 테이블 데이터 매칭

### 예시1

## SELF JOIN (셀프 조인)

- 자기 테이플을 JOIN

```sql
SELECT *
FROM Table1
JOIN Table1 AS JoinTable
ON 조인조건
WHERE 기타조건;
```

셀프 조인시 모호성을 피하기 위해 반드시 AS로 별명을 지정해야 한다 

### 예시1

> 사원 테이블에 (이름, 번호, 상사번호)가 있을 때 'John'의 이름과 상사의 이름을 가져오기

```sql
SELECT 사원.이름, 상사.이름
FROM 사원
JOIN 사원 AS 상사
ON 사원.상사번호 = 상사.번호;
```

