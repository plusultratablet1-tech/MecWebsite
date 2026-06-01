'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: 'Buildnox delivered our project on time with exceptional quality. Their attention to detail and professional team made the entire process smooth and hassle-free.',
      author: 'Robert Joe',
      role: 'CEO',
      image: '/images/team-1.png',
    },
    {
      text: 'Working with Buildnox was an incredible experience. They transformed our vision into reality with innovative design solutions and excellent execution.',
      author: 'Albert Flores',
      role: 'Director',
      image: '/images/team-4.png',
    },
  ];

  const logos = [
    { name: 'Build Circle', initials: 'BC' },
    { name: 'Lux Group', initials: 'LG' },
    { name: 'Buildnox', initials: 'BX' },
    { name: 'Arch Corp', initials: 'AC' },
    { name: 'Functional Arch', initials: 'FA' },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left - Title */}
          <div className="space-y-4 text-white">
            <div className="text-orange-400 font-semibold text-sm tracking-wide">OUR TESTIMONIALS</div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-balance">
              What They&apos;re Talking About Company?
            </h2>
          </div>

          {/* Right - Testimonial Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-lg transition-all duration-300 ${
                    idx === activeTestimonial
                      ? 'bg-white text-gray-900 scale-100'
                      : 'bg-white/10 text-white scale-95 opacity-50'
                  }`}
                >
                  <Quote className="w-8 h-8 text-orange-500 mb-4" />
                  <p className="text-sm leading-relaxed mb-6 line-clamp-3">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-xs opacity-75">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-2 pt-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 flex-1 justify-center">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === activeTestimonial ? 'bg-orange-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="border-t border-white/20 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {logos.map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center text-white/50 font-semibold text-sm text-center px-2">
                  {logo.initials}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
