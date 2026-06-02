import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#ff3f2f] text-white"
    >
      {/* Background texture layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: "url('/images/hero-bg.jpeg')",
        }}
      />

      {/* Fallback orange overlay to match Buildnox tone */}
      <div className="absolute inset-0 z-0 bg-[#ff3f2f]/80" />

      {/* Decorative circles / texture details */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[3%] top-[25%] h-[560px] w-[560px] rounded-full border border-white/25" />
        <div className="absolute left-[10%] top-[26%] h-[455px] w-[455px] rounded-full bg-[#df3529]/20" />

        <div className="absolute left-[15%] top-[39%] h-12 w-12 rounded-full bg-[#d93328]/30" />
        <div className="absolute right-[29%] top-[25%] h-7 w-7 rounded-full bg-[#d93328]/25" />
        <div className="absolute right-[40%] top-[36%] h-5 w-5 rounded-full bg-[#d93328]/25" />

        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      {/* Hero layout */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1840px] grid-cols-1 items-end px-6 pt-24 md:grid-cols-2 md:px-10 lg:pt-28">
        {/* Left building */}
        <div className="relative hidden h-[calc(100vh-110px)] min-h-[650px] items-end md:flex">
          <Image
            src="/images/building-hero.png"
            alt="Modern building"
            width={950}
            height={950}
            priority
            className="absolute bottom-0 left-0 h-auto w-[98%] max-w-[930px] object-contain"
          />
        </div>

        {/* Right text content */}
        <div className="flex min-h-[calc(100vh-110px)] flex-col justify-center pb-20 md:pb-24 md:pl-10 lg:pl-20">
          <h1 className="max-w-[820px] text-[46px] font-extrabold leading-[1.16] tracking-tight text-white sm:text-[60px] lg:text-[76px] xl:text-[86px]">
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
              href="#about"
              className="inline-flex items-center gap-5 rounded-full border border-white px-10 py-5 text-[15px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#ff3f2f]"
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
