'use client';

import { Building, Award, Briefcase, FileCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CalculatorsSection() {
  const calculators = [
    {
      icon: Building,
      title: 'Company Formation',
      description: 'Mainland & Freezone',
      link: '/tools/company-formation',
    },
    {
      icon: Award,
      title: 'Golden Visa',
      description: '10-year residency',
      link: '/tools/golden-visa-cost',
    },
    {
      icon: Briefcase,
      title: 'Business Setup',
      description: 'Complete packages',
      link: '/tools/business-setup-cost',
    },
    {
      icon: FileCheck,
      title: 'Visa Services',
      description: 'Residency processing',
      link: '/tools/visa-services-cost',
    },
  ];

  return (
    <section id="calculators" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="badge-accent">INSTANT COST ESTIMATES</span>
          <h2 className="section-title mt-4 mb-4">Get Your Service Cost in Seconds</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Transparent pricing, 25% below market average. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {calculators.map((calc, index) => {
            const Icon = calc.icon;
            return (
              <Link
                key={index}
                href={calc.link}
                className="group card-hover flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 text-primary-600 flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-1">
                  {calc.title}
                </h3>
                <p className="text-dark-600 text-sm mb-4">{calc.description}</p>
                <div className="mt-auto flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Calculate Now
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="bg-primary-50 rounded-lg p-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          {[
            { icon: '⚡', text: 'Instant Estimates' },
            { icon: '💰', text: '25% Below Market' },
            { icon: '✓', text: 'Transparent Pricing' },
            { icon: '👨‍💼', text: 'Expert Support' },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-primary-700 font-medium">
              <span className="text-2xl">{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
