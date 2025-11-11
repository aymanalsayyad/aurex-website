'use client';

import { Home, Award, Building2, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function QuizzesSection() {
  const quizzes = [
    {
      icon: Home,
      title: 'Real Estate Quiz',
      description: '8 questions to discover your ideal property investment strategy and ROI potential',
      link: '/quiz/real-estate',
    },
    {
      icon: Award,
      title: 'Golden Visa Quiz',
      description: '7 questions to assess your eligibility and find the fastest path to UAE residency',
      link: '/quiz/golden-visa',
    },
    {
      icon: Building2,
      title: 'Business Setup Quiz',
      description:
        '8 questions to determine the optimal business structure and setup cost for your venture',
      link: '/quiz/business-setup',
    },
    {
      icon: TrendingUp,
      title: 'Wealth Management Quiz',
      description:
        '7 questions to unlock tax optimization strategies and wealth structuring solutions',
      link: '/quiz/wealth-management',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="badge">PERSONALIZED ASSESSMENTS</span>
          <h2 className="section-title mt-4 mb-4">Discover Your Perfect Investment Path</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Take our service-specific quizzes to receive personalized recommendations tailored to your
            goals and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quizzes.map((quiz, index) => {
            const Icon = quiz.icon;
            return (
              <Link
                key={index}
                href={quiz.link}
                className="group card-hover flex flex-col"
              >
                <div className="w-14 h-14 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2">{quiz.title}</h3>
                <p className="text-dark-600 text-sm mb-6 flex-grow">{quiz.description}</p>
                <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Take Quiz
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="bg-primary-50 rounded-lg p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Takes 2-3 minutes', emoji: '⏱️' },
            { label: 'Personalized results', emoji: '🎯' },
            { label: 'Free PDF report', emoji: '📊' },
            { label: 'No obligation', emoji: '✓' },
          ].map((badge, i) => (
            <div key={i}>
              <p className="text-2xl mb-2">{badge.emoji}</p>
              <p className="text-sm font-medium text-primary-700">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
