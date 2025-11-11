'use client';

import {
  Building2,
  TrendingUp,
  Home,
  Scale,
  Cpu,
  BarChart3,
  Users,
  Award,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: 'Management & Strategic Consulting',
      description: 'Strategic planning and business optimization',
      link: '/services#management',
    },
    {
      icon: TrendingUp,
      title: 'Project Development Consulting',
      description: 'End-to-end project management and execution',
      link: '/services#project-development',
    },
    {
      icon: Home,
      title: 'Real Estate Consulting',
      description: 'Investment advisory and property management',
      link: '/services#real-estate',
    },
    {
      icon: Scale,
      title: 'Legal & Financial Consulting',
      description: 'Compliance, contracts, and financial planning',
      link: '/services#legal-financial',
    },
    {
      icon: Cpu,
      title: 'Technology Solutions',
      description: 'Digital transformation and IT consulting',
      link: '/services#technology',
    },
    {
      icon: BarChart3,
      title: 'Market Research',
      description: 'Industry analysis and competitive intelligence',
      link: '/services#market-research',
    },
    {
      icon: Users,
      title: 'Investor Services',
      description: 'Portfolio management and investment advisory',
      link: '/services#investor-services',
    },
    {
      icon: Award,
      title: 'Golden Visa Services',
      description: 'UAE residency application and processing',
      link: '/services#golden-visa',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-dark-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="badge">COMPREHENSIVE SOLUTIONS</span>
          <h2 className="section-title mt-4 mb-4">Our Services</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Comprehensive solutions for every business need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.link}
                className="group card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-dark-600 text-sm">{service.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/services" className="inline-flex items-center gap-2 btn-primary">
            View All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
