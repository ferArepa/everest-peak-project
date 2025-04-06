
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-everest-black mb-2 uppercase">
            Acerca de la marca
          </h2>
          <h3 className="text-xl md:text-2xl font-medium text-everest-darkgray uppercase">
            Quiénes somos
          </h3>
          <div className="h-1 w-20 bg-everest-yellow mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-everest-darkgray mb-6">
            En Everest Training, nos dedicamos a llevar tu rendimiento físico al siguiente nivel. Somos un equipo de profesionales apasionados por el deporte y el bienestar que brindan programas de entrenamiento personalizados para ayudarte a alcanzar tus metas.
          </p>
          <p className="text-lg text-everest-darkgray">
            Así como el Everest representa el pico más alto del mundo, nuestro objetivo es ayudarte a alcanzar la cima de tu potencial físico. Con métodos de entrenamiento innovadores y un enfoque en resultados duraderos, te guiaremos en cada paso del camino hacia una versión más fuerte y saludable de ti mismo.
          </p>
        </div>
      </div>
      
      {/* Diagonal element at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-everest-black" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
    </section>
  );
};

export default AboutSection;
