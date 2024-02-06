#!/bin/bash

apt install git curl wget -y
apt install build-essential -y

https://github.com/ZilantRobotics/innopolis_vtol_dynamics.git
cd innopolis_vtol_dynamics
git submodule update --init --recursive
./scripts/docker.sh build

cd ~

sudo usermod -a -G dialout $USER
sudo apt-get remove modemmanager -y
sudo apt install gstreamer1.0-plugins-bad gstreamer1.0-libav gstreamer1.0-gl -y
sudo apt install libqt5gui5 -y
sudo apt install libfuse2 -y

curl -O https://d176tv9ibo4jno.cloudfront.net/latest/QGroundControl.AppImage
chmod +x ./QGroundControl.AppImage