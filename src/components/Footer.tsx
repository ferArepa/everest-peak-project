
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-everest-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-everest-yellow mb-4">EVEREST</h2>
          <div className="h-0.5 w-20 bg-everest-yellow mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-everest-yellow">Sobre nosotros</h3>
            <p className="text-gray-400 mb-4">
              Creamos experiencias digitales excepcionales para grandes marcas por todo el mundo.
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Everest Training. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-everest-yellow">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-everest-yellow transition-colors">Inicio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-everest-yellow transition-colors">Acerca de</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-everest-yellow transition-colors">Servicios</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-everest-yellow transition-colors">Equipo</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-everest-yellow transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-everest-yellow">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-end text-gray-400">
                <MapPin size={18} className="mr-2 text-everest-yellow" />
                <span>Calle Principal 123, Ciudad</span>
              </li>
              <li className="flex items-center justify-center md:justify-end text-gray-400">
                <Phone size={18} className="mr-2 text-everest-yellow" />
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-center justify-center md:justify-end text-gray-400">
                <Mail size={18} className="mr-2 text-everest-yellow" />
                <span>info@everesttraining.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
