# Security Summary

## IAM
- IAM Role attached to the EC2 instance.
- Least privilege access implemented.
- CloudWatch permissions granted through IAM role.

## Network Security
- Security Group configured to allow:
  - HTTP (80)
  - HTTPS (443)
  - SSH (22) - restricted to trusted IPs whenever possible.
- All other inbound traffic denied.

## Application Security
- Application runs inside a Docker container.
- Nginx acts as a reverse proxy.
- Node.js application is isolated from the host.

## Monitoring & Logging
- Amazon CloudWatch Agent installed.
- System metrics collected:
  - CPU
  - Memory
  - Disk
  - Network
- Nginx access and error logs forwarded to CloudWatch Logs.
- CloudWatch Dashboard created for monitoring.
- CloudWatch Alarm configured for high CPU utilization.

## Data Protection
- Application backup stored in Amazon S3.
- IAM role used instead of storing AWS credentials on the server.

## CI/CD Security
- GitHub Actions uses encrypted GitHub Secrets:
  - EC2_HOST
  - EC2_USER
  - EC2_SSH_KEY
- Deployment performed over SSH.

## HTTPS
- HTTPS can be enabled using Let's Encrypt (Certbot) or AWS ACM with a Load Balancer.
- Not implemented in this assignment due to Free Tier and domain limitations.

## Future Improvements
- Enable HTTPS with a custom domain.
- Use AWS WAF.
- Enable automatic vulnerability scanning.
- Store secrets in AWS Secrets Manager.
- Use private subnets and a NAT Gateway for production deployments.
