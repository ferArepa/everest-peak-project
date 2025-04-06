
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

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
    <section id="contact" className="bg-everest-black py-20 text-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-4 uppercase">
                Contáctanos
              </h2>
              <div className="h-1 w-20 bg-everest-yellow"></div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium mb-2">Nombre</label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    className="bg-gray-800 border-gray-700 focus:border-everest-yellow text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium mb-2">Apellido</label>
                  <Input
                    id="apellido"
                    type="text"
                    placeholder="Tu apellido"
                    className="bg-gray-800 border-gray-700 focus:border-everest-yellow text-white"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Correo electrónico</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  className="bg-gray-800 border-gray-700 focus:border-everest-yellow text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium mb-2">Teléfono</label>
                <Input
                  id="telefono"
                  type="tel"
                  placeholder="Tu número de teléfono"
                  className="bg-gray-800 border-gray-700 focus:border-everest-yellow text-white"
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-everest-yellow hover:bg-opacity-80 text-everest-black font-bold px-8 py-3"
              >
                Enviar
              </Button>
            </form>
          </div>
          
          <div className="lg:pl-10 mx-auto lg:mx-0 mt-10 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=800&q=80" 
                alt="Montaña nevada" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-everest-black opacity-20 hover:opacity-10 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
