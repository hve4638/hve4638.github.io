---
title: "Linux 명령어 | mkfifo - 명명된 파이프라인"
author: Hve
date: 2024-04-17 11:42:51 +0900
categories: ["개발", "레퍼런스"]
math: false
mermaid: false
tags: ["linux"]
---

## MKFIFO

```bash
mkfifo file
```

file 경로에 입출력이 선입선출되는 `특수파일`을 생성한다

```bash
mkfifo /pipe/pipe0

# 1)
echo hi | cat

# 2)
echo hi > /pipe/pipe0
cat < /pipe/pipe0
```

위 스크립트에서 `#1`과 `#2`는 동일한 결과를 출력한다

말 그대로 명명된(named) 파이프 라인을 추가한다

이를 통해 두 프로세스가 서로의 존재를 모르더라도 이 특수파일을 통해 간단하게 통신을 수행할 수 있으며 공간이 격리된 Docker 환경에서 더 유용할 수 있다