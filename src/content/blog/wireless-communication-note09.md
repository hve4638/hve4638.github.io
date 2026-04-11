---
title:  "공부 | 무선 통신 - 9"
author: Hve
date: 2024-05-19 14:16:27 +0900
categories: ["학습", "강의노트"]
math: false
mermaid: false
tags: ["무선통신"]
---

# Security Threats (보안 위협)

## 최소권한 법칙 (practice of least privilege)

필요한 최소한의 권한만 할당

## 정보보호의 5원칙

Confidentiality (기밀성)
- privacy : 정당한 권한이 없는 사람은 조회할 수 없야 한다
- secretly : 데이터의 존재 여부조차 모르게 할 수 있어야 한다

Integrity (무결성)
- 정당한 권한이 없는 사람은 수정할 수 없어야 한다
- Hash를 통해 무결성을 증명

Availability (가용성)
- 정당한 권한이 있는 사람은 접근할 수 있어야 한다

Accountability (책임성)
- 사용자는 자기 행동에 대해 책음
- 로그 기록 등을 남길수 있게 해야 한다

Non-repudiation (부인 방지)
- 사후에 그 행동을 증명할 수 있어야 한다

## 데이터 절도

- Sniffing
- Malicious application
- Browser exploits

## 디바이스 컨트롤 위협

## 시스템 접근 위협

- Dos
- Evil twin access point
    - SSID, MAC주소, 패스워드를 알면 동일한 AP를 만들 수 있음
    - 디바이스는 장 
- Rogue access points
    - 위조된 AP
    - 비슷한 이름의 SSID를 가진 위조AP를 비밀번호 없이 설치해 사용하도록 유도

## Risk Mitigating 위협 완화

모바일 기기의 보안
- 디바이스 암호 잠금
- 원격 잠금
- GPS 위치로 추적가능해야 한다
- 암호화된 데이터

### BYOD (Bring of your device) 위협 완화

MDM (Mobile device management, 디바이스 관리)
- 특정 지역에서 디바이스의 기능을 제한하도록 함

MAM (Mobile application management, 어플리케이션 관리)
- MDM의 기능이 더 세분화된 형태
    - ex. 특정 사이트르 막음

## Desktop virtulization

중소 규모의 회사에서 사용되는 방법

중앙 서버로 접속해, 개인 디바이스를 사용하더라도 서버의 자원을 사용함

또다른 형태의 MDM, MAM로 볼 수 있다

이점
- 중앙집중식 관리
- 기기 독립성
- 데이터보안 : 기기분실시 데이터유출의 위협 낮음

WIP p.23