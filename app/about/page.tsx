import { CheckCircle, Users, Trophy, Globe } from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'About Aurex Consultancy - 15+ Years of Excellence in Dubai',
  description:
    'Leading Dubai consultancy with 15+ years expertise. 500+ successful clients, comprehensive business solutions.',
};

export default function AboutPage() {
  const achievements = [
    { icon: Trophy, label: '15+ Years', value: 'Excellence in Consulting' },
    { icon: Users, label: '500+', value: 'Satisfied Clients' },
    { icon: Globe, label: '17+', value: 'Countries Served' },
    { icon: CheckCircle, label: '883+', value: 'Successful Projects' },
  ];

  const values = [
    {
      title: 'Expertise',
      description:
        'Deep market knowledge combined with strategic thinking to deliver exceptional results.',
    },
    {
      title: 'Integrity',
      description: 'Transparent communication and ethical practices guide all our engagements.',
    },
    {
      title: 'Excellence',
      description: 'Commitment to delivering superior solutions that exceed expectations.',
    },
    {
      title: 'Partnership',
      description: 'Long-term relationships built on trust, reliability, and mutual success.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center animate-fade-in-up">
          <span className="badge">ABOUT US</span>
          <h1 className="section-title mt-6 mb-6 gradient-text">Transforming Vision into Reality</h1>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
            Aurex Consultancy stands as Dubai's trusted strategic partner, delivering comprehensive
            consulting and technical solutions that transform ambitious goals into tangible success.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} />
                  </div>
                  <p className="text-3xl font-bold text-primary-600 mb-1">{achievement.label}</p>
                  <p className="text-dark-600 text-sm">{achievement.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-12">Our Story</h2>
          <div className="prose prose-lg max-w-none text-dark-700">
            <p className="mb-6">
              Founded with a mission to transform how businesses operate in the UAE, Aurex Consultancy
              has grown into one of Dubai's most trusted consulting firms. Our journey spans over 15
              years of dedicated service to ambitious entrepreneurs, established businesses, and high-net-worth
              individuals.
            </p>
            <p className="mb-6">
              We specialize in providing comprehensive solutions across real estate investment, Golden
              Visa processing, business setup, and strategic consulting. Our team combines deep market
              expertise with innovative thinking to deliver solutions that matter.
            </p>
            <p>
              Today, we're proud to have facilitated over 500+ successful engagements across 17+
              countries, establishing ourselves as the premier destination for HNWI investors and
              forward-thinking businesses seeking excellence in Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-hover">
                <h3 className="text-xl font-semibold text-dark-900 mb-3">{value.title}</h3>
                <p className="text-dark-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="section-padding bg-gradient-to-b from-dark-50 to-white">
        <div className="container-custom text-center">
          <h2 className="section-title mb-6">Meet Our Expert Team</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto mb-8">
            Our team brings together decades of combined experience across consulting, real estate,
            finance, and technology.
          </p>
          <Link href="/team" className="btn-primary inline-flex items-center gap-2">
            View Our Team
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        badge="READY TO PARTNER?"
        title="Let's Transform Your Vision"
        subtitle="Connect with our expert team to discuss how we can support your goals."
        primaryCTA={{ label: 'Schedule Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'Learn About Services', href: '/services' }}
      />
    </>
  );
}
