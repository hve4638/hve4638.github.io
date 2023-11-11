---
title: "Beagleplay Labs 3"
author: Hve
date: 2023-11-08 22:18:21 +0900
categories: ["공부", "BeaglePlay"]
math: false
mermaid: false
tags: []
---

## 하드웨어 연결

```bash
cd ~/system-programming-labs/hardware
```

### Driving GPIOs

```bash
cd ~/linux
make menuconfig
```

*설정*

- `Device Driver`
    - `GPIO Support` : 활성화
        - `/sys/class/gpio/... (sysfs interface)`
- `Kernal hacking`
    - `Generic Kernel Deubgging Instruments`
        - `Debug Filesystem` : 활성화
        - `Debugfs default access` : `Access normal`


```bash
mount -t debugfs debugfs /sys/kernel/debug/
```

```bash
cat /sys/kernel/debug/gpio
```

