# Y-Busmate Website - Production Deployment Guide

## Overview
This guide covers deploying the Y-Busmate website to Vercel with proper configuration and best practices.

## Prerequisites
- Vercel account (https://vercel.com)
- GitHub account with the repository
- Bun or Node.js installed locally

---

## 🚀 Step-by-Step Deployment to Vercel

### 1. **Connect Repository to Vercel**

#### Option A: Using GitHub (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Authorize GitHub and select the `Y-Busmate_Website` repository
5. Click "Import"

#### Option B: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel
# or with bun
bun add -g vercel

# Deploy from project directory
cd /home/Kritish/Development/Y-Busmate_Website
vercel
```

### 2. **Configure Project Settings**

When importing to Vercel, ensure these settings are correct:

**Build Settings:**
- **Framework Preset:** Vite
- **Build Command:** `bun run build` (or `npm run build`)
- **Output Directory:** `dist`
- **Install Command:** `bun install` (or `npm install`)

**Environment Variables:**
- Add any required variables in Vercel dashboard → Settings → Environment Variables
- For development/staging and production versions, add accordingly

### 3. **Custom Domain Setup (Optional)**

1. In Vercel dashboard, go to your project
2. Navigate to Settings → Domains
3. Add your custom domain
4. Update DNS records according to Vercel's instructions

---

## 🔧 Configuration Files Explanation

### `vercel.json`
- **rewrites**: Routes all requests to `index.html` so React Router can handle client-side routing
- **headers**: Sets cache policies for assets (long-term cache for versioned assets, no-cache for index.html)
- **framework**: Tells Vercel this is a Vite project
- **buildCommand/devCommand/installCommand**: Specifies Bun as the package manager

### `.vercelignore`
- Excludes unnecessary files from deployment to reduce build time

### `.env.production`
- Production environment variables (update API_URL with your actual API endpoint)

---

## 📋 Pre-Deployment Checklist

- [ ] All routes tested locally (`npm run dev`)
- [ ] No console errors or warnings
- [ ] Build completes successfully (`npm run build`)
- [ ] Privacy policy route works: `localhost:5173/privacy`
- [ ] All pages render correctly: `/`, `/privacy`
- [ ] Images and assets load properly
- [ ] No hardcoded localhost URLs in code
- [ ] Environment variables documented
- [ ] Git repository is updated and pushed

---

## 🧪 Local Testing Before Deployment

### Build for production locally
```bash
bun run build
```

### Preview the production build
```bash
bun run preview
```
Then open `http://localhost:4173` and test all routes including `/privacy`

---

## ⚠️ Troubleshooting Common Issues

### 404 Error on Non-Root Routes
**Problem:** Pages like `/privacy` return 404
**Solution:** The `vercel.json` file with rewrites configuration should fix this
**Verify:** Check that `vercel.json` exists in project root

### Assets Not Loading (CSS, JS, Images)
**Problem:** Styles or scripts are missing
**Solution:** 
- Ensure `public/` folder is properly structured
- Check that Vite config has correct aliases
- Verify no absolute paths in components (use relative or explicit imports)

### Build Fails
**Common causes:**
- TypeScript errors: Run `npm run build` locally first
- Missing environment variables: Check `.env.production`
- Unsupported Node/Bun version: Update to latest LTS

**Solution steps:**
1. Run `bun run build` locally
2. Check build output for errors
3. Fix errors locally, commit, and push to GitHub
4. Vercel will auto-redeploy

### Deployment Takes Too Long
**Reasons:**
- Large dependencies being installed
- Too many files being built

**Optimization:**
- Review `.vercelignore` to exclude unnecessary files
- Consider code splitting for large components
- Use dynamic imports for routes

---

## 🔄 Deployment Workflow

### For Every Update:
1. **Local Development**
   ```bash
   bun run dev
   ```

2. **Test Changes**
   - Test all modified routes
   - Check console for errors
   - Verify responsive design

3. **Build Locally**
   ```bash
   bun run build
   bun run preview
   ```

4. **Commit and Push**
   ```bash
   git add .
   git commit -m "Feature: describe your changes"
   git push origin main
   ```

5. **Vercel Auto-Deploys**
   - Vercel automatically builds and deploys on push to main branch
   - Monitor deployment status in Vercel dashboard
   - Check deployment URL for changes

---

## 📊 Monitoring & Performance

### In Vercel Dashboard:
- **Deployments**: View build logs and status
- **Analytics**: Monitor page load times and errors
- **Functions**: View server-side logs if using API routes

### Performance Tips:
1. Keep bundle size small with code splitting
2. Use lazy loading for heavy components
3. Optimize images (use appropriate formats)
4. Enable Vercel Analytics for insights

---

## 🔐 Security Best Practices

1. **Environment Variables**
   - Never commit `.env.local`
   - Use Vercel's environment variable UI for secrets

2. **Headers**
   - Headers are properly configured in `vercel.json`
   - Add security headers as needed

3. **CORS**
   - If using external APIs, configure CORS properly
   - Never expose API keys in client-side code

---

## 📝 Key Files to Keep Updated

- `vercel.json` - Deployment configuration
- `package.json` - Dependencies and scripts
- `vite.config.ts` - Build configuration
- `tsconfig.json` - TypeScript configuration
- `.env.production` - Production variables

---

## 🆘 Support & Resources

- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev
- React Router Documentation: https://reactrouter.com
- Create issue or contact support in Vercel dashboard

---

## Quick Commands Reference

```bash
# Local development
bun run dev

# Build for production
bun run build

# Preview production build locally
bun run preview

# Run tests
bun run test

# Lint code
bun run lint

# Deploy with Vercel CLI
vercel

# Deploy to production
vercel --prod
```

---

**Last Updated:** April 7, 2026
**Version:** 1.0
