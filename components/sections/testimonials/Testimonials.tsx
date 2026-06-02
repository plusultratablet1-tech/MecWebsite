"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has...",
      author: "Marray Joe",
      role: "Customer",
      image: "/images/team-1.png",
    },
    {
      text: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has...",
      author: "Albert Joe",
      role: "Ceo of Finda",
      image: "/images/team-4.png",
    },
  ];

  const logos = [
    { name: "Build Circle", initials: "BC" },
    { name: "Lux Group", initials: "LG" },
    { name: "Buildnox", initials: "BX" },
    { name: "Arch Corp", initials: "AC" },
    { name: "Functional Arch", initials: "FA" },
  ];

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
              What They&apos;re Talking About Comapany ?
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="testimonial-content">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
              {testimonials.map((testimonial, index) => (
                <article
                  key={testimonial.author}
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
                className="grid h-[58px] w-[58px] place-items-center rounded-full border border-white/70 text-white transition duration-300 hover:border-[#ff3f35] hover:bg-[#ff3f35]"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                aria-label="Next testimonial"
                className="grid h-[58px] w-[58px] place-items-center rounded-full border border-white/70 text-white transition duration-300 hover:border-[#ff3f35] hover:bg-[#ff3f35]"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Logo Grid / Bottom Strip */}
        <div className="testimonial-logos mt-24 border-t border-white/10 pt-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {logos.map((logo, index) => (
              <div
                key={logo.name}
                className={`testimonial-logo testimonial-logo-delay-${index + 1} flex flex-col items-center justify-center gap-3 text-center`}
              >
                <div className="grid h-16 w-16 place-items-center rounded-full border border-white/15 text-[15px] font-extrabold text-white/45 transition duration-300 hover:border-[#ff3f35] hover:text-[#ff3f35]">
                  {logo.initials}
                </div>

                <p className="text-[14px] font-medium tracking-[0.04em] text-white/45">
                  {logo.name}
                </p>
              </div>
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
