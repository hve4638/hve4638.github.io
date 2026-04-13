---
title: "개발도구 | tmux 사용법"
date: 2026-04-13 19:16:34 +0900
categories: ["개발", "도구"]
tags: []
---

# tmux

tmux는 터미널 멀티플렉서로 `가상의 터미널 세션`을 사용할 수 있도록 하는 도구다.

주 용도는 다음과 같다.
- 한 터미널에서 여러 작업 공간을 나누어야 할 때
- 여러 터미널에서 한 터미널을 공유할 때
- 원격 연결 및 터미널 창을 꺼도 세션이 유지되도록 할 때

## 설치 방법

```bash
apt install tmux
```

## 깁사용방법

### 세션 진입 및 나가기

```bash
# 새 세션 진입
tmux new-session -s 세션명

# 세션 나오기
tmux detach

# 기존 세션 진입
tmux attach-session -t 세션명
```

`tmux new-session`을 통해 새 세션을 생성해 진입할 수 있다

진입 후 `tmux detach` 명령 또는 `ctrl+b d` 를 차례로 눌러 빠져나올 수 있다. 이렇게 빠져나온 세션은 `tmux attach-session`으로 재진입이 가능하다.

## tmux 세션 내부 단축키 

`ctrl+b`는 명령을 위한 기본 prefix 키다. `ctrl+b`를 누른 후, 다음 키가 명령으로서 인식된다.

| 단축키 | 설명 |
|--------|------|
| `d` | session 나가기 | 
| `%` | pane 수직 분할 | 
| `"` | pane 수평 분할 | 
| `{` | pane 앞으로 이동 | 
| `}` | pane 뒤로 이동 |

## appendix: 유용한 tmux alias

```bash
alias tn="tmux new-session -s"
alias ta="tmux attach-session -t"
alias tkill="tmux kill-session -t"
alias tls="tmux list-sessions"
alias tl="tmux list-sessions"
alias td="tmux detach"
alias trename="tmux rename-session -t"
alias tr="tmux rename-session -t"
```

## apppendix: 유용한 configure 세팅

```bash
# ~/.tmux.conf
set -g mouse on

set -g status-style bg=black,fg=white
set -g default-terminal "tmux-256color"
```