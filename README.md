# AWS DevOps Engineer Technical Assignment

## Project Overview
This project demonstrates the deployment of a production-like Node.js application on AWS Free Tier using DevOps best practices.

## Tech Stack
- AWS EC2 (Ubuntu)
- Docker
- Nginx Reverse Proxy
- GitHub Actions (CI/CD)
- Amazon S3
- Amazon CloudWatch
- IAM Roles
- k6 Load Testing
- Node.js

## Architecture
- Internet → EC2 Instance
- Dockerized Node.js Application
- GitHub Actions for CI/CD
- CloudWatch for Monitoring & Logs
- Amazon S3 for Backups

## Deployment Steps

### 1. Launch EC2 Instance
- Ubuntu Server
- Configure Security Groups
- Attach IAM Role

### 2. Install Dependencies
```bash
sudo apt update
sudo apt install docker.io nginx git -y
```

### 3. Clone Repository

```bash
git clone <repository-url>
cd aws-devops-engineer-assignment
```

### 4. Build Docker Image

```bash
docker build -t aws-devops-assignment:v1 .
```

### 5. Run Container

```bash
docker run -d --name devops-app -p 3000:3000 aws-devops-assignment:v1
```

### 6. Configure Nginx Reverse Proxy

- Proxy requests from port 80 to port 3000.

### 7. Configure GitHub Actions

- Push to `main`
- GitHub Actions connects to EC2 via SSH
- Pull latest code
- Build Docker image
- Restart container

### 8. Configure CloudWatch

- CPU Monitoring
- Memory Monitoring
- Disk Monitoring
- Network Monitoring
- Log Collection
- Dashboard
- Alarm

### 9. Load Testing

Tool Used:
- k6

Configuration:
- 20 Virtual Users
- 2 Minutes

Results:
- Average Response Time: 2.42 ms
- Requests: 2400
- Throughput: 19.92 req/sec
- Failed Requests: 0%

## Security

- IAM Role with Least Privilege
- Security Groups
- Docker Isolation
- CloudWatch Monitoring
- SSH Key Authentication

## Author

Abdul Rahman V A
