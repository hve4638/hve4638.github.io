---
title:  "Beagleplay Labs 2"
author: Hve
date: 2023-11-01 21:28:54 +0900
categories: ["공부", "BeaglePlay"]
math: false
mermaid: false
tags: []
---

## TFTP를 이용한 통신

보드와 호스트간 랜선을 연결한 상태에서 진행한다

### U-boot에서 네트워크 설정

```
setenv ipaddr 192.168.0.100;
setenv serverip 192.168.0.1;
saveenv;
```
{: file='u-boot'}

사용중인 ip segment와 겹친다면 다르게 설정한다

### 호스트에서 네트워크 설정

이더넷 포트를 꽂으면 `enxxx`형태로 나타나며, 쉽게 찾을수 있다

호스트가 가상머신 환경일 경우 `VirtualBox` 기준으로 네트워크 설정에서 `어댑터에 브리지`를 사용해 연결하는 것이 안정적이다. 가상머신에 바로 연결할 경우 TFTP 통신과 이후 NFS 루트시스템 마운트시 문제가 발생할 수 있다

```bash
sudo ifconfig enp0s8 inet 192.168.0.1 netmask 255.255.255.0
```

이후, 위 명령을 통해 ip 을 설정 할 수 있다

### 호스트에서 TFTP 서버 세팅

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

### U-boot에서 TFFP로 파일 가져오기

```
tftp 0x80000000 textfile.txt;
```
{: file='u-boot'}

tftp로 워킹스테이션 파일을 0x80000000으로 가져온다

```
md 0x80000000;
```
{: file='u-boot'}

다음 명령으로 가져온 데이터를 확인한다

## Flash hte bootloader onto eMMC memory (WIP)

*WIP*

## 리눅스 커널 가져오기

```bash
cd
git clone https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux
cd linux
git remote add stable https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux
git fetch stable
```

### 커널 Cross-Compiling

`linux-6.4.x`를 사용할 것이기 때문에 버전을 바꾼다

```bash
cd ~/linux
git checkout stable/linux-6.4.y
```

