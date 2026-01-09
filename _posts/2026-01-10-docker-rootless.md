---
title: "Docker | docker 루트리스 모드로 실행하기"
author: Hve
slug: docker-rootless
date: 2026-01-10 03:30:38 +0900
categories: ["개발", "도구"]
math: false
mermaid: false
tags: ["docker"]
---

## 개요

docker은 루트 권한을 필요로 하므로 여러 부분에서 문제가 되는데

- 보안상 위험의 여지가 크고
- 공유 볼륨에 root 소유권으로 파일이 저장 및 수정되거나
- 반대로 UID를 변경하면 컨테이너 내에서도 root 권한을 사용할 수 없고
- 이를 해소하기 위한 userns-remap 기능을 사용하는 경우에도 제약이 많고 관리가 복잡함

따라서 이런 대안으로 선택할 수 있는게 docker의 rootless 모드이다.

rootless docker 사용시 장점으로는

- 호스트의 사용자에게 root 권한을 요구하지 않으면서
- 컨테이너 내부에서는 root 권한을 가져 패키지 설치 등의 작업을 수행할 수 있음
- 공유 볼륨에 접근할 때는 호스트의 UID로 보이며, 호스트의 읽기/쓰기/실행 권한을 그대로 따른다.

## rootful docker를 sudo 없이 사용하기

sudo 타이핑을 안해도 되는거지, 권한이 필요없는건 아니다.

```bash
# 현재 사용자를 docker 그룹에 추가
sudo usermod -aG docker $USER
```

사용자를 docker 그룹에 추가하면 `sudo` 없이도 `docker` 명령을 사용할 수 있다. 터미널 로그아웃 후 재접속이 필요하다.

rootless가 필요한게 아니라, 개인 환경에서 단순히 sudo를 치기 싫은 경우라면 위 명령으로도 충분하다.

docker 자체가 컨테이너 뿐 아니라 호스트에도 우회적으로 root 권한을 미칠 수 있으므로 *"사용자에게 특권없는 안전한 docker 이용 권한"*의 용도는 아니다.

## rootless docker 설치

```bash
# docker 설치 (이미 설치했다면 생략)
curl -sSL get.docker.com | sh
```

docker 설치 스크립트를 진행하면 마지막에 rootless docker 설치 방법도 함께 출력된다.

```bash
# rootless docker 설치에 필수 패키지
apt-get install uidmap

# rootless docker 설치
dockerd-rootless-setuptool.sh install
```

`dockerd-rootless-setuptool.sh install` 실행 시 필요한 패키지가 누락되었다면 에러와 함께 필요 패키지 설치 스크립트를 출력해준다.

일반적으로 `uidmap`가 필요하고, 리눅스의 배포판에 따라 추가 패키지를 요구할 수 있다.

## 설정

```bash
# docker 서비스 시작
systemctl --user start docker
systemctl --user enable docker

# 직접 로그인하지 않아도 사용자의 서비스를 살려둠
sudo loginctl enable-linger 사용자명
```

user systemd 서비스 등록, 활성화 및 자동 실행 등의 설정을 수행한다.

## rootless docker의 제한 사항

root 권한을 사용하지 않으므로 호스트의 특권을 요구하는 기능도 사용할 수 없다.

- `--privileged` 옵션은 사용할 수 없으며 대부분의 CAP 권한도 줄 수 없다.
- `--net=host` 와 같이 호스트의 포트에 붙을 수 없다.
- 포트 매핑 시 Well-Known Port(~1023)은 매핑이 불가능하다.

## rootful 및 rootless 모드 확인 및 전환

```bash
# 현재 context 확인
docker context show

# rootless 전환
docker context use rootless

# rootful 전환
docker context use default
```

`docker context show`로 현재 모드를 확인할 수 있다.

'rootless'라면 루트리스 도커 상태, 'default'는 기본(rootful) 도커 상태를 의미한다.

모드를 변경하더라도 이미 실행 중이거나 restart 옵션에 따라 자동 실행되는 컨테이너는 각 모드에서 유지된다.

rootless docker를 기본적으로 사용하면서, rootless 환경에서 사용이 제한되는 작업만 rootful docker를 쓰는 식으로 병행할 수 있다.