
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium text-everest-yellow">EVEREST</h2>
          <Separator className="w-12 h-0.5 bg-everest-yellow mx-auto mt-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-sm font-medium mb-6 text-white tracking-wider">SOBRE NOSOTROS</h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Creamos experiencias digitales excepcionales para grandes marcas por todo el mundo.
            </p>
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Everest Training. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-sm font-medium mb-6 text-white tracking-wider">ENLACES RÁPIDOS</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" className="text-gray-400 hover:text-everest-yellow transition-colors">Inicio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-everest-yellow transition-colors">Acerca de</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-everest-yellow transition-colors">Servicios</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-everest-yellow transition-colors">Equipo</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-everest-yellow transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-sm font-medium mb-6 text-white tracking-wider">CONTACTO</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center justify-center md:justify-end text-gray-400">
                <MapPin size={16} className="mr-2 text-everest-yellow" />
                <span>Calle Principal 123, Ciudad</span>
              </li>
              <li className="flex items-center justify-center md:justify-end text-gray-400">
                <Phone size={16} className="mr-2 text-everest-yellow" />
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-center justify-center md:justify-end text-gray-400">
                <Mail size={16} className="mr-2 text-everest-yellow" />
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
