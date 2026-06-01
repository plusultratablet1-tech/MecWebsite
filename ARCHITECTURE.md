# Project Architecture

This document describes the architecture and organization of the Buildnox project.

## Project Structure

```
buildnox/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata and providers
│   ├── page.tsx                 # Home page (imports all sections)
│   └── globals.css              # Global styles and Tailwind configuration
│
├── components/                   # Reusable components
│   ├── sections/                # Page section components (organized by feature)
│   │   ├── header/
│   │   │   ├── Header.tsx       # Main header component
│   │   │   └── index.ts         # Export barrel
│   │   ├── hero/
│   │   │   ├── Hero.tsx
│   │   │   └── index.ts
│   │   ├── services/
│   │   │   ├── ServicesIntro.tsx
│   │   │   └── index.ts
│   │   ├── gallery/
│   │   │   ├── ProjectGallery.tsx
│   │   │   └── index.ts
│   │   ├── testimonials/
│   │   │   ├── Testimonials.tsx
│   │   │   └── index.ts
│   │   ├── team/
│   │   │   ├── TeamSection.tsx
│   │   │   └── index.ts
│   │   ├── quality/
│   │   │   ├── QualitySection.tsx
│   │   │   └── index.ts
│   │   ├── contact/
│   │   │   ├── ContactMap.tsx
│   │   │   └── index.ts
│   │   └── footer/
│   │       ├── Footer.tsx
│   │       └── index.ts
│   │
│   ├── ui/                      # shadcn/ui components (pre-built)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   │
│   └── theme-provider.tsx       # Theme provider wrapper
│
├── lib/                         # Utility functions
│   └── utils.ts                # Tailwind cn() utility
│
├── hooks/                       # Custom React hooks
│   ├── use-mobile.ts
│   └── use-toast.ts
│
├── public/                      # Static files
│   └── images/                 # Generated and static images
│       ├── building-hero.png
│       ├── building-gallery-*.png
│       ├── team-*.png
│       └── ...
│
├── styles/                      # (Legacy) Additional styles
│
├── .github/                     # GitHub configuration
│   └── workflows/              # GitHub Actions CI/CD
│       └── ci.yml             # Continuous Integration workflow
│
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.mjs          # PostCSS configuration
├── components.json             # shadcn/ui configuration
├── vercel.json                 # Vercel deployment configuration
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── README.md                   # Project documentation
├── CONTRIBUTING.md             # Contribution guidelines
├── ARCHITECTURE.md             # This file
└── LICENSE                     # MIT License
```

## Component Organization Strategy

### Section-Based Organization

All page sections are organized in `components/sections/{section-name}/`:

Each section contains:
- **Main Component** (e.g., `Header.tsx`) - The primary component for that section
- **Sub-components** (e.g., `HeaderNav.tsx`, `MobileMenu.tsx`) - Smaller, reusable components specific to the section
- **index.ts** - Barrel export for clean imports

### Benefits

1. **Scalability**: Easy to add new sections or features
2. **Maintainability**: Related code is grouped together
3. **Clean Imports**: Use barrel exports (`import { Header } from '@/components/sections/header'`)
4. **Clear Structure**: New developers can quickly understand the layout
5. **Separation of Concerns**: Each section manages its own state and logic

### Import Pattern

```typescript
// Good - Using barrel exports
import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';

// Avoid - Direct imports
import Header from '@/components/sections/header/Header';
```

## Component Guidelines

### Creating New Sections

1. **Create the section folder**
```bash
mkdir components/sections/new-section
```

2. **Create the main component**
```typescript
// components/sections/new-section/NewSection.tsx
export default function NewSection() {
  return (
    <section className="py-16 md:py-24">
      {/* Content */}
    </section>
  );
}
```

3. **Export via barrel**
```typescript
// components/sections/new-section/index.ts
export { default as NewSection } from './NewSection';
```

4. **Add to page.tsx**
```typescript
import { NewSection } from '@/components/sections/new-section';

export default function Page() {
  return (
    <main>
      {/* Other sections */}
      <NewSection />
    </main>
  );
}
```

## Styling Architecture

### Tailwind CSS

- Uses Tailwind CSS v4 with utility-first approach
- All styling is done via `className` attributes
- No CSS modules or styled-components
- Responsive design using Tailwind prefixes: `sm:`, `md:`, `lg:`, `xl:`

### Color System

