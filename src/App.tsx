import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import HowItWorks from './components/HowItWorks';
import MVAEducation from './components/MVAEducation';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import LegalDisclaimer from './components/LegalDisclaimer';

function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <HowItWorks />
      <MVAEducation />
      <Testimonials />
      <ContactForm />
      <FAQ />
    </>
  );
}

function FreeCaseReviewRedirect() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const form = document.getElementById('contact-form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [navigate]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
          <Route path="/free-case-review" element={<FreeCaseReviewRedirect />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;