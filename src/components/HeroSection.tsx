
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-everest-black flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      {/* Diagonal lines decoration */}
      <div className="absolute inset-0">
        <div className="absolute right-0 h-full w-1/3 bg-everest-yellow opacity-10 transform -skew-x-12"></div>
        <div className="absolute right-10 h-full w-1/4 bg-everest-yellow opacity-10 transform -skew-x-12"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 z-10 animate-fade-in">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight">
            <span className="text-everest-yellow">Everest</span> Training
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Desafía tus límites y transforma tu vida.
          </p>
          <Button 
            className="bg-everest-yellow hover:bg-opacity-80 text-everest-black font-bold text-lg px-8 py-6 yellow-btn"
          >
            Únete
          </Button>
        </div>
      </div>
      
      {/* Diagonal bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}></div>
    </section>
  );
};

export default HeroSection;
