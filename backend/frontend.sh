#!/bin/bash

# Install git
yum update -y
yum install -y git

# Change user
su - ec2-user

# cd /home/ec2-user/

# Clone project
git clone https://github.com/natalia-se/cat-blog.git

# Install node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts

# Download project dependencies
cd cat-blog/
npm install

# Install pm2 to manage website
npm install pm2@latest -g

# Start website
pm2 start npm --name “cat-blog” -- start
# Configure startup
pm2 startup | tail -n 1 | bash
pm2 save
# Restart
pm2 restart all
