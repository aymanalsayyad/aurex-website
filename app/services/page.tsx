import { 
  Building2, TrendingUp, Home, Scale, Cpu, BarChart3, Users, Award,
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Business Consulting Services Dubai - Aurex Consultancy',
  description:
    'Comprehensive consulting services: strategic planning, real estate, legal, technology, Golden Visa, and investor services.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: 'Management & Strategic Consulting',
      description: 'Transform your business vision into actionable strategy with our expert guidance.',
      features: ['Strategic Planning', 'Business Optimization', 'Change Management', 'Performance Analysis'],
    },
    {
      icon: TrendingUp,
      title: 'Project Development Consulting',
      description: 'End-to-end project management ensuring timely delivery and maximum ROI.',
      features: ['Project Planning', 'Resource Management', 'Risk Mitigation', 'Execution Support'],
    },
    {
      icon: Home,
      title: 'Real Estate Consulting',
      description: 'Navigate Dubai real estate market with data-driven investment advisory.',
      features: ['Market Analysis', 'Investment Strategy', 'Property Valuation', 'Portfolio Management'],
    },
    {
      icon: Scale,
      title: 'Legal & Financial Consulting',
      description: 'Comprehensive compliance, contracts, and financial planning solutions.',
      features: ['Legal Compliance', 'Contract Negotiation', 'Financial Planning', 'Tax Optimization'],
    },
    {
      icon: Cpu,
      title: 'Technology Solutions',
      description: 'Digital transformation and IT consulting to modernize your operations.',
      features: ['Digital Strategy', 'System Integration', 'Custom Development', 'IT Consulting'],
    },
    {
      icon: BarChart3,
      title: 'Market Research',
      description: 'Deep industry analysis and competitive intelligence for informed decisions.',
      features: ['Market Analysis', 'Competitor Research', 'Trend Forecasting', 'Consumer Insights'],
    },
    {
      icon: Users,
      title: 'Investor Services',
      description: 'Professional portfolio management and investment advisory for HNWIs.',
      features: ['Portfolio Management', 'Asset Allocation', 'Investment Advisory', 'Wealth Planning'],
    },
    {
      icon: Award,
      title: 'Golden Visa Services',
      description: 'Expert support for UAE Golden Visa application and residency processing.',
      features: ['Eligibility Assessment', 'Document Preparation', 'Application Support', 'Status Tracking'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center animate-fade-in-up">
          <span className="badge">OUR SERVICES</span>
          <h1 className="section-title mt-6 mb-6 gradient-text">Comprehensive Solutions for Every Need</h1>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            From strategy and real estate to technology and visa services, we deliver end-to-end
            consulting solutions tailored to your goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card-hover group flex flex-col h-full">
                  <div className="w-14 h-14 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-900 mb-3">{service.title}</h3>
                  <p className="text-dark-600 text-sm mb-6 flex-grow">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-dark-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-600"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Why Choose Aurex for Your Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
            {[
              {
                title: '15+ Years Experience',
                description: 'Proven track record delivering results across GCC and European markets.',
              },
              {
                title: '500+ Satisfied Clients',
                description: 'Trusted by businesses and HNWIs for comprehensive consulting solutions.',
              },
              {
                title: 'Expert Team',
                description: 'Industry specialists bringing deep expertise and strategic thinking.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="text-lg font-semibold text-dark-900 mb-3">{item.title}</h3>
                <p className="text-dark-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Our Engagement Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: '01', label: 'Consultation' },
              { step: '02', label: 'Assessment' },
              { step: '03', label: 'Proposal' },
              { step: '04', label: 'Execution' },
              { step: '05', label: 'Delivery' },
              { step: '06', label: 'Support' },
            ].map((item, i) => (
              <div key={i} className="relative">
                {i < 5 && (
                  <div className="hidden lg:block absolute top-8 -right-2 w-4 h-1 bg-primary-600"></div>
                )}
                <div className="card text-center">
                  <p className="text-3xl font-bold text-primary-600 mb-2">{item.step}</p>
                  <p className="text-sm font-semibold text-dark-900">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        badge="READY TO GET STARTED?"
        title="Transform Your Business Today"
        subtitle="Let our expert team help you achieve your business goals with tailored consulting solutions."
        primaryCTA={{ label: 'Schedule Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'Download Resources', href: '/#guides' }}
      />
    </>
  );
}
