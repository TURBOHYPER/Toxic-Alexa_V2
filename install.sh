#!/usr/bin/bash
 
apt update 
apt upgrade
pkg install git -y
pkg clean
pkg install termimage -y
pkg install tty-clock -y
pkg install sox -y
pkg install jq -y
pkg install figlet -y
pkg install wget -y
pkg install ffmpeg libwebp -y
pkg install nodejs -y
pkg install tesseract -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm i -g npm@6.14.14
npm install
npm audit fix
npm i terminal-kit

#!/usr/bin/bash

termimage denz.jpg
clear
node index
