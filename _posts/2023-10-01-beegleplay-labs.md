---
title: "Beagleplay Labs"
author: Hve
date: 2023-10-01 01:42:27 +0900
categories: [ "공부", "BeaglePlay" ]
math: false
mermaid: false
tags: []
---

# Beagleplay Labs

`beagleplay` 보드를 이용해 크로스컴파일, 부트로더 등을 학습

## Cross-Compiler toolchain

*WIP*

--- 

## Bootloader : U-Boot

`beagleplay`의 `AM625 SoC`는 SD카드나 기타 인터페이스를 읽어 유효한 부트로더를 검색한다

### AM62x SoC 부팅 프로세스

`AM62x SoC`는 3개의 하드웨어 도메인으로 중심으로 구성된다

- MAIN Domain
    - 4개의 `Cortex-A53` 프로세서에 의해 제어됨
    - 리눅스 커널과 userspace application을 실행하는데 사용됨
- MCU Domain
    - `Cortex-M4F` 프로세서에 의해 제어됨
    - 나머지 SoC와 분리되어 safety use case를 제공
- WKUP Domain
    - `Cortex-R5F` 프로세서에 의해 제어됨
    - 최대 절전 모드에서 사용됨

이 중 `Cortex-M4F`와 `Cortex-R5F`는 32비트 프로세서로 32비트 툴체인이 필요하다

### 32bit toolchain 설치

`AM52x`는 32bit 프로세서를 사용하므로 32bit 펌웨어 크로스컴파일을 위한 툴체인이 필요하다

```bash
wget -O /tmp/arm-gnu-toolchain-12.2.rel1-x86_64-arm-none-eabi.tar.xz https://developer.arm.com/-/media/Files/downloads/gnu/12.2.rel1/binrel/arm-gnu-toolchain-12.2.rel1-x86_64-arm-none-eabi.tar.xz

tar vxJf /tmp/arm-gnu-toolchain-12.2.rel1-x86_64-arm-none-eabi.tar.xz -C $HOME/x-tools
```

위 명령어를 통해 미리 컴파일된 툴체인을 가져온다

```bash
echo 'export PATH=$PATH:$HOME/x-tools/arm-gnu-toolchain-12.2.rel1-x86_64-arm-none-eabi/bin/' >> ~/.bashrc
```

이후 툴체인 경로를 path를 추가한다

### U-Boot 설치

```bash
git clone https://git.beagleboard.org/beagleplay/u-boot.git
cd u-boot/
git checkout f036fb
```

```bash
mkdir -p ../build_uboot/r5
```

#### 설치 프로세스

```bash
export CROSS_COMPILE=arm-none-eabi-
export ARCH=arm
```

크로스 컴파일 접두사와 아키텍처 유형 지정

```bash
ls configs/ | grep am62x
```

다음 명령을 실행해 미리 정의된 설정을 확인한다

R5 프로세서를 지원하는 건 `am62x_evm_r5_defconfig`

#### 초기 설정

```bash
make am62x_evm_r5_defconfig O=../build_uboot/r5/
```

#### bootloader feature 설정

```bash
make menuconfig O=../build_uboot/r5/
```

- `Environment`
    - `Environment is in a EXT4 filesystem` 활성화
    - 다른 `enviroment storage` 관련 옵션 비활성화 (MMC, SPI, UBI 등)
    - `Name of the block device for the environment` : "mmc"
    - `Device and partition for where to store the environment in EXT4` : "1:2"
    - `Name of the EXT4 file to use for the environment` : "/uboot.env"
- `SPL/TPL`
    - `Support EXT filesystems` 활성화

- `Boot Options`
    - `Enable a default value ofr bootcmd` 활성화
    - `bootcmd value` : "echo 'No bootcmd yet'"
        - 이 설정으로 U-Boot는 자동으로 커널 이미지를 불러오는 대신 'No bootcmd yet'을 출력한다

#### 패키지 설치

```bash
sudo apt install libssl-dev device-tree-compiler swig python3-distutils python3-dev python3-setuptools
```

#### U-Boot 빌드

```bash
make DEVICE_TREE=k3-am625-r5-beagleplay O=../build_uboot/r5/
```