## How to run locally

##### 1. Clone the repo

```bash
git clone git@github.com:natalia-se/cat-blog.git
```

##### 2. Install and run wordpress docker container

```bash
pushd ./cat-blog/
cd ./backend/
docker compose up -d
popd
```

##### 3. Configure Wordpress

Goto http://localhost in browser and configure Wordpress
add posts

##### 4. Run react app

```bash
yarn start
```

## How to deploy backend to AWS

##### 1. Login to AWS

Goto [AWS console sing-in page](https://console.aws.amazon.com/console/home?nc2=h_ct&src=header-signin) and enter your credentials

##### 2. Create EC2 instance with wordpress

- open in browser [Launch instanses page](https://eu-north-1.console.aws.amazon.com/ec2/home?region=eu-north-1#Instances:)
- select name for your server
- create new or select existing keypair
- allow SSH trafic from your IP and HTTP trafic from the internet
- in **Advanced details** specify user data:

```bash
#!/bin/bash
# Install wordpress docker image
curl https://raw.githubusercontent.com/natalia-se/cat-blog/master/backend/user-data.sh | bash
```

- press **Launce instance** button
- go to **[Instances](https://eu-north-1.console.aws.amazon.com/ec2/home?region=eu-north-1#Instances:)** and press on your **Instance ID**
- Copy public IP address of the instance and open it in the browser

## How to deploy frontend to AWS

##### 1. Login to AWS

Goto [AWS console sing-in page](https://console.aws.amazon.com/console/home?nc2=h_ct&src=header-signin) and enter your credentials

##### 2. Create EC2 instance

- open in browser [Launch instanses page](https://eu-north-1.console.aws.amazon.com/ec2/home?region=eu-north-1#Instances:)
- select name for your server
- create new or select existing keypair
- allow SSH trafic from your IP and HTTP trafic from the internet
- create new security group which allows inbound traffic to port 3000 from 0.0.0.0/32
- in **Advanced details** specify user data:

```bash
#!/bin/bash
# Install web server and deploy
curl https://raw.githubusercontent.com/natalia-se/cat-blog/master/backend/frontend.sh | bash
```

- press **Launce instance** button
- go to **[Instances](https://eu-north-1.console.aws.amazon.com/ec2/home?region=eu-north-1#Instances:)** and press on your **Instance ID**
- it takes up to 10 min to download all the dependencies and start web app
- open it in your browser http://{public ip address of your instance}:3000
