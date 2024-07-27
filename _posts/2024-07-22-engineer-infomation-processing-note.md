---
title: "정보처리기사 | 노트 정리"
author: Hve
date: 2024-07-22 12:06:56 +0900
categories: ["공부", "정보처리기사"]
math: false
mermaid: false
tags: []
---

# 테스트

## 어플리케이션 테스트

- 파레토 법칙 : 전체 모듈의 20%에서 80%의 결함이 발생됨
- 살충제 페러독스 : 동일 테스트케이스로 테스트를 반복하면 더 이상 결함이 발견되지 않음

### 테스트 종류

- 프로그램 실행 여부
    - 정적 : 명세서나 소스 코드 대상으로 분석
    - 동적 : 프로그램을 실행하여 오류를 찾는 테스트
- 테스트 기반
    - 명세 기반 : 사용자 요구사항에 대한 명세를 테스트 케이스로 작성
    - 구조 기반 : 소프트웨어 논리 흐름에 따라 테스트 케이스를 작성
    - 경험 기반 : 유사 소프트웨어나 기술에 대한 테스터의 경험 기반으로 수행
- 시각
    - `검증 (Verification)` : 개발자의 시각. 명세서대로 완성되었는지 여부
    - `확인 (Validation)` : 사용자의 시각. 요구한데로 완성되었는지, 정상 동작 여부
- 목적
    - `회복` : 결함을 주어 실패하도록 하고, 올바르게 복구되는지 여부
    - 안전 : 시스템보호 도구가 불법 침입으로부터 시스템을 보호하는지 여부
    - `강도` : 과부하 시 소프트웨어 정상 실행 여부
    - 성능 : 실시간 성능, 전체 효율성
    - 구조 : 내부 논리적인 경로, 소스코드 복잡도 평가
    - `회귀` : 소프트웨어 변경, 수정된 코드에 결함이 없음을 확인
    - `병행` : 기존/변경된 소프트웨어에 동일 데이터를 넣어 결과 비교

## 테스트 기법

- 화이트박스 : 원시 코드의 모든 경로 테스트
    - 종류
        - 기초 경로 검사 (base path testing) : 절차적 설계의 논리적 복잡성 측정
        - 제어 구조 검사 (control structure testing) : 조건, 루프, 데이터 흐름
    - 검증 기준 (Coverage)
        - 문장 검증 (Statement) : 모든 구문이 실행되는지
        - 분기 검증/결정 검증 (Branch/Decision) : 조건식 결과의 모든 가짓수 실행되도록
            - `모든 분기`가 한번씩은 실행되도록 테스트 작성해야함
        - 조건 검증 (Condition) : 조건식 내 개별 조건식의 결과의 가짓수 모두 실행되도록
        - 분기/조건 검증 : 
- 블랙박스 : 각 기능의 작동을 입증, `소프트웨어 인터페이스`에서 실시됨
    - 종류
        - `동치 분할 (Equivalence Partitioning Testing)` : 프로그램의 입력 조건에 타당한 입력/타당X 입력의 개수 균등하게 입력해 결과 확인 
        - `경계값 분석 (Boundary Value Analysis)` : 경계값을 테스트케이스에 추가
        - 원인-효과 그래프 검사 (Cause-Effect Graphing Testing) : 입력데이터 간 관계-출력 미치는 상황 분석 후 효용성이 높은 테스트 선정
        - 오류 예측 검사 (Error Guessing) : 과거의 경험, 감각으로 테스트
        - 비교 검사 (Comparison Testing) : 여러 버전의 프로그램에 동일 테스트 자료를 제공해 동일 결과가 출력되는지 테스트

## 개발 단계 별 테스트

