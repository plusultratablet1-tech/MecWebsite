import Image from "next/image";

export default function ProjectGallery() {
  const galleryItems = [
    {
      id: 1,@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --font-sans: 'Geist', 'Geist Fallback';
  --font-mono: 'Geist Mono', 'Geist Mono Fallback';
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground;
  }
}

/* =========================================================
   Buildnox-style Hero Reveal Animation
   Used by: components/sections/hero/Hero.tsx
   ========================================================= */

@keyframes overlayHide {
  0% {
    visibility: visible;
    opacity: 1;
  }

  88% {
    visibility: visible;
    opacity: 1;
  }

  100% {
    visibility: hidden;
    opacity: 0;
  }
}

@keyframes panelUp {
  0% {
    transform: translateY(0);
  }

  35% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
}

@keyframes panelDown {
  0% {
    transform: translateY(0);
  }

  35% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(100%);
  }
}

@keyframes buildingIn {
  0% {
    opacity: 0;
    transform: translateY(45px) scale(1.04);
  }

  58% {
    opacity: 0;
    transform: translateY(45px) scale(1.04);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes textIn {
  0% {
    opacity: 0;
    transform: translateY(35px);
  }

  62% {
    opacity: 0;
    transform: translateY(35px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-overlay-hide {
  animation: overlayHide 3.2s ease forwards;
}

.animate-panel-up {
  animation: panelUp 1.1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  animation-delay: 2.1s;
}

.animate-panel-down {
  animation: panelDown 1.1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  animation-delay: 2.1s;
}

.animate-building-in {
  opacity: 0;
  animation: buildingIn 3.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-text-in {
  opacity: 0;
  animation: textIn 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-text-in-2 {
  opacity: 0;
  animation: textIn 3.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-text-in-3 {
  opacity: 0;
  animation: textIn 4.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* =========================================================
   Project Gallery Reveal Animation
   Used by: components/sections/gallery/ProjectGallery.tsx
   ========================================================= */

@keyframes galleryCardIn {
  0% {
    opacity: 0;
    transform: translateY(45px) scale(0.98);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes galleryImageZoomIn {
  0% {
    transform: scale(1.12);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes galleryWipeReveal {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-101%);
  }
}

.gallery-card {
  opacity: 0;
  transform: translateY(45px) scale(0.98);
  animation-name: galleryCardIn;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-fill-mode: forwards;
}

.gallery-image {
  transform: scale(1.12);
  animation-name: galleryImageZoomIn;
  animation-duration: 1.4s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-fill-mode: forwards;
}

.gallery-wipe {
  transform: translateY(0);
  animation-name: galleryWipeReveal;
  animation-duration: 1.05s;
  animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  animation-fill-mode: forwards;
}

.gallery-delay-1,
.gallery-delay-1 .gallery-image,
.gallery-delay-1 .gallery-wipe {
  animation-delay: 0.1s;
}

.gallery-delay-2,
.gallery-delay-2 .gallery-image,
.gallery-delay-2 .gallery-wipe {
  animation-delay: 0.22s;
}

.gallery-delay-3,
.gallery-delay-3 .gallery-image,
.gallery-delay-3 .gallery-wipe {
  animation-delay: 0.34s;
}

.gallery-delay-4,
.gallery-delay-4 .gallery-image,
.gallery-delay-4 .gallery-wipe {
  animation-delay: 0.46s;
}

.gallery-delay-5,
.gallery-delay-5 .gallery-image,
.gallery-delay-5 .gallery-wipe {
  animation-delay: 0.58s;
}

.gallery-delay-6,
.gallery-delay-6 .gallery-image,
.gallery-delay-6 .gallery-wipe {
  animation-delay: 0.7s;
}

.gallery-delay-7,
.gallery-delay-7 .gallery-image,
.gallery-delay-7 .gallery-wipe {
  animation-delay: 0.82s;
}
      src: "/images/building-gallery-1.png",
      alt: "White residential building",
      className: "lg:col-start-1 lg:row-start-1 lg:row-span-2",
      delayClass: "gallery-delay-1",
    },
    {
      id: 2,
      src: "/images/building-gallery-2.png",
      alt: "Modern building facade",
      className: "lg:col-start-2 lg:row-start-1",
      delayClass: "gallery-delay-2",
    },
    {
      id: 3,
      src: "/images/building-gallery-3.png",
      alt: "Interior design lounge chair",
      className: "lg:col-start-3 lg:row-start-1 lg:row-span-2",
      delayClass: "gallery-delay-3",
    },
    {
      id: 4,
      src: "/images/construction-crane.png",
      alt: "Construction site with cranes",
      className: "lg:col-start-1 lg:row-start-3 lg:row-span-2",
      delayClass: "gallery-delay-4",
    },
    {
      id: 5,
      src: "/images/arch-bridge.png",
      alt: "Construction arch with crane",
      className: "lg:col-start-2 lg:row-start-2 lg:row-span-2",
      delayClass: "gallery-delay-5",
    },
    {
      id: 6,
      src: "/images/building-construction.png",
      alt: "Construction crane closeup",
      className: "lg:col-start-2 lg:row-start-4",
      delayClass: "gallery-delay-6",
    },
    {
      id: 7,
      src: "/images/office-building.png",
      alt: "Blue modern office building",
      className: "lg:col-start-3 lg:row-start-3 lg:row-span-2",
      delayClass: "gallery-delay-7",
    },
  ];

  return (
    <section id="projects" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1210px] px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[250px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`gallery-card relative overflow-hidden rounded-[4px] bg-gray-100 ${item.className} ${item.delayClass}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="gallery-image object-cover"
                priority={item.id <= 3}
              />

              {/* Shutter wipe overlay */}
              <div className="gallery-wipe pointer-events-none absolute inset-0 z-10 bg-[#111827]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
