# 🚀 Quick Start Guide - AUREX Website

Get your Aurex Consultancy website live in 15 minutes!

## ⚡ 15-Minute Setup

### Step 1: Install & Run Locally (5 min)
```bash
cd aurex-website
npm install
cp .env.example .env.local
npm run dev
# Open http://localhost:3000 ✅
```

### Step 2: Push to GitHub (3 min)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/aurex-website.git
git push -u origin main
```

### Step 3: Deploy on Vercel (5 min)
1. Go to https://vercel.com/new
2. Select your GitHub repository
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL=` (from Supabase)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY=` (from Supabase)
   - `RESEND_API_KEY=` (from Resend)
4. Click "Deploy" ✅
5. Website is live!

### Step 4: Connect Domain (2 min)
1. In Vercel: Settings → Domains → Add Domain
2. Add `aurex-consultancy.com`
3. Update nameservers in GoDaddy to Vercel's
4. Wait 5-15 minutes for DNS ✅

---

## 🔧 Initial Customizations

### Update Business Details
1. **Site name**: Edit `app/layout.tsx` (line 25)
2. **Contact info**: Edit `components/Footer.tsx` (lines 50-60)
3. **Phone/Email**: Edit `app/contact/page.tsx` (lines 70-80)

### Change Logo
Replace `/public/favicon.ico` with your logo

### Update Colors
Edit `tailwind.config.ts` → colors section (lines 10-50)

---

## 📊 Set Up Backend Services

### Supabase (Database)
1. Go to https://supabase.com → Create account
2. Create new project (Region: ap-southeast-1)
3. Get API keys from Settings → API
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   SUPABASE_SERVICE_ROLE_KEY=your_key
   ```
5. Run SQL in Query Editor:
   ```sql
   CREATE TABLE contacts (id BIGSERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, phone VARCHAR(20), service VARCHAR(100), message TEXT, created_at TIMESTAMP DEFAULT NOW());
   ```

### Resend (Email)
1. Go to https://resend.com → Sign up
2. Get API key from API Keys section
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=your_key
   RESEND_FROM_EMAIL=noreply@aurex-consultancy.com
   ```

### Google Analytics
1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID
3. Add to `app/layout.tsx` (around line 50)

---

## ✅ Pre-Launch Checklist

### Content
- [ ] Update all contact information
- [ ] Review all page content for accuracy
- [ ] Update team information if needed
- [ ] Customize service descriptions

### Branding
- [ ] Update logo/favicon
- [ ] Verify brand colors
- [ ] Check fonts are loading
- [ ] Update social media links

### Technical
- [ ] Test contact form
- [ ] Verify email notifications
- [ ] Test all links
- [ ] Check mobile responsiveness

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics
- [ ] Verify meta tags on all pages
- [ ] Set up Google My Business

### Security
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Review environment variables
- [ ] Set up bot protection if needed

---

## 📁 Key Files to Modify

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Site-wide metadata, fonts |
| `components/Navbar.tsx` | Navigation, logo |
| `components/Footer.tsx` | Contact info, social links |
| `app/page.tsx` | Homepage sections |
| `app/about/page.tsx` | About company |
| `app/services/page.tsx` | Services list |
| `tailwind.config.ts` | Colors, fonts, design tokens |

---

## 🎯 Next Steps After Launch

### Week 1
- Monitor analytics
- Collect user feedback
- Fix any issues

### Week 2-4
- Add blog posts
- Optimize based on analytics
- Set up email marketing

### Month 2+
- Expand with case studies
- Add testimonials
- Implement referral program
- Plan content strategy

---

## 🆘 Troubleshooting

### Website not loading?
```bash
npm run build  # Check for build errors
npm start      # Test production build
```

### Contact form not working?
- Check Supabase connection in `.env.local`
- Verify table exists in Supabase
- Check browser console for errors

### Domain not connecting?
- Wait 24 hours for DNS to propagate
- Clear browser cache (Ctrl+Shift+Del)
- Verify nameservers in GoDaddy

### Styles not loading?
```bash
rm -rf .next node_modules
npm install
npm run dev
```

---

## 📞 Quick Links

- **Vercel**: https://vercel.com
- **Supabase**: https://supabase.com
- **Resend**: https://resend.com
- **Next.js**: https://nextjs.org
- **Tailwind**: https://tailwindcss.com

---

## 🎉 You're Ready!

Your website is now:
- ✅ Live and accessible globally
- ✅ Optimized for SEO
- ✅ Mobile responsive
- ✅ Fast and secure
- ✅ Easy to maintain
- ✅ Ready to generate leads

**Start promoting your website and watch the leads roll in!**

---

For detailed setup instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

Last updated: November 10, 2025
