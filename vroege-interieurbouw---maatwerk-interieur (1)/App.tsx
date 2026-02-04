
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isScrolled={isScrolled} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Over Ons Section */}
        <section id="over-ons" className="py-24 bg-white scroll-mt-20">
          <About />
        </section>

        {/* Services Section */}
        <section id="diensten" className="py-24 bg-gray-50 scroll-mt-20">
          <Services />
        </section>

        {/* Portfolio / Projecten Section */}
        <section id="portfolio" className="py-24 bg-white scroll-mt-20">
          <Portfolio />
        </section>

        {/* Werkwijze Section */}
        <section id="werkwijze" className="py-24 bg-gray-50 scroll-mt-20">
          <Process />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-[#2D3E40] text-white scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
