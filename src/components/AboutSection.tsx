
import React from 'react';
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-everest-yellow font-medium tracking-widest text-sm mb-2">ACERCA DE LA MARCA</p>
            <h2 className="text-3xl md:text-4xl font-medium text-everest-black mb-6">
              Quiénes somos
            </h2>
            <Separator className="w-16 h-0.5 bg-everest-yellow mb-10" />
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              En Everest Training, nos dedicamos a llevar tu rendimiento físico al siguiente nivel. Somos un equipo de profesionales apasionados por el deporte y el bienestar que brindan programas de entrenamiento personalizados para ayudarte a alcanzar tus metas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Así como el Everest representa el pico más alto del mundo, nuestro objetivo es ayudarte a alcanzar la cima de tu potencial físico. Con métodos de entrenamiento innovadores y un enfoque en resultados duraderos, te guiaremos en cada paso del camino hacia una versión más fuerte y saludable de ti mismo.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gray-100 aspect-square w-full">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80" 
                alt="Entrenamiento personalizado" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-everest-yellow w-24 h-24 z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Minimal diagonal accent */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-everest-black" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
    </section>
  );
};

export default AboutSection;
