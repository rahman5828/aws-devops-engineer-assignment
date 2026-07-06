# AWS DevOps Engineer Technical Assignment Report

## 1. Objective

The objective of this project was to design, deploy, secure, monitor and document a production-like application on AWS Free Tier using DevOps best practices.

---

# 2. Infrastructure

- AWS EC2 (Ubuntu)
- Docker
- Nginx Reverse Proxy
- IAM Role
- Security Groups
- Amazon S3
- Amazon CloudWatch
- GitHub Actions CI/CD

---

# 3. Application Deployment

A Node.js application was containerized using Docker and deployed on an Amazon EC2 instance.

Nginx was configured as a reverse proxy to expose the application on port 80.

---

# 4. CI/CD Pipeline

GitHub Actions was configured to automatically deploy the application whenever code is pushed to the **main** branch.

Deployment steps:

- Checkout repository
- SSH into EC2
- Pull latest code
- Build Docker image
- Restart Docker container

---

# 5. Monitoring

Amazon CloudWatch Agent was installed.

Configured monitoring:

- CPU
- Memory
- Disk
- Network

Configured CloudWatch:

- Dashboard
- Alarm
- Log Groups
- Log Streams

---

# 6. Log Collection

Nginx Access Logs

Nginx Error Logs

Both were successfully forwarded to CloudWatch Logs.

---

# 7. Load Testing

Tool Used:

k6

Configuration:

- Virtual Users: 20
- Duration: 2 Minutes

Results:

- Requests: 2400
- Average Response Time: 2.42 ms
- Failed Requests: 0%
- Throughput: 19.92 requests/sec

---

# 8. Security

Implemented:

- IAM Role
- Least Privilege
- Security Groups
- Docker Isolation
- CloudWatch Monitoring
- SSH Key Authentication

---

# 9. Architecture

The architecture consists of:

Internet

↓

Amazon EC2

↓

Docker Container

↓

Node.js Application

↓

Amazon CloudWatch

↓

Amazon S3 Backup

GitHub Actions performs automated deployment via SSH.

---

# 10. Challenges Faced

- CloudWatch IAM Role configuration
- CloudWatch Agent permissions
- Nginx log forwarding
- Dashboard metric configuration
- Load testing setup

All issues were successfully resolved.

---

# 11. Future Improvements

- HTTPS using Let's Encrypt
- AWS WAF
- Auto Scaling Group
- Application Load Balancer
- Terraform Infrastructure as Code
- AWS Secrets Manager

---

# 12. Conclusion

The project successfully met the assignment objectives by deploying a production-like application on AWS Free Tier with automated CI/CD, monitoring, logging, security controls, and performance testing.
