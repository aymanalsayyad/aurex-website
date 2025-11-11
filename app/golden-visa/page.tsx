import { CheckCircle, Clock, FileCheck, Award } from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'UAE Golden Visa Services - Expert Application Support | Aurex',
  description:
    'UAE Golden Visa application support with 95%+ success rate. Eligibility assessment, document preparation, and complete processing assistance.',
};

export default function GoldenVisaPage() {
  const eligibilityPaths = [
    {
      title: 'Property Investment',
      description: 'AED 2 million+ investment in off-plan or completed properties',
      requirements: ['Investment amount', 'Property proof', 'Financial statements'],
    },
    {
      title: 'Business Ownership',
      description: 'Ownership of a UAE-registered business with AED 1 million+ investment',
      requirements: ['Business registration', 'Ownership proof', 'Financial records'],
    },
    {
      title: 'Employment',
      description: 'Employment with a UAE company meeting specific criteria',
      requirements: ['Employment contract', 'Company registration', 'Salary verification'],
    },
    {
      title: 'Specialized Talents',
      description: 'Investors, entrepreneurs, and specialized professionals',
      requirements: ['Credentials', 'Portfolio', 'Sponsorship letter'],
    },
  ];

  const processSteps = [
    {
      icon: FileCheck,
      title: 'Document Preparation',
      description: 'We guide you through gathering all required documents with our checklist.',
    },
    {
      icon: CheckCircle,
      title: 'Eligibility Assessment',
      description: 'Our team assesses your eligibility and determines the best pathway.',
    },
    {
      icon: Clock,
      title: 'Application Submission',
      description: 'We prepare and submit your complete application to relevant authorities.',
    },
    {
      icon: Award,
      title: 'Status Tracking',
      description: 'Regular updates on your application status until approval.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center animate-fade-in-up">
          <span className="badge">GOLDEN VISA SERVICES</span>
          <h1 className="section-title mt-6 mb-6 gradient-text">UAE Golden Visa Made Simple</h1>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Expert guidance through every step of your Golden Visa application. 95%+ success rate
            with our comprehensive support.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#eligibility" className="btn-primary">
              Check Eligibility
            </Link>
            <Link href="/contact" className="btn-secondary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Why Aurex for Golden Visa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '✓', label: '95%+ Success Rate', desc: 'Industry-leading approval rate' },
              { icon: '📋', label: 'Complete Support', desc: 'Document to approval' },
              { icon: '⏱️', label: 'Fast Processing', desc: 'Expert guidance expedites process' },
              { icon: '💼', label: 'Expert Team', desc: 'Immigration specialists' },
            ].map((item, i) => (
              <div key={i} className="card text-center">
                <p className="text-4xl mb-3">{item.icon}</p>
                <p className="font-semibold text-dark-900 mb-1">{item.label}</p>
                <p className="text-sm text-dark-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Paths */}
      <section id="eligibility" className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Golden Visa Eligibility Pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibilityPaths.map((path, i) => (
              <div key={i} className="card-hover">
                <h3 className="text-lg font-semibold text-dark-900 mb-3">{path.title}</h3>
                <p className="text-dark-600 text-sm mb-4">{path.description}</p>
                <ul className="space-y-2">
                  {path.requirements.map((req, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-dark-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-600"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Our Proven Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="card-hover flex flex-col relative">
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-1 bg-primary-600"></div>
                  )}
                  <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-900 mb-2">{step.title}</h3>
                  <p className="text-dark-600 text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How long does the Golden Visa approval take?',
                a: 'Typically 30-60 days from submission, depending on application completeness and authority workload.',
              },
              {
                q: 'Can my family members get visas too?',
                a: 'Yes, you can sponsor immediate family members under the same Golden Visa.',
              },
              {
                q: 'What is the minimum investment required?',
                a: 'Varies by pathway: AED 2 million for real estate, AED 1 million for business ownership.',
              },
              {
                q: 'Is there a renewal process?',
                a: 'Golden Visa is valid for 10 years and can be renewed. We handle the entire renewal process.',
              },
            ].map((item, i) => (
              <div key={i} className="card">
                <p className="font-semibold text-dark-900 mb-2 text-sm">{item.q}</p>
                <p className="text-dark-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        badge="READY FOR YOUR GOLDEN VISA?"
        title="Start Your Application Today"
        subtitle="Connect with our immigration experts for a free eligibility assessment and personalized guidance."
        primaryCTA={{ label: 'Schedule Assessment', href: '/contact' }}
        secondaryCTA={{ label: 'Download Guide', href: '/#guides' }}
      />
    </>
  );
}
