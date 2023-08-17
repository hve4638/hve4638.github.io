---
title: Godot | 공부 정리
author: Hve
date: 2023-08-13 02:59:37 +0900
categories: [ 공부, Godot ]
math: false
mermaid: false
tags: [ godot, study ]
---

## 프로젝트 세팅

### 렌더러 세팅 (도트 게임)

![GD](/assets/img/godot/godotstudy01.png)

Rendering > Texture > Canvas Textures 의 값을 `Linear(기본값)`에서 `Neareast`로 바꾸면 도트가 뭉개지지 않고 날카롭게 보인다.

### 게임창 크기

Display > Window > Size에서 `Viewport Width` `Viewport Height` 를 수정

### 레이어 이름 지정

Layer Names에서 `2D 물리` 에서 각 레이어의 이름을 수정할 수 있다

## Collision

충돌 레이어를 지정한다

아래 예시는 플랫포머 게임에서 0번 레이어가 _'World'_, 1번 레이어가 _'Player'_ 라고 가정한다.

### 레이어

"해당 노드가 어디에 위치하는가?"

- 플레이어 캐릭터는 _'Player'_ 레이어에 포함해야 한다.
- 발판은 _'World'_ 레이어에 포함해야 한다


### 마스크

"해당 노드가 누구와 상호작용하는가?"

- 플레이어 캐릭터는 발판을 밟기 위해 _'World'_ 레이어를 마스크로 추가해야 한다.
- 플레이어 캐릭터끼리 충돌하기를 원한다면, _'Player'_ 레이어를 마스크로 추가해야 한다.
- 발판은 아무도 충돌하지 않으므로 어떤 마스크도 추가할 필요가 없다.

## Signals

노드를 선택하고 우측의 `노드` 탭에서 필요한 시그널을 더블클릭해 함수를 추가할수 있다.

## 노드 종류

`Node2D` : 일반적인 2D 노드

`CharacterBody2D` : 2D 환경에서 캐릭터 루트 노드로 사용됨

`Sprite` : 스프라이트 노드

`AnimatedSprite2D` : 애니메이션 2D 스프라이트 노드

`staticBody2D` : 정적인 요소(벽, 발판 등)

`CollisionShape2D` : 충돌 범위를 지정하기 위한 도형 범위

`CollisionPolygon2D` : 충돌 범위를 지정하기 위한 폴리곤 범위

### 예시
k
**2D 플랫포머 룸**

    Node2D (루트 노드)
    - StaticBody2D (벽)
    -- CollisionShape2D (벽 충돌영역)
    --- ColorRect (벽 표시)

**캐릭터**

    CharacterBody2D (캐릭터 노드)
    - AnimatedSprite2D (애니메이션 스프라이트 노드)
    - CollisionShape2d (캐릭터 충돌영역)

