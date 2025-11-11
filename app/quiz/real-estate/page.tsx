'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, ChevronRight } from 'lucide-react';
import CTASection from '@/components/CTASection';

const QUIZ_DATA = [
  {
    id: 1,
    question: 'What is your primary investment goal?',
    options: [
      { text: 'Capital appreciation', points: 1 },
      { text: 'Rental income', points: 2 },
      { text: 'Both equally', points: 3 },
      { text: 'Golden Visa qualification', points: 4 },
    ],
  },
  {
    id: 2,
    question: 'What is your investment budget?',
    options: [
      { text: 'Under AED 500K', points: 1 },
      { text: 'AED 500K - 1M', points: 2 },
      { text: 'AED 1M - 2M', points: 3 },
      { text: 'Over AED 2M', points: 4 },
    ],
  },
  {
    id: 3,
    question: 'What is your investment timeline?',
    options: [
      { text: 'Short-term (1-2 years)', points: 1 },
      { text: 'Medium-term (3-5 years)', points: 2 },
      { text: 'Long-term (5+ years)', points: 3 },
      { text: 'No specific timeline', points: 4 },
    ],
  },
  {
    id: 4,
    question: 'Property type preference?',
    options: [
      { text: 'Studio/1BR apartments', points: 1 },
      { text: '2-3 BR apartments', points: 2 },
      { text: 'Villas', points: 3 },
      { text: 'Commercial/Mixed', points: 4 },
    ],
  },
  {
    id: 5,
    question: 'Preferred location?',
    options: [
      { text: 'Downtown/JBR (Premium)', points: 4 },
      { text: 'Marina/Business Bay', points: 3 },
      { text: 'Emerging areas', points: 2 },
      { text: 'No preference', points: 1 },
    ],
  },
  {
    id: 6,
    question: 'Previous real estate experience?',
    options: [
      { text: 'No experience', points: 1 },
      { text: 'Some experience', points: 2 },
      { text: 'Experienced investor', points: 3 },
      { text: 'Professional investor', points: 4 },
    ],
  },
  {
    id: 7,
    question: 'Risk tolerance?',
    options: [
      { text: 'Very conservative', points: 1 },
      { text: 'Moderate', points: 2 },
      { text: 'Balanced', points: 3 },
      { text: 'Aggressive', points: 4 },
    ],
  },
  {
    id: 8,
    question: 'Reason for investing in Dubai real estate?',
    options: [
      { text: 'Personal residence', points: 1 },
      { text: 'Investment income', points: 2 },
      { text: 'Portfolio diversification', points: 3 },
      { text: 'Golden Visa requirement', points: 4 },
    ],
  },
];

interface QuizState {
  currentQuestion: number;
  answers: number[];
  score: number;
  completed: boolean;
}

export default function RealEstateQuiz() {
  const [quiz, setQuiz] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    score: 0,
    completed: false,
  });

  const handleAnswer = (points: number) => {
    const newAnswers = [...quiz.answers, points];
    const newScore = newAnswers.reduce((a, b) => a + b, 0);

    if (quiz.currentQuestion < QUIZ_DATA.length - 1) {
      setQuiz({
        ...quiz,
        currentQuestion: quiz.currentQuestion + 1,
        answers: newAnswers,
        score: newScore,
      });
    } else {
      setQuiz({
        ...quiz,
        answers: newAnswers,
        score: newScore,
        completed: true,
      });
    }
  };

  const getRecommendation = () => {
    const maxScore = 32;
    const percentage = (quiz.score / maxScore) * 100;

    if (percentage < 25) {
      return {
        title: 'Conservative Investor',
        description: 'Focus on stable, established properties in premium locations. Start with 1-2 properties for steady rental income.',
        action: 'Schedule consultation for conservative portfolio',
      };
    }
    if (percentage < 50) {
      return {
        title: 'Balanced Investor',
        description: 'Mix of established and emerging properties. Good ROI potential with manageable risk.',
        action: 'Get personalized investment strategy',
      };
    }
    if (percentage < 75) {
      return {
        title: 'Growth Investor',
        description: 'Target emerging areas with high appreciation potential. Ready for portfolio diversification.',
        action: 'Explore growth opportunities',
      };
    }
    return {
      title: 'Aggressive Investor',
      description: 'Maximize returns through premium locations and mixed portfolio. Ready for complex strategies including Golden Visa.',
      action: 'Discuss premium investment options',
    };
  };

  if (quiz.completed) {
    const recommendation = getRecommendation();

    return (
      <>
        <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
          <div className="container-custom max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle size={64} className="text-primary-600 mb-4 mx-auto" />
              <h1 className="section-title mb-4">Quiz Complete!</h1>
              <p className="text-xl text-dark-600">
                Score: <span className="font-bold text-primary-600">{quiz.score}/32</span>
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-2xl mx-auto">
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-primary-600 mb-4">
                {recommendation.title}
              </h2>
              <p className="text-lg text-dark-700 mb-6">{recommendation.description}</p>

              <Link href="/contact" className="btn-primary inline-block mb-6">
                {recommendation.action}
              </Link>

              <button
                onClick={() =>
                  setQuiz({
                    currentQuestion: 0,
                    answers: [],
                    score: 0,
                    completed: false,
                  })
                }
                className="btn-secondary"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        </section>

        <CTASection
          badge="READY?"
          title="Ready to Invest?"
          subtitle="Schedule a consultation with our experts to discuss your investment strategy."
          primaryCTA={{ label: 'Schedule Consultation', href: '/contact' }}
        />
      </>
    );
  }

  const currentQ = QUIZ_DATA[quiz.currentQuestion];
  const progress = ((quiz.currentQuestion + 1) / QUIZ_DATA.length) * 100;

  return (
    <>
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-primary-600">
                Question {quiz.currentQuestion + 1} of {QUIZ_DATA.length}
              </span>
              <span className="text-sm text-dark-600">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-dark-200 rounded-full h-2">
              <div
                className="bg-primary-600 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <h1 className="section-title mb-8">{currentQ.question}</h1>

          <div className="space-y-4">
            {currentQ.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.points)}
                className="card-hover p-6 w-full text-left hover:border-primary-600 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-dark-900 font-medium">
                    {option.text}
                  </span>
                  <ChevronRight className="text-primary-600" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}