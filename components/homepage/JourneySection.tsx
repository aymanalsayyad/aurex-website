'use client';

import { BookOpen, TrendingUp, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function JourneySection() {
  const steps = [
    {
      number: '01',
      icon: BookOpen,
      title: 'Learn First',
      description:
        'Download comprehensive guides from market experts. Understand Dubai real estate, Golden Visa pathways, and wealth building strategies before you invest.',
      features: ['3 Expert-Written Guides', '155+ Pages of Content', 'Instant PDF Download'],
    },
    {
      number: '02',
      icon: TrendingUp,
      title: 'Invest Smart',
      description:
        'Data-driven tools and market intelligence to guide your decisions. Calculate ROI, assess visa eligibility, and analyze market trends.',
      features: ['ROI Calculator', 'Investment Profile Quiz', 'Market Intelligence'],
    },
    {
      number: '03',
      icon: Building2,
      title: 'Build Legacy',
      description:
        'Complete support from property purchase to Golden Visa to business establishment and ongoing wealth management.',
      features: ['Real Estate Consulting', 'Golden Visa Processing', 'Business Setup & Advisory'],
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-dark-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="badge">YOUR SUCCESS BLUEPRINT</span>
          <h2 className="section-title mt-4 mb-4">Your Dubai Success Journey</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            The only platform that combines education, tools, and complete support for HNWI investors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 -right-4 lg:-right-3 w-8 h-1 bg-gradient-to-r from-primary-600 to-transparent"></div>
                )}

                {/* Card */}
                <div className="card-hover h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl font-bold text-primary-600">{step.number}</div>
                    <div className="w-16 h-16 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                      <Icon size={32} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-dark-900 mb-3">{step.title}</h3>
                  <p className="text-dark-600 mb-6 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-dark-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-600"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-dark-700 mb-6 font-medium">
            Want personalized guidance? Our experts are ready to help.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Schedule Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
