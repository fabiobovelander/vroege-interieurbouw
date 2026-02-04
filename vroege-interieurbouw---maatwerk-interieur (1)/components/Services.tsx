
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-20">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 uppercase tracking-tight">Onze Expertise</h2>
          <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed uppercase tracking-wider">
            Maatwerk in hout, staal en marmer. Voor de zakelijke en particuliere markt.
          </p>
        </div>
        <div className="w-16 md:w-32 h-1 bg-[#2D3E40] mt-4 hidden md:block"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-100">
        {SERVICES.map((service) => (
          <div key={service.id} className="group p-8 md:p-12 border-r border-b border-gray-100 bg-white hover:bg-gray-50 transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 text-[#2D3E40] mb-6 md:mb-8">
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.2} d={service.icon} />
              </svg>
            </div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 uppercase tracking-tighter text-[#2D3E40]">{service.title}</h3>
            <p className="text-[11px] md:text-xs text-gray-600 leading-6 md:leading-7 font-light mb-8">
              {service.description}
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-block text-[9px] md:text-[10px] font-bold border-b-2 border-[#A9AEB3] pb-1 uppercase tracking-widest hover:border-[#2D3E40] transition-colors focus:outline-none"
            >
              Aanvraag doen
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
