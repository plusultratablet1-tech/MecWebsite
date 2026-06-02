"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "What We Do",
      href: "#service",
    },
    {
      label: "Location",
      href: "#location",
    },
    {
      label: "Gallery",
      href: "#projects",
    },
    {
      label: "Why MEC",
      href: "#why-choose-mec",
    },
    {
      label: "Vision",
      href: "#vision",
    },
    {
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-[999] w-full transition-all duration-500 ${
        isScrolled
          ? "bg-[#071126]/95 py-4 shadow-xl backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1840px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="#home" className="flex items-center">
          <Image
            src="/images/mec-logo (2).png"
            alt="Manila Ecommerce Center Logo"
            width={900}
            height={300}
            priority
            className="h-auto w-[220px] object-contain sm:w-[250px] md:w-[280px] lg:w-[310px]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 text-[15px] font-bold text-white lg:flex xl:gap-9">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative transition hover:text-[#c69208]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden items-center gap-6 lg:flex">
          <button
            type="button"
            aria-label="Search"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/80 text-white transition hover:bg-white hover:text-[#c69208]"
          >
            <Search className="h-5 w-5" />
          </button>

          <Link
            href="#contact"
            className="rounded-full border border-white px-8 py-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#c69208]"
          >
            Get Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="grid h-11 w-11 place-items-center border border-white/70 text-white lg:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`overflow-hidden bg-[#071126] transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[520px] border-t border-white/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-white/10 py-4 text-[15px] font-bold text-white transition hover:text-[#c69208]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 inline-flex w-fit rounded-full border border-white px-7 py-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#c69208]"
          >
            Get Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}
