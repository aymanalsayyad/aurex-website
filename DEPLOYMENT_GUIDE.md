# AUREX Consultancy Website - Complete Deployment Guide

## 📋 Table of Contents
1. [Local Setup](#local-setup)
2. [Deployment Options](#deployment-options)
3. [Vercel Deployment (Recommended)](#vercel-deployment-recommended)
4. [GoDaddy Deployment](#godaddy-deployment)
5. [Database Setup](#database-setup)
6. [Email Configuration](#email-configuration)
7. [Post-Launch Checklist](#post-launch-checklist)

---

## 🚀 Local Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git installed

### Steps

1. **Clone or download the project**
```bash
cd aurex-website
npm install
```

2. **Configure environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

3. **Run development server**
```bash
npm run dev
# Open http://localhost:3000
```

---

## 🌐 Deployment Options

### Option 1: Vercel (RECOMMENDED ⭐)
**Pros:**
- Zero configuration needed
- Automatic deployments on git push
- Free tier sufficient for this project
- Best performance and SEO
- Custom domain setup in 2 minutes
- Automatic HTTPS
- Serverless functions support

**Cons:**
- Requires GitHub account
- External hosting (not GoDaddy servers)

### Option 2: GoDaddy Hosting
**Pros:**
- All on GoDaddy servers
- Integrated with your domain

**Cons:**
- Limited Node.js support on shared hosting
- Complex setup required
- Slower performance
- Manual deployment process

### Option 3: GoDaddy + Static Export
**Pros:**
- Works on any hosting
- Simple FTP upload
- Good performance for static content

**Cons:**
- Loses dynamic features (real-time calculators, database)
- No contact form backend

---

## 🚀 Vercel Deployment (RECOMMENDED)

### Step 1: Prepare Your GitHub Repository
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit - AUREX website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aurex-website.git
git push -u origin main
```

### Step 2: Create Vercel Account
1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "GitHub" and authorize Vercel
4. Accept terms

### Step 3: Deploy to Vercel
1. Go to https://vercel.com/new
2. Select your GitHub repository `aurex-website`
3. Configure project:
   - Framework: Next.js
   - Root Directory: ./
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
4. Add environment variables (from .env.example):
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - RESEND_API_KEY
   - etc.
5. Click "Deploy"
6. Wait for deployment to complete (~3-5 minutes)

### Step 4: Connect Custom Domain (GoDaddy Domain)
1. In Vercel dashboard, go to project settings → Domains
2. Add domain: `aurex-consultancy.com`
3. Choose "Using nameservers" option
4. Copy Vercel's nameservers:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

5. In GoDaddy:
   - Go to Domain Management
   - Select aurex-consultancy.com
   - Go to "Nameservers"
   - Click "Change"
   - Enter Vercel's nameservers
   - Save changes

6. Wait 24-48 hours for DNS propagation (usually 5-15 mins)
7. Verify in Vercel dashboard

### Step 5: Automatic Deployments
```bash
# Every push to main branch triggers automatic deployment
git add .
git commit -m "Update homepage"
git push origin main
# Vercel automatically deploys!
```

---

## 📦 GoDaddy Deployment (Advanced)

### Requirements
- GoDaddy VPS or Dedicated hosting with Node.js support
- SSH access to server
- Knowledge of Linux command line

### Steps (if you have Node.js hosting)

1. **Connect to server via SSH**
```bash
ssh root@your-server-ip
```

2. **Install Node.js & npm**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Clone your repository**
```bash
cd /var/www
git clone https://github.com/YOUR_USERNAME/aurex-website.git
cd aurex-website
```

4. **Install dependencies & build**
```bash
npm install
npm run build
```

5. **Install PM2 (process manager)**
```bash
npm install -g pm2
pm2 start npm --name "aurex" -- start
pm2 startup
pm2 save
```

6. **Configure Nginx reverse proxy**
```bash
sudo apt-get install nginx
# Create /etc/nginx/sites-available/aurex-consultancy.com
```

7. **Update GoDaddy DNS** to point to server IP

8. **Enable HTTPS with Let's Encrypt**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d aurex-consultancy.com
```

---

## 🗄️ Database Setup (Supabase)

### Step 1: Create Supabase Account
1. Go to https://supabase.com
2. Sign up with GitHub
3. Create new project
4. Choose region (Dubai - ap-southeast-1)
5. Save password securely

### Step 2: Get API Keys
1. In Supabase dashboard, go to Settings → API
2. Copy:
   - `URL` → NEXT_PUBLIC_SUPABASE_URL
   - `anon public` → NEXT_PUBLIC_SUPABASE_ANON_KEY
   - `service_role secret` → SUPABASE_SERVICE_ROLE_KEY

### Step 3: Create Database Tables
Run in Supabase SQL Editor:

```sql
-- Contacts Table
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  service VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'new'
);

-- Quiz Responses Table
CREATE TABLE quiz_responses (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255),
  quiz_type VARCHAR(50),
  responses JSONB,
  result JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Guide Downloads Table
CREATE TABLE guide_downloads (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255),
  guide_name VARCHAR(255),
  downloaded_at TIMESTAMP DEFAULT NOW()
);
```

### Step 4: Enable Row Level Security (RLS)
1. Go to Authentication → Policies
2. Enable RLS on all tables
3. Create policies as needed

---

## 📧 Email Configuration (Resend)

### Step 1: Create Resend Account
1. Go to https://resend.com
2. Sign up
3. Verify email domain (optional but recommended)

### Step 2: Get API Key
1. Go to API Keys
2. Copy key
3. Add to .env: `RESEND_API_KEY=...`

### Step 3: Update Contact Form
In `app/api/contact/route.ts`, uncomment and configure:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In POST handler:
await resend.emails.send({
  from: process.env.RESEND_FROM_EMAIL,
  to: data.email,
  subject: 'We received your inquiry',
  html: `<p>Hi ${data.name}, thank you for contacting us...</p>`
});
```

---

## ✅ Post-Launch Checklist

### Performance & SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (GA4)
- [ ] Enable image optimization
- [ ] Test PageSpeed Insights
- [ ] Verify meta tags on all pages

### Security
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Configure CORS if needed
- [ ] Set up rate limiting
- [ ] Review environment variables
- [ ] Enable bot protection

### Functionality
- [ ] Test contact form submission
- [ ] Verify email notifications
- [ ] Test all quizzes
- [ ] Check calculator functionality
- [ ] Test file downloads (guides)

### Monitoring
- [ ] Set up error tracking (Sentry optional)
- [ ] Enable Vercel analytics
- [ ] Monitor application logs
- [ ] Set up uptime monitoring

---

## 🔧 Troubleshooting

### Domain not connecting
- Wait 24-48 hours for DNS propagation
- Clear browser cache (Ctrl+Shift+Del)
- Check nameservers in GoDaddy (should match Vercel)

### Contact form not sending
- Verify Resend API key in environment variables
- Check Supabase connection string
- Review application logs in Vercel

### Slow performance
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`
- Check image optimization
- Review network tab in DevTools

### 404 errors on pages
- Verify page files exist in `/app` directory
- Check file naming (use lowercase with hyphens)
- Rebuild project after file changes

---

## 📞 Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **Resend Docs**: https://resend.com/docs

---

## 🎯 Next Steps After Launch

1. **Set up analytics**
   - Google Analytics 4
   - Vercel Web Analytics

2. **Optimize for conversion**
   - Add heatmaps (Hotjar)
   - A/B test CTAs
   - Collect user feedback

3. **Expand content**
   - Create blog posts
   - Add team member profiles
   - Develop case studies

4. **Enhance features**
   - Video testimonials
   - Live chat support
   - Advanced booking system

5. **Marketing**
   - Set up email marketing
   - Create social media strategy
   - Implement referral program

---

**Deployment Date**: _________________  
**Live URL**: https://aurex-consultancy.com  
**Last Updated**: November 10, 2025  
