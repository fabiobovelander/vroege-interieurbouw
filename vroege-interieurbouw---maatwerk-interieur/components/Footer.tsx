
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-[#2D3E40] py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20">
          <Logo />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 text-[10px] font-bold uppercase tracking-widest">
            <button onClick={() => scrollToSection('home')} className="hover:text-gray-400 transition-colors text-left focus:outline-none uppercase">Home</button>
            <button onClick={() => scrollToSection('over-ons')} className="hover:text-gray-400 transition-colors text-left focus:outline-none uppercase">Over ons</button>
            <button onClick={() => scrollToSection('diensten')} className="hover:text-gray-400 transition-colors text-left focus:outline-none uppercase">Diensten</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-gray-400 transition-colors text-left focus:outline-none uppercase">Projecten</button>
            <button onClick={() => scrollToSection('werkwijze')} className="hover:text-gray-400 transition-colors text-left focus:outline-none uppercase">Werkwijze</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gray-400 transition-colors text-left focus:outline-none uppercase">Contact</button>
          </div>

          <div className="flex flex-col space-y-4 text-[10px] font-bold uppercase tracking-widest">
             <a href="tel:0653124096" className="hover:text-gray-400 transition-colors flex items-center gap-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                06-53124096
             </a>
             <a href="mailto:info@vroege-interieurbouw.nl" className="hover:text-gray-400 transition-colors flex items-center gap-3 lowercase">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                info@vroege-interieurbouw.nl
             </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.2em] text-gray-400 pt-12 border-t border-gray-50">
          <p>&copy; {new Date().getFullYear()} Vroege Interieurbouw. Vakmanschap uit Woerden.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#2D3E40] transition-colors focus:outline-none uppercase">Privacy Policy</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#2D3E40] transition-colors focus:outline-none uppercase">Algemene Voorwaarden</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
