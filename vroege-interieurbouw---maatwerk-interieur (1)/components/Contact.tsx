
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="lg:pt-10">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-10 uppercase tracking-tighter leading-tight">Vrijblijvende Aanvraag</h2>
          <p className="text-gray-400 text-[10px] md:text-sm mb-10 md:mb-12 leading-loose uppercase tracking-wide">
            Neem contact op voor een kennismaking of offerte. Wij reageren doorgaans binnen 24 uur.
          </p>
          
          <div className="space-y-6 md:space-y-10">
            <a href="https://maps.google.com/?q=Rietveld+28-B+Woerden" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 md:space-x-6 group">
              <div className="w-10 h-10 border border-gray-700 flex items-center justify-center flex-shrink-0 text-[#A9AEB3] group-hover:border-white group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <p className="text-[10px] md:text-sm text-gray-300 tracking-wider">Rietveld 28-B, 3443 XC Woerden</p>
            </a>

            <a href="tel:0653124096" className="flex items-center space-x-4 md:space-x-6 group">
              <div className="w-10 h-10 border border-gray-700 flex items-center justify-center flex-shrink-0 text-[#A9AEB3] group-hover:border-white group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-[10px] md:text-sm text-gray-300 tracking-wider">06-53124096</p>
            </a>
          </div>
        </div>

        <div className="bg-white p-6 md:p-12 text-[#2D3E40] shadow-xl">
          <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-5 md:space-y-6">
                <div>
                    <label className="block text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-2 md:mb-3">Naam</label>
                    <input type="text" className="w-full px-0 py-2 md:py-3 border-b-2 border-gray-100 focus:border-[#2D3E40] outline-none transition-all text-base rounded-none" placeholder="Uw naam" />
                </div>
                <div>
                    <label className="block text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-2 md:mb-3">Email</label>
                    <input type="email" className="w-full px-0 py-2 md:py-3 border-b-2 border-gray-100 focus:border-[#2D3E40] outline-none transition-all text-base rounded-none" placeholder="uw@email.nl" />
                </div>
                <div>
                    <label className="block text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-2 md:mb-3">Uw wensen</label>
                    <textarea className="w-full px-0 py-2 md:py-3 border-b-2 border-gray-100 focus:border-[#2D3E40] outline-none transition-all h-20 md:h-24 text-base resize-none rounded-none" placeholder="Beschrijf kort uw idee..."></textarea>
                </div>
            </div>
            <button className="w-full bg-[#2D3E40] text-white font-bold py-4 md:py-5 text-[10px] md:text-[12px] uppercase tracking-[0.2em] hover:bg-black transition-colors focus:outline-none">
              VERZENDEN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
