# Atherton Music Website - Deployment Guide

## AWS CloudFront Deployment

This guide will walk you through deploying the Atherton Music website to AWS S3 with CloudFront CDN for global fast loading.

### Prerequisites

- AWS CLI configured with credentials (`aws configure`)
- AWS account with appropriate permissions

### Step 1: Build the Static Site

```bash
npm run build
```

This generates the static site in the `out/` directory.

### Step 2: Create S3 Bucket

```bash
# Replace 'athertonmusic-website' with your desired bucket name
aws s3 mb s3://athertonmusic-website --region us-east-1
```

### Step 3: Configure S3 for Static Website Hosting

```bash
aws s3 website s3://athertonmusic-website \
  --index-document index.html \
  --error-document 404.html
```

### Step 4: Create Bucket Policy for Public Read Access

Create a file `bucket-policy.json`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::athertonmusic-website/*"
    }
  ]
}
```

Apply the policy:

```bash
aws s3api put-bucket-policy \
  --bucket athertonmusic-website \
  --policy file://bucket-policy.json
```

### Step 5: Upload Static Files to S3

```bash
aws s3 sync out/ s3://athertonmusic-website \
  --delete \
  --cache-control "public, max-age=31536000, immutable"
```

### Step 6: Create CloudFront Distribution

```bash
aws cloudfront create-distribution \
  --origin-domain-name athertonmusic-website.s3-website-us-east-1.amazonaws.com \
  --default-root-object index.html
```

Save the CloudFront Distribution ID and Domain Name from the output.

### Step 7: Configure Custom Error Pages (Optional)

Update your CloudFront distribution to serve `404.html` for 404 errors:

```bash
aws cloudfront update-distribution \
  --id YOUR_DISTRIBUTION_ID \
  --custom-error-responses file://error-config.json
```

Create `error-config.json`:

```json
{
  "CustomErrorResponses": {
    "Items": [
      {
        "ErrorCode": 404,
        "ResponsePagePath": "/404.html",
        "ResponseCode": "404",
        "ErrorCachingMinTTL": 300
      }
    ]
  }
}
```

### Step 8: Configure Custom Domain (Optional)

1. Request an SSL certificate in AWS Certificate Manager (ACM) for your domain
2. Update CloudFront distribution with your custom domain and SSL certificate
3. Update your DNS records to point to the CloudFront distribution

### Future Deployments

For subsequent updates, simply rebuild and sync:

```bash
npm run build
aws s3 sync out/ s3://athertonmusic-website --delete --cache-control "public, max-age=31536000, immutable"
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

### Quick Deploy Script

Create `deploy.sh`:

```bash
#!/bin/bash

echo "Building site..."
npm run build

echo "Uploading to S3..."
aws s3 sync out/ s3://athertonmusic-website \
  --delete \
  --cache-control "public, max-age=31536000, immutable"

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"

echo "Deployment complete!"
```

Make it executable:
```bash
chmod +x deploy.sh
```

## Performance Optimizations

- All images are optimized and served with proper cache headers
- Static HTML is generated at build time for instant loading
- CloudFront CDN ensures fast delivery worldwide
- Lazy loading for images below the fold

## SEO Features

- Comprehensive meta tags for social sharing (Open Graph, Twitter Cards)
- JSON-LD structured data for rich search results
- Semantic HTML5 markup
- Mobile-first responsive design
- Fast loading times (important ranking factor)

## Monitoring

Monitor your CloudFront distribution in the AWS Console:
- CloudWatch metrics for traffic and performance
- CloudFront logs for detailed analytics
- AWS Billing dashboard for cost tracking

## Domain Configuration

Once you have your CloudFront distribution URL, you can:

1. Use Route 53 for DNS (recommended for AWS integration)
2. Or update your current DNS provider to point to CloudFront

Example DNS configuration:
- Create an ALIAS record (if using Route 53) or CNAME record pointing to your CloudFront domain
- Ensure SSL/TLS certificate is configured in CloudFront

Your website will be live at https://YOUR_CLOUDFRONT_DOMAIN.cloudfront.net or your custom domain!
