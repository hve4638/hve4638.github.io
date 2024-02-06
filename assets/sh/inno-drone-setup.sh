#!/bin/bash

if [ ! -f "$HOME/.inno-dront-setup-progress" ] ; then
    sudo apt update -y
    sudo apt install git curl wget -y
    sudo apt install build-essential -y
    sudo apt install python3-pip -y
    pip install autopilot-tools

    
    curl -sSL get.docker.com | sh
    sudo usermod -aG docker $USER

    cd ~
    git clone https://github.com/ZilantRobotics/innopolis_vtol_dynamics.git
    cd innopolis_vtol_dynamics
    git submodule update --init --recursive
    
    cd ~
    sudo usermod -a -G dialout $USER
    sudo apt-get remove modemmanager -y
    sudo apt install gstreamer1.0-plugins-bad gstreamer1.0-libav gstreamer1.0-gl -y
    sudo apt install libqt5gui5 -y
    sudo apt install libfuse2 -y
    
    curl -O https://d176tv9ibo4jno.cloudfront.net/latest/QGroundControl.AppImage
    chmod +x ./QGroundControl.AppImage

    echo Work done.
    echo Please reboot and run this script again.
else
    cd ~/innopolis_vtol_dynamics
    ./scripts/docker.sh build
fi
