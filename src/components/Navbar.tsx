
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-everest-black text-white z-50 font-montserrat">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">
            <a href="#hero" className="text-everest-yellow">EVEREST</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-everest-yellow"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li><a href="#hero" className="hover:text-everest-yellow transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-everest-yellow transition-colors">Planes</a></li>
              <li><a href="#contact" className="hover:text-everest-yellow transition-colors">Contacto</a></li>
            </ul>
            <Button 
              className="bg-everest-yellow hover:bg-opacity-80 text-everest-black font-semibold px-6"
            >
              Únete
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <ul className="flex flex-col space-y-3">
              <li><a href="#hero" className="block hover:text-everest-yellow" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
              <li><a href="#services" className="block hover:text-everest-yellow" onClick={() => setIsMenuOpen(false)}>Planes</a></li>
              <li><a href="#contact" className="block hover:text-everest-yellow" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
            </ul>
            <div className="mt-4">
              <Button 
                className="w-full bg-everest-yellow hover:bg-opacity-80 text-everest-black font-semibold"
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
