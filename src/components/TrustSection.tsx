import React from 'react';

export default function TrustSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Trusted by Leading Organizations
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition-all transform hover:scale-105">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">Avvo</div>
              <div className="text-sm text-gray-600">Top Rated</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-yellow-50 p-6 rounded-lg shadow-md border border-yellow-100 hover:shadow-lg transition-all transform hover:scale-105">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Super Lawyers</div>
              <div className="text-sm text-gray-600">Rising Stars</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg transition-all transform hover:scale-105">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">State Bar</div>
              <div className="text-sm text-gray-600">Certified</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-lg shadow-md border border-purple-100 hover:shadow-lg transition-all transform hover:scale-105">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ABA</div>
              <div className="text-sm text-gray-600">Member</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}