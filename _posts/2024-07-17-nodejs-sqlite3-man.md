---
title: "NodeJS | SQLite 라이브러리"
author: Hve
date: 2024-07-17 01:23:13 +0900
categories: ["개발", "nodejs"]
math: false
mermaid: false
tags: []
---

## DB 생성

```js
const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./databse.db');
```

## 쿼리 요청

```js
// 결과 리턴이 필요없을 때
db.run(query, [param...], (err)=>void);

// 단일 행 반환
db.get(query, [param...], (err, row)=>void);

// 다중 행 반환
db.all(query, [param...], (err, rows)=>void);
```

## DB 정리

```js
db.close();
```
