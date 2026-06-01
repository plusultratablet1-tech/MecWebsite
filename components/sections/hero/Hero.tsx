import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-16 md:pt-24 min-h-screen bg-gradient-to-br from-orange-500 via-orange-400 to-red-500 flex items-center overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-100px)]">
          {/* Left - Building Image */}
          <div className="relative h-80 md:h-[600px] hidden md:block order-2 md:order-1">
            <Image
              src="/images/building-hero.png"
              alt="Modern building"
              fill
              className="object-cover object-left"
              priority
            />
          </div>

          {/* Right - Content */}
          <div className="text-white space-y-6 md:space-y-8 order-1 md:order-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              We Build Something New and Consistent
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-xl leading-relaxed">
              We are the leading construction and architecture firm, providing world-class designing and architecture techniques. Throughout our over 30 years, we have provided excellent service and superior results.
            </p>

            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors w-fit shadow-lg"
            >
              Discover More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
