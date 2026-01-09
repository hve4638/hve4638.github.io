---
title: "RUST | rust 리눅스 환경 구축"
author: Hve
date: 2025-01-13 11:03:40 +0900
categories: ["개발", "레퍼런스"]
math: false
mermaid: false
tags: ["rust"]
---

## rust 설치

```bash
# rust 설치
curl https://sh.rustup.rs -sSf | sh
```

```bash
# 환경변수 즉시 반영 (터미널 재시작시 자동 적용 됨)
source $HOME/.cargo/env
```

## rustc (단일 파일 빌드)

```bash
# main.rs를 빌드
rustc main.rs
```

## cargo

```bash
# 프로젝트 생성
cargo new 프로젝트명 --bin
```

```bash
# 프로젝트 컴파일 오류 체크
cargo check

# 빌드 수행
cargo build
cargo build --release

# 빌드 후 실행
cargo run
```

