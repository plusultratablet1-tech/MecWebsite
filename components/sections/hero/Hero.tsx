import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden text-white"
    >
      {/* Page reveal transition overlay */}
      <div className="pointer-events-none fixed inset-0 z-[9999] flex animate-overlay-hide">
        <div className="h-full flex-1 bg-[#151515] animate-panel-up delay-[0ms]" />
        <div className="h-full flex-1 bg-[#151515] animate-panel-down delay-[120ms]" />
        <div className="h-full flex-1 bg-[#151515] animate-panel-up delay-[240ms]" />
        <div className="h-full flex-1 bg-[#151515] animate-panel-down delay-[360ms]" />
        <div className="h-full flex-1 bg-[#151515] animate-panel-up delay-[480ms]" />
      </div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Light overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-black/5" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1840px] grid-cols-1 items-end px-6 pt-24 md:grid-cols-2 md:px-10 lg:pt-28">
        {/* Left - Building */}
        <div className="relative hidden h-[calc(100vh-110px)] min-h-[650px] items-end md:flex">
          <Image
            src="/images/building-hero.png"
            alt="Modern building"
            width={950}
            height={950}
            priority
            className="absolute bottom-0 left-0 h-auto w-[98%] max-w-[930px] animate-building-in object-contain"
          />
        </div>

        {/* Right - Text */}
        <div className="flex min-h-[calc(100vh-110px)] flex-col justify-center pb-20 md:pb-24 md:pl-10 lg:pl-20">
          <h1 className="max-w-[820px] animate-text-in text-[46px] font-extrabold leading-[1.16] tracking-tight text-white sm:text-[60px] lg:text-[76px] xl:text-[86px]">
            We Build Something
            <br />
            New and Consistent
          </h1>

          <p className="mt-10 max-w-[760px] animate-text-in-2 text-[18px] leading-[1.9] tracking-[0.03em] text-white/90 sm:text-[20px] lg:text-[22px]">
            For over 80 years, We have been the trusted name in heating, air
            conditioning and plumbing businesses. Throughout the years, our
            number one goal has been to accurately .
          </p>

          <div className="mt-12 animate-text-in-3">
            <Link
              href="#about"
              className="inline-flex items-center gap-5 rounded-full border border-white px-10 py-5 text-[15px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#c69208]"
            >
              Discover More
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
