import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
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
      <h1 className="text-3xl font-bold mb-4">Terms of Service for Accident.ink</h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">By accessing or using this website and submitting your information, you agree to be bound by these Terms of Service. If you do not accept these terms, please refrain from using our services.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Description of Services</h2>
      <p className="mb-4">This website offers information related to motor vehicle accident (MVA) claims and connects potential claimants with qualified legal professionals. We are not a law firm and do not provide legal advice directly.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. No Attorney-Client Relationship</h2>
      <p className="mb-4">Submitting your details on this website does not create an attorney-client relationship. That relationship is only established once you enter into a formal agreement (e.g., signing a retainer) with a licensed attorney.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Information Accuracy</h2>
      <p className="mb-4">You agree to provide accurate and truthful information. Submitting false or misleading information may result in your claim being denied or may have legal consequences.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Statute of Limitations</h2>
      <p className="mb-4">Legal claims are subject to time restrictions (statutes of limitations) that vary by jurisdiction. We are not liable if your claim is barred due to a missed deadline.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Disclaimer of Warranties</h2>
      <p className="mb-4">This website and its content are provided “as is” with no guarantees or warranties, express or implied. We do not promise any specific outcome for your legal case.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
      <p className="mb-4">We are not liable for any direct, indirect, incidental, or consequential damages resulting from your use of this website or your reliance on the information provided.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Indemnification</h2>
      <p className="mb-4">You agree to defend, indemnify, and hold us harmless from any claims, liabilities, or expenses arising from your use of the site or your breach of these terms.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Governing Law</h2>
      <p className="mb-4">These Terms of Service are governed by the laws of the United States and the state where the claim is being pursued, without regard to its conflict of law rules.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Information</h2>
      <p className="mb-2">If you have any questions or concerns about these Terms of Service, you can reach us at:</p>
      <ul className="mb-4 text-gray-700">
        <li>Email: <a href="mailto:legal@accident.ink" className="text-blue-700 underline">legal@accident.ink</a></li>
        <li>Phone: 1-800-MVA-HELP</li>
        <li>Address:<br />2795 E Cottonwood Parkway<br />Suite 300-1213<br />Salt Lake City, Utah 84121<br />United States</li>
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