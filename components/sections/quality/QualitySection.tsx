import Image from 'next/image';
import Link from 'next/link';
import { Shield, Building2, Zap, BarChart3 } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function QualitySection() {
  const qualityIcons = [
    { icon: Shield, label: 'Safety' },
    { icon: Building2, label: 'Quality' },
    { icon: Zap, label: 'Efficiency' },
    { icon: BarChart3, label: 'Standards' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
            <Image
              src="/images/quality-workers.png"
              alt="Construction workers"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Icons Row */}
            <div className="flex flex-wrap gap-4">
              {qualityIcons.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 text-gray-600">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="text-sm font-semibold hidden sm:inline">{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              A high level Quality Control in compliance with National and International regulations and standards.
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              We maintain the highest standards of quality control across all our projects. Our commitment to safety, sustainability, and excellence ensures that every project meets and exceeds both national and international building codes and regulations.
            </p>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition-colors w-fit"
            >
              Discover More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
