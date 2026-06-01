'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Service', href: '#service' },
    { label: 'Projects', href: '#projects' },
    { label: 'Pages', href: '#pages' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-orange-500 via-orange-400 to-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center font-bold text-orange-500">
              B
            </div>
            <span className="text-white font-bold text-lg hidden sm:inline">Buildnox</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-sm font-medium hover:text-orange-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side icons and CTA */}
          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <Search className="w-5 h-5 text-white" />
            </button>
            <button className="hidden md:inline-block px-6 py-2 bg-white text-orange-500 font-semibold rounded hover:bg-orange-50 transition-colors">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-white hover:bg-white/10 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full mx-4 px-4 py-2 bg-white text-orange-500 font-semibold rounded hover:bg-orange-50 transition-colors">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
