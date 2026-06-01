# Contributing to Buildnox

Thank you for your interest in contributing to Buildnox! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to maintain a welcoming and inclusive community.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear title and description
- Steps to reproduce the problem
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (OS, browser, Node version)

### Suggesting Enhancements

We welcome feature suggestions:
- Clear, descriptive title
- Detailed description of the feature
- Use cases and benefits
- Potential implementation approach

### Submitting Pull Requests

1. **Fork the repository** and create a feature branch
```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes** following our coding standards (see below)

3. **Test your changes**
```bash
pnpm build
pnpm lint
```

4. **Commit with clear messages**
```bash
git commit -m "type: description"
# Examples:
# feat: add new hero section animation
# fix: resolve header layout issue on mobile
# docs: update README with deployment steps
# style: improve button styling
# refactor: reorganize component structure
```

5. **Push to your fork**
```bash
git push origin feature/your-feature-name
```

6. **Open a Pull Request** with:
   - Clear title and description
   - Reference to any related issues
   - Screenshots if visual changes
   - Testing notes

## Coding Standards

### Component Structure

- Keep components focused and single-responsibility
- Place section components in `components/sections/{section-name}/`
- Export components via index.ts files in section folders
- Use TypeScript for type safety

### Naming Conventions

- **Components**: PascalCase (e.g., `Header.tsx`, `ServiceCard.tsx`)
- **Files**: PascalCase for components, kebab-case for utilities
- **Variables/Functions**: camelCase
- **Constants**: UPPER_CASE

### File Organization

```
components/sections/feature-name/
├── FeatureName.tsx          # Main component
├── FeatureNameCard.tsx      # Sub-component
├── index.ts                 # Exports
└── constants.ts             # Constants (if needed)
```

### Styling Guidelines

- Use Tailwind CSS utility classes
- Prefer semantic color tokens over hardcoded colors
- Keep component styling within the component file
- Use responsive prefixes (sm:, md:, lg:, xl:)
- Maintain consistent spacing using Tailwind's scale

### TypeScript

- Always define prop types
- Use proper typing for props and state
- Avoid `any` type; use `unknown` with proper narrowing
- Create interfaces for complex objects

```typescript
interface ComponentProps {
  title: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export default function MyComponent({ title, onClick }: ComponentProps) {
  // component code
}
```

### React Best Practices

- Use functional components and hooks
- Keep components small and focused
- Memoize expensive computations
- Use proper dependency arrays in useEffect
- Avoid prop drilling; use context when appropriate

### Image Guidelines

- Always use Next.js Image component for optimization
- Include alt text for accessibility
- Optimize images before adding (use tools like TinyPNG)
- Place images in `public/images/` directory

## Development Workflow

### Setup Development Environment

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# In another terminal, run type checking
pnpm tsc --watch
```

### Testing Changes

1. **Visual Testing**
   - Test on different screen sizes
   - Verify on mobile devices or use DevTools
   - Check dark/light theme if applicable

2. **Type Checking**
```bash
pnpm tsc
```

3. **Build Verification**
```bash
pnpm build
```

### Before Submitting

- Run `pnpm build` and ensure no errors
- Check TypeScript compilation
- Test responsive design (mobile, tablet, desktop)
- Verify accessibility (keyboard navigation, screen readers)
- Update documentation if needed

## Project Structure Overview

- **`app/`** - Next.js App Router pages and layouts
- **`components/sections/`** - Page section components organized by feature
- **`components/ui/`** - Reusable shadcn/ui components
- **`public/images/`** - Static images
- **`lib/`** - Utility functions
- **`hooks/`** - Custom React hooks

## Performance Considerations

- Use dynamic imports for heavy components
- Optimize images with Next.js Image
- Keep bundle size in check
- Profile with browser DevTools

## Accessibility

- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers
- Maintain sufficient color contrast

## Git Commit Types

Use these prefixes for clarity:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Styling changes (CSS, formatting)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Build, dependencies, or tooling changes

## Questions or Need Help?

- Check existing GitHub issues and discussions
- Review the README and documentation
- Open a discussion for questions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing to Buildnox!
