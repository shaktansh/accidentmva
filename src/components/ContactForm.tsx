import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Shield, Clock } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
    accidentDate: '',
    injuries: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your submission! We will contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Form - Full Width */}
        <div className="max-w-4xl mx-auto">
          {/* Attention-grabbing header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full font-bold text-sm mb-4 animate-pulse">
              🚨 FREE CONSULTATION - LIMITED TIME
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Case Matters. Get a <span className="text-yellow-400">Free Legal Consultation</span> Now.
            </h2>
            <p className="text-xl text-blue-200 mb-6">
              Fill out the form below and we'll contact you within <span className="text-yellow-400 font-semibold">24 hours</span>
            </p>
            <div className="flex justify-center items-center space-x-8 text-blue-200">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-400" />
                <span className="font-medium">Available 24/7</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-400" />
                <span className="font-medium">No Win, No Fee</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-4 border-yellow-400 relative z-10">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full font-bold text-sm">
              ⚡ PRIORITY FORM
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP/Postal Code *
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="accidentDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Accident Date
                  </label>
                  <input
                    type="date"
                    id="accidentDate"
                    name="accidentDate"
                    value={formData.accidentDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="injuries" className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Injuries
                </label>
                <input
                  type="text"
                  id="injuries"
                  name="injuries"
                  value={formData.injuries}
                  onChange={handleChange}
                  placeholder="e.g., Back injury, Whiplash, Broken bones"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center animate-pulse"
              >
                <Send className="h-5 w-5 mr-2" />
                🚀 Get My Free Consultation NOW
              </button>
              
              <div className="text-center">
                <div className="flex justify-center items-center space-x-4 mb-2">
                  <div className="flex items-center text-green-600">
                    <Shield className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">100% Confidential</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">24hr Response</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>
            </form>
          </div>
          
          {/* Additional Information Below Form */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-800 to-purple-800 p-6 rounded-lg border border-blue-700 shadow-xl">
              <h4 className="text-lg font-semibold text-white mb-4">
                📞 Get in Touch
              </h4>
              <div className="space-y-3 text-blue-200 text-sm">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-semibold">1-800-LAW-Acci</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@accident.ink</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800 to-purple-800 p-6 rounded-lg border border-blue-700 shadow-xl">
              <h4 className="text-lg font-semibold text-white mb-3">
                🕐 Available 24/7
              </h4>
              <p className="text-blue-200 text-sm">
                We understand that accidents don't happen on a schedule. That's why we're available around the clock to take your call.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-800 to-green-700 p-6 rounded-lg shadow-xl">
              <h4 className="text-lg font-semibold text-white mb-3">
                💰 No Upfront Costs
              </h4>
              <p className="text-green-200 text-sm">
                You don't pay attorney fees unless we win your case. We advance all costs and only get paid when you get paid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}