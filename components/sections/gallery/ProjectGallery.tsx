import Image from "next/image";

export default function ProjectGallery() {
  const galleryItems = [
    {
      id: 1,
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

              <div className="gallery-wipe pointer-events-none absolute inset-0 z-10 bg-[#111827]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
