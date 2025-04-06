
import React from 'react';
import { FileText, Smartphone, Layout } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'WEB DEVELOPMENT',
      icon: <FileText className="w-12 h-12 text-everest-yellow" />,
      description: 'Desarrollo de plataformas web personalizadas para tu negocio o marca personal.'
    },
    {
      title: 'DESIGN',
      icon: <Layout className="w-12 h-12 text-everest-yellow" />,
      description: 'Diseño visual profesional que refleja la identidad y valores de tu marca.'
    },
    {
      title: 'MOBILE',
      icon: <Smartphone className="w-12 h-12 text-everest-yellow" />,
      description: 'Aplicaciones móviles nativas y multiplataforma con alto rendimiento y usabilidad.'
    }
  ];

  return (
    <section id="services" className="bg-everest-black py-20 text-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-4 uppercase">
            Servicios de la marca
          </h2>
          <div className="h-1 w-20 bg-everest-yellow mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="text-center p-8 border border-gray-800 hover:border-everest-yellow transition-colors rounded-lg hover:bg-black hover:-translate-y-2 transform transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-everest-yellow">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Diagonal element at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-everest-gray" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
    </section>
  );
};

export default ServicesSection;
