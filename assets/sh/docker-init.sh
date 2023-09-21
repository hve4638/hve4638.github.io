#!/bin/bash
apt update -y && apt upgrade -y
apt install vim build-essential iproute2 curl wget -y

echo "export PS1='\[\e]0;\u@\h: \w\a\]\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w$\[\033[00m\] '" >> ~/.bashrc
source ~/.bashrc
