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

# Bootloader

## Training Setup

```bash
cd
wget https://dnslab.korea.ac.kr/system-programming-labs.tar.xz
tar xvf system-programming-labs.tar.xz
```

압축 푼 디렉토리의 이름이 `system-programming-labs`이 아니라면, 해당 이름으로 바꾼다

```bash
sudo apt update
sudo apt dist-upgrade
```

---

## Cross-Compiler toolchain 빌드

### 설치 및 빌드
#### 설치 프로세스 

```bash
sudo apt install build-essential git autoconf bison flex texinfo help2man gawk libtool-bin libncurses5-dev unzip
```

필요한 패키지 설치

*Getting Crosstool-ng* 

```bash
git clone https://github.com/crosstool-ng/crosstool-ng
cd crosstool-ng/
git checkout 36ad0b
```

```bash
./bootstrap
```

```bash
./configure --enable-local
make
./ct-ng help
```

#### toolchain 설정

```bash
./ct-ng menuconfig
```

설정
- Path and misc options
    - Try features marked as EXPERIMENTAL : 활성화
- Target options
    - Target Architecture : `arm`
    - Emit assembly for CPU : `cortex-a53`
    - Bitness : `64-bit`
    - Endianness : `Little endian`
- Toolchain options
    - Tuple's vendor string : `training`
    - Tuple's alias : `aarch64-linux`
        - 이 설정으로 `aarch64-training-linux-musl-gcc`라는 긴 이름 대신 `aarch64-linux-gcc`라는 이름으로 컴파일러를 쓸 수 있다
- Operating System:
    - Target OS : `linux`
    - Version of linux : `6.3.2`
- C-library
    - C library : `musl`
- C compiler
    - Version of gcc : `12.3.0`
    - C++ : 활성화
- Debug facilities
    - 모두 끄기

#### toolchain 빌드

```bash
./ct-ng build
```

완료후 `$HOME/x-tools/`에 toochain이 설치됨

```bash
echo 'export PATH=$PATH:$HOME/x-tools/aarch64-training-linux-musl/bin' >> ~/.bashrc
```

`$HOME/x-tools/aarch64-training-linux-musl/bin/`을 PATH에 추가하여 `aarch64-linux-gcc`를 사용할 수 있다

## toolchain 테스트

*WIP*

--- 

## 보드와 시리얼 통신

```bash
sudo apt install picocom
sudo adduser $USER dialout
```

이후 리눅스 재시작이 필요하다

```bash
picocom -b 115200 /dev/ttyUSB0
```
### 가상 머신(VirtualBox)의 경우

직렬포트와 USB 설정이 필요하다

![123](/assets/img/beagleplaylabs/b01.png)
![123](/assets/img/beagleplaylabs/b02.png)

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
cd ~/

wget -O /tmp/arm-gnu-toolchain-12.2.rel1-x86_64-arm-none-eabi.tar.xz https://developer.arm.com/-/media/Files/downloads/gnu/12.2.rel1/binrel/arm-gnu-toolchain-12.2.rel1-x86_64-arm-none-eabi.tar.xz

tar vxJf /tmp/arm-gnu-toolchain-12.2.rel1-x86_64-arm-none-eabi.tar.xz -C $HOME/x-tools
```

미리 컴파일된 툴체인을 가져온다

명령 완료 후 32bit 툴체인이 `$HOME/x-tools` 디렉토리에 설치된다


```bash
export PATH=$PATH:$HOME/x-tools/arm-gnu-toolchain-12.2.rel1-x86_64-arm-none-eabi/bin/
```
다음 코드를 `~/.bashrc`에 넣어 PATH에 추가한다

### U-Boot for R5 Processor 설정

#### 설치 프로세스

```bash
cd ~/system-programming-labs/bootloader

