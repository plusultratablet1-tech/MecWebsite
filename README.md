# Buildnox - Construction & Architecture Landing Page

A modern, fully responsive landing page for a construction and architecture firm built with Next.js 16, React, TypeScript, and Tailwind CSS.

## Overview

Buildnox is a professional landing page showcasing construction and architecture services. The site features:

- Responsive design optimized for mobile, tablet, and desktop
- Dynamic service showcase with planning, 3D modeling, construction, and renovation services
- Professional project gallery with masonry layout
- Client testimonials with rotating carousel
- Team showcase with featured and additional members
- Quality assurance section highlighting compliance standards
- Contact information and location mapping
- Full-featured footer with newsletter signup

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Images**: Next.js Image optimization
- **Font**: Geist (system font)

## Project Structure

```
components/
├── sections/
│   ├── header/           # Navigation header
│   ├── hero/             # Hero section
│   ├── services/         # Services showcase
│   ├── gallery/          # Project gallery
│   ├── testimonials/     # Client testimonials
│   ├── team/             # Team members
│   ├── quality/          # Quality assurance section
│   ├── contact/          # Contact map section
│   └── footer/           # Footer
├── ui/                   # shadcn/ui components
└── theme-provider.tsx    # Theme configuration

app/
├── layout.tsx            # Root layout
├── page.tsx              # Home page
└── globals.css           # Global styles

public/
└── images/               # Generated images
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/buildnox.git
cd buildnox
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Run the development server**
```bash
pnpm dev
# or
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the site.

## Available Scripts

```bash
# Development
pnpm dev              # Start dev server

# Production
pnpm build            # Build for production
pnpm start            # Start production server

# Linting & Type checking
pnpm lint             # Run ESLint
```

## Sections Overview

### Header
- Sticky navigation with gradient background
- Mobile hamburger menu
- Logo and navigation links
- Search functionality and CTA button

### Hero
- Full-screen section with gradient background
- Building image showcase
- Compelling headline and description
- Call-to-action button

### Services
- Grid layout showcasing 4 core services
- Service icons and descriptions
- Planning, 3D Modeling, Construction, Renovation

### Project Gallery
- Masonry grid layout with 7 projects
- Hover effects and smooth transitions
- Responsive image sizing

### Testimonials
- Dark navy background
- Rotating testimonial carousel
- Client avatars and names
- Navigation controls

### Team Section
- Featured team members (2) in larger cards
- Additional team members (4) in smaller cards
- Professional headshots

### Quality Section
- Split layout with worker image
- Quality control highlights
- Compliance and standards information

### Contact
- Map placeholder with location information
- Office address card with contact details
- Business hours display

### Footer
- Dark footer with multiple sections
- Quick links and services menu
- Newsletter signup form
- Social media icons
- Copyright information

## Customization

### Colors
Color scheme is defined using Tailwind CSS utility classes:
- Primary: Orange/Red gradient (`from-orange-500 to-red-500`)
- Secondary: Navy blue (`from-slate-900 to-slate-950`)
- Accents: White, grays

### Typography
- Heading font: Geist (sans-serif)
- Body font: Geist (sans-serif)
- Font sizes follow Tailwind's scale

### Images
Replace images in the `public/images/` directory:
- `building-hero.png` - Hero section building
- `building-gallery-*.png` - Gallery images
- `team-*.png` - Team member photos
- `quality-workers.png` - Quality section image

## Deployment

### Deploy to Vercel

The easiest way to deploy is with Vercel:

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import the GitHub repository
- Vercel will auto-detect Next.js configuration
- Click Deploy

3. **Environment Variables**
No environment variables are required for this project out of the box.

### Manual Deployment

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Server-side rendering for fast initial page load
- Responsive design ensures fast load on mobile networks

## Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, contact:
- Email: support@buildnox.com
- Phone: +1 (555) 123-4567
- Address: 123 Construction Ave, Building City, BC 12345

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)

---

Made with ❤️ by the Buildnox Team
