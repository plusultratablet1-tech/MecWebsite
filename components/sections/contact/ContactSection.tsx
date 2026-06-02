import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowUp,
  Building2,
} from "lucide-react";

export default function ContactSection() {
  const usefulLinks = [
    { label: "Home", href: "#home" },
    { label: "What We Do", href: "#service" },
    { label: "Location", href: "#location" },
    { label: "Gallery", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "Office Spaces", href: "#service" },
    { label: "Co-Working Areas", href: "#service" },
    { label: "Business Support", href: "#service" },
    { label: "E-Commerce Ecosystem", href: "#service" },
    { label: "Strategic Location", href: "#location" },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#071126] text-white">
      {/* Map / Contact Top Area */}
      <div className="relative h-[310px] overflow-hidden bg-[#dce7df]">
        <iframe
          title="Manila Ecommerce Center Map"
          src="https://www.google.com/maps?q=180%20Casal%20St%2C%20San%20Miguel%2C%20Manila%2C%20Metro%20Manila&output=embed"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Gold Contact Strip */}
        <div className="absolute bottom-0 left-0 z-10 w-full bg-[#c69208]">
          <div className="mx-auto flex max-w-[1500px] flex-col gap-3 px-6 py-5 text-white md:flex-row md:items-center md:justify-between lg:px-10">
            <div className="flex items-center gap-3">
              <Facebook className="h-5 w-5 shrink-0" />
              <span className="text-[18px] font-extrabold tracking-[0.02em]">
                Manila Ecommerce Center
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0" />
              <a
                href="tel:+639176783965"
                className="text-[18px] font-extrabold tracking-[0.02em] transition hover:text-[#071126]"
              >
                +63917 678 3965
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0" />
              <a
                href="mailto:manilaecommercecenter@gmail.com"
                className="text-[18px] font-extrabold tracking-[0.02em] transition hover:text-[#071126]"
              >
                manilaecommercecenter@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0" />
              <span className="text-[18px] font-extrabold tracking-[0.02em]">
                180 Casal St, San Miguel, Manila
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="mx-auto max-w-[1500px] px-6 pb-10 pt-20 lg:px-10 lg:pt-24">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_0.8fr_1.1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="#home" className="inline-flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0">
                <div className="absolute left-1 top-2 h-10 w-8 border-2 border-white" />
                <div className="absolute left-5 top-0 h-14 w-8 border-2 border-white" />
              </div>

              <div>
                <h2 className="text-[32px] font-extrabold leading-none tracking-tight text-white">
                  MEC
                </h2>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.32em] text-white/55">
                  Manila Ecommerce Center
                </p>
              </div>
            </Link>

            <p className="mt-9 max-w-[370px] text-[17px] font-medium leading-[1.8] tracking-[0.02em] text-white/55">
              A modern business and e-commerce hub strategically located in the
              heart of Manila, built for entrepreneurs, brands, creators, and
              growing enterprises.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-[24px] font-extrabold text-white">
              Useful Links
            </h3>

            <ul className="mt-8 space-y-5">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[17px] font-medium tracking-[0.02em] text-white/55 transition hover:text-[#c69208]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[24px] font-extrabold text-white">
              Our Services
            </h3>

            <ul className="mt-8 space-y-5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-[17px] font-medium tracking-[0.02em] text-white/55 transition hover:text-[#c69208]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Inquiry */}
          <div>
            <h3 className="text-[24px] font-extrabold text-white">
              Send Inquiry
            </h3>

            <p className="mt-8 max-w-[360px] text-[17px] font-medium leading-[1.75] text-white/55">
              Have questions about spaces, availability, or partnerships? Send
              us an inquiry and our team will get back to you.
            </p>

            <form className="mt-8 flex max-w-[380px] overflow-hidden border border-white/15 bg-[#0b1628]">
              <input
                type="email"
                placeholder="Enter your email address"
                className="min-w-0 flex-1 bg-transparent px-5 py-4 text-[15px] text-white outline-none placeholder:text-white/35"
              />

              <button
                type="submit"
                aria-label="Send inquiry"
                className="grid h-[58px] w-[68px] shrink-0 place-items-center bg-[#c69208] text-white transition hover:bg-white hover:text-[#c69208]"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-white transition hover:border-[#c69208] hover:bg-[#c69208]"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-white transition hover:border-[#c69208] hover:bg-[#c69208]"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href="mailto:manilaecommercecenter@gmail.com"
                aria-label="Email Manila Ecommerce Center"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-white transition hover:border-[#c69208] hover:bg-[#c69208]"
              >
                <Mail className="h-4 w-4" />
              </a>

              <a
                href="tel:+639176783965"
                aria-label="Call Manila Ecommerce Center"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-white transition hover:border-[#c69208] hover:bg-[#c69208]"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 pt-9 text-[15px] font-medium tracking-[0.04em] text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© Copyright Manila Ecommerce Center 2026. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-[#c69208]" />
            <span>Created for Manila Ecommerce Center</span>
          </div>
        </div>
      </div>

      {/* Go To Top */}
      <Link
        href="#home"
        aria-label="Go to top"
        className="absolute bottom-[72px] right-[60px] hidden flex-col items-center gap-4 text-white/45 transition hover:text-[#c69208] xl:flex"
      >
        <span className="h-[58px] w-[2px] bg-white/35 transition group-hover:bg-[#c69208]" />
        <span className="vertical-rl text-[13px] font-extrabold uppercase tracking-[0.18em]">
          Go To Top
        </span>
        <ArrowUp className="h-4 w-4" />
      </Link>
    </footer>
  );
}
