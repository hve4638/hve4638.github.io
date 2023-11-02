---
title:  "Beagleplay Labs 2"
author: Hve
date: 2023-11-01 21:28:54 +0900
categories: ["공부", "BeaglePlay"]
math: false
mermaid: false
tags: []
---

## (p.26)

```bash
cd $HOME/system-programming-labs/tinysystem/
mkdir nfsroot
```

```bash
sudo apt install nfs-kernel-server
```

```bash
sudo vim /etc/exports
```

`/etc/exports`를 열어서 새 줄에 다음 텍스트를 추가한다.

```
/home/<user>/system-programming-labs/tinysystem/nfsroot 192.168.0.100(rw,no_root_squash,no_subtree_check)
```

`192.168.0.100`는 보드의 IP 주소이며, `<user>`에는 유저명으로 바꿔서 적는다

```bash
sudo exportfs -r
```

NFS 서버의 설정을 적용한다

### Beagle

```
setenv bootargs ${bootargs} root=/dev/nfs ip=192.168.0.100:::::eth0 nfsroot=192.168.0.1:/home/<user>/system-programming-labs/tinysystem/ nfsroot,nfsvers=3,tcp rw;
saveenv;
```

마찬가지로 `<user>`에는 유저명을 대체해 적는다

보드에서 다음



## BusyBox 다운로드

```bash
git clone https://git.busybox.net/busybox
cd busybox/
git checkout 1_36_stable
```

```bash
make menuconfig
```

- Setting
    - Build Options
        - Cross compiler prefix : `arm-linux-`
    - Installation Options
        - Destination pat for 'make insatll' : `~/system-programming-labs/tinysystem/nfsroot`
    
```bash
export PATH=$HOME/x-tools/arm-unknown-linux-uclibcgnueabi/bin:$PATH
```