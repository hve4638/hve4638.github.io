---
title: "React.js | 튜토리얼 - 1"
author: Hve
date: 2024-01-13 16:21:08 +0900
categories: ["개발", "react.js"]
math: false
mermaid: false
tags: []
---

## 개발 환경 설치

- [Node.js](https://nodejs.org)
- [VSCode](https://code.visualstudio.com)

## 프로젝트 생성

1. Workspace로 사용할 폴더 생성
2. 해당 프로젝트 폴더에서 터미널 열기
3. `npx create-react-app <프로젝트명>` 입력

정상적으로 완료 시 해당 Workspace 폴더 내 `프로젝트명` 이름의 폴더가 추가된다.

### 문제 : 허가되지 않은 스크립트

1. 관리자 권한으로 Powershell 실행
2. `Set-ExecutionPolicy Unrestricted` 입력 후 `Y` 입력

## 프로젝트 실행

프로젝트 폴더에서 `npm start`

## 프로젝트 구조

- `node_modules` : 라이브러리 보관
- `public` : static 리소스 보관 (이미지 파일 등)
- `src` : 소스 코드가 위치한 폴더
    - `App.js` : 메인 페이지
- `package.json` : 프로젝트명, 버전, 라이브러리 의존성 등 정보

## React.js (또는 JSX) 문법

자바스크립트 내에서 html을 넣을 수 있으나 몇가지 차이가 존재

1. class 태그 넣을 땐 `className`으로
    - `<div class="App"></div>` 은 에러 발생
    - `<div className="App"></div>` 으로 적어야 한다
2. 변수를 넣을 땐 `{변수명}` : 데이터 바인딩
    - `<div id={postid}>{postname}</div>`
3. style 태그 넣을 땐, 오브젝트 형식으로 
    - `<div style={  {이름: '값'}  }></div>`
        - 두개의 중괄호를 사용한다
        - 첫번째 중괄호는 데이터 바인딩 문법, 두번째 중괄호는 object 문법이다 (타 언어의 dictionary>, map과 유사한 역할을 수행)

## useState

```js
let [num, setNum] = useState(0)
let [names, setNames] = useState(['a', 'b', 'c'])
```

useState를 이용해 첫번째 `[상태, 상태변경함수]` 를 가져온다

- `상태`는 useState에 넣은 값이 든 변수다
- `상태변경함수`는 `상태`의 값을 변경하는 함수이다

html에 데이터 바인딩(`{variable}` 문법)을 통해 `상태` 값을 넣을 때

`상태변경함수`를 통해 값을 변경시 html이 자동으로 재랜더링 할 수 있다

직접 `상태` 변수를 수정한다고 값이 변경되지 않는 것에 주의

## Component

```jsx
function Post({title, contents}) {
  return (
    <div>
      <h4>title</h4>
      <p>contents</p>
    </div>
  );
}
```

컴포넌트는 재사용 가능하고 독립적으로 사용하기 위한 문법이다

컴포넌트는 태그를 리턴하고, 함수명은 대문자로 시작해야 한다

컴포넌트는 다른 컴포넌트에서 아래와 같이 사용할 수 있다

```jsx
function App() {
    return (
        <div>
            <Post title="일기" contents="내용"/>
            <Post title="일기2" contents="내용"/>
        </div>
    );
}
```

```js
export default Post
```

컴포넌트를 외부 JS파일에서 사용하기 위해 위 코드를 맨 하단에 작성한다