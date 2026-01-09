---
title: Godot | 노드
author: Hve
date: 2023-08-19 05:00:31 +0900
categories: ["학습", "강의노트"]
math: false
mermaid: false
tags: ["godot"]
---

## 노드 종류

`Node2D` : 일반적인 2D 노드

`CharacterBody2D` : 2D 환경에서 캐릭터 루트 노드로 사용됨

`Sprite` : 스프라이트 노드

`AnimatedSprite2D` : 애니메이션 2D 스프라이트 노드

`staticBody2D` : 정적인 요소(벽, 발판 등)

`CollisionShape2D` : 충돌 범위를 지정하기 위한 도형 범위

`CollisionPolygon2D` : 충돌 범위를 지정하기 위한 폴리곤 범위

`CanvasLayer` : 자식 노드가 무조건 카메라 기준이 아닌 화면 위에 표시되도록 한다

`Camera2D` : 카메라 노드

`Timer` : 타이머 노드

`CenterContainer` : 자식 노드는 무조건 중앙으로 위치가 고정된다

`Label` : 텍스트 표시 노드

## 예시

**2D 플랫포머 룸**

    Node2D (루트 노드)
    - StaticBody2D (벽)
    -- CollisionShape2D (벽 충돌영역)
    --- ColorRect (벽 표시)

**캐릭터**

    CharacterBody2D (캐릭터 노드)
    - AnimatedSprite2D (애니메이션 스프라이트 노드)
    - CollisionShape2d (캐릭터 충돌영역)
