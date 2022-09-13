#!/bin/bash

# Install the most recent Docker Engine package (Linux 2 version).
yum update -y
amazon-linux-extras install docker

# Start the Docker service.
service docker start
# To ensure that the Docker daemon starts after each system reboot, run the following command:
systemctl enable docker
# Add the ec2-user to the docker group so you can execute Docker commands without using sudo.
usermod -a -G docker ec2-user

# Install docker compose:
DOCKER_CONFIG=/usr/local/lib/docker
mkdir -p $DOCKER_CONFIG/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v2.10.2/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose

# Apply executable permissions to the binary:
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose

# Create wordpress directory
mkdir /home/ec2-user/wp

curl -SL https://raw.githubusercontent.com/natalia-se/cat-blog/master/backend/docker-compose.yml -o /home/ec2-user/wp/docker-compose.yml

cd /home/ec2-user/wp
# Start docker container with WordPress
docker compose up -d
