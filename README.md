# DevOps Terraform Docker Deployment

## Overview
This project demonstrates deploying a Node.js application on AWS EC2 using Terraform for infrastructure provisioning and Docker for containerization.

## Architecture
- **Infrastructure**: AWS EC2 instance provisioned with Terraform
- **Application**: Node.js Express web server
- **Containerization**: Docker
- **Deployment Port**: 3000

## Prerequisites
- AWS Account with appropriate permissions
- Terraform installed
- SSH key pair for EC2 access
- Docker installed on EC2

## Project Structure
```
.
├── Dockerfile          # Container configuration
├── .dockerignore      # Files to exclude from Docker build
├── package.json       # Node.js dependencies
├── server.js          # Express application
└── README.md          # This file
```

## Deployment Steps

### Step 1: Provision Infrastructure with Terraform
```bash
terraform init
terraform plan
terraform apply
```

### Step 2: Get EC2 Public IP
```bash
terraform output instance_public_ip
```

### Step 3: SSH into EC2 Instance
```bash
ssh -i your-key.pem ubuntu@<EC2-PUBLIC-IP>
```

### Step 4: Clone Repository
```bash
git clone https://github.com/anishtiwari2315-art/devops-terraform-docker-deployment.git
cd devops-terraform-docker-deployment
```

### Step 5: Build Docker Image
```bash
sudo docker build -t devops-app:latest .
```

### Step 6: Run Docker Container
```bash
sudo docker run -d --name devops-container -p 3000:3000 devops-app:latest
```

### Step 7: Verify Deployment
```bash
sudo docker ps
curl http://localhost:3000
```

## Access Application
Open browser and navigate to:
```
http://<EC2-PUBLIC-IP>:3000
```

## Security Group Configuration
Ensure your EC2 security group allows:
- Port 22 (SSH)
- Port 3000 (Application)

## Troubleshooting

### Check container logs
```bash
sudo docker logs devops-container
```

### Restart container
```bash
sudo docker restart devops-container
```

### Remove and rebuild
```bash
sudo docker stop devops-container
sudo docker rm devops-container
sudo docker build -t devops-app:latest .
sudo docker run -d --name devops-container -p 3000:3000 devops-app:latest
```

## Clean Up
```bash
# Stop and remove container
sudo docker stop devops-container
sudo docker rm devops-container

# Remove image
sudo docker rmi devops-app:latest

# Destroy infrastructure
terraform destroy
```

## Technologies Used
- **Cloud**: AWS EC2
- **IaC**: Terraform
- **Containerization**: Docker
- **Runtime**: Node.js 18
- **Framework**: Express.js

## Author
anishtiwari2315-art
temp-action
