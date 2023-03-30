---
title: [Blogging] 블로그 문법 정리
author: Hve
date: 2023-01-14 23:22:00 +0900
categories: [Blogging, Posting]
tags: [markdown]
pin: false
toc: false
---



## 목차
- [목차](#목차)
- [경로](#경로)
- [필수 포맷](#필수-포맷)
- [선택 인자](#선택-인자)
- [이미지 경로](#이미지-경로)


## 경로


## 필수 포맷
```yaml
---
title: 제목
date: YYYY-MM-DD HH:MM:SS +0900
categories: [TOP_CATEGORIE, SUB_CATEGORIE]
tags: [TAG]     # 태그 이름은 항상 lowercase로 작성
---
```

## 선택 인자

```yaml
---
math: true # mathemetical feature를 활성화
mermaid: true # Mermaid 활성화
---
```
[**Mermaid란?**](https://github.com/mermaid-js/mermaid)

## 이미지 경로
```md
---
img_path: /img/path/
---

![The flower](flower.png) # /img/path/flower.png 경로를 단축
```

