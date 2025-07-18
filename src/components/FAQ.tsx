import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What does "No Fee Unless We Win" mean?',
      answer: 'You pay nothing unless your case is successful. We only get paid when we recover compensation for you. This means we have a strong incentive to win your case and get you the maximum settlement possible.'
    },
    {
      question: 'How long do I have to file a claim?',
      answer: 'Usually 2 years from the date of the accident, but this varies by state. It\'s important to contact us as soon as possible to protect your rights and preserve evidence. Some cases may have shorter deadlines.'
    },
    {
      question: 'Will this affect my insurance?',
      answer: 'Legal help is focused on the responsible party\'s insurance, not yours. We work to recover compensation from the at-fault driver\'s insurance company. Your own insurance rates should not be affected by pursuing a claim.'
    },
    {
      question: 'How much is my case worth?',
      answer: 'Every case is unique and depends on factors like injury severity, medical costs, lost wages, and pain and suffering. We\'ll evaluate your case for free and give you an honest assessment of its potential value.'
    },
    {
      question: 'Do I have to go to court?',
      answer: 'Most car accident cases are settled out of court through negotiations with insurance companies. However, if we can\'t reach a fair settlement, we\'re prepared to take your case to trial to get you the compensation you deserve.'
    },
    {
      question: 'What if I was partially at fault?',
      answer: 'You may still be able to recover compensation even if you were partially at fault. Many states follow comparative negligence laws, which means your compensation may be reduced by your percentage of fault, but you can still recover damages.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about car accident claims
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gradient-to-r from-white to-blue-50 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition-all">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors rounded-lg"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}