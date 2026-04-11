---
title: "MySQL | 프로시저, 함수, 트리거"
author: Hve
date: 2024-05-27 19:36:32 +0900
categories: ["학습", "강의노트"]
math: false
mermaid: false
tags: ["mysql"]
---

## 개요

SQL 스토어드 프로그램
- DB에서 실행되는 프로그램으로 일련의 SQL문을 포함하는 데이터베이스 객체를 의미한다.

## delimiter

```sql
DELIMITER $$ -- $$ 를 구분자로 사용
DELIMITER ; -- ; 를 구분자로 사용
```

`delimiter`는 각 명령의 구분자를 기본값인 `;`에서 다른 구분자로 변경한다.

프로시저를 작성시 내부에 `;`가 들어가므로 이를 구분하기 위해 새 구분자를 변경하는데 사용된다.

## 프로시저

```sql
-- 프로시저 생성
DELIMITER $$
CREATE PROCEDURE proc_name()
    BEGIN
        -- ...
    END $$
DELIMITER ;

-- 프로시저 호출
CALL proc_name();

-- 프로시저 삭제
DROP PROCEDURE proc_name;
```

프로시저의 BEGIN과 END 사이에 코드 흐름을 넣는다

### 메개변수

```sql
DELIMITER $$
CREATE PROCEDURE calc
(
    IN in_var INT,
    OUT out_var INT,
    INOUT ref_var INT
)
BEGIN
    SET out_var = in_var * 2;
    SET ref_var = ref_var * 10;
END
DELIMITER ;
```

매개 변수는 `[IN|OUT|INOUT] 매개 변수` 의 형태로 작성된다
- IN : 프로시저 내부에서 사용되는 매개변수로, 변수 또는 값이 직접 들어갈 수 있다
- OUT : 결과가 출력하기 위한 매개변수로, 변수만 들어갈 수 있다.
- INOUT : IN, OUT의 특징을 모두 가지며, 변수만 들어갈 수 있다.

*예시*

```sql
SET @var1 = 1;
SET @var2 = 2;

call calc(5, @var1, @var2);
-- 결과 @var1=10, @var2=40
```

### IF 문

```sql
IF `조건1` THEN
    -- ...
ELSEIF `조건2` THEN
    -- ...
ELSE
    -- ...
END IF;
```

### CASE문

```sql
CASE
    WHEN `조건1` THEN
        -- 코드
    WHEN `조건2` THEN
        -- 코드
    ELSE
        -- 코드
END CASE;
```

타 프로그래밍 언어의 `switch`와 유사하게 작동한다


### WHILE 문

```sql
WHILE `조건` DO
    -- 코드
END WHILE;
```

### REPEAT 문

```sql
REPEAT
    -- 코드
UNTIL `조건` END REPEAT;
```

최소 한번 실행 후, 조건을 검사해 거짓이면 반복한다

타 프로그래밍 언어의 언어의 `do-while`과 유사하지만 참이 되어야 루프에서 빠져나간다는 것에 주의

## 함수

```sql
-- 함수 생성
DELEMITER $$
CREATE FUNCTION func_name()
RETURNS `반환 형식`
BEGIN
    -- ...
    RETURN `반환값`;
END $$
DELEMITER;

-- 함수 호출
SELECT func_name();

-- 함수 삭제
DROP FUNCTION func_name();
```

프로시저와 달리 매개변수에 `IN|OUT|INOUT`의 구분이 없다. 모두 `IN`으로 간주한다.

또, CALL이 아닌 SELECT나 WHERE 문에서 사용한다.

이를 표로 정리하면 다음과 같다

| 특성                  | 함수                      | 프로시저           |
|-----------------------|--------------------------------------|---------------------------------------|
| 반환                | 하나의 값 반환 | 여러 값 반환 가능 |
| 호출 위치             | SELECT, WHERE 등에서 사용       | CALL 문 |
| 사용 목적             | 계산 및 반환 | 복잡한 논리 처리 및 작업 수행 |
| 트랜잭션 제어  | 포함 불가 | 포함 가능 |
| 트리거 내 호출  | 가능 | 불가능 |


## 트리거

```sql
-- 트리거 생성
DELIMITER $$
CREATE TRIGGER trigger_name
[BEFORE|AFTER] [INSERT|UPDATE|DELETE] ON table_name
FOR EACH ROW
BEGIN
    -- ...
END $$
DELIMITER ;

-- 트리거 확인
SHOW trigger_name;

-- 트리거 삭제
DROP TRIGGER trigger;
```

### OLD, NEW 키워드

```sql
DELIMITER $$
CREATE TRIGGER trigger_grade
AFTER UPDATE ON students
FOR EACH ROW
BEGIN
    IF (NEW.grade <> OLD.grade) THEN
        -- ...
    END IF
END $$
DELIMITER ;
```

트리거 실행시, 예전 `ROW`와 새 `ROW`의 데이터를 나타내는 키워드로 사용할 수 있다

트리거 유형에 따라 특정 키워드만 사용할 수 있다
- INSERT : NEW
- DELETE : OLD
- UPDATE : OLD, NEW

