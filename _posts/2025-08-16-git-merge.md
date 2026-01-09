---
title: "Git | git 병합 방법"
author: Hve
slug: git-merge
date: 2025-08-16 23:20:24 +0900
categories: ["개발", "도구"]
math: false
mermaid: false
tags: ["git"]
---

## 깃 병합 방법

git에서 병합 방식은 크게 4가지로 분류할 수 있다.

- fast-forward merge
- 3-way merge
- rebase
- squash

아래 설명에서는 `dev` 브랜치를 `main`으로 병합하는 과정을 예시로 설명한다.

### fast-forward merge

```bash
# <main 브랜치>
git merge dev
```

브랜치가 직선으로 이어질 수 있는 경우 기본적으로 적용된다.

히스토리에 별도의 merge commit이 생성되지 않는다. (병합 시점을 알기 어려움)

`--no-ff` 옵션을 추가해 강제로 `3-way merge` 방식으로 사용할 수 있다.

### 3-way merge

```bash
# <main 브랜치>

git merge dev
git merge --no-ff dev
```

브랜치 분리 후 각각 커밋 이력이 남아있다면 `fast-forward` 대신 적용된다.

각 브랜치의 commit을 비교해 새로운 merge commit을 생성해 병합한다.

### squash

```bash
# <main 브랜치>

git merge --squash dev
```

여러 커밋을 하나로 압축해 병합한다.

단일 커밋으로 요약되고, 브랜치 간 연결 이력은 끊어진다.

### rebase

```bash
# <dev 브랜치>

git rebase main
```

주의사항으로, git merge와는 반대로 재배치할 브랜치 측에서 실행해야 한다.

dev 브랜치를 main에 병합 하려는 경우
- merge: `main` 브랜치에서 `git merge dev` 실행
- rebase: `dev` 브랜치에서 `git rebase main` 실행

대상 브랜치에 분기 후 작업한 새 커밋을 다시 추가한다.

`fast-forward`와 유사하게 동작한다. 차이점으로는
- main 브랜치에 추가 커밋 내역이 있어도 동작한다.
- dev에서 기존 작업한 커밋이 아니라, 새로운 커밋을 다시 생성한다. (커밋 해시가 달라짐)

## 정리

뭘 써야할 지 감이 안온다면 개인적으로는 `3-way merge` 방식을 추천한다.

fast-forward가 가능한 상황에서도 `--no-ff` 옵션을 붙이면 브랜치 병합 시점이 명확히 남아,
히스토리를 추적하거나 협업 시 변경 흐름을 관리하기가 훨씬 수월하다.