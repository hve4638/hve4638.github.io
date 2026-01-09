---
title: Godot | 공부 정리
author: Hve
date: 2023-08-13 02:59:37 +0900
categories: ["학습", "강의노트"]
math: false
mermaid: false
tags: ["godot", "study"]
---

## Collision

충돌 레이어를 지정한다

아래 예시는 플랫포머 게임에서 0번 레이어가 _'World'_, 1번 레이어가 _'Player'_ 라고 가정한다.

### \*레이어

"해당 노드가 어디에 위치하는가?"

- 플레이어 캐릭터는 _'Player'_ 레이어에 포함해야 한다.
- 발판은 _'World'_ 레이어에 포함해야 한다


### \*마스크

"해당 노드가 누구와 상호작용하는가?"

- 플레이어 캐릭터는 발판을 밟기 위해 _'World'_ 레이어를 마스크로 추가해야 한다.
- 플레이어 캐릭터끼리 충돌하기를 원한다면, _'Player'_ 레이어를 마스크로 추가해야 한다.
- 발판은 아무도 충돌하지 않으므로 어떤 마스크도 추가할 필요가 없다.

## Signals

노드를 선택하고 우측의 `노드` 탭에서 필요한 시그널을 더블클릭해 함수를 추가할수 있다.

## 노드 참조 코드 가져오기

![GD](/assets/img/godot/godotstudy02.gif)

ctrl+드래그 를 통해 노드를 코드로 가져올 수 있다

## Signal (신호)

![GD](/assets/img/godot/godotstudy03.png)

노드의 신호를 스크립트에 연결해 사용할 수 있다

### 커스텀 Signal

```python
# Signal 정의
signal signal_name

# Signal 호출
signal_name.emit()

# Signal 등록
signal_name.connect(func_name)
```

## 싱글턴 (자동 로드, Autoload)

![GD](/assets/img/godot/godotstudy04.png)

`프로젝트` > `프로젝트 설정` > `자동 로드` 에서 스크립트를 추가하면 게임 시작시 해당 스크립트를 자동으로 불러온다.

## 노드 그룹

![GD](/assets/img/godot/godotstudy05.png)

우측의 `노드` 탭에서 `그룹` 버튼을 클릭해 특정 노드를 그룹에 속하게 할 수 있다.

아래 코드는 현재 그룹에 속한 노드가 몇개 있는지 확인한다.

```python
var hearts = get_tree().get_nodes_in_group("그룹_이름")
print(hearts.size())
```