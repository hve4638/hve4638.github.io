---
title: "트러블슈팅 | VSCode에서 vim과 copilot 키 충돌"
author: Hve
slug: vscode-vim-copilot-shortcut
date: 2025-11-07 02:35:40 +0900
categories: ["개발", "VSCode"]
math: false
mermaid: false
tags: ["vscode"]
---

## VSCode에서 vim과 copilot 키 충돌

vim에서 esc는 Insert모드에서 빠져나갈때 사용하지만, copilot의 코드 자동완성을 취소할 때 쓰는 것과 꼬이는 경우가 많다.

해결하는 방법 중 하나는 자동완성 시 먼저 copilot에게 키 입력을 보내게 하고, 자동완성 제안이 없는 경우는 vim으로 입력을 넘겨주는 것이다.

## 방법

1. `ctrl + shift + p` 로 Command Pallete를 열고 `Preferences: Open Keyboard Shortcuts (JSON)` 입력

2. 배열에 아래 내용을 추가

```json
{
    "key": "escape",
    "command": "editor.action.inlineSuggest.hide",
    "when": "inlineSuggestionVisible && editorTextFocus"
},
{
    "key": "escape",
    "command": "extension.vim_escape",
    "when": "editorTextFocus && vim.active && !inlineSuggestionVisible"
},
```