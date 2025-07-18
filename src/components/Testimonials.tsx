import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Austin, TX',
      content: 'They helped me get $80,000 after my accident – fast and stress-free. The team was professional and kept me informed every step of the way.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      location: 'Houston, TX',
      content: 'I was worried about legal fees, but they truly meant no fee unless we win. They fought hard for me and got me the settlement I deserved.',
      rating: 5
    },
    {
      name: 'Jennifer Lee',
      location: 'Dallas, TX',
      content: 'After my car accident, I didn\'t know where to turn. This firm made everything simple and handled all the paperwork. Highly recommend!',
      rating: 5
    }
  ];

  const stats = [
    { value: '$20M+', label: 'Recovered for Clients' },
    { value: '1,000+', label: 'Clients Helped' },
    { value: '98%', label: 'Success Rate' },
    { value: '15+', label: 'Years Experience' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center p-6 rounded-lg shadow-md border hover:shadow-lg transition-all transform hover:scale-105 ${
              index === 0 ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-200' :
              index === 1 ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200' :
              index === 2 ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200' :
              'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200'
            }`}>
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                index === 0 ? 'text-green-700' :
                index === 1 ? 'text-blue-700' :
                index === 2 ? 'text-purple-700' :
                'text-yellow-700'
              }`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from real people we've helped
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition-all transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-purple-600 mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-blue-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}