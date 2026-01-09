---
title: Windows KMS 클라이언트 정품인증
author: Hve
date: 2023-11-03 00:45:04 +0900
categories: []
math: false
mermaid: false
tags: []
publish: false
---


<!--
archived 사유:
- 법적 주의 사항에 대한 검토 필요
-->

[KMS(키 관리 서비스) 클라이언트 정품 인증 및 제품 키](https://learn.microsoft.com/ko-kr/windows-server/get-started/kms-client-activation-keys)

```bash
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
slmgr /skms kms8.msguides.com
slmgr /ato
```

터미널에 다음 명령을 입력하면 6개월간 인증 된다