- 단위 테스트 (Unit) : 모듈, 컴포넌트 테스트
- 통합 테스트 (Inegration) : 모듈을 결합해 하나의 시스템으로 완성시키는 과정 중 테스트
    - `하향식 통합 테스트` : 상위 모듈에서 하위모듈 방향으로 통합
        - 시험용 모듈 Stub 사용해서 점진적 대체
    - `상향식 통합 테스트` : 하위 모듈부터 상위 모듈 방향으로 통합
        - Cluster 결합 
        - 입출력 확인위해 Driver 작성
    - `혼합식 통합 테스트` (샌드위치) : 하위수준에서 상향식, 상위 수준에서 하향식으로 진행
    - `회귀 테스트` (Regression testing)
        - 테스팅된 프로그램의 테스트 반복. 변경된 모듈이 다른 부분에 영향을 미치는지 확인
- 시스템 테스트 (System) : 개발된 소프트웨어가 해당 컴퓨터 시스템에서 환벽하게 수행되는가 검사
- `인수 테스트 (Acceptance)` : 개발된 소프트웨어 사용자 요구사항을 충족하는지 중점을 둠
    - 알파, 베타 테스트

## 테스트 용어

- 테스트 케이스 : *사용자 요구사항 준수 확인 위해 설계된* 명세서
    - 입력값, 실행조건, 기대 결과 등으로 이루어진 명세서- 테스트 시나리오
- 테스트 시나리오
    - 테스트 케이스 적용 순서에 따라 여러개의 테스트 케이스를 묶은 집합
- 테스트 오라클
    - 테스트 결과가 올바른지 판단하기 위해 사전에 정의된 참을 대입해 비교하는 기법
    - 종류
        - 참 (True) 오라클 : 모든 테스트 케이스의 입력값에 대해 기대하는 결과 제공
        - 샘플링 (Sampling) 오라클 : 특정 케이스의 입력값에 대해서만 기대한는 결과 제공
        - 추정 (Herusitic) 오라클 : 샘플링 오라클 개선. 특정 케이스 이외에는 추정으로 처리
        - 일관성 검사 (Consistent) 오라클 : 어플리케이션 변동 이후 테스트 케이스 수행전/후 값이 동일한지 확인
    
## 앱 성능 분석

- 처리량 (Throughput) : 일정시간 내의 처리양
- 응답 시간 (Response Time) : 요청 부터 응답도착까지 걸린 시간
- 경과 시간 (Turn Around Time) : 작업 의뢰시간부터 처리완료까지 걸린 시간
- 자원 사용률 (Resource Usage) : 작업 처리도중 cpu, 메모리 등의 자원사용량

## 성능 개선

- 나쁜 코드
    - 스파게티 코드 : 코드 로직이 복잡하게 얽힘
    - 외계인 코드 : 참고문서, 개발자가 없어 유지보수 어려움
- 클린 코드 작성 원칙
    - 가독성 : 이해하기 쉬운 용어, 들여쓰기 잘하기
    - 단순성 : 한번에 한가지 일 처리하는 함수/클래스
    - 의존성 배제 : 코드가 변경시 다른 부분에 영향이 없도록 최소화
    - 중복성 최소화
    - 추상화 : 상위 클래스/메소드에서는 애플리케이션 특성, 하위에서 상세내용 구현
- 소스코드 품질 분석 도구
    - 정적 분석 도구 (Static Analysis)
        - 작성한 코드를 실행하지 않고 코딩 표준이나 코딩 스타일, 결함 등을 확인
            - ex. pmd, cppcheck
    - 동적 분석 도구 (Dynamic Analysis)
        - 작성한 소스 코드를 실행하여 코드에 존재하는 메모리 누수, 스레드 결함 등을 확인
            - ex. Avalanche, Valgrind

# SQL

## DDL (데이터 정의어)

제약조건명 지정
- `CONSTRAINT 제약조건명 제약조건`

CHECK
- `필드명 CHECK (조건)`
- ex. `성별 CHECK (성별='남' or 성별='녀')`

