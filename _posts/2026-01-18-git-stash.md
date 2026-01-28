---
title: "Git | git stash"
author: Hve
slug: git-stash
date: 2026-01-18 00:16:47 +0900
categories: ["개발", "도구"]
math: false
mermaid: false
tags: ["git"]
---

## 개요

작업 중인 변경사항을 임시로 저장하고, 워킹 트리를 깨끗하게 만든다.

브랜치를 이동하거나 긴급 수정이 필요한 상황에 유용하다.

## 기본 사용

```bash
# 현재 변경사항을 stash에 저장
git stash
```

```bash
# 저장 후 워킹 트리 clean 상태 확인
git status
```

## stash 목록

```bash
# stash 목록 확인
git stash list

> stash@{0}: WIP on main: 1a2b3c4 작업 메시지
> stash@{1}: WIP on dev: 9f8e7d6 임시 변경
```

## 적용과 삭제

```bash
# 최신 stash 적용 (목록에서 제거되지 않음)
git stash apply
```

```bash
# 최신 stash 적용 후 제거
git stash pop
```

```bash
# 특정 stash 적용
git stash apply stash@{1}
```

```bash
# 특정 stash 삭제
git stash drop stash@{1}
```

```bash
# stash 전체 삭제
git stash clear
```

## 이름 붙이기

```bash
# 메시지와 함께 저장
git stash push -m "임시 수정"
```

## 추적되지 않은 파일 포함

```bash
# untracked 파일 포함
git stash push -u
```

```bash
# ignored 파일까지 포함
git stash push -a
```

## 부분 stash

```bash
# hunk 단위로 선택
git stash push -p
```

## stash vs apply vs pop 차이?

**`apply`**

목록을 유지한 채로 적용한다. 동일한 stash를 여러 번 써야 할 때 사용한다.

**`pop`**

적용 후 목록에서 제거한다. 임시로만 쓸 때 적합하다.

## 특정 파일만 적용

```bash
# stash의 파일 목록 확인
git stash show stash@{0}
```

```bash
# 특정 파일만 복원
git checkout stash@{0} -- path/to/file
```

## 충돌 처리

```bash
# stash 적용 중 충돌 발생 시 상태 확인
git status
```

충돌이 생기면 일반적인 merge 충돌처럼 해결 후 커밋한다.

## 응용

**긴급 핫픽스 작업**

```bash
git stash
git checkout main
# hotfix 작업
git add .
git commit -m "hotfix"
git checkout -
git stash pop
```

**브랜치 이동 전 정리**

```bash
git stash
git checkout <branch>
```

## 주의사항

`git stash save` 는 deprecated 이며 `git stash push` 사용을 권장한다.

stash는 로컬에만 저장된다. 다른 PC로 옮겨야 하면 별도 커밋이나 패치를 사용한다.
