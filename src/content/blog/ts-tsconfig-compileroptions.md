---
title: "Typescript | tsconfig.json - compilerOptions"
author: Hve
date: 2024-09-17 21:58:59 +0900
categories: ["개발", "메모"]
math: false
mermaid: false
tags: []
---

## 프로젝트

### incremental

증분 빌드를 허용한다.

필요 정보는 `.tsbuildinfo` 디렉토리에 저장된다.

### 작성 예정

- tsBuildInfoFile
- composite
- disableSourceOfProjectReferenceRedirect
- disableSolutionSearching
- disableReferencedProjectLoad

## 언어 및 환경

### target

자바스크립트로 변환할 버전을 지정한다.

대부분의 최신 브라우저가 `ES6`을 지원하므로 일반적으로 `ES6`로 지정하는게 좋다.

### lib

런타임 환경을 설명하는 라이브러리 정의 파일을 지정한다.

기본값은 현재 `target`의 내장 JS API에 대한 타입 정의, 브라우저 타입 정의가 포함된 `dom` 이다.

브라우저에서 실행되지 않는 경우 `dom`을 제외하기 위해 명시적으로 지정하며, 대부분의 경우 이 옵션을 생략해도 무방하다.

### jsx

`.tsx` 파일이 어떻게 `.jsx` 또는 `.js` 파일로 변환될지를 지정한다.

