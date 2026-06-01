import Image from 'next/image';

export default function ProjectGallery() {
  const galleryItems = [
    {
      id: 1,
      src: '/images/building-gallery-1.png',
      alt: 'Tall building',
      className: 'md:col-span-1 md:row-span-2 h-64 md:h-full',
    },
    {
      id: 2,
      src: '/images/building-gallery-2.png',
      alt: 'Building with orange panels',
      className: 'md:col-span-1 h-40 md:h-full',
    },
    {
      id: 3,
      src: '/images/building-gallery-3.png',
      alt: 'Interior design',
      className: 'md:col-span-1 h-40 md:h-full',
    },
    {
      id: 4,
      src: '/images/construction-crane.png',
      alt: 'Construction crane',
      className: 'md:col-span-1 md:row-span-2 h-64 md:h-full',
    },
    {
      id: 5,
      src: '/images/arch-bridge.png',
      alt: 'Arch bridge',
      className: 'md:col-span-1 h-40 md:h-full',
    },
    {
      id: 6,
      src: '/images/building-construction.png',
      alt: 'Building construction',
      className: 'md:col-span-1 h-40 md:h-full',
    },
    {
      id: 7,
      src: '/images/office-building.png',
      alt: 'Modern office building',
      className: 'md:col-span-1 md:row-span-2 h-64 md:h-full',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[240px]">
          {galleryItems.map((item) => (
            <div key={item.id} className={`relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all ${item.className}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