외래키
- `필드명 데이터타입 FOREIGN KEY REFERENCES other_table(ref_id)`
- `FOREIGN KEY(id) REFERENCES other_table(ref_id)`
- 갱신시, 삭제시
    - `ON UPDATE|ON DELETE [SET NULL|CASCADE]`

## DCL

- COMMIT : 트랜젝션이 수행한 내용을 데이터베이스에 반영하는 것
- ROLLBACK : 변경되었으나 COMMIT되지 않은 내용을 취소하고 이전상태로 되돌리는 것
- GRANT : 권한을 부여하는데 사용하는 명령어
    - 권한 : ALL, SELECT, INSERT, DELETE, UPDATE...
        - WITH GRANT OPTON
        - FRANT OPTION FOR
    - `GRANT 권한_리스트 ON 개체 TO 시용자`
        - ex. `GRANT ALL ON stduent TO user`

## DML

- `INSERT INTO 테이블(...) VALUES(...)`
    - `INSERT INTO 테이블(...) SELECT ... FROM 테이블 WHERER ...`
- `UPDATE 테이블 SET A=a, B=b, ... WHERE ...`
- `DELETE FROM 테이블 WHERE ...`

## DML - SELECT
- GROUP BY
- HAVING
- LIKE : %(모든문자) _(문자하나) #(숫자하나)
- DISTINCT
- WINDOWS함수
    - `[함수] OVER (PARTITION BY ... ORDER BY ... ) AS 별칭`
    - ROW_NUMBER
    - RANK : 순위 (공동순위)
    - DENSE_RANK : 순위 (공동순위X)

## 서브쿼리

- ALL

## Join

- using
    - ex. `JOIN 테이블 USING(필드)`

# 소프트웨어 보안

## 보안

Secure SDLC
- SDLC에 보안 강화를 위한 프로세스 추가한 것

개발 보안 요소
- 기밀성 : 인가된 사용자에게만 허용
- 무결성 : 인가된 사용자만 수정
- 가용성 : 인가된 사용자는 자원을 언제든지 사용가능
- 인증 : 합법적인 사용자인지 확인 (ex. 패스워드)
- 부인방지 : 송,수신 사실 부인방지

Secure Coding
- 구현단계에서 보안 요소를 고려하며 코딩하는 것

## 입력데이터 검증

- SQL 삽입 : SQL을 삽입해 내부 DB서버의 데이터를 유출 및 변조
- XSS : 
- 경로조작 및 자원 삽
- 메모리 버퍼 오버플로우
- 운영체제 명령어 삽입

## 서비스 공격

Dos (Denial of Service)
- Ping of Death
- SMURFING (스머핑)
    - IP, ICMP의 특성 악용 : 엉ㅁ청양 데이터를 한 사이트에 보내 네트워크 불능 상태 만듬
- SYN Flooding : 3-way handshake를 의도적으로 중단, 서버를 대기상태로 놓아 정상 서비스 수행X
- TearDrop : Fragment Offset 값을 변경, 패킷 재조립시 과부하 유도
- LAND attack (Local Area Nework Denial Attack)
    - 송수신자 IP를 모두 공격대상 IP 지정. 자신에 대해 무한히 응답하게 함
- DDoS

네트워크 침해 공격
- 세션 하이재킹
- ARP 스푸핑
- 스미싱 (Smishing) : SMS 이용해 개인 신용정보 빼냄
- 사회공학
- 다크 데이터
- 타이포스쿼팅 (`Typosquatting`)
- 스피어 피싱
- APT (Advanced Persistent Threats) 지능형 지속 위협
- 무작위 대입
- Qshing : QR 코드를 통해 악성앱 다운 유도
- Sniffing : 패킹 도청

정보보안 침해 공격
- 워터링 홀
- 좀비PC
- C&C 서버 : 해커가 원격지에 좀비PC를 제어하기 위한 서버
- Worm : 네트워크에 연속적으로 자신을 복제

## 보안 솔루션

