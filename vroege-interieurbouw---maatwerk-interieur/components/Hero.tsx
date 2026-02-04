
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#2D3E40] scroll-mt-20">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1920&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          alt="Luxe interieur"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D3E40] via-[#2D3E40]/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-[#A9AEB3] text-[#2D3E40] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Woerden & Omstreken
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight uppercase">
            Exclusieve <br />
            Interieurbouw
          </h1>
          <p className="text-sm md:text-base mb-12 text-gray-300 leading-relaxed max-w-xl font-light">
            Vroege Interieurbouw realiseert hoogwaardige maatwerkoplossingen. Vanuit onze werkplaats in Woerden vertalen wij uw visie naar een tastbaar en duurzaam resultaat.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-white hover:bg-[#A9AEB3] text-[#2D3E40] px-10 py-5 text-[12px] font-bold uppercase tracking-widest transition-all text-center focus:outline-none"
            >
              Onze Projecten
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-white/40 hover:bg-white/10 text-white px-10 py-5 text-[12px] font-bold uppercase tracking-widest transition-all text-center focus:outline-none"
            >
              Contact Opnemen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
