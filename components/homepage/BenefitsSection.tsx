'use client';

import { CheckCircle } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Expert-Written Guides',
      description: 'Comprehensive PDFs from Dubai market experts',
      details: ['3 Expert Guides', '155+ Pages', 'Instant Download'],
    },
    {
      title: 'Interactive Tools',
      description: 'ROI calculators and market intelligence',
      details: ['ROI Calculator', 'Investment Quiz', 'Market Data'],
    },
    {
      title: 'Complete Support',
      description: 'From property to Golden Visa to business setup',
      details: ['Real Estate', 'Golden Visa', 'Business Setup'],
    },
    {
      title: 'Proven Results',
      description: '500+ successful HNWI investments facilitated',
      details: ['15+ Years', '500+ Clients', '1000+ Projects'],
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="badge">WHY CHOOSE AUREX</span>
          <h2 className="section-title mt-4 mb-4">Why Learn with Aurex?</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            We combine education, tools, and complete support for HNWI investors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-hover group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-dark-600 text-sm mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-dark-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-600"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
