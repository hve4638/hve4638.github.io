---
title: "Node.js | fs 모듈"
author: Hve
date: 2024-09-07 09:55:04 +0900
categories: ["개발", "언어"]
math: false
mermaid: false
tags: ["nodejs"]
---

## node:fs

`node:fs` 모듈은 파일과 디렉토리에 접근 및 조작할 수 있는 기능을 제공한다.

## 목차

- [임포트](#임포트)
- [각 API 타입별 차이](#API_TYPE)
- **API**
    - [파일 쓰기](#파일-쓰기)
    - [파일 읽기](#파일-읽기)
    - [파일 제거](#파일-제거)
    - [디렉토리 생성](#디렉토리-생성)
    - [디렉토리 제거](#디렉토리-제거)
    - [파일 존재 및 상태 확인](#파일-존재-및-상태-확인)
    - [파일 복사](#파일-복사)
    - [파일 이동](#파일-이동)

## 임포트

```js
// promise-based APIs
const fs = require("node:fs/promises");

// callback and sync APIs
const fs = require("node:fs");
```

`node:fs` 대신 `fs`를 사용해도 동일한 모듈을 가져온다.

## 각 API 타입별 차이 {#API_TYPE}

`node:fs` 모듈은 세가지 타입의 API를 가진다.
- `promise-based` : `node:fs/promises` 모듈에서 제공
- `callback`, `sync` : `node:fs` 모듈에서 제공

### Promise-based API

```js
async unlinkFile() {
    try {
        await fs.unlink("./test.txt");
        console.log("삭제 성공!")
    }
    catch(err) {
        console.log("에러가 발생했습니다:", err.message)
    }
}
```

Promise-based API는 Promise를 리턴한다. 따라서 `async`, `await` 키워드 또는 `then()`, `catch()` 메서드로 값을 처리해야한다.

### Callback API

```js
fs.unlink("./test.txt", (err) => {
    if (err) throw err;
    console.log('삭제 성공!');
})
```

대부분의 Callback API는 마지막 인자로 callback 함수를 받는다. callback 함수의 인자는 API마다 차이가 있으나 첫번째 인자는 항상 예외를 위해 예약된다.

예외가 발생하지 않는다면 callback 첫번째 인자로 `null`또는 `undefined`가 넘어간다.

Promised-based API보다 Callback API가 성능(실행 시간과 메모리 할당 모두)상 더 나은 선택이다.

### Sync API

```js
try {
    fs.unlinkSync("./test.txt");
    console.log("삭제 성공!")
}
catch(err) {
    console.log("에러가 발생했습니다:", err.message)
}
```

Sync API는 메서드명의 마지막에 `Sync`가 붙는다.



Promised-based API의 동기 버전이다. 즉, Promised-based API에서 `await` 키워드를 단 것과 유사하게 작동한다.

## 기능

Promised-based API와 Sync API의 인자와 리턴 값이 매우 유사하기 때문에 Callback API와 Sync API에 대해서만 작성한다. 비동기 여부 외 두 API간 차이가 있는 경우에만 설명을 작성한다.

### 파일 쓰기

```js
// <Callback API>
// fs.writeFile(file, data[, options], callback);

fs.writeFile("text.txt", "Hello world", "utf8", (err) => {
    if (err) throw err;
});
```

```js
// <Sync API>
// fs.writeFileSync(file, data[, options]);

fs.writeFileSync("text.txt", "Hello world", "utf8");
```

options 자리에 문자열을 넣으면 encoding을 가리키게 된다.

비동기 API를 이용해 동일한 파일을 여러번 쓸 경우 반드시 이전 작업이 끝났는지 확인해야 한다. 이전 작업을 취소해야 한다면, `AbortController`를 이용한다.

*[Documentation][writeFile]*

### 파일 읽기

```js
// <Callback API>
// fs.readFile(file[, options], callback);

fs.readFile("/etc/passwd", (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

```js
// <Sync API>
// fs.readFileSync(file[, options]);

const data = fs.readFileSync("/etc/passwd");
console.log(data);
```

### 파일 제거

**unlink**

```js
// <Callback API>
// fs.unlink(path, callback);

fs.unlink("path/file.txt", (err) => {
    if (err) throw err;
    console.log("파일 제거됨");
});
```

```js
// <Sync API>
// fs.unlinkSync(path);

fs.unlink("path/file.txt");
console.log("파일 제거됨");
```
*[Documentation][unlink]*

파일을 제거한다.

### 디렉토리 생성

```js
// <Callback API>
// fs.mkdir(path[, options], callback)

fs.mkdir("./tmp/a/apple", { recursive: true }, (err) => {
    if (err) throw err;
})
```

```js
// fs.mkdir(path[, options])

fs.mkdirSync("./tmp/a/apple", { recursive: true });
```

recursive가 `false` 인 경우, 디렉토리 생성 실패시 예외가 발생한다. 항상 `undefined`를 리턴한다.

recursive가 `true` 인 경우, 재귀적으로 디렉토리를 생성한다. 생성한 첫 디렉토리의 절대경로를 리턴하고, 디렉토리를 생성하지 않았다면 `undefined`를 리턴한다.

예시를 들면 아래와 같다.

`fs.mkdirSync("/a/b", { recursive: true })` 를 실행했을때
- "/a"가 없다면, "/a" 리턴
- "/a"는 있으나 "/a/b"가 없다면, "/a/b" 리턴
- "/a/b"가 있다면, `undefined` 리턴

*[Documentation][mkdir]*

### 디렉토리 제거

**rm**

```js
// <Callback API>
// fs.rm(path[, options], callback)

fs.rm("./dir", { force : true, recursive: true }, (err)=>{
    if (err) throw err;
});
```

```js
// <Sync API>
// fs.rmSync(path[, options])

fs.rmSync("./dir", { force : true, recursive: true });
```

파일 및 디렉토리를 제거한다.

options 객체의 필드
- recursive : 재귀 삭제 여부. 디렉토리 삭제시 `true`여야 한다. (기본값 : `false`)
- force : `true`라면 경로가 존재하지 않더라도 예외가 발생하지 않는다. (기본값 : `false`)

*[Documentation][rm]*

**rmdir** *(비권장)*

```js
// <Callback API>
// fs.rmdir(path[, options] callback)

fs.rmdir("./dir", (err)=>{
    if (err) throw err;
});
```

```js
// <Sync API>
// fs.rmdirSync(path[, options])

fs.rmdirSync("./dir");
```

빈 디렉토리를 제거한다. 디렉토리가 아니거나, 비어있지 않거나, 경로가 없다면 예외가 발생한다.

*[Documentation][rmdir]*

### 파일 존재 및 상태 확인

주의할 점으로, 아래 메서드를 이용해서 파일에 접근하기전 확인하는 용도로 사용해서는 안된다. 접근성 확인 이후 타 프로세스가 해당 파일에 먼저 접근할 수 있으므로 파일에 접근하는 메서드의 예외처리를 통해 접근성 확인을 수행해야 한다.

**exists**

```js
// <Sync API>
// fs.existsSync(path)

if (fs.existsSync("./target.txt")) {
    console.log("파일이 존재함");
}
else {
    console.log("파일이 존재하지 않음");
}
```

파일 및 디렉토리가 존재하는지 확인한다.

단순 경로 존재 유무 메서드는 Sync API인 `existsSync()` 만 사용된다. Promise-based API는 존재하지 않고 Callback API인 `exists()`는 deprecated 되었다.

비동기로 파일이 존재하는지 확인하려면 아래의 `access()`를 쓰는 것이 좋다.

*[Documentation][exists]*

**access**

```js
// <Callback API>
// fs.access(path[, mode], callback);

fs.access(file, fs.constants.R_OK, (err) => {
    if (err) {
        console.log("읽기 가능")
    }
    else {
        console.log("읽을 수 없음")
    }
});
```

```js
// <Sync API>
// fs.accessSync(path[, mode]);

try {
    fs.accessSync(file, fs.constants.R_OK);
    console.log("읽기 가능");
}
catch (err) {
    console.log("읽을 수 없음")
}
```

파일의 존재, 읽기, 쓰기, 실행가능 유무를 확인한다.

파일이 mode 플래그 조건에 부합하지 않으면 예외를 리턴한다.

- `fs.constants.F_OK` : 존재 유무
- `fs.constants.R_OK` : 읽기 가능 유무
- `fs.constants.W_OK` : 쓰기 가능 유무
- `fs.constants.X_OK` : 실행 가능 유무 (Windows에서는 F_OK처럼 동작함)

mode 값은 비트마스크이므로 비트 OR을 통해 여러 모드를 검사할 수 있다. (ex. `fs.constants.R_OK | fs.constants.W_OK`)

*[Documentation][access]*

**stat**

```js
// <Callback API>
// fs.stat(path[, options], callback);

fs.stat("hello.txt", (err, stats)=>{
    console.log(stats.isDirectory())
    console.log(stats)
})
```

```js
// <Sync API>
// fs.stat(path[, options]);

const stats = fs.stat("hello.txt");
console.log(stats.isDirectory());
console.log(stats);
```

경로의 통계를 확인한다.

[fs.Stats](https://nodejs.org/api/fs.html#class-fsstats) 필드
- *isFile()* : 파일 여부
- *isDirectory()* : 디렉토리 여부
- *isFIFO()* : FIFO 파이프 여부
- *size* : 크기 (bytes)

*[Documentation][stat]*

### 파일 복사

**copyFile**

```js
// <Callback API>
// fs.copyFile(src, dest[, mode], callback)


fs.copyFile('source.txt', 'destination.txt', (err) => {
    if (err) throw err;
});
fs.copyFile('source.txt', 'destination.txt', fs.constants.COPYFILE_EXCL, (err) => {
    if (err) throw err;
});
```

```js
// <Sync API>
// fs.copyFileSync(src, dest[, mode])

fs.copyFileSync("source.txt", "destination.txt");
fs.copyFileSync("source.txt", "destination.txt", fs.constants.COPYFILE_EXCL);
```

단일 파일을 복사한다. 기본 동작으로 dest를 덮어쓰고, mode 인자로 `fs.constants.COPYFILE_EXCL` 플래그가 지정된 경우 이미 dest가 존재하면 예외가 발생한다.

*[Documentation][copyFile]*

**cp**

```js
// <Callback API>
// fs.cp(src, dest[, options], callback)

fs.cp('source', 'destination', { recursive: true }, (err) => {
    if (err) throw err;
});
```

```js
// <Sync API>
// fs.cpSync(src, dest[, options])

fs.cpSync("/source", "/destination", { recursive: true });
```

하위 디렉토리와 파일을 포함한 디렉토리 구조를 복사한다. 

options 객체의 필드 목록
- recursive : 디렉토리 복사 시 사용 (기본값: `false`)
- force : dest 경로가 이미 존재할 때 `true`라면 덮어쓰고, `false`라면 아무 작업도 하지 않는다. (기본값: `true`)
- errorOnExists : force가 `false` 일 때 dest 경로가 이미 존재하면 예외를 발생시킨다. (기본값: `false`)
- mode : `copyFileSync()`의 mode와 동일 (기본값: 0)
- dereference : 심볼릭 링크 역참조 여부 (기본값: `false`)

*[Documentation][cp]*

## 파일 이동

```js
// <Callback API>
// fs.rename(oldPath, newPath, callback)

fs.rename("old.txt", "new.txt", (err)=>{
    if (err) throw err;
});
```

```js
// <Sync API>
// fs.renameSync(oldPath, newPath)

fs.rename("old.txt", "new.txt");
```

파일 및 디렉토리의 위치를 변경한다. `newPath`에 파일이 존재한다면 덮어씌우고, `newPath`가 디렉토리라면 예외가 발생한다.

*[Documentation][rename]*

## 참고

- [Node.js v22.8.0 documentation : File system](https://nodejs.org/api/fs.html)

[mkdir]: https://nodejs.org/api/fs.html#fsmkdirpath-options-callback
[writeFile]: https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback
[readFile]: https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
[unlink]: https://nodejs.org/api/fs.html#fsunlinkpath-callback

[rm]: https://nodejs.org/api/fs.html#fsrmpath-options-callback
[rmdir]: https://nodejs.org/api/fs.html#fsrmdirpath-options-callback
[rename]: https://nodejs.org/api/fs.html#fsrenameoldpath-newpath-callback

[exists]: https://nodejs.org/api/fs.html#fsexistssyncpath
[access]: https://nodejs.org/api/fs.html#fsaccesspath-mode-callback
[stat]: https://nodejs.org/api/fs.html#fsstatpath-options-callback

[copyFile]: https://nodejs.org/api/fs.html#fscopyfilesrc-dest-mode-callback
[cp]: https://nodejs.org/api/fs.html#fscpsrc-dest-options-callback
