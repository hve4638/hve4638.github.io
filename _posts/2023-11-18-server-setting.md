---
title: 서버 세팅 저장용
author: Hve
date: 2023-11-18 00:09:00 +0900
categories: [ "개발" ]
math: false
mermaid: false
tags: []
---

## 마운트

```bash
lsblk
```

정보 확인

```
sda                         8:0    0 238.5G  0 disk
├─sda1                      8:1    0     1G  0 part /boot/efi
├─sda2                      8:2    0     2G  0 part /boot
└─sda3                      8:3    0 235.4G  0 part
  └─ubuntu--vg-ubuntu--lv 253:0    0   100G  0 lvm  /
sdb                         8:16   0   3.6T  0 disk
└─sdb1                      8:17   0   3.6T  0 part /nas/hdd1
nvme0n1                   259:0    0 931.5G  0 disk
├─nvme0n1p1               259:1    0   256G  0 part /dmnt
└─nvme0n1p2               259:2    0 675.5G  0 part /nas/ssd
```

```bash
mount /dev/nvme0n1p1 /dmnt
mount /dev/nvme0n1p2 /nas/ssd
mount /dev/sdb1 /nas/hdd1
```

## 설치 시스템

```bash

```


