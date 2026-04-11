---
title: "개발 환경 | 윈도우 openssh 서버 설치"
author: Hve
date: 2024-10-09 07:38:04 +0900
categories: ["개발", "메모"]
math: false
mermaid: false
tags: []
---

모든 명령어는 `powershell`에서 실행된다

## 윈도우 openssh 설치

```powershell
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

## 서비스 실행 및 부팅시 자동 실행 설정

```powershell
# 서비스 실행
Start-Service sshd

# 부팅시 서비스 실행 등록
Set-Service -Name sshd -StartupType 'Automatic'
```

## 방화벽 설정

```powershell
# 방화벽 정책 'OpenSSH-Server-In-TCP' 확인
Get-NetFirewallRule -Name OpenSSH-Server-In-TCP

# 새 방화벽 정책 등록
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH-Server-In-TCP' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22
```

## 기본 SSH쉘을 cmd에서 powershell로 변경

```powershell
New-ItemProperty -Path "HKLM:\SOFTWARE\OpenSSH" -Name DefaultShell -Value "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -PropertyType String -Force
```

## SSH 설정 변경

```powershell
Invoke-Item C:\ProgramData\ssh\sshd_config
```