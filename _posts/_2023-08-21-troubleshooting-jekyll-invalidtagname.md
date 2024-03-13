---
title: "Jekyll \"Invalid first code point of tag name\" 문제"
author: Hve
date: 2023-08-21 05:01:44 +0900
categories: ["개발", "트러블슈팅"]
math: false
mermaid: false
tags: []
---

## 문제

![TB](/assets/img/troubleshooting/tb-jekyll-err0.png)

Jekyll 파일에 포스트를 추가하고 push했더니 빌드에 실패했다.

![TB](/assets/img/troubleshooting/tb-jekyll-err1.png)

Detail을 살펴보니 'Test site' 과정에서 에러가 발생한 것을 볼 수 있는데

\"Invalid first code point of tag name U+C790\" 라는 에러 로그를 확인할 수 있다.

## 해결

> \#\# 필요 헤더
>
> \`\`\`cpp
>
> #include \<vector\>
>
> \`\`\`
> 
> \#\# 선언
>
> \> std::vector<자료형>


위는 문제가 된 포스트 마크다운의 일부로

`> std::vector\<자료형>` 에서 `<`, `>` 가 다른 문법으로 해석되어 발생한 문제다.

앞에 `\`를 붙여 `\> std::vector\<자료형\>` 으로 바꾸면 에러없이 동작한다.

> \`\`\`cpp
>
> #include \<vector\>
>
> \`\`\`

해당 \`\`\` 문법 안에 들어간 `<>`에는 `\`를 붙일 필요가 없다.

