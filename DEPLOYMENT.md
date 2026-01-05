# Vercel Deployment Guide

## Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from the root directory:**
   ```bash
   cd c:/Projects/Portfolio
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? Yes
   - Which scope? (Select your account)
   - Link to existing project? No
   - What's your project's name? portfolio
   - In which directory is your code located? ./
   - Want to override the settings? No

5. **For production deployment:**
   ```bash
   vercel --prod
   ```

## Option 2: Deploy via Vercel Dashboard

### For Frontend (Recommended for separate deployment):

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**

3. **Click "Add New Project"**

4. **Import your GitHub repository**

5. **Configure the project:**
   - Framework Preset: `Vite`
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. **Add Environment Variables (if needed):**
   - `VITE_API_URL` = Your backend API URL

7. **Click "Deploy"**

### For Backend:

The backend needs to be deployed separately. Options:
- **Railway**: https://railway.app/
- **Render**: https://render.com/
- **Heroku**: https://heroku.com/

Then update your frontend to point to the deployed backend API.

## Option 3: Deploy Frontend Only (Static Site)

If you want to deploy just the frontend as a static site:

1. **Build the project:**
   ```bash
   cd client
   npm run build
   ```

2. **Deploy the `client/dist` folder to Vercel:**
   ```bash
   cd client
   vercel --prod
   ```

## Post-Deployment Steps

1. **Update API endpoints in your frontend** to point to your deployed backend
2. **Configure custom domain** (optional) in Vercel dashboard
3. **Set up environment variables** for production

## Quick Command Summary

```bash
# One-time setup
npm install -g vercel
vercel login

# Deploy
cd c:/Projects/Portfolio
vercel

# Production deployment
vercel --prod
```

Your site will be live at: `https://your-project-name.vercel.app`
