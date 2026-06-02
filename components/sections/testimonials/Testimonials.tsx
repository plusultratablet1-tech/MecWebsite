"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useMemo, useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "MEC gave our brand a stronger operational foundation. From space, support, and digital commerce access, the environment helped us move with more confidence.",
      author: "Marray Joe",
      role: "Retail Partner",
      image: "/images/team-1.png",
    },
    {
      text: "Working inside a business ecosystem made collaboration easier. The team understands growth, execution, and the support modern enterprises need.",
      author: "Albert Joe",
      role: "Business Owner",
      image: "/images/team-4.png",
    },
    {
      text: "The center gives businesses the right space to build, connect, and operate. It is designed for brands that want practical support and long-term scalability.",
      author: "Robert Joe",
      role: "Operations Lead",
      image: "/images/team-2.png",
    },
    {
      text: "MEC creates a professional environment where companies can focus on growth. The location, facilities, and business support make expansion more efficient.",
      author: "Mary Joe",
      role: "E-Commerce Partner",
      image: "/images/team-3.png",
    },
  ];

  const missionElements = [
    {
      title: "Our Mission",
      description:
        "To provide businesses with a modern commercial environment where operations, digital commerce, and growth can work together.",
    },
    {
      title: "Our Vision",
      description:
        "To become a leading business and e-commerce hub that supports brands, entrepreneurs, and enterprises in scaling with confidence.",
    },
    {
      title: "Our Commitment",
      description:
        "To deliver reliable spaces, practical support, and a professional ecosystem built for long-term business success.",
    },
    {
      title: "Our Ecosystem",
      description:
        "We connect business spaces, digital systems, creator commerce, and operational solutions into one integrated growth environment.",
    },
    {
      title: "Our Standard",
      description:
        "We aim to maintain a high level of service, accessibility, and business-ready infrastructure for every partner and tenant.",
    },
  ];

  const visibleTestimonials = useMemo(() => {
    const first = testimonials[activeIndex];
    const second = testimonials[(activeIndex + 1) % testimonials.length];

    return [first, second];
  }, [activeIndex, testimonials]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="testimonials-section relative overflow-hidden bg-[#071126] py-20 text-white md:py-24 lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
          {/* Left Title */}
          <div className="testimonial-heading">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[2px] w-[38px] bg-[#ff3f35]" />
              <span className="text-[15px] font-extrabold uppercase tracking-[0.22em] text-[#ff3f35]">
                Testimonials
              </span>
            </div>

            <h2 className="max-w-[430px] text-[42px] font-extrabold leading-[1.22] tracking-tight text-white sm:text-[50px] lg:text-[56px] xl:text-[62px]">
              What They&apos;re Talking About Company ?
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="testimonial-content">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
              {visibleTestimonials.map((testimonial, index) => (
                <article
                  key={`${testimonial.author}-${activeIndex}`}
                  className={`testimonial-card testimonial-delay-${index + 1}`}
                >
                  {/* Card Box */}
                  <div className="testimonial-box relative rounded-[8px] bg-white px-10 py-11 text-[#222222] shadow-none transition duration-500 hover:-translate-y-2">
                    <Quote className="mb-7 h-14 w-14 stroke-[1.6] text-[#ff3f35]" />

                    <p className="max-w-[420px] text-[19px] leading-[1.75] tracking-[0.04em] text-[#343434]">
                      {testimonial.text}
                    </p>

                    {/* Speech triangle */}
                    <span className="absolute -bottom-[18px] left-[88px] h-0 w-0 border-l-[26px] border-r-[26px] border-t-[18px] border-l-transparent border-r-transparent border-t-white" />
                  </div>

                  {/* Author */}
                  <div className="mt-10 flex items-center gap-6 pl-[70px]">
                    <div className="relative h-[82px] w-[82px] overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        sizes="82px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-[22px] font-extrabold leading-tight text-white">
                        {testimonial.author}
                      </h3>
                      <p className="mt-2 text-[15px] font-medium tracking-[0.08em] text-[#ff3f35]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="testimonial-nav mt-10 flex items-center gap-5 pl-[70px]">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prevTestimonial}
                className="grid h-[58px] w-[58px] place-items-center rounded-full border border-white/70 text-white transition duration-300 hover:border-[#ff3f35] hover:bg-[#ff3f35]"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                aria-label="Next testimonial"
                onClick={nextTestimonial}
                className="grid h-[58px] w-[58px] place-items-center rounded-full border border-white/70 text-white transition duration-300 hover:border-[#ff3f35] hover:bg-[#ff3f35]"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mission Elements */}
        <div className="testimonial-logos mt-24 border-t border-white/10 pt-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {missionElements.map((item, index) => (
              <article
                key={item.title}
                className={`testimonial-logo testimonial-logo-delay-${
                  index + 1
                } group min-h-[210px] border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#ff3f35]/70 hover:bg-white/[0.06]`}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[14px] font-extrabold text-white/60 transition duration-300 group-hover:border-[#ff3f35] group-hover:text-[#ff3f35]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mb-4 text-[20px] font-extrabold leading-tight text-white">
                  {item.title}
                </h3>

                <p className="text-[14px] leading-[1.75] text-white/50">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Go to top marker */}
      <a
        href="#home"
        className="absolute bottom-[78px] right-[66px] hidden flex-col items-center gap-4 text-[#9ca3af] lg:flex"
        aria-label="Go to top"
      >
        <span className="h-[58px] w-[3px] bg-[#ff3f35]" />
        <span className="vertical-rl text-[13px] font-extrabold uppercase tracking-[0.18em]">
          Go To Top
        </span>
      </a>
    </section>
  );
}
