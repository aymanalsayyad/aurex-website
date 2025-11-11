import { ChevronDown } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'FAQ - Aurex Consultancy',
  description: 'Frequently asked questions about our services, Golden Visa, real estate, and consulting solutions.',
};

export default function FAQPage() {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'How long has Aurex been in business?',
          a: 'Aurex Consultancy has been serving clients with excellence for 15+ years, establishing ourselves as a trusted partner across the GCC and European markets.',
        },
        {
          q: 'What areas does Aurex serve?',
          a: 'We primarily serve Dubai and the UAE, with expertise across GCC countries and experience with European markets. Our HNWI clients span 17+ countries.',
        },
        {
          q: 'Do you offer free consultations?',
          a: 'Yes, we provide complimentary initial consultations. This helps us understand your needs and determine how we can best support your goals.',
        },
        {
          q: 'How do you ensure confidentiality?',
          a: 'Client confidentiality is paramount. We maintain strict NDA agreements and follow all applicable data protection regulations.',
        },
      ],
    },
    {
      category: 'Investment',
      questions: [
        {
          q: 'What is the minimum investment for Dubai real estate?',
          a: 'There is no official minimum, but properties typically start from AED 500,000. For Golden Visa eligibility through real estate, the minimum is AED 2 million.',
        },
        {
          q: 'What are the typical ROI expectations for Dubai real estate?',
          a: 'Rental yields typically range from 5-8% annually, with capital appreciation varying by location and property type. Our investment advisory team provides detailed market analysis for your specific needs.',
        },
        {
          q: 'Are there taxes on property investment in Dubai?',
          a: 'Dubai offers exceptional tax advantages: no property tax, no capital gains tax, and no income tax. There is a 4% land department fee on purchases and 5% VAT on commercial properties.',
        },
        {
          q: 'How can I ensure strong returns on my investment?',
          a: 'Our expert team provides data-driven analysis including market trends, property location analysis, cashflow projections, and portfolio diversification strategies.',
        },
      ],
    },
    {
      category: 'Golden Visa',
      questions: [
        {
          q: 'What is the UAE Golden Visa?',
          a: 'The Golden Visa is a 10-year residency visa for investors, entrepreneurs, and specialized professionals. It offers stability and benefits for long-term residence in the UAE.',
        },
        {
          q: 'Who is eligible for the Golden Visa?',
          a: 'Eligibility pathways include: property investors (AED 2M+), business owners (AED 1M+ investment), entrepreneurs, specialized talents, and key employees.',
        },
        {
          q: 'How long does the approval process take?',
          a: 'Typically 30-60 days from submission, depending on application completeness and authority workload. Our team expedites the process with expertise.',
        },
        {
          q: 'Can my family get visas under my Golden Visa?',
          a: 'Yes, immediate family members can be sponsored under the same Golden Visa application.',
        },
        {
          q: 'What is your success rate for Golden Visa applications?',
          a: 'We maintain a 95%+ success rate for Golden Visa applications through our meticulous documentation and process expertise.',
        },
      ],
    },
    {
      category: 'Services',
      questions: [
        {
          q: 'How much do your consulting services cost?',
          a: 'Our fees vary based on scope and complexity. We offer transparent pricing that is typically 25% below market average. We provide customized quotes after understanding your requirements.',
        },
        {
          q: 'What is your typical engagement process?',
          a: 'Our process includes: (1) Initial consultation, (2) Needs assessment, (3) Proposal and agreement, (4) Project execution, (5) Delivery and support, (6) Ongoing partnership.',
        },
        {
          q: 'Do you provide ongoing support after project completion?',
          a: 'Yes, we believe in long-term partnerships and offer ongoing advisory support to ensure sustained success.',
        },
        {
          q: 'Can you help with business setup?',
          a: 'Absolutely. We provide comprehensive business setup services including company formation, visa processing, office space, banking, and ongoing compliance support.',
        },
        {
          q: 'How long does business setup typically take?',
          a: 'Standard timeline is 2-4 weeks, though we can expedite to 1 week if needed. This includes all documentation and government approvals.',
        },
      ],
    },
    {
      category: 'Technology & Tools',
      questions: [
        {
          q: 'Are your cost calculators accurate?',
          a: 'Our calculators use current market rates and government fees as of 2025. Results are estimates; we provide detailed quotes after assessment.',
        },
        {
          q: 'How do the quizzes work?',
          a: 'Our quizzes assess your specific situation and provide personalized recommendations. Results include a detailed PDF report and consultation offer.',
        },
        {
          q: 'What PDF guides do you offer?',
          a: 'We offer 3 comprehensive guides: Dubai Real Estate Investment, UAE Golden Visa Handbook, and HNWI Tax & Wealth Optimization. All free downloads.',
        },
        {
          q: 'Can I access my quiz results later?',
          a: 'Yes, we email your results, and you can request them anytime. Results are also available in your account dashboard if registered.',
        },
      ],
    },
    {
      category: 'Compliance & Legal',
      questions: [
        {
          q: 'Are your guides legally accurate?',
          a: 'Our guides are prepared by legal and financial experts and updated regularly. However, they are for information only; we recommend legal consultation for your specific situation.',
        },
        {
          q: 'What licenses and certifications do you hold?',
          a: 'Our team holds relevant certifications in consulting, financial advisory, and legal compliance. We operate under full compliance with UAE regulations.',
        },
        {
          q: 'How do you handle data privacy?',
          a: 'We follow strict data protection protocols, comply with UAE privacy laws, and never share client information without explicit consent.',
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center animate-fade-in-up">
          <span className="badge">FREQUENTLY ASKED</span>
          <h1 className="section-title mt-6 mb-4">Questions & Answers</h1>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, Golden Visa, real estate, and consulting solutions.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              <h2 className="text-2xl font-bold text-dark-900 mb-8">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((faq, index) => (
                  <details key={index} className="card group">
                    <summary className="cursor-pointer flex items-center justify-between font-semibold text-dark-900 hover:text-primary-600 transition-colors">
                      <span>{faq.q}</span>
                      <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="mt-4 text-dark-600 text-sm leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Can't Find Answer */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">Didn't find your answer?</h2>
          <p className="text-dark-600 mb-8">
            Our expert team is ready to help with any questions or concerns.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Contact Our Team
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        badge="READY TO MOVE FORWARD?"
        title="Let's Answer Your Questions"
        subtitle="Schedule a consultation with our experts to discuss your specific needs and goals."
        primaryCTA={{ label: 'Schedule Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'Download Guides', href: '/#guides' }}
      />
    </>
  );
}
