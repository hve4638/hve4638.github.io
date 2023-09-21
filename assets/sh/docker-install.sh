curl -sSL get.docker.com | sh
sudo usermod -aG docker $USER

echo "alias dockcp='docker cp'" >> ~/.bashrc

echo "alias dockls='docker container ls'" >> ~/.bashrc
echo "alias dockrm='docker container rm'" >> ~/.bashrc

echo "alias dockst='docker start -i'" >> ~/.bashrc
echo "alias dockat='docker attach'" >> ~/.bashrc

echo "alias dockimg='docker images'" >> ~/.bashrc

source ~/.bashrc