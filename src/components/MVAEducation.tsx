import React from 'react';
import { Car, AlertTriangle, FileText, DollarSign, Clock, Shield } from 'lucide-react';

export default function MVAEducation() {
  const causes = [
    {
      icon: AlertTriangle,
      title: 'Distracted Driving',
      description: 'Texting, phone calls, or other distractions while driving',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: Car,
      title: 'Speeding',
      description: 'Driving above speed limits or too fast for conditions',
      color: 'text-orange-600 bg-orange-100'
    },
    {
      icon: AlertTriangle,
      title: 'Drunk Driving',
      description: 'Operating a vehicle under the influence of alcohol or drugs',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Car,
      title: 'Reckless Driving',
      description: 'Aggressive driving, tailgating, or unsafe lane changes',
      color: 'text-blue-600 bg-blue-100'
    }
  ];

  const damages = [
    {
      icon: DollarSign,
      title: 'Medical Expenses',
      description: 'Hospital bills, surgery costs, rehabilitation, and ongoing treatment',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Lost Wages',
      description: 'Income lost due to inability to work during recovery',
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: 'Pain & Suffering',
      description: 'Physical pain, emotional distress, and reduced quality of life',
      color: 'text-purple-600'
    },
    {
      icon: FileText,
      title: 'Property Damage',
      description: 'Vehicle repairs, replacement costs, and personal property',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Understanding Motor Vehicle Accidents (MVA)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Motor Vehicle Accident (MVA) is any incident involving cars, trucks, motorcycles, or other vehicles that results in property damage, injury, or death. Understanding your rights is crucial.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Common Causes */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Common Causes of MVAs
            </h3>
            <div className="space-y-6">
              {causes.map((cause, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <div className={`p-3 rounded-full ${cause.color} mr-4 flex-shrink-0`}>
                      <cause.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {cause.title}
                      </h4>
                      <p className="text-gray-600">
                        {cause.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What You Can Recover */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What You Can Recover
            </h3>
            <div className="space-y-6">
              {damages.map((damage, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
                  <div className="flex items-start">
                    <div className={`p-3 rounded-full bg-gray-100 mr-4 flex-shrink-0`}>
                      <damage.icon className={`h-6 w-6 ${damage.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {damage.title}
                      </h4>
                      <p className="text-gray-600">
                        {damage.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't Wait - Your Rights Have Time Limits
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Most states have a statute of limitations for filing MVA claims. The sooner you act, the better we can protect your rights and preserve evidence.
            </p>
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-lg"
            >
              Get Your Free Case Review Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}