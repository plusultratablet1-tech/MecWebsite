# Quick Start Guide

## Installation & Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Format code
pnpm format
```

## GitHub Setup (5 minutes)

### 1. Create GitHub Repository
- Go to [github.com/new](https://github.com/new)
- Name it `buildnox` or `buildnox-landing`
- Do NOT initialize with README/gitignore
- Click "Create repository"

### 2. Push Your Code
```bash
# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/buildnox.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Vercel Deployment (2 minutes)

### Automatic Deployment
1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Paste your GitHub URL
4. Click "Import"
5. Click "Deploy"
6. **Done!** Your site is live 🚀

### Get Your URL
- Vercel gives you a unique URL: `your-project.vercel.app`
- Add custom domain in Vercel Settings → Domains

## Project Navigation

| Folder | Purpose |
|--------|---------|
| `app/` | Pages and routes |
| `components/sections/` | Section components |
| `public/images/` | Images and assets |

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Home page (all sections) |
| `app/layout.tsx` | HTML structure & metadata |
| `vercel.json` | Vercel configuration |
| `next.config.mjs` | Next.js settings |

## Common Tasks

### Edit a Section
```bash
# Example: Update hero section
# Edit: components/sections/hero/Hero.tsx
# Save and refresh: http://localhost:3000
```

### Add New Component
```bash
# Create new section folder
mkdir components/sections/my-section

# Create component file
touch components/sections/my-section/MySection.tsx

# Create barrel export
touch components/sections/my-section/index.ts
```

### Update Content
- Edit text in component files
- Update images in `public/images/`
- Commit and push to auto-deploy

### Change Colors
- Edit Tailwind classes in components
- Use Tailwind color utilities: `bg-orange-500`, `text-blue-600`
- Apply globally in `app/globals.css`

## Deployment Status

```bash
# Check build locally
pnpm build

# Check for errors
pnpm lint

# Start dev server
pnpm dev
```

## Documentation

- **README.md** - Full project overview
- **ARCHITECTURE.md** - Technical architecture
- **CONTRIBUTING.md** - Development guidelines
- **DEPLOYMENT.md** - Detailed deployment guide
- **GITHUB_SETUP.md** - GitHub & Vercel setup
- **PROJECT_STATUS.md** - Current status report

## Vercel Dashboard

After deploying:
- Go to [vercel.com/dashboard](https://vercel.com/dashboard)
- Click your project
- View deployments, analytics, logs
- Add environment variables
- Configure custom domain
- Set up preview deployments

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Add any secrets needed locally.

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes
# ... edit files ...

# Commit changes
git add .
git commit -m "feat: add new feature"

# Push to GitHub
git push origin feature/my-feature

# Create Pull Request on GitHub
# (GitHub will show "Create PR" button)

# After review, merge to main
# Vercel auto-deploys!
```

## Commit Examples

```bash
git commit -m "feat: add testimonials section"
git commit -m "fix: mobile menu toggle"
git commit -m "docs: update README"
git commit -m "style: format code"
git commit -m "refactor: reorganize components"
```

## Troubleshooting

### Build Fails
```bash
# Clear next cache
rm -rf .next

# Reinstall dependencies
pnpm install

# Build again
pnpm build
```

### Port Already in Use
```bash
# Use different port
pnpm dev -- -p 3001
```

### Git Connection Error
```bash
# Test SSH connection
ssh -T git@github.com

# Or use HTTPS instead of SSH
git remote set-url origin https://github.com/user/repo.git
```

## Performance Tips

1. Use Next.js Image component for images
2. Lazy load components with `dynamic`
3. Optimize images before adding
4. Monitor Vercel Analytics
5. Use Edge Functions for API routes

## Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Tailwind CSS:** https://tailwindcss.com
- **shadcn/ui:** https://ui.shadcn.com
- **TypeScript:** https://www.typescriptlang.org/docs

## Need Help?

1. Check documentation files (README.md, ARCHITECTURE.md, etc.)
2. Review component examples in `components/sections/`
3. Check Vercel logs for deployment errors
4. Visit official documentation links above

---

**You're ready to deploy! Follow the GitHub Setup + Vercel Deployment steps above.** 🚀
