
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#2D3E40]">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1920&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-30 md:opacity-40 mix-blend-luminosity"
          alt="Luxe interieur"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#2D3E40] via-[#2D3E40]/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white py-20">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-[#A9AEB3] text-[#2D3E40] text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Woerden & Omstreken
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight uppercase">
            Exclusieve <br className="hidden sm:block" />
            Interieurbouw
          </h1>
          <p className="text-[10px] md:text-base mb-10 text-gray-300 leading-relaxed max-w-xl font-light">
            Vroege Interieurbouw realiseert hoogwaardige maatwerkoplossingen. Vanuit onze werkplaats in Woerden vertalen wij uw visie naar een tastbaar resultaat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-white hover:bg-[#A9AEB3] text-[#2D3E40] px-8 md:px-10 py-4 md:py-5 text-[10px] md:text-[12px] font-bold uppercase tracking-widest transition-all text-center focus:outline-none w-full sm:w-auto"
            >
              Projecten
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-white/40 hover:bg-white/10 text-white px-8 md:px-10 py-4 md:py-5 text-[10px] md:text-[12px] font-bold uppercase tracking-widest transition-all text-center focus:outline-none w-full sm:w-auto"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
