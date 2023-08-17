---
title: 닷넷 설치 및 실행
author: Hve
date: 2023-05-26 15:45:47 +0900
categories: [ 개발, 개발환경 ]
math: false
mermaid: false
tags: [rasberry-pi4, c#]
---

라즈베리파이4 환경을 기준으로 작성되었다.

라즈베리파이는 arm32 환경으로 다른 환경에서 설치시 다른 버전의 SDK를 다운받아야 한다.

(일반적인 인텔/AMD 프로세서를 사용한다면 AMD64를 다운받으면 된다.)

# 닷넷 설치

## A. 사이트에서 다운로드 링크 확인

### 1. [닷넷 사이트](https://dotnet.microsoft.com/) 이동

![DI1](/assets/img/raspi/dotnetinstall/di1.png){: width="700"}

다운로드 탭에서 *<U>모든 .Net 7.0 다운로드</U>* 클릭

![DI3](/assets/img/raspi/dotnetinstall/di3.png){: width="350"}

SDK 에서 바이너리 탭의 <U>Arm32</U> 클릭

![DI4](/assets/img/raspi/dotnetinstall/di4.png){: width="550"}

아래 다운로드 링크를 복사 한다

## B. 닷넷 설치

![DI5](/assets/img/raspi/dotnetinstall/di5.png)

```bash
wget https://download.visualstudio.microsoft.com/download/pr/773e201f-00f3-4de2-beb7-698d9c72f4b7/4c1de128cb18198e1b9bf30902c665bc/dotnet-sdk-7.0.302-linux-arm.tar.gz
```

라즈베리 파이4 에서 다운로드 링크를 내려받는다

![DI6](/assets/img/raspi/dotnetinstall/di6.png)

```bash
mkdir /usr/dotnet
tar zxf dotnet-sdk-7.0.302-linux-arm.tar.gz -C /usr/dotnet/
```

원하는 경로에 dotnet 폴더를 생성하고 압축해제

![DI7](/assets/img/raspi/dotnetinstall/di7.png)

해당 경로에서 dotnet 실행되는지 확인

![DI8](/assets/img/raspi/dotnetinstall/di8.png)

```bash
export PATH=$PATH:/usr/dotnet
export DOTNET_ROOT=/usr/dotnet
```

`.bashrc`에서 다음 두 줄을 추가

```bash
source .bashrc
```

`.bashrc` 실행


![DI](/assets/img/raspi/dotnetinstall/di9.png)

`dotnet` 실행되는지 확인

## C. C# 빌드 및 실행

![DI](/assets/img/raspi/dotnetinstall/di10.png)

프로젝트 폴더를 만들고 `dotnet new console` 명령으로 프로젝트를 생성

라이브러리 의존성 때문에 오류가 발생할 수 있는데 해당하는 라이브러리를 설치하고 다시 실행하자

위의 경우 `apt install libicu-dev` 설치시 해결된다

![DI](/assets/img/raspi/dotnetinstall/di11.png)

정상 실행시 화면

![DI](/assets/img/raspi/dotnetinstall/di12.png)

![DI](/assets/img/raspi/dotnetinstall/di13.png)

C#프로젝트 파일이 생성된 것을 확인할 수 있고, `dotnet build` 을 통해 해당 프로젝트를 빌드 할 수 있다

![DI](/assets/img/raspi/dotnetinstall/di14.png)

빌드된 경로를 따라가면 실행파일과 dll 파일을 찾을 수 있다

![DI](/assets/img/raspi/dotnetinstall/di15.png)

실행파일을 실행하거나 `dotnet <dll파일명>` 으로 프로그램이 실행되는걸 확인

## D. 외부에서 빌드하기

![DI](/assets/img/raspi/dotnetinstall/di16.png){: width="400"}

윈도우에서 개발하고 빌드한 C# 프로젝트도 라즈베리 파이로 옮겨 실행할 수 있다

빌드시 대상 런타임을 `이식 가능` 또는 `linux-arm`으로 지정해야 한다

## Z. 요약

```bash
wget https://download.visualstudio.microsoft.com/download/pr/773e201f-00f3-4de2-beb7-698d9c72f4b7/4c1de128cb18198e1b9bf30902c665bc/dotnet-sdk-7.0.302-linux-arm.tar.gz

mkdir /usr/dotnet
tar zxf dotnet-sdk-7.0.302-linux-arm.tar.gz -C /usr/dotnet/

echo 'export PATH=$PATH:/usr/dotnet' >> ~/.bashrc
echo 'export DOTNET_ROOT=/usr/dotnet' >> ~/.bashrc
source ~/.bashrc

apt install libicu-dev
```
