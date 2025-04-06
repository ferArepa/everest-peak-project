
import React from 'react';
import { Code, PenTool, Smartphone } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const ServicesSection = () => {
  const services = [
    {
      title: 'WEB DEVELOPMENT',
      icon: <Code className="w-10 h-10 text-everest-yellow" />,
      description: 'Desarrollo de plataformas web personalizadas para tu negocio o marca personal.'
    },
    {
      title: 'DESIGN',
      icon: <PenTool className="w-10 h-10 text-everest-yellow" />,
      description: 'Diseño visual profesional que refleja la identidad y valores de tu marca.'
    },
    {
      title: 'MOBILE',
      icon: <Smartphone className="w-10 h-10 text-everest-yellow" />,
      description: 'Aplicaciones móviles nativas y multiplataforma con alto rendimiento y usabilidad.'
    }
  ];

  return (
    <section id="services" className="bg-everest-black py-24 text-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-everest-yellow font-medium tracking-widest text-sm mb-2">NUESTROS SERVICIOS</p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
            Servicios de la marca
          </h2>
          <Separator className="w-16 h-0.5 bg-everest-yellow mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="border-t border-gray-800 pt-8 group"
            >
              <div className="mb-6 group-hover:translate-y-[-5px] transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Minimal diagonal accent */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
    </section>
  );
};

export default ServicesSection;
