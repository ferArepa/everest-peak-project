
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formulario enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
  };

  return (
    <section id="contact" className="bg-everest-black py-24 text-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-everest-yellow font-medium tracking-widest text-sm mb-2">PONTE EN CONTACTO</p>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Contáctanos
            </h2>
            <Separator className="w-16 h-0.5 bg-everest-yellow mb-10" />
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Nombre"
                    className="bg-transparent border-gray-700 focus:border-everest-yellow text-white h-12 rounded-none"
                    required
                  />
                </div>
                <div>
                  <Input
                    id="apellido"
                    type="text"
                    placeholder="Apellido"
                    className="bg-transparent border-gray-700 focus:border-everest-yellow text-white h-12 rounded-none"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Correo electrónico"
                  className="bg-transparent border-gray-700 focus:border-everest-yellow text-white h-12 rounded-none"
                  required
                />
              </div>
              
              <div>
                <Input
                  id="telefono"
                  type="tel"
                  placeholder="Teléfono"
                  className="bg-transparent border-gray-700 focus:border-everest-yellow text-white h-12 rounded-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-everest-yellow hover:bg-white hover:text-everest-black text-everest-black font-medium px-8 py-6 rounded-none group"
              >
                <span>ENVIAR</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
          
          <div className="lg:pl-10 mt-10 lg:mt-0">
            <div className="relative">
              <div className="bg-gray-800 aspect-square w-full">
                <img 
                  src="https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=800&q=80" 
                  alt="Montaña nevada" 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-90"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-everest-yellow w-24 h-24 z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
