import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#ff3f2f] text-white"
    >
      {/* Background texture / circles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Large circle behind building */}
        <div className="absolute left-[3%] top-[24%] h-[560px] w-[560px] rounded-full border border-white/25" />
        <div className="absolute left-[9%] top-[25%] h-[460px] w-[460px] rounded-full bg-[#df3529]/20" />

        {/* Soft red dots */}
        <div className="absolute right-[25%] top-[19%] h-9 w-9 rounded-full bg-[#dc3327]/35" />
        <div className="absolute right-[37%] top-[34%] h-5 w-5 rounded-full bg-[#dc3327]/35" />
        <div className="absolute left-[16%] top-[38%] h-12 w-12 rounded-full bg-[#dc3327]/30" />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1840px] grid-cols-1 items-end px-6 pt-24 md:grid-cols-2 md:px-10 lg:pt-28">
        {/* Left - Building Image */}
        <div className="relative hidden h-[calc(100vh-120px)] min-h-[650px] items-end md:flex">
          <Image
            src="/images/building-hero.png"
            alt="Modern building"
            width={950}
            height={950}
            priority
            className="absolute bottom-0 left-0 h-auto w-[96%] max-w-[920px] object-contain"
          />
        </div>

        {/* Right - Content */}
        <div className="flex min-h-[calc(100vh-120px)] flex-col justify-center pb-20 md:pb-28 md:pl-8 lg:pl-16">
          <h1 className="max-w-[780px] text-[48px] font-extrabold leading-[1.16] tracking-tight text-white sm:text-[60px] lg:text-[76px] xl:text-[86px]">
            We Build Something
            <br />
            New and Consistent
          </h1>

          <p className="mt-10 max-w-[760px] text-[18px] leading-[1.9] tracking-[0.03em] text-white/90 sm:text-[20px] lg:text-[22px]">
            For over 80 years, We have been the trusted name in heating, air
            conditioning and plumbing businesses. Throughout the years, our
            number one goal has been to accurately .
          </p>

          <div className="mt-12">
            <Link
              href="#projects"
              className="inline-flex items-center gap-5 rounded-full border border-white px-9 py-5 text-[15px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#ff3f2f]"
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