- 방화벽 : 내부-인터넷 간 전송정보를 선별하여 수용,거부,수정 
- 침입탐지시스템 (IDS, Intrusion Detection System) : 컴퓨터 시스템의 비정상적 사용, 오남용 실시간 탐지
- 침입방지시스템 (IPS, Intrusion Prevention System) : 비정상적 트래픽 능동 차단 및 격리
- VPN
- NAC
- SIEM : 로그 및 보안 이벤트 통합 관리, 보안 솔루션
- 템퍼 프루핑 (Tamper Proofing): Tamper Proofing
- OAuth : 앱에 비밀번호 제공하지 않고 OAuth로 접근권한 부여
 
## 프로그래밍

- 헝가리안 표기법 : 변수명 작성시 자료형을 알 수 있도록 첫문자 포함
- 연산자 순서
    1. `== !=`
    2. `& ^ |`
    3  `&& ||`

- C++에서 Constructor란?
    - 객체를 생성하며 초기화를 수행하는 메소드

# 운영체제

Windows
- GUI, 선점형 멀티테스킹, PnP, 싱글유저 시스템

## OS

페이지 교체 알고리즘
- OPT (최적 교체)
- FIFO
- LRU : 가장 오래된 페이지 교체
- LFU : 가장 적은 페이지 교체
- NUR : 최근 사용하지 않은 페이지 교체
- SCR : 

## 가상기억장치

- 페이지 크기 : 
    - 작을수록
        - 단편화 감소
        - 효율적인 워킹셋
        - 매핑속도 늦어짐. 페이지 맵 테이블 커짐
        - 디스크 접근시간 증가
    - 클수록
        - 단편화 증가
        - 매핑속도 빨라짐
        - 디스크 접근시간 감소->입출력 효율성 증가
- Locality : 일부 페이지만 집중적으로 참조
    - Temporal Locality
    - Space Locality
- 워킹 셋
    - 프로세스가 일정시간동안 자주 참조하는 페이지 집합
- Thrashing
    - 프로세스 처리시간 < 페이지 교체 시간

## 프로세스

- 프로세스 : 실행중인 프로그램
- PCB (Process Control Block)
    - OS가 프로세스에 대한 정보 저장해놓은 곳
- 프로세스 상태 전이
    - Submit : 작업 처리위해 사용자가 작업 제출
    - Hold : 디스크 할당 위치에 저장됨
    - Ready : 프로세스가 프로세서 할당 대기중
    - Run : 할당됨
    - Wait, Block : 대기
    - Terminated : 종료

## 스케쥴링 알고리즘

- FCFS = FIFO
- SJF (Shortest Job First)
- HRN (Higtest Response-ratio Next) : SJF 보완
    - (대기시간+서비스시간)/서비스시간
- RR (Round Robin) : 시간 할당량 동안 실행, 다음 프로세스에게 CPU 넘겨줌
- SRT (Shortest Remaining Time)
    - 작업 도착시, 현 작업의 남은시간/도착한 작업의 작업시간 비교. 가장 짧은 것부터 시작

## 운영체제 명령어

Windows
- DIR, COPY, DEL, MD, CD
- REN : 이름변경
- TYPE : cat
- ATTRIB : chmod

## 인터넷 

- IP 주소
    - A 클래스 : 0-127
    - B 클래스 : 128-191
    - C 클래스 : 192-223
    - D 클래스 : 224-239
    - E 클래스 : 실험적
- 서브네팅 : 네트워크 주소를 다시 여러개의 작은 네트워크로 나누는 것
- IPv6 : 주소부족 문제 해결위해 개발됨
    - 128비트
    - 유니캐스트
    - 멀티캐스트
    - 애니캐스트

## OSI

- 7계층 : 물데네전세표응
    - Physical
    - Datalink
    - Network
    - Transport
    - Session
    - Presentation
    - Application

## TCP/IP

- 프로토콜 : 구문, 의미, 시간
- TCP/IP
    - 데이터 주고받을수있는 표준 프로토콘
