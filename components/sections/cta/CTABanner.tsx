import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#ff3f35] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute -left-24 -top-24 h-[380px] w-[380px] rounded-full border border-white/20" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-[460px] w-[460px] rounded-full bg-white/10" />

      <div className="relative z-10 mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-10 px-6 lg:flex-row lg:items-center lg:px-10">
        <div>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-[38px] bg-white" />
            <span className="text-[13px] font-extrabold uppercase tracking-[0.22em] text-white">
              Start Your Business Move
            </span>
          </div>

          <h2 className="max-w-[900px] text-[40px] font-extrabold leading-[1.18] tracking-tight sm:text-[50px] lg:text-[60px]">
            Ready to grow your business at Manila Ecommerce Center?
          </h2>
        </div>

        <Link
          href="#contact"
          className="inline-flex shrink-0 items-center gap-4 rounded-full border border-white px-9 py-5 text-[15px] font-extrabold uppercase tracking-[0.14em] transition hover:bg-white hover:text-[#ff3f35]"
        >
          Send Inquiry
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
