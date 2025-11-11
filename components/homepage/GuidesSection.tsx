'use client';

import { Download, FileText } from 'lucide-react';
import Link from 'next/link';

export default function GuidesSection() {
  const guides = [
    {
      badge: 'FREE PDF - 60 Pages',
      title: 'Complete Dubai Real Estate Investment Guide',
      description:
        'Comprehensive 60-page guide covering market analysis, investment strategies, and expert insights for 2025.',
      topics: ['Market Analysis', 'Property Types', 'ROI Calculations', 'Legal Requirements'],
      downloads: '2,847+',
      link: '/guides/real-estate',
    },
    {
      badge: 'FREE PDF - 45 Pages',
      title: 'UAE Golden Visa Handbook 2025',
      description:
        'Comprehensive 45-page guide covering eligibility, application process, and success strategies.',
      topics: ['Eligibility Criteria', 'Application Process', 'Required Documents', 'Success Tips'],
      downloads: '3,156+',
      link: '/guides/golden-visa',
    },
    {
      badge: 'FREE PDF - 50 Pages',
      title: 'HNWI Tax & Wealth Optimization Guide',
      description:
        'Comprehensive 50-page guide covering tax optimization, wealth structuring, and asset protection.',
      topics: ['Tax Optimization', 'Wealth Structuring', 'Asset Protection', 'Estate Planning'],
      downloads: '1,923+',
      link: '/guides/wealth-management',
    },
  ];

  return (
    <section id="guides" className="section-padding bg-gradient-to-b from-white to-dark-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="badge">EXPERT RESOURCES</span>
          <h2 className="section-title mt-4 mb-4">Download Expert Investment Guides</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Free comprehensive guides to help you master Dubai investment. No credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {guides.map((guide, index) => (
            <div key={index} className="card-hover flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-accent-100 text-accent-700">
                  {guide.badge}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-dark-900 mb-3">{guide.title}</h3>
              <p className="text-dark-600 text-sm mb-6 leading-relaxed flex-grow">
                {guide.description}
              </p>

              <div className="mb-6">
                <p className="text-xs font-semibold text-dark-500 uppercase mb-3">Key Topics:</p>
                <div className="flex flex-wrap gap-2">
                  {guide.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs bg-primary-50 text-primary-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-dark-100 pt-6 flex items-center justify-between">
                <span className="text-sm text-dark-600">
                  <span className="font-semibold text-dark-900">{guide.downloads}</span> Downloads
                </span>
                <Link
                  href={guide.link}
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors"
                >
                  <Download size={18} />
                  Download
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg p-8 sm:p-12 text-center text-white">
          <p className="text-lg font-semibold mb-4">Want personalized guidance?</p>
          <p className="text-white/90 mb-6">Our experts are ready to help you succeed.</p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-dark-100">
            Schedule Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
