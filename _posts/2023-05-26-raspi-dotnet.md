---
title: 라즈베리파이4 | 닷넷 설치 및 실행
author: Hve
date: 2023-05-26 15:45:47 +0900
categories: [ Dev, RasberryPi ]
math: false
mermaid: false
tags: [rasberry-pi4, c#]
---

# 닷넷 설치

## A. 사이트에서 다운로드 링크 확인

### 1. [닷넷 사이트](https://dotnet.microsoft.com/) 이동

![DI1](/assets/img/raspi/dotnetinstall/di1.png){: width="700"}

![DI2](/assets/img/raspi/dotnetinstall/di2.png){: width="600"}

다운로드로 들어간후 최선 버전 클릭

![DI3](/assets/img/raspi/dotnetinstall/di3.png){: width="350"}

SDK 이미지에서 바이너리 탭의 `Arm32` 클릭

![DI4](/assets/img/raspi/dotnetinstall/di4.png){: width="550"}

`직접 링크` 복사

## B. 닷넷 설치

![DI5](/assets/img/raspi/dotnetinstall/di5.png)

```bash
wget https://download.visualstudio.microsoft.com/download/pr/773e201f-00f3-4de2-beb7-698d9c72f4b7/4c1de128cb18198e1b9bf30902c665bc/dotnet-sdk-7.0.302-linux-arm.tar.gz
```

라즈베리 파이4 에서 `wget` 으로 해당 파일 다운로드

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

.bashrc에서 다음 두 줄을 추가한다

저장 경로를 다르게 했으면 당연히 경로도 수정해야 한다

```bash
source .bashrc
```

이후 `source` 명령으로 .bashrc 실행


![DI](/assets/img/raspi/dotnetinstall/di9.png)

`dotnet` 실행되는지 확인

## C. C# 빌드 및 실행

![DI](/assets/img/raspi/dotnetinstall/di10.png)

프로젝트 폴더를 만들고 `dotnet new console` 명령으로 프로젝트를 생성한다

라이브러리 의존성 때문에 오류가 발생할 수 있는데 해당하는 라이브러리를 설치하고 다시 실행하자

위의 경우는 `apt install libicu-dev` 설치시 해결된다

![DI](/assets/img/raspi/dotnetinstall/di11.png)

정상 실행시 화면


![DI](/assets/img/raspi/dotnetinstall/di12.png)

이후 폴더를 확인하면 cs나 csproj 파일이 생성된 것을 확인 할 수 있다.

![DI](/assets/img/raspi/dotnetinstall/di13.png)

`dotnet build` 을 통해 해당 프로젝트를 빌드 할 수 있다

![DI](/assets/img/raspi/dotnetinstall/di14.png)

빌드된 경로를 따라가면 실행파일과 dll 파일을 확인 할 수 있다

![DI](/assets/img/raspi/dotnetinstall/di15.png)

실행파일을 실행하거나 `dotnet <dll파일명>` 으로 프로그램을 실행 할 수 있다.

(실행파일은 dll을 실행하는 역할만 한다.)

## D. 외부에서 빌드하기

![DI](/assets/img/raspi/dotnetinstall/di16.png){: width="400"}

윈도우에서 개발하고 빌드한 프로젝트도 라즈베리 파이로 옮겨 실행할 수 있다.

단, 대상 런타임을 `이식 가능` 또는 `linux-arm`으로 지정해야 한다.

# 요약

```bash
wget https://download.visualstudio.microsoft.com/download/pr/773e201f-00f3-4de2-beb7-698d9c72f4b7/4c1de128cb18198e1b9bf30902c665bc/dotnet-sdk-7.0.302-linux-arm.tar.gz

mkdir /usr/dotnet
tar zxf dotnet-sdk-7.0.302-linux-arm.tar.gz -C /usr/dotnet/

echo 'export PATH=$PATH:/usr/dotnet' >> ~/.bashrc
echo 'export DOTNET_ROOT=/usr/dotnet' >> ~/.bashrc
source ~/.bashrc

apt install libicu-dev
```
