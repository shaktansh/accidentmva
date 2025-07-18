import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const handleScrollToForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      {/* Back to Home Section (Top) */}
      <div className="mb-8 text-center">
        <Link to="/" className="inline-block bg-blue-800 text-white px-6 py-2 rounded font-semibold hover:bg-blue-900 transition-colors shadow-lg">&larr; Back to Home</Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-2">We collect information you provide directly to us when you submit a case evaluation form, including:</p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Name and contact information</li>
        <li>Details about your motor vehicle accident</li>
        <li>Medical diagnosis and injury information</li>
        <li>Insurance and legal case details</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-2">We use the information we collect to:</p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Evaluate your potential personal injury or accident-related legal claim</li>
        <li>Connect you with qualified personal injury attorneys</li>
        <li>Communicate with you about your case</li>
        <li>Comply with legal and regulatory obligations</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Information Sharing</h2>
      <p className="mb-4">We may share your information with partnering law firms or legal professionals to evaluate and potentially represent you in your motor vehicle accident claim. We do not sell your personal information to third parties.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">We implement industry-standard technical and organizational measures to protect your personal data from unauthorized access, misuse, alteration, or disclosure.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-2">You have the right to:</p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Access your personal information</li>
        <li>Request correction of inaccurate or incomplete data</li>
        <li>Request deletion of your information</li>
        <li>Opt-out of communications at any time</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p className="mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
      <ul className="mb-4 text-gray-700">
        <li>📧 Email: <a href="mailto:privacy@accident.ink" className="text-blue-700 underline">privacy@accident.ink</a></li>
        <li>📞 Phone: 1-800-555-0123</li>
      </ul>

      {/* Get Your Free Consultation Section */}
      <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 mt-8 text-center">
        <h3 className="text-lg font-semibold mb-2">Get Your Free Consultation</h3>
        <p className="mb-4">Find out if you qualify for compensation. Our team is ready to review your case for free.</p>
        <button onClick={handleScrollToForm} className="bg-blue-800 text-white px-6 py-2 rounded font-semibold hover:bg-blue-900 transition-colors mb-2">Start My Free Consultation</button>
        <div className="text-xs text-gray-500">Takes 60 seconds • 100% confidential • No obligation</div>
      </div>
    </div>
  );
} 