- 인터넷 계층
    - ICMP
    - ARP
    - RARP

## 네트워크 관련 신기술

- 크라라우드 컴퓨터
- 모바일 컴퓨터
- IoT
- 그리드 컴퓨팅

## 네트워크 구축
- 네트워크
    - 성형 (star)
    - 링형 (Ring)
    - 버스
    - 계층형 (Tree)     
    - 망형 (Mesh)
        - 모든 지점과 연결됨
- LAN 표준안
    - 802.11 : 무선랜
    - 802.11e 
- NAT : 한개의 정식 IP에 대량의 가상 사설 IP주소 할당

## 경로/흐름 제어

경로 제어 : 전송 경로 중 최적 패킷 교환 경로 결정
- 프로토콜
    - IGP (Interior) : 하나의 AS내 라우팅에 사용됨
        - RIP : 라우팅 정보를 30초마다 알림, 최대 Hop은 15
        - OSPF(Open Shortest Path Firtst) : RIP 개선, 다익스트라
    - EGP (Exterior) : AS간 라우팅
    - BGP (Border) :  AS간 라우팅, EGP 보완

흐름 제어 : 송수신간 패킷수 제어
- Stop-And-Wait : 패킷 전송하고 ACK 를 받아야 다음 전송
- Sliding Windows : 최대 Window Size 지정

폭주 제어 : 네트워크 내 패킷수 제어
- 느린 시작 : 윈도우 크기를 2배수로 증가
- 혼잡 회피 : 윈도우 크기를 1씩 선형 증가

## 회복/병행제어

회복 : DB 손상시 이전의 상태로 복구
- Deferred Update : 연기 갱신
- Immediat Update : 즉각 갱신
- Shadow Paging : 그림자 페이지
- Check Point
병행제어 : 트랜잭션 간 상호작용 제어
- 로킹- 타임스탬프 순서

## 데드락 (교착상태)

필요 충분 조건
- 상호 배제
- 점유와 대기
- 비선점
- 환형 대기

해결 방법
- 예방 : 사전에 시스템 제어. 자원 낭비 가장 심함
- 회피 : 교착상태 발생시 적절히 회피. 은행원 알고리즘
- 발견 : 발견
- 회복 : 교착상태의 프로세스 제거

# 최종정리

데이터베이스 구축
1. 요구 조건 분석
2. 개념적 설계
3. 논리적 설계
4. 물리적 설계
5. 데이터베이스 구현

디자인 패턴
- 생성 패턴
    - Abstract Factory : 구체적 클래스 의존X 의존적인 객체의 조합을 만드는 인터페이스
    - Builder
    - Factory Method
    - Prototype
    - Singleton
- 구조 패턴
    - Adapter : 클래스 재사용할 수 있도록, 중간에서 맞춰주는 인터페이스 만듬
    - Bridge : 기능 클래스 계층과 구현 클래스 계층을 연결, 추상화와 구현 분리
    - Composite : 객체로 트리 구조 형성
    - Decorator : 기존 구현된 클래스에 필요기능 추가해 나감
    - Facade : 복잡한 시스템에 단순한 인터페이스 제공
    - Proxy : 정보 은닉, 
- 행위 패턴
    - Chain of Responseibility
    - Command : 명령이 들어오면 서브 클래스가 선택되어 실행됨
    - Observer : 클래스 변화시 다른클래스에 통보
    - Mediator : `느슨한 결합`
    - Interpreter : 구문 해석을 맡는 클래스 작성

DB 제거 / CASCADE랑 ?

데이터베이스 구조
- 릴레이션 구조 (표)
- 릴레이션 인스턴스
- 튜플 
- 속성
- 도메인

형상관리

테스트
- 검증 (Verification) : 개발자
- 확인 (Validation) : 사용자

블랙박스
- Equivalence Partitioning : 동치 분할
- Boundary Value Analysis : 경계값 분석
- Cause-Effect Graphing Testing
- Error Guessing 