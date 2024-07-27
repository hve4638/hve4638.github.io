---
title: "트러블슈팅 | VMWare \"You are running this virtual machine with side channel mitigations enabled.\""
author: Hve
date: 2024-03-13 10:45:05 +0900
categories: ["개발", "트러블슈팅"]
math: false
mermaid: false
tags: []
---

## "You are running this virtual machine with side channel mitigations enabled." 경고

![winsshfs](/assets/img/troubleshooting/tb-vmware-side-channel-mitigations.png)

말그대로 side channel mitigations가 켜져있어 성능에 영향을 준다는 이야기다

해당 경고의 링크를 타고가도 별 도움은 되지않는데 VMWare가 Workstation Pro인 경우만 해당 설정을 비활성화하는 옵션이 보이며 Workstation Player의 경우에는 VMWare 설정을 해제할 수 없다

## 해결

```
ulm.disableMitigations = "TRUE"
```

가상머신 폴더의 `.vmx` 파일을 텍스트 편집기로 열어 추가해 비활성화할 수 있다