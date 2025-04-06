
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 font-montserrat transition-all duration-300 ${
      isScrolled ? 'bg-everest-black py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-medium tracking-wider">
            <a href="#hero" className="text-everest-yellow">EVEREST</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-everest-yellow transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-12">
            <ul className="flex space-x-10">
              <li><a href="#hero" className="text-white hover:text-everest-yellow transition-colors text-sm tracking-wide">Inicio</a></li>
              <li><a href="#services" className="text-white hover:text-everest-yellow transition-colors text-sm tracking-wide">Planes</a></li>
              <li><a href="#contact" className="text-white hover:text-everest-yellow transition-colors text-sm tracking-wide">Contacto</a></li>
            </ul>
            <Button 
              className="bg-everest-yellow hover:bg-opacity-90 text-everest-black font-medium px-6 rounded-none"
            >
              Únete
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 animate-fade-in border-t border-white/10 mt-4">
            <ul className="flex flex-col space-y-4">
              <li><a href="#hero" className="block text-white hover:text-everest-yellow text-sm tracking-wide" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
              <li><a href="#services" className="block text-white hover:text-everest-yellow text-sm tracking-wide" onClick={() => setIsMenuOpen(false)}>Planes</a></li>
              <li><a href="#contact" className="block text-white hover:text-everest-yellow text-sm tracking-wide" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
            </ul>
            <div className="mt-6">
              <Button 
                className="w-full bg-everest-yellow hover:bg-opacity-90 text-everest-black font-medium rounded-none"
                onClick={() => setIsMenuOpen(false)}
              >
                Únete
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
