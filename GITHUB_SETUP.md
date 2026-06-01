# GitHub & Vercel Setup Guide

## Quick Setup Instructions

Your project is ready to push to GitHub and deploy to Vercel. Follow these steps:

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository with a name like `buildnox` or `buildnox-landing`
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

### Step 2: Add Remote and Push

Copy and run these commands in your terminal:

```bash
cd path/to/buildnox-project

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (optional but recommended)
git branch -M main

# Push to GitHub
git push -u origin main
```

Replace:
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

### Step 3: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Paste your GitHub repository URL
4. Click "Import"
5. Vercel will auto-detect Next.js framework
6. Click "Deploy"
7. Your site will be live in seconds!

#### Option B: Using Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

### Step 4: Configure Environment Variables (If Needed)

If your project needs environment variables:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add variables from `.env.example`
4. Click "Save"

## Git Workflow

### Making Changes

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: description of changes"

# Push to GitHub
git push origin feature/your-feature-name

# Create a Pull Request on GitHub
```

### Commit Convention

Follow conventional commits:

```
feat:    A new feature
fix:     A bug fix
docs:    Documentation changes
style:   Code style changes (formatting, missing semicolons, etc.)
refactor: Code refactoring
perf:    Performance improvements
test:    Adding or updating tests
chore:   Dependency updates, configuration changes
```

Example:
```bash
git commit -m "feat: add testimonials section"
git commit -m "fix: mobile menu toggle issue"
git commit -m "docs: update README with setup instructions"
```

## Project Structure Review

```
buildnox/
├── app/
│   ├── page.tsx          # Home page with all sections
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── sections/         # Organized by section
│       ├── header/
│       ├── hero/
│       ├── services/
│       ├── gallery/
│       ├── testimonials/
│       ├── team/
│       ├── quality/
│       ├── contact/
│       └── footer/
├── public/
│   └── images/           # Generated images
├── README.md             # Project overview
├── ARCHITECTURE.md       # Architecture guide
├── CONTRIBUTING.md       # Contributing guidelines
├── DEPLOYMENT.md         # Deployment guide
├── vercel.json          # Vercel configuration
├── next.config.mjs      # Next.js configuration
└── package.json         # Dependencies
```

## Vercel Features Enabled

✓ Automatic deployments on push  
✓ Preview deployments for pull requests  
✓ GitHub integration with status checks  
✓ SSL/TLS certificates (automatic)  
✓ CDN and edge caching  
✓ Analytics (optional)  

## Custom Domain Setup

After deploying to Vercel:

1. Go to Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records at your domain provider
5. Point to Vercel nameservers

## CI/CD Pipeline

GitHub Actions automatically runs on every push:

- TypeScript type checking
- ESLint code quality checks
- Next.js build verification
- Status checks on pull requests

See `.github/workflows/ci.yml` for details.

## Troubleshooting

### Build Fails on Vercel

1. Check build logs in Vercel dashboard
2. Ensure all environment variables are set
3. Run `pnpm build` locally to test
4. Check Node.js version (18+ required)

### GitHub Connection Issues

```bash
# Test connection
ssh -T git@github.com

# Fix permission issues
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Deploy Issues

1. Ensure `.gitignore` excludes `node_modules`, `.next`, `.vercel`
2. Check `vercel.json` configuration
3. Verify environment variables in Vercel dashboard
4. Review build logs for errors

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Docs**: https://docs.github.com
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs

## What's Next?

1. ✓ Push to GitHub
2. ✓ Deploy to Vercel
3. Add custom domain
4. Set up analytics
5. Configure email notifications
6. Start collaborating!

---

**You're all set! Your Buildnox project is production-ready.** 🚀
