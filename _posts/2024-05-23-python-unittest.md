---
title: "Python | 단위 테스트 모듈 (unittest)"
author: Hve
date: 2024-05-23 14:08:09 +0900
categories: ["개발", "레퍼런스"]
math: false
mermaid: false
tags: ["python"]
---

## 단위 테스트 (unittest)

`unittest`는 파이썬에서 테스트를 실행하고 자동화하기위한 모듈이다.

## 테스트 실행 및 구조화

### 테스트 스크립트 작성

```python
import unittest

class TestStringMethods(unittest.TestCase):
    def test_upper(self):
        self.assertEqual('foo'.upper(), 'FOO')

    def test_isupper(self):
        self.assertTrue('FOO'.isupper())
        self.assertFalse('Foo'.isupper())

    def test_split(self):
        s = 'hello world'
        self.assertEqual(s.split(), ['hello', 'world'])
        with self.assertRaises(TypeError):
            s.split(2)

if __name__ == '__main__':
    unittest.main()
```

`unittest.TestCase` 를 상속받은 클래스 내에 `test_`로 시작하는 이름으로 테스트 메서드를 작성한다. 이 명명 규칙을 따라야 테스트 실행자가 어떤 메서드

`unittest.main()`은 `unittest.TestCase`를 상속받은 테스트케이스를 실행한다.

### 명령줄에서 테스트 실행

```bash
python -m unittest test # test 모듈을 테스트
python -m unittest test/test_str.py # test/test_str.py 경로의 파일 테스트
python -m unittest test1 test2 # test1, test2 모듈을 테스트
python -m unittest test1.TestClass.test_method # test1 모듈의 TestClass의 test_method 메서드만 테스트
```

파이썬에서 모듈은 디렉토리 내 `__init__.py` 가 있어야 모듈로 인식한다는 것을 명심하자.

또한 `__init__.py` 내에서 테스트 클래스를 import 해야 모듈을 대상으로 한 테스트가 가능하다.

### 테스트 탐색 (자동 경로 탐색)

```bash
python -m unittest discover
python -m unittest # discover를 생략해도 테스트 탐색이 실행됨
```

### 프로젝트 구조 및 테스트

```
project/
- main.py
- mymodule/
- tests/
    - __init__.py
    - test_module.py
```

프로젝트 구조가 다음과 같다고 가정하자

그럼 `mymodule`을 테스트하기위한 테스트 모듈의 코드는 다음과 같다.

```python
# tests/test_module.py
import unittest
import mymodule

# python의 실행위치는 tests/가 아닌 프로젝트 경로이므로 mymodule을 정상적으로 임포트할 수 있다.

class TestMyModule(unittest.TestCase):
    def test_module(self):
        pass
```

```python
# tests/__init__.py
from .mymodule import *
```

이후 `project/` 위치에서 `python -m unittest` 실행시 자동으로 테스트 가능한 모듈을 찾아 수행한다.

## 테스트 클래스

### 테스트 메서드

```python
class TestClass(unittest.TestClass):
    def test_method(self):
        # 유효한 테스트 메서드
        pass
        
    def testMethod(self):
        # 유효한 메서드
        pass
```

모든 테스트 메서드는 앞에 `test` 접두사가 붙어야 테스트 메서드로 인식된다.

### setUp(), tearDown()

```python
class TestClass(unitest.TestClass):
    def setUp(self):
        # 각 테스트 시작시 호출
        pass
    
    def tearDown(self):
        # 각 테스트 종료시 호출
        pass

    def test_method(self):
        pass
```

`setUp`, `tearDown`은 각 테스트 시작 전, 종료 후 호출되는 메서드로 각 테스트에 필요한 자원 초기화 및 정리에 사용한다. 테스트 메서드에서 예외가 발생하더라도 호출된다.

### setUpClass(), tearDownClass()

```python
class TestClass(unitest.TestClass):
    @classmethod
    def setUpClass(cls):
        # 개별 클래스의 테스트들의 실행 전 한번 호출
        pass
    
    @classmethod
    def tearDownClass(cls):
        # 개별 클래스의 모든 테스트 실행 후 한번 호출 
        pass

    def test_method(self):
        pass
```

`setUpClass`, `tearDownClass`는 `setUp`, `tearDown`과 달리 클래스 내에서 한번만 호출된다.

클래스 메서드로 정의되므로 `classmethod` 데코레이트가 필요하다

### skipTest()

```python
class TestClass(unitest.TestClass):
    def setUp(self):
        self.skipTest('skip test') # 테스트 건너뒴

    def tearDown(self):
        # 호출되지 않음

    def test_method(self):
        pass
```

`skipTest()` 는 현재 테스트를 건너뛴다. `setUp()` 또는 테스트 메서드에서 사용할 수 있다.

`skipTest()` 로 테스트를 건너뛰면 `tearDown()`은 호출되지 않는다

### assert 문

```python
class TestClass(unitest.TestClass):
    def test_value(self):
        expected = 3
        actual = 1 + 2
        self.assertEqual(expected, actual) # 검사가 실패한다면 테스트 실패 처리
```

테스트 메서드에서 assert문의 조건을 통과하지 못하면 `AssertionError` 가 발생하며 테스트는 실패 처리된다.

`AssertionError`가 아닌 예외는 테스트 실패가 아닌 오류로 보고된다.

| 메서드 | 검사 내용 |
| ----- | --------- |
| `assertEqual(a, b)` | `a == b` |
| `assertNotEqual(a, b)` | `a != b` |
| `assertTrue(x)` | `x`가 참 |
| `assertFalse(x)` | `x`가 거짓 |
| `assertIs(a, b)` | `a is b` |
| `assertIsNot(a, b)` | `a is not b` |
| `assertIsNone(x)` | `x is None` |
| `assertIsNotNone(x)` | `x is not None` |
| `assertIn(a, b)` | `a in b` |
| `assertNotIn(a, b)` | `a not in b` |
| `assertIsInstance(a, b)` | `isinstance(a, b)` |
| `assertNotIsInstance(a, b)` | `not isinstance(a, b)` |

## Reference

- [https://docs.python.org/ko/3/library/unittest.html](https://docs.python.org/ko/3/library/unittest.html)