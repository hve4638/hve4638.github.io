#!/bin/bash

sudo apt update -y
sudo apt install git curl wget -y
sudo apt install build-essential -y

curl -sSL get.docker.com | sh
sudo usermod -aG docker $USER

git clone https://github.com/ZilantRobotics/innopolis_vtol_dynamics.git
cd innopolis_vtol_dynamics
git submodule update --init --recursive
sudo ./scripts/docker.sh build

cd ~

sudo usermod -a -G dialout $USER
sudo apt-get remove modemmanager -y
sudo apt install gstreamer1.0-plugins-bad gstreamer1.0-libav gstreamer1.0-gl -y
sudo apt install libqt5gui5 -y
sudo apt install libfuse2 -y

curl -O https://d176tv9ibo4jno.cloudfront.net/latest/QGroundControl.AppImage
chmod +x ./QGroundControl.AppImage