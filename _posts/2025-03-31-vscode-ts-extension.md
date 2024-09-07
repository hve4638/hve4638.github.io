---
title: "VSCode | typescript 설정"
author: Hve
date: 2025-03-31 21:51:53 +0900
categories: []
math: false
mermaid: false
tags: []
---

## 인레이 힌트 추가

![ts-tip01](/assets/img/vscode/ts-tip-01.png)

javascript/typescript에서 암시적으로 지정된 타입 힌트를 표시한다

확장이 아닌 VSCode 내장 기능이다

![ts-tip02](/assets/img/vscode/ts-tip-02.png)

`Ctrl + ,`로 설정에 들어가 *"inlay"* 를 검색

`Editor > Inlay Hints : Enabled` 옵션을 활성화한다. (`on` 또는 `onUnlessPressed`)

![ts-tip03](/assets/img/vscode/ts-tip-03.png)

스크롤을 아래로 내려 필요한 옵션을 활성화한다.

## 참조 수 표시

![ts-tip04](/assets/img/vscode/ts-tip-04.png)

해당 함수, 변수가 어디서 몇번 참조됐는지 표시한다. 

![ts-tip05](/assets/img/vscode/ts-tip-05.png)

확장 `TypeLens`를 설치 시 자동 적용된다.
