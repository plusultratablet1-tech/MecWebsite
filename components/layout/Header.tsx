"use client";

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
          : "bg-transparent py-7"
      }`}
    >
      <div className="mx-auto flex max-w-[1840px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-4">
          <div className="relative h-12 w-12 shrink-0">
            <div className="absolute left-1 top-2 h-9 w-7 border-2 border-white" />
            <div className="absolute left-4 top-0 h-12 w-7 border-2 border-white" />
          </div>

          <div className="leading-none text-white">
            <div className="text-[30px] font-extrabold tracking-tight md:text-[36px]">
              MEC
            </div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.34em] md:text-[12px]">
              Manila Ecommerce Center
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 text-[15px] font-bold text-white lg:flex xl:gap-9">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative transition hover:text-white/70"
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
              className="border-b border-white/10 py-4 text-[15px] font-bold text-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 inline-flex w-fit rounded-full border border-white px-7 py-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-white"
          >
            Get Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}
