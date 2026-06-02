import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen justify-center overflow-hidden bg-[#071126] text-white"
    >
      {/* Page reveal transition overlay */}
      <div className="pointer-events-none fixed inset-0 z-[9999] flex animate-overlay-hide">
        <div className="h-full flex-1 bg-[#151515] animate-panel-up" />
        <div className="h-full flex-1 bg-[#151515] animate-panel-down" />
        <div className="h-full flex-1 bg-[#151515] animate-panel-up" />
        <div className="h-full flex-1 bg-[#151515] animate-panel-down" />
        <div className="h-full flex-1 bg-[#151515] animate-panel-up" />
      </div>

      {/* Hero fixed visual canvas */}
      <div className="relative min-h-screen w-full max-w-[1980px] overflow-hidden lg:max-h-[1080px]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Manila Ecommerce Center hero background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Light overlay for readability */}
        <div className="absolute inset-0 z-0 bg-black/5" />

        {/* Decorative soft circles */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-[4%] top-[23%] h-[540px] w-[540px] rounded-full border border-white/20" />
          <div className="absolute left-[10%] top-[26%] h-[430px] w-[430px] rounded-full bg-white/5" />
          <div className="absolute right-[25%] top-[20%] h-8 w-8 rounded-full bg-white/15" />
          <div className="absolute right-[35%] top-[36%] h-5 w-5 rounded-full bg-white/15" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto grid min-h-screen max-w-[1840px] grid-cols-1 items-end px-6 pt-24 md:grid-cols-2 md:px-10 lg:max-h-[1080px] lg:pt-28">
          {/* Left - Building */}
          <div className="relative hidden h-[calc(100vh-110px)] max-h-[970px] min-h-[650px] items-end md:flex">
            <Image
              src="/images/building-hero.png"
              alt="Manila Ecommerce Center building"
              width={980}
              height={980}
              priority
              className="absolute bottom-0 left-0 h-auto w-[100%] max-w-[950px] animate-building-in object-contain"
            />
          </div>

          {/* Right - Text */}
          <div className="flex min-h-[calc(100vh-110px)] max-h-[970px] flex-col justify-center pb-20 md:pb-24 md:pl-10 lg:pl-20">
            <div className="animate-text-in mb-7 flex items-center gap-4">
              <span className="h-[2px] w-[42px] bg-white" />
              <span className="text-[13px] font-extrabold uppercase tracking-[0.22em] text-white">
                Manila Ecommerce Center
              </span>
            </div>

            <h1 className="max-w-[760px] animate-text-in text-[34px] font-extrabold uppercase leading-[1.16] tracking-tight text-white sm:text-[44px] lg:text-[55px]">
              Leading the Future
              <br />
              of Business.
              <br />
              Strategically Positioned
              <br />
              for Success.
            </h1>

            <p className="mt-8 max-w-[720px] animate-text-in-2 text-[17px] leading-[1.85] tracking-[0.03em] text-white/90 sm:text-[19px] lg:text-[20px]">
              A modern business and commercial hub in the heart of Manila,
              designed for companies, entrepreneurs, creators, and growth-driven
              enterprises ready to operate, connect, and scale.
            </p>

            <div className="mt-10 flex animate-text-in-3 flex-col gap-4 sm:flex-row">
              <Link
                href="#service"
                className="inline-flex w-fit items-center gap-5 rounded-full border border-white px-9 py-4 text-[13px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#c69208]"
              >
                Explore MEC
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex w-fit items-center gap-5 rounded-full bg-white px-9 py-4 text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#c69208] transition hover:bg-[#071126] hover:text-white"
              >
                Send Inquiry
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
