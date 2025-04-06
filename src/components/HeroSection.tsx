
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="container mx-auto px-6 py-20 z-10 animate-fade-in max-w-7xl">
        <div className="max-w-3xl mx-auto md:mx-0">
          <p className="text-everest-yellow font-medium tracking-widest text-sm mb-4">TRANSFORMA TU FÍSICO</p>
          <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 leading-tight">
            Desafía tus límites con <span className="text-everest-yellow">Everest</span> Training
          </h1>
          <p className="text-lg text-white/80 mb-10 max-w-xl">
            Programas personalizados de entrenamiento diseñados para llevarte a la cima de tu potencial físico.
          </p>
          <Button 
            className="bg-everest-yellow hover:bg-white hover:text-everest-black text-everest-black font-medium text-sm px-8 py-6 rounded-none group"
          >
            <span>COMIENZA AHORA</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      {/* Minimal bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 40%, 100% 100%)' }}></div>
    </section>
  );
};

export default HeroSection;
