---
title: "VSCode | jest 확장 자동실행 방지"
author: Hve
date: 2025-02-18 17:41:14 +0900
categories: ["개발", "메모"]
math: false
mermaid: false
tags: []
---

## 자동실행 방지

- "Settings" 이동 (`Ctrl + ,`)

- settings.json 이동
    - jest 검색 후 아무 옵션에서 *settings.json에서 편집 클릭

- 마지막에 다음 줄 추가

```json
"jest.runMode": "on-demand"
```

