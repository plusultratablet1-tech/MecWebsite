import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      {/* Contact Info Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Address</p>
                <p className="text-white/80 text-sm">123 Architecture Lane, New York, NY 10001</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Email</p>
                <p className="text-white/80 text-sm">info@buildnox.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Call us</p>
                <p className="text-white/80 text-sm">+1 (212) 555-0123</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center font-bold text-blue-900">
                B
              </div>
              <span className="font-bold text-lg">Buildnox</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Leading construction and architecture firm providing innovative solutions and world-class service for over 30 years.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 bg-white/10 hover:bg-orange-500 rounded-full transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-orange-500 rounded-full transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-orange-500 rounded-full transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-orange-500 rounded-full transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Useful Links */}
          <div>
            <h4 className="font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="#home" className="hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#service" className="hover:text-orange-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-orange-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  Architecture Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  3D Modeling
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  Renovation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  Project Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">Subscribe to get the latest updates and news from us.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:border-orange-400 focus:outline-none text-sm"
              />
              <button className="px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Buildnox Construction. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Created by <span className="text-orange-400 font-semibold">Buildnox Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
