import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/logoaccident.ink.png" alt="Accident.ink Logo" className="h-10 w-auto mr-2" />
              <span className="text-2xl font-bold text-white tracking-tight">Accident<span className="text-yellow-400">.ink</span></span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+1-800-LAW-Acci" className="flex items-center text-white hover:text-yellow-400 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">Free Case Evaluation: 1-800-LAW-Acci</span>
            </a>
            <a href="mailto:info@legalcare.com" className="flex items-center text-white hover:text-yellow-400 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@legalcare.com</span>
            </a>
          </div>
          
          <div className="md:hidden">
            <a href="tel:+1-800-LAW-Acci" className="text-yellow-400 font-medium">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}