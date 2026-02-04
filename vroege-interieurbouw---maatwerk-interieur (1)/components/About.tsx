
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <img 
            src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1200&auto=format&fit=crop" 
            alt="Vakmanschap in de werkplaats" 
            className="w-full h-72 md:h-[500px] object-cover border border-gray-100 shadow-sm"
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-[10px] font-bold text-[#A9AEB3] uppercase tracking-[0.3em] mb-3 block">Over Vroege Interieurbouw</span>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 uppercase tracking-tighter">Passie voor Precisie</h2>
          <div className="space-y-4 md:space-y-6 text-xs md:text-sm text-gray-600 leading-relaxed font-light">
            <p>
              Vroege Interieurbouw staat voor nuchter vakmanschap. Gevestigd in het hart van Woerden, werken wij dagelijks aan unieke interieuroplossingen die zowel functioneel als esthetisch hoogwaardig zijn.
            </p>
            <p>
              Onze kracht ligt in de combinatie van moderne technieken en traditionele houtbewerking. Geen marketingpraat, maar duidelijke communicatie en een resultaat dat tot in de puntjes verzorgd is.
            </p>
            <p>
              Of het nu gaat om een particuliere keuken of een volledige zakelijke inrichting; wij geloven dat elk detail ertoe doet.
            </p>
          </div>
          <div className="mt-8">
             <div className="h-1 w-16 bg-[#2D3E40]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
