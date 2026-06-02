"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Maximize2, X } from "lucide-react";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  className: string;
  delayClass: string;
};

export default function ProjectGallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/images/building-gallery-1.png",
      alt: "White residential building",
      title: "Architecture Project",
      category: "Building / Construction",
      className: "lg:col-start-1 lg:row-start-1 lg:row-span-2",
      delayClass: "gallery-delay-1",
    },
    {
      id: 2,
      src: "/images/building-gallery-2.png",
      alt: "Modern building facade",
      title: "Modern Facade",
      category: "Architecture / Design",
      className: "lg:col-start-2 lg:row-start-1",
      delayClass: "gallery-delay-2",
    },
    {
      id: 3,
      src: "/images/building-gallery-3.png",
      alt: "Interior design lounge chair",
      title: "Interior Planning",
      category: "Interior / Renovation",
      className: "lg:col-start-3 lg:row-start-1 lg:row-span-2",
      delayClass: "gallery-delay-3",
    },
    {
      id: 4,
      src: "/images/construction-crane.png",
      alt: "Construction site with cranes",
      title: "Construction Site",
      category: "Project / Development",
      className: "lg:col-start-1 lg:row-start-3 lg:row-span-2",
      delayClass: "gallery-delay-4",
    },
    {
      id: 5,
      src: "/images/arch-bridge.png",
      alt: "Construction arch with crane",
      title: "Structural Work",
      category: "Engineering / Build",
      className: "lg:col-start-2 lg:row-start-2 lg:row-span-2",
      delayClass: "gallery-delay-5",
    },
    {
      id: 6,
      src: "/images/building-construction.png",
      alt: "Construction crane closeup",
      title: "Heavy Equipment",
      category: "Construction / Planning",
      className: "lg:col-start-2 lg:row-start-4",
      delayClass: "gallery-delay-6",
    },
    {
      id: 7,
      src: "/images/office-building.png",
      alt: "Blue modern office building",
      title: "Office Building",
      category: "Commercial / Architecture",
      className: "lg:col-start-3 lg:row-start-3 lg:row-span-2",
      delayClass: "gallery-delay-7",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.22,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className={`gallery-section bg-white py-16 md:py-20 lg:py-24 ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <div className="mx-auto max-w-[1210px] px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[250px]">
            {galleryItems.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`gallery-card gallery-hover-card group relative cursor-pointer overflow-hidden rounded-[4px] bg-gray-100 ${item.className} ${item.delayClass}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="gallery-image object-cover"
                  priority={item.id <= 3}
                />

                {/* Scroll reveal wipe */}
                <div className="gallery-wipe pointer-events-none absolute inset-0 z-30 bg-[#071126]" />

                {/* Hover yellow overlay */}
                <div className="gallery-hover-overlay pointer-events-none absolute inset-0 z-10 bg-[#c69208]/90 opacity-0" />

                {/* Hover action icons */}
                <div className="gallery-hover-icons absolute right-5 top-5 z-20 flex flex-col gap-2">
                  <button
                    type="button"
                    aria-label="View full size image"
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedImage(item);
                    }}
                    className="grid h-10 w-10 place-items-center border border-white/80 text-white transition hover:bg-white hover:text-[#c69208]"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    aria-label="Open project image"
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedImage(item);
                    }}
                    className="grid h-10 w-10 place-items-center border border-white/80 text-white transition hover:bg-white hover:text-[#c69208]"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>

                {/* Hover text */}
                <div className="gallery-hover-content absolute bottom-7 left-7 z-20 max-w-[82%]">
                  <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-white/90">
                    {item.category}
                  </p>

                  <h3 className="text-[24px] font-extrabold leading-tight text-white md:text-[28px]">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full-size Image Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close full size image"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/50 text-white transition hover:border-[#c69208] hover:bg-[#c69208]"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative z-10 flex h-full max-h-[92vh] w-full max-w-[1500px] flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-0 flex-1 overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="mt-5 text-center text-white">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#c69208]">
                {selectedImage.category}
              </p>

              <h3 className="mt-2 text-[24px] font-extrabold md:text-[32px]">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
