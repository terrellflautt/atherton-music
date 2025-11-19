# Atherton Music Website

A visually stunning, production-ready website for Atherton Music - a mother-son duo from Austin, Texas, playing Texas songwriter country blues and good God gospel.

## Live Website

**CloudFront URL:** https://d213ecr9q8d870.cloudfront.net

**Distribution ID:** E2M3AYP59EWUA9

The website is deployed on AWS CloudFront CDN for blazing-fast global access.

## Features

### Design & User Experience
- Stunning Visuals: Dark, elegant design with gold accents
- Smooth Animations: Framer Motion throughout
- Mobile-First Responsive: Perfect on all devices
- Fast Loading: Static site + global CDN

### Content
1. Hero with Gospel Album announcement (Dec 15, 2025)
2. About: Biography and story
3. Music: All streaming platforms
4. Tour Dates: Spain Gospel Tour emphasis
5. Contact: Social media links

### Technical
- SEO Optimized with structured data
- Bilingual (EN/ES) with auto-detect
- Performance: SSG + CloudFront CDN
- Security: Best practices

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

```bash
npm run build
aws s3 sync out/ s3://athertonmusic-website --delete
aws cloudfront create-invalidation --distribution-id E2M3AYP59EWUA9 --paths "/*"
```

See DEPLOYMENT.md for details.

© 2025 Atherton Music. "God speaks, we listen, Atherton sings."
