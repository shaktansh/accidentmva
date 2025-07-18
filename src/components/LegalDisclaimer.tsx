import React from 'react';
import { Link } from 'react-router-dom';

export default function LegalDisclaimer() {
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
      <h1 className="text-3xl font-bold mb-4">Legal Disclaimer</h1>
      <p className="text-gray-500 mb-2">Effective Date: 7/18/2025</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Important Legal Notice</h2>
      <p className="mb-4">Please read this disclaimer carefully before using this website or submitting any information.</p>
      <h2 className="text-lg font-semibold mt-6 mb-2">No Legal Advice</h2>
      <p className="mb-4">The content on this website is for informational purposes only and should not be taken as legal advice. Motor vehicle accident laws vary by state and case specifics. Always consult a licensed personal injury attorney for guidance on your unique situation.</p>
      <h2 className="text-lg font-semibold mt-6 mb-2">No Attorney-Client Relationship</h2>
      <p className="mb-4">Filling out forms or contacting us through this site does not create an attorney-client relationship. That relationship only begins after a signed agreement with a licensed lawyer.</p>
      <h2 className="text-lg font-semibold mt-6 mb-2">Case Results Disclaimer</h2>
      <p className="mb-4">Any settlement figures or past case outcomes shared here are illustrative only. They do not guarantee or predict similar results. Every motor vehicle accident case is different and depends on specific facts.</p>
      <h2 className="text-lg font-semibold mt-6 mb-2">Statute of Limitations</h2>
      <p className="mb-4">MVA-related legal claims have strict time limits depending on your state. Do not delay in seeking legal advice, as waiting could affect your right to recover damages.</p>
      <h2 className="text-lg font-semibold mt-6 mb-2">External Links</h2>
      <p className="mb-4">This website may contain links to third-party resources. We are not responsible for the content, policies, or accuracy of these external sites.</p>
      <h2 className="text-lg font-semibold mt-6 mb-2">Accuracy of Information</h2>
      <p className="mb-4">While we aim to keep the information on this site up to date, MVA laws and procedures can change rapidly. We make no guarantees about the completeness or accuracy of the content provided.</p>
      <h2 className="text-lg font-semibold mt-6 mb-2">Advertising Disclaimer</h2>
      <p className="mb-4">This website may be considered attorney advertising. Choosing a lawyer is a serious decision and should not be made based solely on ads or online information.</p>
      <h2 className="text-lg font-semibold mt-6 mb-2">Jurisdiction Notice</h2>
      <p className="mb-4">We only accept clients for MVA and personal injury claims in jurisdictions where our participating attorneys are licensed to practice law.</p>
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8 text-center">
        <h3 className="text-lg font-semibold mb-2 text-red-700">🚨 Critical Legal Warning</h3>
        <p className="mb-2">If you've been injured in a motor vehicle accident, do not rely solely on this website. Speak directly with a qualified attorney as soon as possible to protect your legal rights.</p>
      </div>
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