---
title: "Git | rebase - 커밋 명칭 수정 및 합치기"
author: Hve
date: 2026-01-09 23:30:00 +0900
categories: ["개발", "도구"]
math: false
mermaid: false
tags: ["git"]
---

## git rebase

여러 커밋을 하나로 합치는게 더 추적하기 용이하거나, 커밋명을 변경해야 할 일이 있는 경우 `git rebase -i`를 사용한다.

기본적으로 rebase 작업은 기존 커밋을 새 커밋으로 대체하는, 기록 자체는 변경하는 작업이므로 공유된 브랜치에서 사용하는 것은 권장하지 않는다.

로컬 또는 개인 브랜치에서 공유되지 않은 영역에만 적용하는걸 추천한다.

## 커밋 합치기 (squash)

### 범위 지정

```bash
# git rebase -i <기준 커밋>

# 최근 3개 커밋을 대상으로 지정
git rebase -i HEAD~3

# 특정 커밋과 그 이후 모든 커밋을 대상으로 지정
git rebase -i <oldest_commit>^
```

지정한 범위의 커밋을 대상으로 rebase를 진행한다. 여기서 지정한 것이 바로 적용 대상이 되는 것은 아니므로 범위를 넓게 잡아도 된다.

명령 성공시 리눅스 기준 vim 또는 nano가 열린다.

### 합칠 대상 지정 (rebase todo)

```bash
pick b0d4847 fix: 태그 불일치 수정
pick e629803 fix: 페이지 배포 워크플로우 및 포스트 페이지네이션 개선
pick bd3d89b edit post: hub-rust
pick beef63f fix: GitHub Actions 액션 버전 업데이트 및 Ruby 버전 변경
pick e021dfa post: add posts
```

`git rebase -i` 실행 후 편집기에 `pick <커밋해시> <커밋메시지>` 형태로 표시된다.

합칠 커밋 중 가장 위의 커밋은 `pick`으로 두고, 그 아래의 커밋부터 `pick`을 `squash`(또는 `s`)로 변경한다.

그외 변경하지 않을 커밋은 `pick`으로 유지한다.

vim를 사용하는 경우, 합칠 커밋이 많다면 pick → s 변경 작업 시 팁으로
- normal 모드에서 s로 바꿀 pick쪽으로 커서 이동
- `ciw`로 pick을 지우고 s로 변경한 후 esc으로 나오기
- `j`(커서 아래 이동)와 `.`(이전작업 수행)를 반복

하는 방식으로 빠르게 수정할 수 있다.

```bash
pick b0d4847 fix: 태그 불일치 수정
s e629803 fix: 페이지 배포 워크플로우 및 포스트 페이지네이션 개선
s bd3d89b edit post: hub-rust
pick beef63f fix: GitHub Actions 액션 버전 업데이트 및 Ruby 버전 변경
pick e021dfa post: add posts
```

위 예시에서는 `b0d4847`(fix: 태그 불일치 수정) 부터 `bd3d89b`(edit post: hub-rust) 까지 병합하고 그 이후는 유지한다.

### 커밋 메시지 병합

```bash
# This is a combination of n commits.
# This is the 1st commit message:

커밋 메시지 1

# This is the commit message #2:

커밋 메시지 2

# This is the commit message #3:

커밋 메시지 3

# ...
```

합칠 대상 지정 후, 커밋 메시지 편집창이 나타난다.

주석과 함께 합칠 커밋의 모든 메시지가 함께 나오며, 맨 아래에는 합칠 커밋 전체의 변경 사항도 주석으로 표시된다.

이대로 저장하면 전체 커밋 메시지가 함께 저장된다. 필요한 커밋 메시지만 남기거나 정리한 후 저장하고 나가면 된다.

vim의 경우, 커밋 메시지를 다 날리고 새로 쓰고 싶다면 커서를 앞에 두고 `dG`를 하면 다 날릴 수 있다.

저장 후 종료하면 커밋 병합이 완료된다.

## 커밋 메시지 수정 (reword)

```bash
pick abc1234 첫번째 커밋
r def5678 수정할 커밋
pick ghi9012 세번째 커밋
```

합칠 때와 동일하게 `git rebase -i <커밋해시>` 명령으로 todo 편집기로 들어온 후, 수정할 커밋 기록의 `pick`을 `reword`(또는 `r`)로 변경 후 저장한다.

이후 커밋 메시지 편집 창에서 메시지를 수정하고 저장하면 된다.

## 그외 rebase 명령어

| 명령어 | 설명 |
|--------|------|
| `pick` | 커밋을 그대로 사용 |
| `reword` | 커밋 메시지만 수정 |
| `edit` | 커밋 내용 수정 |
| `squash` | 이전 커밋과 합치기 (메시지 합침) |
| `fixup` | 이전 커밋과 합치기 (메시지 버림) |
| `drop` | 커밋 삭제 |

## 원격 저장소 push

```bash
git push --force-with-lease
```

이미 원격으로 push한 커밋을 rebase하면 히스토리가 변경되므로 명시적으로 강제로 변경하겠다는 옵션을 추가해야 한다.

그 사이 다른 사람이 추가로 커밋 한 경우 등에는 이 경우에도 실패하며, fetch해서 병합 작업을 진행해야 한다.

```bash
git push --force
```

개인 프로젝트인데 뭔가 꼬인거라면 `force`로 무시하고 덮어씌울 수도 있다. 당연히 기존 원격 저장소의 내역은 날아간다.

그래서 웬만하면 공유 브랜치에 push해서 내 손을 떠난 기록에는 안쓰는게 좋다.