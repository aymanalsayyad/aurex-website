'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Building, Briefcase } from 'lucide-react';
import CTASection from '@/components/CTASection';

const PRICING = {
  mainland: {
    setup: 2500,
    visa: 1200,
    flexi_desk: 500,
    dedicated_office: 2000,
  },
  freezone: {
    setup: 3500,
    visa: 1000,
    flexi_desk: 800,
    dedicated_office: 2500,
  },
};

export default function CompanyFormationCalculator() {
  const [businessType, setBusinessType] = useState<'mainland' | 'freezone'>('mainland');
  const [visas, setVisas] = useState(1);
  const [officeType, setOfficeType] = useState<'flexi' | 'dedicated'>('flexi');
  const [showResult, setShowResult] = useState(false);

  const calculateCost = () => {
    const pricing = PRICING[businessType];
    const setup = pricing.setup;
    const visaCost = pricing.visa * visas;
    const officeCost = officeType === 'flexi' ? pricing.flexi_desk : pricing.dedicated_office;
    return { setup, visaCost, officeCost, total: setup + visaCost + officeCost };
  };

  const cost = calculateCost();

  return (
    <>
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center">
          <span className="badge">INSTANT CALCULATION</span>
          <h1 className="section-title mt-6 mb-4">Company Formation Cost Calculator</h1>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Get an instant estimate for your business setup in Dubai. Transparent pricing, no hidden fees.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="card">
            <div className="mb-8">
              <label className="block text-sm font-semibold text-dark-900 mb-4">
                Business Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setBusinessType('mainland')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    businessType === 'mainland'
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-dark-200 hover:border-primary-600'
                  }`}
                >
                  <Building className="mb-2" size={24} />
                  <p className="font-semibold">Mainland</p>
                  <p className="text-sm text-dark-600">Trade anywhere</p>
                </button>
                <button
                  onClick={() => setBusinessType('freezone')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    businessType === 'freezone'
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-dark-200 hover:border-primary-600'
                  }`}
                >
                  <Briefcase className="mb-2" size={24} />
                  <p className="font-semibold">Freezone</p>
                  <p className="text-sm text-dark-600">100% ownership</p>
                </button>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-dark-900 mb-4">
                Number of Visas: <span className="text-primary-600">{visas}</span>
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={visas}
                onChange={(e) => setVisas(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-dark-600 mt-2">
                <span>1 Visa</span>
                <span>10 Visas</span>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-dark-900 mb-4">
                Office Space
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setOfficeType('flexi')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    officeType === 'flexi'
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-dark-200 hover:border-primary-600'
                  }`}
                >
                  <p className="font-semibold">Flexi Desk</p>
                  <p className="text-sm text-dark-600">Shared workspace</p>
                </button>
                <button
                  onClick={() => setOfficeType('dedicated')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    officeType === 'dedicated'
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-dark-200 hover:border-primary-600'
                  }`}
                >
                  <p className="font-semibold">Dedicated</p>
                  <p className="text-sm text-dark-600">Private office</p>
                </button>
              </div>
            </div>

            <button
              onClick={() => setShowResult(true)}
              className="btn-primary w-full mb-6"
            >
              Calculate Cost
            </button>

            {showResult && (
              <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-dark-900 mb-4">Cost Breakdown</h3>

                <div className="space-y-3 mb-6 border-b border-primary-200 pb-6">
                  <div className="flex justify-between">
                    <span className="text-dark-700">Company Setup:</span>
                    <span className="font-semibold">AED {cost.setup.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-700">{visas} Visa(s):</span>
                    <span className="font-semibold">AED {cost.visaCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-700">
                      {officeType === 'flexi' ? 'Flexi Desk' : 'Dedicated Office'}:
                    </span>
                    <span className="font-semibold">AED {cost.officeCost.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-dark-900">Total Cost:</span>
                  <span className="text-3xl font-bold text-primary-600">
                    AED {cost.total.toLocaleString()}
                  </span>
                </div>

                <div className="bg-white p-4 rounded-lg text-sm text-dark-600 mb-6">
                  <p className="mb-2">✓ 25% below market average</p>
                  <p className="mb-2">✓ No hidden fees</p>
                  <p>✓ Expert support included</p>
                </div>

                <Link
                  href="/contact"
                  className="btn-primary w-full text-center inline-block"
                >
                  Get Detailed Quote
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection
        badge="NEED HELP?"
        title="Get Professional Guidance"
        subtitle="Our experts can help you choose the right setup for your business."
        primaryCTA={{ label: 'Schedule Consultation', href: '/contact' }}
      />
    </>
  );
}