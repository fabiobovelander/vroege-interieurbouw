
import React, { useState } from 'react';
import Logo from './Logo';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4 transition-all duration-300">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="block focus:outline-none"
        >
          <Logo />
        </button>

        {/* Desktop Navigatie */}
        <div className="hidden lg:flex space-x-8 text-[10px] uppercase tracking-widest font-bold text-[#2D3E40]">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.target)}
              className="hover:text-gray-400 transition-colors focus:outline-none uppercase"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobiele Toggle Knop */}
        <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 focus:outline-none text-[#2D3E40]"
              aria-label="Menu openen"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
            </button>
        </div>
      </div>

      {/* Mobiel Navigatie Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col p-8 space-y-6 text-[11px] uppercase tracking-widest font-bold text-[#2D3E40]">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.target)}
              className="text-left hover:text-gray-400 transition-colors border-b border-gray-50 pb-4 focus:outline-none uppercase"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
