---
title: "도구 | opencode 초기 세팅"
author: Hve
slug: aiagent-man
date: 2026-01-29 05:21:28 +0900
categories: ["개발", "도구"]
math: false
mermaid: false
tags: []
---

## Instruction

> Project: `AGENTS.md`
>
> Global: `~/.config/opencode/AGENTS.md`
>
> Project: `CLAUDE.md` (클로드 코드 호환성)
> 
> Global: `~/.claude/CLAUDE.md` (클로드 코드 호환성)

각 세션마다 항상 컨텍스트에 포함되는 지침이다.

## SKILL

> Project: `.opencode/skills/<name>/SKILL.md`
>
> Global: `~/.config/opencode/skills/<name>/SKILL.md`
>
> Project (클로드 호환): `.claude/skills/<name>/SKILL.md`

> Global (클로드 호환): `~/.claude/skills/<name>/SKILL.md`

에이전트는 저장된 Skill 목록을 확인하고, 필요할 때 모든 내용을 가져온다.

```markdown
---
name: <이름>
description: <설명>
---

<프롬프트 내용>
```

에이전트는 Skill의 이름, 설명을 보고 작업에 필요한 경우 전체 내용을 확인하게 된다.

## Command

> Project: `.opencode/commands/<명령어>.md`
>
> Global: `~/.opencode/commands/<명령어>.md`

사용자 지정 명령어를 정의하고, 명령어 사용 시 프롬프트를 호출할 수 있다.

자주 쓰는 프롬프트를 별칭으로 지정하는 용도이다.

**예시**

```markdown
---
description: Run tests with coverage
agent: build
model: anthropic/claude-3-5-sonnet-20241022
---

Run the full test suite with coverage report and show any failures.
Focus on the failing tests and suggest fixes.
```

저장하는 파일명이 명령어가 된다. `test.md` 로 저장했다면 `/test`로 실행할 수 있다.

추가 기능
- 내부에 `$ARGUMENTS`를 포함시켜 명령어의 인자를 프롬프트에 넣을 수 있다.
- `$1`, `$2` .. 등으로 위치 인자를 넣을 수 있다.
- ``` !`명령어` ``` 의 형태로 bash 명령어의 출력을 프롬프트에 넣을 수 있다.
- `@파일경로` 의 형태로 파일 내용을 프롬프트에 포함할 수 있다. 