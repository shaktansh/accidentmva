import React from 'react';
import { FileText, Users, Scale } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: 'Fill Out the Form',
      description: 'Simple online form in under 2 minutes. Tell us about your accident and injuries.',
      step: '01'
    },
    {
      icon: Users,
      title: 'Get Matched to a Lawyer',
      description: 'We connect you with the right attorney fast. No waiting, no runaround.',
      step: '02'
    },
    {
      icon: Scale,
      title: 'Start Your Claim',
      description: 'Discuss your case. No pressure, no fees unless we win your case.',
      step: '03'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-full font-bold text-sm mb-4 animate-pulse hover:from-green-600 hover:to-green-800 transition-all transform hover:scale-105 cursor-pointer"
          >
            🚨 FREE CONSULTATION - LIMITED TIME OFFER
          </button>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting legal help is simple. Follow these three easy steps to start your claim today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-colors ${
                  index === 0 ? 'bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300' :
                  index === 1 ? 'bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300' :
                  'bg-gradient-to-br from-purple-100 to-purple-200 group-hover:from-purple-200 group-hover:to-purple-300'
                }`}>
                  <step.icon className={`h-8 w-8 ${
                    index === 0 ? 'text-blue-600' :
                    index === 1 ? 'text-green-600' :
                    'text-purple-600'
                  }`} />
                </div>
                <div className={`absolute top-0 right-0 w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold ${
                  index === 0 ? 'bg-gradient-to-br from-blue-600 to-blue-700' :
                  index === 1 ? 'bg-gradient-to-br from-green-600 to-green-700' :
                  'bg-gradient-to-br from-purple-600 to-purple-700'
                }`}>
                  {step.step}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}