The design uses:
- **Primary Gradient**: Orange to Red (`from-orange-500 to-red-500`)
- **Secondary Gradient**: Navy Blue (`from-slate-900`)
- **Neutrals**: White, grays, black

### Layout Patterns

```typescript
// Flexbox (most layouts)
<div className="flex items-center justify-between gap-4">

// Grid (complex 2D layouts)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Spacing Scale
className="p-4 m-6 gap-8"  // Use Tailwind's scale, not arbitrary values
```

## State Management

- **Client Components**: Use React hooks (`useState`, `useEffect`, `useContext`)
- **Server Components**: Use async/await for data fetching in RSCs
- **No Global State Library**: Current project doesn't require Redux or Zustand
- **Data Passing**: Props drilling or React Context for shared state

## Type System

### TypeScript

- All components have typed props
- Use interfaces for complex objects
- Avoid `any` type; use `unknown` with proper narrowing

```typescript
interface ComponentProps {
  title: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Component({ title, onClick }: ComponentProps) {
  // Component code
}
```

## Performance Optimization

### Image Optimization

- Use Next.js `Image` component for all images
- Images are automatically optimized and served in modern formats
- Responsive images with `fill` and `object-fit`

```typescript
<Image
  src="/images/example.png"
  alt="Description"
  fill
  className="object-cover"
/>
```

### Code Splitting

- Each section is a separate component and can be lazy-loaded if needed
- Next.js automatically handles code splitting at the route level
- Consider `dynamic()` imports for heavy components

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
});
```

### Rendering Strategy

- **Server Components**: Use by default (better performance)
- **Client Components**: Use only when necessary (interactivity, hooks)
- Mark interactive components with `'use client'` directive

## Deployment

### Vercel Deployment

The project is configured for easy Vercel deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel automatically detects Next.js and deploys
4. Uses `vercel.json` for custom configuration

### Environment Variables

Configured in `vercel.json` under the `env` section:

```json
{
  "env": {
    "NEXT_PUBLIC_ANALYTICS_ID": {
      "description": "Analytics tracking ID",
      "required": false
    }
  }
}
```

## Git Workflow

### Branch Strategy

- `main` - Production branch
- `develop` - Development branch
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches

### Commit Convention

```
type: description

- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Styling changes
- refactor: Code refactoring
- perf: Performance improvements
- test: Adding/updating tests
- chore: Build/dependency changes
```

## CI/CD Pipeline

### GitHub Actions

Automated via `.github/workflows/ci.yml`:

1. **Build**: Compiles Next.js project
2. **Type Check**: Runs TypeScript compiler
3. **Lint**: Checks code quality with ESLint

Runs on:
- Push to `main` or `develop`
- Pull requests to `main` or `develop`
- Multiple Node versions (18.x, 20.x)

## Development Tools

### Code Quality

- **TypeScript**: Type checking
- **ESLint**: Linting
- **Prettier**: Code formatting (via shadcn/ui setup)

### Development

- **pnpm**: Package manager (faster, more efficient)
- **Next.js Dev Server**: Hot reload with Fast Refresh
- **Tailwind CSS**: Utility CSS framework

### Build

- **Turbopack**: Next.js bundler (faster builds)
- **TypeScript**: Full type safety in build
- **Image Optimization**: Automatic via Next.js

## Future Considerations

### Scalability

When the project grows, consider:

1. **State Management**: Add Zustand or Redux if complex state needed
2. **Data Fetching**: Move to SWR, React Query, or tRPC
3. **Testing**: Add Jest and React Testing Library
4. **API Routes**: Create `app/api/` routes for backend functionality
5. **Database**: Integrate with Neon, Supabase, or other databases
6. **Authentication**: Implement with Better Auth or similar
7. **Analytics**: Add Vercel Analytics or similar service

### Code Organization

As complexity grows:

1. Create `services/` folder for business logic
2. Create `constants/` folder for constants
3. Create `types/` folder for TypeScript types
4. Create `hooks/` folder for custom hooks (already started)
5. Create `utils/` folder for utility functions

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Home page with all sections |
| `app/layout.tsx` | Root layout and metadata |
| `vercel.json` | Vercel deployment config |
| `.github/workflows/ci.yml` | CI/CD pipeline |
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript config |
| `next.config.mjs` | Next.js config |

## Questions?

Refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [React Docs](https://react.dev)
