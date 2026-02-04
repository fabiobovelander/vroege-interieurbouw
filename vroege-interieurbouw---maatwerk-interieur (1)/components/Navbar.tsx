
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'Over ons', target: 'over-ons' },
    { name: 'Diensten', target: 'diensten' },
    { name: 'Projecten', target: 'portfolio' },
    { name: 'Werkwijze', target: 'werkwijze' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="block focus:outline-none z-50"
          aria-label="Ga naar home"
        >
          <Logo />
        </button>

        {/* Desktop Navigatie */}
        <div className={`hidden lg:flex space-x-8 text-[10px] uppercase tracking-widest font-bold transition-colors duration-300 ${
          isScrolled ? 'text-[#2D3E40]' : 'text-white'
        }`}>
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.target)}
              className="hover:text-[#A9AEB3] transition-colors focus:outline-none uppercase"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobiele Toggle Knop */}
        <div className="lg:hidden flex items-center z-50">
            <button 
              onClick={toggleMenu}
              className={`p-2 focus:outline-none transition-colors ${isScrolled || isMenuOpen ? 'text-[#2D3E40]' : 'text-white'}`}
              aria-label={isMenuOpen ? "Menu sluiten" : "Menu openen"}
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                  )}
                </svg>
            </button>
        </div>
      </div>

      {/* Mobiel Navigatie Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full justify-center items-center p-8 space-y-8 text-[12px] uppercase tracking-widest font-bold text-[#2D3E40]">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.target)}
              className="hover:text-[#A9AEB3] transition-colors py-2 focus:outline-none"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-12 flex flex-col items-center space-y-4 text-[10px] text-gray-400 normal-case tracking-normal font-light">
             <p>Rietveld 28-B, Woerden</p>
             <a href="tel:0653124096" className="text-logo-dark">06-53124096</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