자세한 내용은 [문서](https://www.typescriptlang.org/ko/docs/handbook/jsx.html) 참조

### experimentalDecorators

실험적인 Decorator 기능을 사용할 수 있도록 한다.

Decorator는 아직 Javascript에서 공식적으로 채택된 기능이 아니며 추후 채택되었을 때의 구현은 Typescript의 구현과 달라질 수 있다.

Decorator에 대한 내용은 [문서](https://www.typescriptlang.org/docs/handbook/decorators.html) 참조

### 작성 예정

- emitDecoratorMetadata
- jsxFactory
- jsxFragmentFactory
- jsxImportSource
- reactNamespace
- noLib
- useDefineForClassFields
- moduleDetection

## 모듈

### module

모듈 시스템을 설정한다.

- `CommonJS` : require 방식
- `ES2015`/`ES6`/`ES2020`/`ES2022` : import 방식

### rootDir

타입스크립트 컴파일 시 입력 디렉토리의 디렉토리 구조와 동일한 구조를 출력 디렉토리에 유지한다.

*[Docs](https://www.typescriptlang.org/tsconfig/#rootDir)*

### paths

require 또는 import 시 경로를 다시 매핑한다.

```json
{
    "paths": {
        "assets/*": ["./src/assets/*"],
        "components/*": ["./src/components/*"],
        "context/*": ["./src/context/*"],
        "data/*": ["./src/data/*"],
        "features/*": ["./src/features/*"],
        "hooks/*": ["./src/hooks/*"],
        "libs/*": ["./src/libs/*"],
        "services/*": ["./src/services/*"],
        "utils/*": ["./src/utils/*"],
        "pages/*": ["./src/pages/*"]
    }
}
```

### 작성 예정

- rootDirs
- moduleResolution
- baseUrl
- typeRoots
- types
- allowUmdGlobalAccess
- moduleSuffixes
- allowImportingTsExtensions
- resolvePackageJsonExports
- resolvePackageJsonImports
- customConditions
- noUncheckedSideEffectImports
- resolveJsonModule
- allowArbitraryExtensions
- noResolve

## Javascript 지원

### allowJs

프로젝트에서 Javascript 파일을 사용할 수 있도록 허용한다.

### checkJs

Javascript 코드 내에서 JSDocs 등을 기반으로 타입 체크를 수행한다.

### maxNodeModuleJsDepth

## Emit

### esModuleInterop

typescript는 엄격하게 ES6 모듈의 사양을 준수하며, 이때문에 느슨 구현을 사용하는 타 라이브러리와 호환성 문제가 발생할 수 있다.

이 옵션을 켜면 ES6의 호환성 문제를 해결한다.

### allowSyntheticDefaultImports

시멘틱 default import 문법을 사용하도록 허용한다.

```ts
import React from 'react' // 시멘틱 default import
import * as React from 'react' // 기존 문법
```


## 타입 체크

### strict

활성화시 아래의 엄격한 검사를 모두 활성화한다.

strict는 아래의 strict 계열 옵션을 모두 활성화한 것과 같으며 다음 옵션을 개별적으로 지정할 수도 있다.

- `strictBindCallApply`
    - `call`, `bind`, `apply` 함수에 대해 올바른 인수가 지정되었는지 확인한다.
- `strictBuiltinIteratorReturn`
    - 내장 이터레이터의 반환값 타입을 검사한다.
- `strictFunctionTypes`
    - 함수의 매개변수 타입을 더 정확하게 검사한다.
- `strictNullChecks`
    - null/undefined 타입 체크를 더 정확하게 사용한다.
    - `false`인 경우, `string`과 같은 명확한 타입에도 `null`이 들어갈 수 있다.
- `strictPropertyInitialization`
    - 클래스에서 생성자에서 맴버변수의 초기화가 이루어지지 않는다면 오류가 발생한다.
- `alwaysStrict`
    - Javascript의 [엄격 모드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)가 적용된다. 컴파일된 Javascript 코드 상단에 "use strict"가 붙는다.
- `noImplicitThis`
- `useUnknownInCatchVariables`
    - `catch`문으로 가져오는 에러 매개변수의 기본 타입을 `unknown`로 지정해 타입 체크 코드를 선행하게 한다. `false`라면 기본 타입을 `any`로 지정한다.

*[Document](https://www.typescriptlang.org/tsconfig/#strict)*

### noImplicitAny

변수 힌트가 없다면 오류를 표시한다.

`false`라면 변수 힌트가 없는 암시적으로 `any` 타입으로 추론된다.

### noUnusedLocals

미사용 지역 변수를 비허용한다.

### noUnusedParameters

미사용 매개변수를 비허용한다.

### exactOptionalPropertyTypes

선택 필드에 대해 정확한 타입만 허용한다.

```ts
interface UserDefaults {
    colorTheme?: "dark" | "light";
}
```

위 인터페이스에서 `colorTheme`에 들어갈 수 있는 값은 "dark", "light", `undefined` 3가지다.

그러나 대부분의 경우에 직접 `undefined`를 넣는 것은 의도하는 바가 아니다.

`exactOptionalPropertyTypes` 옵션 활성화 시 이러한 행동을 방지한다.

### noImplicitReturns

함수의 리턴 타입을 지정했다면, 모든 코드 경로에서 올바른 타입을 리턴하는지 검사한다.

### noFallthroughCasesInSwitch

```ts
swtich(data) {
    case "y":
    case "yes":
        console.log("Yes");
        // FallThrough가 허용되지 않으므로 에러 보고
    case "n":
    case "no":
        console.log("No");
        break;
}
```

`switch`문의 Fallthrough를 허용하지 않는다.

### noUncheckedIndexedAccess

배열 또는 객체에 실제로 `undefined`일 가능성이 있는 타입에 대해 `undefined` 타입이 추가된다.

```ts
const arr:string[] = ["hello", "world"];

const element = arr[2]; // undefined
```

`noUncheckedIndexedAccess`가 `false`일 경우 element의 값은 실제로 `undefined` 지만 `string`로 취급된다.

`noUncheckedIndexedAccess`가 `true` 일 경우 `string|undefined`로 취급된다.

### noPropertyAccessFromIndexSignature

알 수 없는 필드에 대해 dot 구문 접근을 방지한다.

```ts
interface GameSettings {
    speed: "fast" | "medium" | "slow";
    quality: "high" | "low";
    
    [key: string]: string;
}

const settings = getSettings();
let spped, quality, name;
speed = settings.speed;
quality = settings.quality;

name = settings.name; // 허용되지 않음
name = settings["name"]; // 허용됨
```

### noImplicitOverride

암시적 override를 허용하지 않는다.

```ts
class Base {
    setup() {}
}

class A {
    override setup() {}
}

class B {
    setup() {} // 비허용
}
```

### allowUnreachableCode

도달할 수 없는 코드를 처리한다.

- `undefined` (기본값) : 경고로 제안을 생성한다.
- `true` : 무시한다.
- `faslse` : 에러를 발생한다.

### 작성 예정

- allowUnusedLabels
