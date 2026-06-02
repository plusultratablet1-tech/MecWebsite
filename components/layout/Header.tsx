"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

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

      const currentSection = navItems
        .map((item) => {
          const section = document.querySelector(item.href);

          if (!section) return null;

          const rect = section.getBoundingClientRect();

          return {
            href: item.href,
            top: rect.top,
            bottom: rect.bottom,
          };
        })
        .filter(Boolean)
        .find((section) => {
          if (!section) return false;

          return section.top <= 160 && section.bottom >= 160;
        });

      if (currentSection) {
        setActiveSection(currentSection.href);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
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
            src="/images/MECLOGOW.png"
            alt="Manila Ecommerce Center Logo"
            width={1800}
            height={640}
            priority
            className="h-auto w-[220px] object-contain sm:w-[250px] md:w-[280px] lg:w-[310px]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 text-[15px] font-bold text-white lg:flex xl:gap-9">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative transition duration-300 hover:text-[#141d31] ${
                  isActive ? "text-[#141d31]" : "text-white"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-[#141d31] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden items-center lg:flex">
          <Link
            href="#contact"
            className={`rounded-full border px-8 py-4 text-[13px] font-extrabold uppercase tracking-[0.16em] transition duration-300 ${
              activeSection === "#contact"
                ? "border-[#141d31] bg-[#141d31] text-white"
                : "border-white text-white hover:border-[#141d31] hover:bg-[#141d31] hover:text-white"
            }`}
          >
            Get Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="grid h-11 w-11 place-items-center border border-white/70 text-white transition duration-300 hover:border-[#141d31] hover:bg-[#141d31]"
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
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(item.href);
                }}
                className={`border-b border-white/10 py-4 text-[15px] font-bold transition duration-300 hover:text-[#141d31] ${
                  isActive ? "text-[#141d31]" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="#contact"
            onClick={() => {
              setIsOpen(false);
              setActiveSection("#contact");
            }}
            className={`mt-5 inline-flex w-fit rounded-full border px-7 py-4 text-[13px] font-extrabold uppercase tracking-[0.16em] transition duration-300 ${
              activeSection === "#contact"
                ? "border-[#141d31] bg-[#141d31] text-white"
                : "border-white text-white hover:border-[#141d31] hover:bg-[#141d31] hover:text-white"
            }`}
          >
            Get Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}
