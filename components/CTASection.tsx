'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  badge: string;
  title: string;
  subtitle: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  background?: 'dark' | 'light' | 'gradient';
}

export default function CTASection({
  badge,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  background = 'gradient',
}: CTASectionProps) {
  const bgClasses = {
    dark: 'bg-dark-900 text-white',
    light: 'bg-primary-50 text-dark-900',
    gradient: 'bg-gradient-to-r from-primary-600 to-accent-600 text-white',
  };

  return (
    <section className={`section-padding ${bgClasses[background]} relative overflow-hidden`}>
      {/* Background Decoration */}
      {background === 'gradient' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      )}

      <div className="container-custom relative z-10 text-center">
        <span className={background === 'gradient' ? 'badge bg-white/20 text-white' : 'badge'}>
          {badge}
        </span>

        <h2 className={`section-title mt-6 mb-4 ${background !== 'gradient' ? 'text-dark-900' : 'text-white'}`}>
          {title}
        </h2>

        <p
          className={`text-lg max-w-2xl mx-auto mb-8 ${
            background === 'gradient' ? 'text-white/90' : 'text-dark-600'
          }`}
        >
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className={background === 'gradient' ? 'btn-primary bg-white text-primary-600 hover:bg-dark-100' : 'btn-primary'}
          >
            <span className="flex items-center gap-2">
              {primaryCTA.label}
              <ArrowRight size={20} />
            </span>
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className={background === 'gradient' ? 'btn-secondary text-white border-white hover:bg-white hover:text-primary-600' : 'btn-secondary'}
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
