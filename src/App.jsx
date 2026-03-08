import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import BrandCarousel from './components/BrandCarousel.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Gallery from './pages/Gallery.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-text-primary">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* Global brand carousel can optionally appear above the footer on all pages */}
      <section className="bg-gray-50 border-t border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-center text-xl md:text-2xl font-semibold mb-6 text-text-primary">
            Brands We Partner With
          </h2>
          <BrandCarousel />
        </div>
      </section>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;
