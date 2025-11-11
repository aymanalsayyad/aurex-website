'use client';

import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-primary-50 via-white to-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="badge">YOUR TRUSTED DUBAI PARTNER</span>
          </div>

          {/* Main Headline */}
          <h1 className="section-title gradient-text mb-6">
            Your Gateway to Dubai Investment Excellence
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-dark-600 mb-8 leading-relaxed">
            Expert guidance for property investment, Golden Visa, and business establishment in the UAE. Learn from industry experts, access interactive tools, and get complete support from vision to reality.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: '📚', label: 'Free Expert-Written Guides' },
              { icon: '🛠️', label: 'Interactive Investment Tools' },
              { icon: '✓', label: 'Complete Dubai Journey Support' },
            ].map((benefit, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-dark-700">
                <span className="text-2xl">{benefit.icon}</span>
                <span className="font-medium">{benefit.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#guides" className="btn-primary">
              <span className="flex items-center gap-2">
                <Download size={20} />
                Download Free Guide
              </span>
            </Link>
            <Link href="/#calculators" className="btn-secondary">
              <span className="flex items-center gap-2">
                ROI Calculator
                <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>

        {/* Hero Image/Visual (Placeholder) */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-2xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl h-96 sm:h-[400px] flex items-center justify-center">
            <div className="text-white text-center">
              <p className="text-lg font-semibold">Premium Investment Platform Visual</p>
              <p className="text-white/80 text-sm">(Replace with your hero image)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
