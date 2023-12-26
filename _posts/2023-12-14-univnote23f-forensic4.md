---
title: "Forensic - 예제"
author: Hve
date: 2023-12-14 13:12:33 +0900
categories: ["공부", "포렌식"]
math: false
mermaid: false
tags: []
---

## 시나리오 가정

> 회사 기밀 유출자 A씨는 "기밀" 키워드가 포함된 기밀 파일을 이메일을 통해 유출했다
>
> 기밀 유출 이전 인터넷을 통해 "기밀유출", "기밀유출 형량" 등의 검색을 하였다
>
> 유출 자료는 휴지통으로 지운 상태

## FTK Imager로 증거 수집

C드라이브 볼륨의 `[root]` 확인

다음 파일들을 복사

- RecycleBin을 확인해 끝자리가 1000번대인 폴더의 파일 복사
- `$MFT`, `$LogFile` 복사
- `Users\유저명\Desktop`
- `$Extended\$UsrJrnl`
- `%localappdata%\Google\Chrome\User Data\Profile 1\History`

- `..\Document` 폴더 내 파일 확인
- `..\Downloads` 폴더에서 받은 파일 확인
 
## ChromeHistroyView 로 확인

 ChromeHistoryView 를 열고 `View > AdvancedOption` 에서 추출한 History 파일을 넣고 분석

## NTFS Log Tracker

- `$LogFile`, `$UsnJml`, `$MFT` 파일을 넣는다
- `Parse` 버튼을 누른 후 로그 확인 가능
- `Export CSV`로 csv 추출 가능

## REGA

