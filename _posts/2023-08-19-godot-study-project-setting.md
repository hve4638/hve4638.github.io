---
title: Godot | 프로젝트 세팅
author: Hve
date: 2023-08-19 05:07:54 +0900
categories: ["학습", "강의노트"]
math: false
mermaid: false
tags: ["godot"]
---

# 프로젝트 세팅

## 렌더러 세팅 (도트 게임)

![GD](/assets/img/godot/godotstudy01.png)

Rendering > Texture > Canvas Textures 의 값을 `Linear(기본값)`에서 `Neareast`로 바꾸면 도트가 뭉개지지 않고 날카롭게 보인다.

## 게임창 크기 (viewport 크기)

![GD](/assets/img/godot/ps02.png)

`표시` > `창` > `크기` 에서 `뷰포트 너비` `뷰포트 높이` 를 수정

## 게임창 실제 크기 (윈도우 크기)

![GD](/assets/img/godot/ps03.png)

`표시` > `창` > `크기` 에서 `고급 설정` 활성화

`창 너비 오버라이드` `창 높이 오버라이드` 를 수정

## 레이어 이름 지정

![GD](/assets/img/godot/ps01.png)

Layer Names에서 `2D 물리` 에서 각 레이어의 이름을 수정할 수 있다
