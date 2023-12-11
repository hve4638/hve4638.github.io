---
title: "Beagleplay Labs 3"
author: Hve
date: 2023-11-08 22:18:21 +0900
categories: ["공부", "BeaglePlay"]
math: false
mermaid: false
tags: []
---

## 파일 정보 탐색

### /dev

`Terminal devices` : tty로 시작하는 장치. 텍스트를 입력받고 텍스트를 출력으로 생성하는 사용자 인터페이스로, 대화형 쉘에서 사용된다.


`Pseudo-terminal devices` : pty로 시작하는 장치. ssh등을 연결할 때 사용된다

`MMC devices` and `partitions` : mmcblk로 시작하는 장치. 여기서 시스템의 MMC 장치와 관련 파티션을 인식한다


## 하드웨어 연결

```bash
cd ~/system-programming-labs/hardware
```

## Driving GPIOs (리눅스 재빌드)

```bash
cd ~/linux
make menuconfig
```

*설정*

- `General setup`
    - `Configure standard kernel features (expert users)` : 활성화 (먼저 활성화해야 아래 옵션이 나타남)
- `Device Driver`
    - `GPIO Support` : 활성화
        - `/sys/class/gpio/... (sysfs interface)` : 활성화
- `Kernal hacking`
    - `Generic Kernel Deubgging Instruments`
        - `Debug Filesystem` : 활성화
        - `Debugfs default access` : `Access normal`

빌드 전 환경 변수도 추가한다

```bash
export ARCH=arm64
export CROSS_COMPILE=aarch64-linux-
export PATH=$HOME/x-tools/aarch64-training-linux-musl/bin:$PATH
```

`make`로 빌드 후 마찬가지로 다음 경로의 파일을 TFTP 디렉토리에 복사한다

- `./arch/arm64/boot/Image.gz`
- `./arch/arm64/boot/dts/ti/k3-am625-beagleplay.dtb`

```bash
cp ./arch/arm64/boot/Image.gz /tftp/
cp ./arch/arm64/boot/dts/ti/k3-am625-beagleplay.dtb /tftp/
```


## debugfs 정보 확인

보드에 다음 명령을 입력해 정보를 확인한다

```bash
# board
mount -t debugfs debugfs /sys/kernel/debug/
cat /sys/kernel/debug/gpio
```
## GPIO 핀 사용

```bash
cd /sys/class/gpio
```

```bash
echo 637 > export
```

pin을 사용할 수 있다면, `/sys/class/gpio` 디렉토리에 `gpio637` 파일이 추가된다

```bash
echo in > gpio637/direction
```

다음 명령으로 해당 pin을 입력으로 바꿀수 있다

```bash
cat gpio637/value
```

현재 pin의 값을 확인할 수 있다

```bas
```

사용을 끝냈다면 다음 명령으로 해제할 수 있다

## I2C 버스 및 장치 관리 (p.35)

## Customizing the Device Tree

```bash
cd ~/linux/arch/arm64/boot/dts/ti

vim k3-am625-beagleplay-custom.dts
```

해당 파일을 생성해 아래와 같이 추가한다

```
/dts-v1/;

#include "k3-am625-beagleplay.dts"

&wkup_i2c0 {
        status = "okay";
};
```

이후 해당 디렉토리의 Makefile을 열어 다음 줄을 적절한 위치에 추가한다

```
# Boards with AM62x SoC
dtb-$(CONFIG_ARCH_K3) += k3-am625-beagleplay-custom.dtb
```

```bash
export ARCH=arm64
export CROSS_COMPILE=aarch64-linux-
```

```bash
cd ~/linux
make dtbs
```

```bash
cp arch/arm64/boot/dts/ti/k3-am625-beagleplay-custom.dtb /tftp/
```

이후 추가한 dtb를 tftp 디렉토리로 옮기고 저장한다

```bash
i2cdetect -r 3
```

해당 명령으로 NunChunk를 연결했을때 0x52가 --에서 52로 변하는 것을 볼 수 있다


## Plugging a USB audio headser

```bash
lsusb
```

오디오 헤더를 usb에 연결시 인식 여부를 해당 명령을 통해 확인할 수 있다

usb 연결시 `/sys/bus/usb/devices`에도 나타나게 된다

해당 경로에는 여러 디렉토리가 존재하는데 usb를 연결했을때 커널 메세지를 확인한다

> [  490.572287] usb 1-1: new full-speed USB device number 2 using xhci-hcd

이 경우, 1-1로 들어간다

```bash
cd /sys/bus/usb/devices/1-1
cat idVendor
cat idProduct
cat manufacturer
cat product
```

해당 경로에서 usb 정보를 확인할 수 있다

지금은 usb만 감지되며 이 디바이스에 대한 드라이버가 없기 때문에 실제 사운드카드는 감지되지 않았다

## in-tree 커널 모듈 활성화

```bash
cd ~/linux
make menuconfig
```

- `Device Drivers`
    - `Sound card support` : 활성화
        - `Advanced Linux Sound Architecture` : 활성화
            - `USB sound devices` : 활성화
                - `USB Audio/MIDI driver` : 활성화

```bash
make modules
```