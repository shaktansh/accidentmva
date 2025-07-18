import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Accident<span className="text-yellow-400">.ink</span>
            </div>
            <p className="text-gray-400 text-sm font-medium">
              Your Injury. Your Case. Your Justice.
            </p>
            <p className="text-gray-400 text-sm">
              Connecting accident victims with experienced personal injury attorneys across the United States.
            </p>
            <div className="text-yellow-400 font-bold text-lg">
              1-800-LAW-AFFF
            </div>
          </div>
          
          {/* Legal Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</a></li>
              <li><a href="/legal-disclaimer" className="text-gray-400 hover:text-yellow-400 transition-colors">Legal Disclaimer</a></li>
              <li><a href="#" onClick={handleScrollToForm} className="text-gray-400 hover:text-yellow-400 transition-colors">Free Case Review</a></li>
            </ul>
          </div>
          
          {/* Get Help Today */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Help Today</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-yellow-400 font-semibold">1-800-LAW-AFFF</span></li>
              <li><span className="text-gray-400">Free Consultation Available</span></li>
            </ul>
          </div>
          
          {/* Start My Case */}
          <div>
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg mb-4"
            >
              Start My Case Now
            </button>
            <div className="text-sm text-gray-400">
              <p>Takes 60 seconds • No obligation</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Accident.Ink. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Attorney Advertising. Prior results do not guarantee a similar outcome.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}