```bash
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

*설정*

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

### bootargs 설정

```
setenv bootargs console=ttyS2,115200n8;
saveenv;
```
{: file='u-boot' }

### TFTP로 커널 이미지 로드 후 실행

```
tftp 0x80000000 Image.gz;
```
{: file='u-boot' }

```
tftp 0x82000000 k3-am625-beagleplay.dtb;
```
{: file='u-boot' }

```
booti 0x80000000 - 0x82000000;
```
{: file='u-boot' }

현재 기기에 루트 파일시스템을 제공하지 않았으므로 부팅 성공 시 커널 패닉이 나타난다.

## NFS서버를 이용해 루트 파일시스템 제공

```bash
cd $HOME/system-programming-labs/tinysystem/
mkdir nfsroot
```

다음 경로에 디렉토리를 만든다

`$HOME/system-programming-labs/tinysystem/nfsroot`는 기기의 루트 파일시스템의 `/` 경로가 된다

```bash
sudo apt install nfs-kernel-server
```

NFS 패키지를 설치한다

```bash
sudo vim /etc/exports
```

`/etc/exports`를 열어서 새 줄에 다음 텍스트를 추가한다

```
/home/hve/system-programming-labs/tinysystem/nfsroot 192.168.0.100(rw,no_root_squash,no_subtree_check)
```

`192.168.0.100`는 보드의 IP 주소이며, `hve`는 각자의 유저명으로 바꿔 적는다

```bash
sudo exportfs -r
```

다음 명령으로 NFS 서버의 설정을 적용한다

U-boot에서 다음과 같이 환경변수를 추가한다

```
setenv bootargs ${bootargs} root=/dev/nfs ip=192.168.0.100:::::eth0 nfsroot=192.168.0.1:/home/hve/system-programming-labs/tinysystem/nfsroot,nfsvers=3,tcp rw;
saveenv;
```
{: file='u-boot' }



마찬가지로 `hve`에는 유저명을 대체해 적는다


```
tftp 0x80000000 Image.gz;
tftp 0x82000000 k3-am625-beagleplay.dtb;
booti 0x80000000 - 0x82000000;
```

다시 부팅후 확인한다

> VFS: Mounted root (nfs filesystem) on device 0:20.

라는 로그가 뜬다면 루트 파일시스템 마운트를 성공한 것이다

NFS 파일시스템 마운트에 실패했다면 에러 메세지와 `/var/log/syslog`의 로그를 확인해 문제를 찾는다

> devtmpfs: error mounting -2

다음 에러는 커널이 `/dev`에 `devtmpfs` 파일시스템을 마운트하려고 시도하기 때문에 발생한다

그러므로 호스트의 `nfsroot` 디렉토리 내 `dev` 디렉토리를 추가하면 해결된다

> devtmpfs: mounted

이후 재부팅시 마운트된 것을 확인할 수 있다

## BusyBox를 이용한 루트 파일시스템

### BusyBox 다운로드 및 빌드

```bash
git clone https://git.busybox.net/busybox
cd busybox/
git checkout 1_36_stable
```

```bash
make defconfig
make menuconfig
```

*설정*

- Setting
    - Build Options
        - Build static binary (no shared libs) : 활성화
        - Cross compiler prefix : `aarch64-linux-`
    - Installation Options
        - Destination path for 'make install' : `/home/hve/system-programming-labs/tinysystem/nfsroot`

```bash
export PATH=$PATH:$HOME/x-tools/aarch64-training-linux-musl/bin
```

이전에 빌드한 toolchain 경로를 `PATH`에 추가한다

```bash
make install
```

빌드 후 다시 보드에 새 시스템을 부팅해본다

## 가상 파일시스템 (proc) 

```bash
ps
# PID USER       VSZ STAT COMMAND
# ps: can't open '/proc': No such file or directory
```

보드 터미널에서 `ps` 명령 실행시 `/proc` 디렉토리가 존재하지 않는다는 메세지가 나타난다

`ps`를 비롯한 몇몇 명령어는 `/proc`에 마운트된 가상 파일시스템을 이용해 커널에서 정보를 가져온다

```bash
cd ~/system-programming-labs/tinysystem/nfsroot
mkdir proc sys etc
```

보드의 루트 파일시스템에 `proc`, `sys`, `etc` 디렉토리를 생성하고 보드를 재부팅한다

이제 `proc` 가상 파일시스템을 이용하는 `ps`, `halt` 등을 사용할 수 있다

## System configuration and startup

커널이 실행하는 첫 유저 프로그램은 `/sbin/init`이며 해당 파일이 참조하는 설정 파일은 `/etc/inittab`이다

```
::sysinit:/etc/init.d/rcS
ttyS2::askfirst:/bin/sh
```

보드의 루트 파일시스템에서 `/etc/inittab`파일을 만들고 다음 설정을 집어넣는다

설정의 내용은 다음과 같다

- `sysinit`가 가장 먼저 실행되며, `askfirst`는 `sysinit`이후 실행되어 사용자가 enter를 누를때까지 기다린 후 실행된다
- 먼저 `/etc/init.d/rcS` 스크립트를 실행한다
- 이후 `/bin/sh` 쉘을 실행한다

이후 `/etc/init.d/rcS` 파일을 생성하고 다음과 같이 작성한다

```bash
#!/bin/sh
mount -t sysfs none /sys
mount -t proc none /proc
```

`sys`, `proc`에 가상 파일시스템을 마운트하는 스크립트로 커널이 실행된 후 앞의 설정 파일에 의해 자동으로 실행된다

이후 보드를 재부팅시 자동으로 `proc`, `sys`가 마운트 된 것을 확인 할 수 있다

## 공유 라이브러리

```bash
./hello
# /bin/sh: ./hello: not found
```

aarch64로 컴파일된 파일을 보드 내에서 실행했을 때 해당 파일을 찾을 수 없다는 에러가 발생한다

이건 실제 해당 파일이 없는 것이 아니라 실행중 필요한 다른 요소를 찾을 수 없기 때문이다

```bash
./hello
# aarch64-binfmt-P: Could not open '/lib/ld-musl-aarch64.so.1': No such file or directory
```

호스트에서 실행시 다음과 같은 에러가 발생한다. 즉, `/lib/ld-musl-aarch64.so.1`가 없어서 보드에서 해당 파일을 실행 할 수 없다

```bash
find ~/ -name ld-musl-aarch64.so.1
```

`find` 명령어로 해당 파일을 찾은 후 보드의 루트 파일시스템 내 `/lib` 디렉토리로 복사한다

내 환경에서는 `~/x-tools/aarch64-training-linux-musl/aarch64-training-linux-musl/sysroot/lib/ld-musl-aarch64.so.1`에 위치한 것을 알 수 있다

```bash
./hello
# Hello world!
```

다시 보드에서 파일 실행 시 정상적으로 실행되는 것을 확인할 수 있다

이전과 같은 오류가 나타난다면, NFS 클라이언트가 서버의 변경사항을 확인하기 위해 약간의 시간이 걸릴 수 있으니(최대 60초) 기다렸다가 다시 시도한다

## 웹 인터페이스 구현

```bash
cd ~/system-programming-labs/tinysystem
cp ./data/www ./nfsroot/www -r
```

해당경로의 `www` 폴더를 보드의 `/www` 경로로 복사한다

```bash
/usr/sbin/httpd -h /www/
```
{: file='uboot'}

보드에서 다음 명령을 실행한다

이후 호스트에서 `http://192.168.0.100/index.html` 로 접속시 http 서버에 접속할 수 있다

## Accessing Hardware Devices

### Manageing the I2C buses and deviecs

*WIP*