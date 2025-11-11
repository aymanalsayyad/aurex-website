import HeroSection from '@/components/homepage/HeroSection';
import BenefitsSection from '@/components/homepage/BenefitsSection';
import JourneySection from '@/components/homepage/JourneySection';
import CalculatorsSection from '@/components/homepage/CalculatorsSection';
import GuidesSection from '@/components/homepage/GuidesSection';
import QuizzesSection from '@/components/homepage/QuizzesSection';
import StatsSection from '@/components/homepage/StatsSection';
import ServicesSection from '@/components/homepage/ServicesSection';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Aurex Consultancy - Your Strategic Partner for Success in Dubai',
  description: 'Expert guidance for property investment, Golden Visa, and business establishment in the UAE. 15+ years experience, 500+ satisfied clients.',
  alternates: {
    canonical: 'https://aurex-consultancy.com',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <JourneySection />
      <CalculatorsSection />
      <GuidesSection />
      <QuizzesSection />
      <StatsSection />
      <ServicesSection />
      <CTASection
        badge="READY TO GET STARTED?"
        title="Transform Your Vision Into Reality"
        subtitle="Our expert team is ready to guide you through every step of your Dubai journey. Schedule your free consultation today."
        primaryCTA={{ label: 'Schedule Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Services', href: '/services' }}
      />
    </>
  );
}