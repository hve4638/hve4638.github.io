---
title: "MySQL | 정리"
author: Hve
date: 2024-06-09 05:19:19 +0900
categories: ["학습", "강의노트"]
math: false
mermaid: false
tags: ["mysql"]
---

## DML

```sql
INSERT INTO 테이블(...) VALUES(...)

UPDATE 테이블 SET 필드=값 ... [WHERE 조건]

DELETE FROM 테이블 [WHERE 조건]

INSERT INTO 테이블(...)
VALUES (...)
ON DUPLICATE KEY UPDATE
필드=값 ...

INSERT INTO 테이블(...) SELECT ...

-- 서브쿼리에는 별명 필수
UPDATE 테이블 SET 필드 = (SELECT ... FROM (...) AS 별명)

UPDATE 테이블A
JOIN 테이블B
[ON 조건]
SET 테이블A.필드 = 값
[WHERE 조건]

DELETE FROM 테이블A
WHERE 필드명 IN (SELECT ...);

DELETE 테이블A, 테이블B
FROM 테이블A
JOIN 테이블B
ON 조인조건
[WHERE 삭제조건]
```

## 제약조건

| 제약 조건 | 설명|
|---------------|---|
| `PRIMARY KEY` | 기본키 지정, NOT NULL+UNIQURE의 특징을 가진다 |
| `NOT NULL` | NULL이 들어갈 수 없음 |
| `UNIQUE` | 고유한 값을 가져야 함 |
| `DEFAULT` | 값이 없다면 지정한 기본값이 들어감 |
| `CHECK` | 지정한 조건에 맞는 값만 들어갈 수 있음 |
| `FOREIGN KEY` | 외래키 지정 |
| `AUTO_INCREMENT` | 값이 자동으로 증가 |

```sql
-- check 예시
학점 INT NOT NULL CHECK(학점 BETWEEN 2 AND 4)
학번 INT NOT NULL CHECK(학번 LIKE 'S%') -- 학번은 S로 시작

-- 제약조건명 예시
CONSTRAINT 제약조건명 제약조건(필드)
```


## DDL

```sql
CREATE TABLE 테이블 ([필드명 데이터타입]...)

-- 테이블 구조, 데이터 복사
-- WHERE에 절대 참이 될수 없는 조건을 걸어 구조만 복사해올 수 있음
CREATE TABLE 테이블 AS SELECT ...

-- GENERATED ALWAYS 필드
-- 자동으로 값을 계산해 저장
-- - GRENRATED ALWAYS : 생략가능
-- - VIRTUAL : 계산식만 기억, SELECT로 가져올때 계산
-- - STORED : 값을 실제로 저장
CREATE TABLE 테이블 (
    제목 VARCHAR(5) PRIMARY KEY,
    가격 INT,
    가격2배 INT [GRENRATED ALWAYS] AS (가격 * 2) [STORED|VIRTUAL]
)

ALTER TABLE 테이블 ADD COLUMN 필드 데이터타입
ALTER TABLE 테이블 MODIFY COLUMN 필드 새_데이터타입
ALTER TABLE 테이블 CHANGE COLUMN 필드 새_필드명 새_데이터타입
ALTER TABLE 테이블 DROP COLUMN 필드
ALTER TABLE 테이블 RENAME 테이블명
ALTER TABLE 테이블 ADD CONSTRAINT 제약조건(필드명) -- 필드 제약조건 추가
ALTER TABLE 테이블 DROP CONSTRAINT 필드명 -- 해당 필드의 제약조건 제거
ALTER TABLE 테이블 DROP CONSTRAINT 제약조건명 -- 해당 제약조건 제거

DROP DATABASE 데이터베이스
DROP TABLE 테이블
```

## 뷰, 인덱스

```sql
-- 뷰 생성
CREATE VIEW 뷰 AS [SELECT ...]
ALTER VIEW 뷰 AS [SELECT ...]

SELECT * FROM 뷰
SHOW CREATE VIEW 뷰 -- 뷰 메타 정보
DROP VIEW 뷰

CREATE INDEX 인덱스 ON 테이블(필드)
ALTER TABLE 테이블 ADD INDEX 인덱스(필드)

ALTER TABLE 테이블 DROP INDEX 인덱스(필드)

SHOW INDEX FROM 테이블
```

## 프로시저 & 함수

```sql
CREATE PROCEDURE 프로시저
(
    [IN|OUT|INOUT] 매개변수명 데이터타입, ...
)
    BEGIN
        SET var1 = 1; -- 변수 정의
        -- ...
    END

CALL 프로시저()
DROP PROCEDURE 프로시저

CREATE FUNCTION 함수()
RETURNS [데이터타입]
BEGIN
    RETURN 반환값
END

SELECT 함수()
DROP FUNCTION 함수()
```

## 식

```sql
-- if 문
IF 조건 THEN
    -- ...
ELSEIF 조건 THEN
    -- ...
ELSE
    -- ...
END IF;

-- case문
CASE
    WHEN `조건1` THEN
        -- 코드
    WHEN `조건2` THEN
        -- 코드
    ELSE
        -- 코드
END CASE;

WHILE 조건 DO
    -- ...
END WHILE;
```

## 트리거

```sql
CREATE TRIGGER 트리거
[BEFORE|AFTER] [INSERT|UPDATE|DELETE] ON 테이블
FOR EACH ROW
BEGIN
    -- ...
END

SHOW 트리거
DROP TRIGGER 트리거 
```

### OLD, NEW 트리거

```sql
-- 예시
IF (NEW.grade <> OLD.grade) THEN
    -- ...
END IF
```

## 데이터 모델링

- 개념적 데이터 모델링 : 개념적 스키마
- 논리적 데이터 모델링 : 릴레이션 스키마
- 물리적 데이터 모델링

## 정규화

- 1NF : 원자값
- 2NF : 부분 함수적 종속성 제거
- 3NF : 이행 함수적 종속성 제거

반정규화