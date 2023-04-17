---
title: 어셈블리어 정리
author: Hve
date: 2023-04-18 00:59:47 +0900
categories: [Dev, Etc]
math: false
mermaid: false
tags: [assembly]
---

# 어셈블리어

# 범용 레지스터

| Byte 0-7 | Byte 0-3 | Byte 0-1 | Byte 0     | 비고  |
|----------|----------|----------|------------|-------|
| rax      | eax      | ax       | ah, al     |  |
| rbx      | ebx      | bx       | bh, bl     | callee saved |
| rcx      | ecx      | cx       | ch, cl     |  |
| rdx      | edx      | dx       | dh, dl     |  |
| rdi      | edi      | di       | dil        |  |
| rsi      | esi      | si       | sil        | preserved |
| rbp      | ebp      | bp       | bpl        | preserved |
| rsp      | esp      | sp       | spl        | preserved |
| r8       | r8d      | r8w      | r8b        |  |
| r9       | r9d      | r9w      | r9b        |  |
| r10      | r10d     | r10w     | r10b       |  |
| r11      | r11d     | r11w     | r11b       | callee saved |
| r12      | r12d     | r12w     | r12b       | callee saved |
| r13      | r13d     | r13w     | r13b       | callee saved |
| r14      | r14d     | r14w     | r14b       | callee saved |
| r15      | r15d     | r15w     | r15b       |  |

*callee saved : 프로시저 내에서 해당 레지스터의 값을 보존해야 한다
