#!/bin/bash
apt install python3 -y
echo "alias python='python3'" >> ~/.bashrc
source ~/.bashrc

curl https://bootstrap.pypa.io/get-pip.py | python3 
