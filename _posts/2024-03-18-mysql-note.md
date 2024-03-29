---
title: "MySQL | SQL문 정리"
author: Hve
date: 2024-03-18 09:17:53 +0900
categories: ["공부", "MySQL"]
math: false
mermaid: false
tags: []
---

## 단위

- 열/필드/속성
- 행/레코드/튜플
- 테이블/릴레이션

## 문법

- select from
- limit
- where
- order by
- limit
- distinct

```sql
create database 데이터베이스;
use 데이터베이스;
create table 데이터베이스(
    이름 char(10) primary key,
    나이 Integer,
);
```

## 문법 2

- in
- between and

## IN

```sql
select * from 데이터베이스 where 이름 = 'A' OR Name = 'B';
select * from 데이터베이스 where 이름 IN ('A', 'B');
```

## BETWEEN ... AND

```sql
select * from 데이터베이스 where 나이 >= 10 AND 나이 <= 20;
select * from 데이터베이스 where 나이 BETWEEN 10 AND 20;
```

## LIKE

- `%`
- `_`

```
select * from 데이터베이스 where 이름 LIKE '김___'
select * from 데이터베이스 where 이름 LIKE '김%'
```

## REGEXP, REGEXP_LIKE

```
select * from 데이터베이스 where 이름 REGEXP '정규식'
select * from 데이터베이스 where REGEXP_LIKE (이름, '정규식')
```

## 함수

- `CHAR_LENGTH()`
    - 문자의 개수 반환
- `LENGTH()`
    - 바이트 수 반환
- `LEFT()`, `RIGHT()`


```sql
SELECT LEFT('Hello World', 3);
-- Hel 반환
SELECT RIGHT('Hello World', 3);
-- rld 반환
SELECT SUBSTR('ABCDE', 2, 2);
-- BC 반환
SELECT SUBSTR('ABCDE', 2);
-- BCDE 반환
```