git clone https://git.beagleboard.org/beagleplay/u-boot.git
cd u-boot/
git checkout f036fb
```

```bash
mkdir -p ../build_uboot/r5
```

```bash
export CROSS_COMPILE=arm-none-eabi-
export ARCH=arm
```

크로스 컴파일 접두사와 아키텍처 유형 지정

```bash
ls configs/ | grep am62x
```

다음 명령을 실행해 미리 정의된 설정을 확인한다

R5 프로세서를 지원하는 `am62x_evm_r5_defconfig`이 있는지 확인

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

---

## TI 펌웨어 설치 및 tiboot3.bin 생성

Now we have the SPL for the R5 processor, the R5 processor is also responsible for loading the TIFS complementary firmware. So let’s get it

```bash
cd $HOME/system-programming-labs/bootloader
git clone git://git.ti.com/processor-firmware/ti-linux-firmware.git
cd ti-linux-firmware
git checkout c126d3864b9faf725ff40e620049ab5d56dedc5b
```

```bash
cd ..
git clone git://git.ti.com/k3-image-gen/k3-image-gen.git
cd k3-image-gen/
git checkout 150f1956b4bdcba36e7dffc78a4342df602f8d6e
```

```bash
make SOC=am62x SBL=../build_uboot/r5/spl/u-boot-spl.bin SYSFW_PATH=../ti-linux-firmware/ti-sysfw/ti-fs-firmware-am62x-gp.bin
```

## TF-A 설치 및 컴파일

```bash
cd $HOME/system-programming-labs/bootloader
git clone https://github.com/ARM-software/arm-trusted-firmware.git
cd arm-trusted-firmware/
git checkout v2.9
```

TF-A 소스 가져오기

```bash
export CROSS_COMPILE=aarch64-linux-
export ARCH=aarch64
```

환경변수 설정

```bash
make PLAT=k3 TARGET_BOARD=lite
```

컴파일

---

## U-boot for the A53 Processor 설정

먼저, R5때처럼 output디렉토리를 만든다

```bash
cd $HOME/system-programming-labs/bootloader
mkdir build_uboot/a53/
cd u-boot/
```

### A53 U-Boot 셋업

환경변수를 다음과 같이 지정한다

```bash
export ARCH=aarch64
export CROSS_COMPILE=aarch64-linux-
```

```bash
make am62x_evm_a53_defconfig O=../build_uboot/a53/
```

```bash
make menuconfig O=../build_uboot/a53/
```

설정은 R5 와 동일하게 설정한다

```bash
make ATF=$HOME/system-programming-labs/bootloader/\
arm-trusted-firmware/build/k3/lite/release/bl31.bin DM=$HOME\
/embedded-linux-beagleplay-labs/bootloader/ti-linux-firmware\
/ti-dm/am62xx/ipc_echo_testb_mcu1_0_release_strip.xer5f O=..\
/build_uboot/a53
```

실행후 `$HOME/system-programming-labs/bootloader/build_uboot/a53/` 디렉토리에 `tispl.bin`과 `u-boot.img`파일을 확인할수 있다

### bootable micro-SD Card 준비

```bash
sudo dmesg
```

디버그 메세지를 확인해 sd카드가 연결되었는지 확인할 수 있다

> [   29.243281] usb 1-1: device descriptor read/64, error -32

이런 메세지가 뜨면 실패한 것이다

가상머신이라면 usb관련 설정을 바꿔보고 sd카드 리더기의 문제일 수도 있다(윈도우에서 정상인식되더라도)

> [  486.430165] usb 1-1: new high-speed USB device number 20 using ehci-pci
>
> [  486.779101] usb 1-1: New USB device found, idVendor=aaaa, idProduct=8816, bcdDevice=13.08
>
> [  486.779105] usb 1-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3

다음과 같이 메세지가 나오면 인식된 것이다

```bash
lsblk
```

명령을 통해 연결된 디바이스를 확인할 수 있다

```bash
sudo umount /dev/sdb
```

마운트 되었다면 마운트를 해제한다. /dev/sdb는 연결된 디바이스의 이름으로 환경마다 다를 수 있다

```bash
sudo dd if=/dev/zero of=/dev/sdb bs=1M count=16
```

sd카드의 첫 16MB을 zero-ing하여 기존 파티션 테이블을 지운다

```bash
sudo cfdisk /dev/sdb
```

다음 명령으로 U-Boot 환경을 저장하는데 필요한 2개의 파티션을 만든다

`fdisk`의 그래픽 버전인 `cfdisk`을 사용에 작업한다

'Select a label type' : dos 선택

첫번째 파티션:
- Size: 128MB
- primary partition 선택
- Type : (c) `W95 FAT32(LBA)`
- Bootable 플래그 활성화

두번째 파티션
- Size: 300MB
- primary partition 선택
- Type : (83) `Linux`

Write를 선택해서 저장한다

Quit를 선택해 나간다

SD카드를 제거했다 다시 꽂아서 파티션 정의가 제대로 되었는지 확인 할 수 있다

```bash
sudo mkfs.vfat -F 32 -n boot /dev/sdb1
```

bootable 파티션에 FAT32파일시스템을 만든다

```bash
sudo mkfs.ext4 -L env -O ^metadata_csum /dev/sdb2
```

두번째 파티션에 EXT4 파일 시스템을 만든다

```bash
sudo cp $HOME/system-programming-labs/bootloader/k3-image-gen/tiboot3.bin /media/$USER/boot/
sudo cp $HOME/system-programming-labs/bootloader/build_uboot/a53/tispl.bin /media/$USER/boot/
sudo cp $HOME/system-programming-labs/bootloader/build_uboot/a53/u-boot.img /media/$USER/boot/

