import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Get Maximum Compensation After Your Car Accident
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
                Speak to an experienced attorney. <span className="text-green-600 font-semibold">No fees unless we win.</span>
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center group"
              >
                Free Case Evaluation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="tel:+1-800-LAW-Acci"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Call 1-800-LAW-Acci
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center text-gray-600">
                <Shield className="h-5 w-5 mr-2 text-green-600" />
                <span className="text-sm font-medium">No Win, No Fee</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="h-5 w-5 mr-2 text-yellow-600" />
                <span className="text-sm font-medium">Award-Winning Firm</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2 text-purple-600" />
                <span className="text-sm font-medium">1,000+ Clients Helped</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative z-10">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/accidentcar.jpg"
                alt="Accident car scene"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-xl border border-blue-100">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">$20M+</div>
                <div className="text-sm text-gray-600">Recovered for Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}