"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Manila Ecommerce Center provides a professional and accessible environment for teams that need a reliable business location in the heart of Manila.",
      author: "Marray Joe",
      role: "Customer",
      image: "/images/team-1.png",
    },
    {
      text: "The location is strategic, the space is business-ready, and the overall environment supports companies that want to operate and grow efficiently.",
      author: "Albert Joe",
      role: "Business Owner",
      image: "/images/team-4.png",
    },
    {
      text: "MEC gives modern businesses the advantage of accessibility, visibility, and a professional setting that supports day-to-day operations.",
      author: "Clarisse Tan",
      role: "Tenant Partner",
      image: "/images/team-2.png",
    },
    {
      text: "A strong choice for entrepreneurs, creators, and business teams looking for a Manila-based hub with practical growth opportunities.",
      author: "Daniel Reyes",
      role: "Entrepreneur",
      image: "/images/team-3.png",
    },
  ];

  const logos = [
    {
      name: "Build Circle",
      icon: "linked",
    },
    {
      name: "LOXIS GROUP",
      icon: "dots",
    },
    {
      name: "Buildnox",
      icon: "leaf",
    },
    {
      name: "Archi Corp.",
      icon: "blocks",
    },
    {
      name: "Functional Arch",
      icon: "circle",
    },
  ];

  return (
    <section
      id="testimonials"
      className="testimonials-section relative overflow-hidden bg-[#071126] text-white"
    >
      <div className="mx-auto max-w-[1500px] px-6 pb-20 pt-20 md:pb-24 md:pt-24 lg:px-10 lg:pb-[95px] lg:pt-[110px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
          {/* Left Heading */}
          <div className="testimonial-heading">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-[38px] bg-[#c69208]" />
              <span className="text-[13px] font-extrabold uppercase tracking-[0.22em] text-[#c69208]">
                Testimonials
              </span>
            </div>

            <h2 className="max-w-[430px] text-[32px] font-extrabold leading-[1.23] tracking-tight text-white sm:text-[34px] lg:text-[35px]">
              What They&apos;re
              <br />
              Talking About
              <br />
              MEC
            </h2>
          </div>

          {/* Right Cards */}
          <div className="testimonial-content">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
              {testimonials.map((testimonial, index) => (
                <article
                  key={testimonial.author}
                  className={`testimonial-card testimonial-delay-${index + 1}`}
                >
                  {/* White Card */}
                  <div className="testimonial-box relative rounded-[7px] bg-white px-10 py-10 text-[#222222] transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c69208]/20">
                    <Quote className="mb-6 h-12 w-12 stroke-[1.7] text-[#c69208]" />

                    <p className="max-w-[420px] text-[17px] leading-[1.85] tracking-[0.035em] text-[#343434]">
                      {testimonial.text}
                    </p>

                    {/* Speech Triangle */}
                    <span className="absolute -bottom-[17px] left-[70px] h-0 w-0 border-l-[24px] border-r-[24px] border-t-[17px] border-l-transparent border-r-transparent border-t-white" />
                  </div>

                  {/* Author */}
                  <div className="mt-9 flex items-center gap-5 pl-[55px]">
                    <div className="relative h-[66px] w-[66px] overflow-hidden rounded-full ring-2 ring-[#c69208]/70">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        sizes="66px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-[19px] font-extrabold leading-tight text-white">
                        {testimonial.author}
                      </h3>

                      <p className="mt-2 text-[14px] font-medium tracking-[0.08em] text-[#c69208]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="testimonial-nav mt-8 flex items-center gap-5 pl-[55px]">
              <button
                type="button"
                aria-label="Previous testimonial"
                className="grid h-[52px] w-[52px] place-items-center rounded-full border border-white/70 text-white transition duration-300 hover:border-[#c69208] hover:bg-[#c69208]"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                aria-label="Next testimonial"
                className="grid h-[52px] w-[52px] place-items-center rounded-full border border-white/70 text-white transition duration-300 hover:border-[#c69208] hover:bg-[#c69208]"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Strip */}
      <div className="testimonial-logos border-t border-white/10">
        <div className="mx-auto grid max-w-[1920px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className={`testimonial-logo testimonial-logo-delay-${
                index + 1
              } group flex min-h-[175px] flex-col items-center justify-center border-r border-white/10 px-6 text-center transition duration-300 last:border-r-0 hover:bg-[#c69208]/10`}
            >
              <LogoMark type={logo.icon} />

              <p className="mt-5 text-[15px] font-medium tracking-[0.04em] text-white/55 transition duration-300 group-hover:text-[#c69208]">
                {logo.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Go to Top Marker */}
      <a
        href="#home"
        className="absolute bottom-[78px] right-[66px] hidden flex-col items-center gap-4 text-[#9ca3af] lg:flex"
        aria-label="Go to top"
      >
        <span className="h-[58px] w-[3px] bg-[#c69208]" />
        <span className="vertical-rl text-[13px] font-extrabold uppercase tracking-[0.18em]">
          Go To Top
        </span>
      </a>
    </section>
  );
}

function LogoMark({ type }: { type: string }) {
  if (type === "linked") {
    return (
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        className="text-white/55 transition duration-300 group-hover:text-[#c69208]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="27"
          cy="40"
          r="18"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M31 30H51V10H31V30Z"
          stroke="currentColor"
          strokeWidth="5"
        />
      </svg>
    );
  }

  if (type === "dots") {
    return (
      <svg
        width="80"
        height="70"
        viewBox="0 0 80 70"
        fill="none"
        className="text-white/55 transition duration-300 group-hover:text-[#c69208]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="19" cy="17" r="7" fill="currentColor" />
        <circle cx="50" cy="17" r="7" fill="currentColor" />
        <circle cx="70" cy="17" r="7" fill="currentColor" />
        <path
          d="M14 53L48 20"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M36 53L66 23"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "leaf") {
    return (
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        className="text-white/55 transition duration-300 group-hover:text-[#c69208]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 10C37 13 47 27 47 50C29 48 18 36 18 10Z"
          fill="currentColor"
        />
        <path
          d="M52 25C43 28 38 36 38 52C50 49 56 39 52 25Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "blocks") {
    return (
      <svg
        width="76"
        height="70"
        viewBox="0 0 76 70"
        fill="none"
        className="text-white/55 transition duration-300 group-hover:text-[#c69208]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 42H30V62H10V42Z"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M32 28H52V48H32V28Z"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M50 8H70V28H50V8Z"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M30 42L52 28"
          stroke="currentColor"
          strokeWidth="5"
        />
      </svg>
    );
  }

  return (
    <svg
      width="76"
      height="70"
      viewBox="0 0 76 70"
      fill="none"
      className="text-white/55 transition duration-300 group-hover:text-[#c69208]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 35C12 21.7452 22.7452 11 36 11H40C53.2548 11 64 21.7452 64 35"
        stroke="currentColor"
        strokeWidth="5"
      />
      <path
        d="M64 35C64 48.2548 53.2548 59 40 59H36C22.7452 59 12 48.2548 12 35"
        stroke="currentColor"
        strokeWidth="5"
      />
      <path d="M13 35H63" stroke="currentColor" strokeWidth="5" />
    </svg>
  );
}