```


```bash
sudo cp ~/system-programming-labs/bootloader/data/tiboot3.bin /media/$USER/boot/
sudo cp ~/build_uboot/a53/tispl.bin /media/$USER/boot/
sudo cp ~/build_uboot/a53/u-boot.img /media/$USER/boot/
```

---

# Network configuration

## U-boot에서 네트워크 설정

```
setenv ipaddr 192.168.0.100;
setenv serverip 192.168.0.1;
saveenv;
```

사용중인 ip segment와 겹친다면 다르게 설정한다

## PC Host에서 네트워크 설정

이더넷 포트를 꽂으면 `enxxx`형태로 나타나며, 쉽게 찾을수 있다

```bash
nmcli con add type ethernet ifname enxxx ip4 192.168.0.1/24
```

또는

```bash
sudo ifconfig enxe2015072726b inet 192.168.0.1 netmask 255.255.255.0
```

이후, 위 명령을 통해 ip을 설정 할 수 있다

## TFTP 서버 세팅

```bash
sudo apt install tftpd-hpa
```

워킹스테이션에서 tftp를 설치한다

```bash
sudo vim /etc/default/tftpd-hpa
```

```bash
sudo service tftpd-hpa restart
```

적절하게 설정한 후 재시작한다

### U-boot에서 FTFP로 파일 가져오기

```
tftp 0x80000000 textfile.txt;
```

tftp로 워킹스테이션 파일을 0x80000000으로 가져온다

```
md 0x80000000;
```

다음 명령으로 가져온 데이터를 확인한다

## Flash hte bootloader onto eMMC memory

*WIP*

## Fetching Linux kernel sources

```bash
cd
git clone https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux
cd linux
git remote add stable https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux
git fetch stable
```

## 커널 Cross-Compiling

`linux-6.4.x`를 사용할 것이기 때문에 버전을 바꾼다

```bash
cd ~/linux
git checkout stable/linux-6.4.y
```

```
export PATH=$HOME/x-tools/aarch64-training-linux-musl/bin:$PATH
```

`PATH`에 해당 경로를 추가한다. 이전 단계에서 추가했다면 다시 추가할 필요는 없다

```bash
export ARCH=arm64
export CROSS_COMPILE=aarch64-linux-
```

다음 환경 변수를 추가한다

```bash
make defconfig
```

arm64에 맞는 기본설정으로 초기화한다

```bash
make menuconfig
```

- `Platform Selection`
    - `Texas Instruments Inc. K3 multicore SoC architecture` 를 제외하고 모두 끄기
- `Device Manager`
    - `Graphics support`
        - `Direct Rendering Manager` 끄기

```bash
make
```

이후 빌드

빌드가 완료되었으면 다음 경로에서 파일을 복사해 TFTP 디렉토리에 복사한다

- `./arch/arm64/boot/Image.gz`
- `./arch/arm64/boot/dts/ti/k3-am625-beagleplay.dtb`

해당 경로에 파일이 없다면 `find` 명령어 등으로 다음 파일을 찾아본다

## U-boot 이용해 커널 로드 및 부트

```
setenv bootargs console=ttyS2,115200n8;
saveenv;
```

```
tftp 0x80000000 Image.gz;
```

```
tftp 0x82000000 k3-am625-beagleplay.dtb;
```

```
booti 0x80000000 - 0x82000000;
```

성공시 커널 패닉이 나타난다
