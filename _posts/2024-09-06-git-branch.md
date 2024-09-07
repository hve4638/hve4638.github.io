---
title: "Github | Branch 관련 명령어"
author: Hve
date: 2024-09-06 05:32:25 +0900
categories: ["개발", "Git"]
math: false
mermaid: false
tags: []
---

## Branch 확인

```bash
# git barnch

> git branch
* main
```

브랜치 목록을 확인한다.

`-a` 옵션을 사용하면 원격 저장소으 브랜치도 확인할 수 있다.

```bash
# git status

> git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

현재 가리키는 브런치를 확인한다.

## Branch 생성

```bash
# git branch <브랜치이름>

> git branch dev
```

새 브랜치를 생성한다. 현재 선택된 브랜치가 변경되지는 않는다.

```bash
# git switch <브랜치 이름>

> git switch dev
```

브랜치를 변경한다. `-c` 옵션을 사용하면, 

```bash
# git checkout <브랜치 이름>

> git checkout dev
```

`checkout` 명령을 통해서도 브랜치를 변경할 수 있다.

다만 `checkout`은 브랜치 변경 뿐 아니라 이전 커밋으로 돌아가기에도 사용되므로 직관적이지 않아 git 2.23 버전부터 각각 `switch`와 `restore` 명령이 추가 되었다.

따라서 브랜치 변경 시에는 `switch`를 사용하는 것이 좋다.

## Branch 병합

```bash
# git merge <브랜치 이름>

> git switch main
> git merge dev
```

현재 브랜치에 지정한 브랜치를 병합한다.

병합은 두가지 방식이 있다

- *Fast-Forward*
    - 브랜치가 독립된 이후 한 곳에서만 커밋이 추가된 경우
    - 병합을 위한 커밋이 추가된다
- *3-Way Merge*
    - 브랜치가 독립되고 각각 커밋이 추가된 경우
    - 추가 커밋이 생성되지 않고, 브랜치 포인터만 이동하게 된다

각 상황에 따라 두 방식중 하나가 선택된다.

```bash
# git merge <브랜치 이름> --no-ff

> git merge dev --no-ff
```

`--no-ff` 옵션을 통해 강제로 `3-way merge` 방식으로 병합을 수행한다.

`-m 메세지` 를 통해 병합 메시지를 변경할 수 있다.

## Branch 삭제

```bash
# git branch -d <브랜치 이름>
# git branch -D <브랜치 이름>

> git branch -d dev
```

`-d` 옵션은 정상적으로 삭제할 수 없는 경우엔 삭제하지 않는다.

`-D` 옵션은 강제로 삭제한다.


