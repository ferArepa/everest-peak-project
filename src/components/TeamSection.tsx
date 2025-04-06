
import React from 'react';
import { Github, Globe, Twitter, Linkedin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Carlos Mendoza',
      role: 'Desarrollador Frontend',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80',
      github: 'https://github.com',
      portfolio: 'https://example.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Laura González',
      role: 'Diseñadora UX/UI',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
      github: 'https://github.com',
      portfolio: 'https://example.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Miguel Torres',
      role: 'Desarrollador Móvil',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
      github: 'https://github.com',
      portfolio: 'https://example.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  ];

  return (
    <section id="team" className="bg-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-everest-yellow font-medium tracking-widest text-sm mb-2">NUESTRO EQUIPO</p>
          <h2 className="text-3xl md:text-4xl font-medium text-everest-black mb-6">
            Talento excepcional para resultados excepcionales
          </h2>
          <Separator className="w-16 h-0.5 bg-everest-yellow mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <Card className="bg-white border-none shadow-none group-hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="px-0 py-6">
                  <h3 className="text-xl font-medium text-everest-black">{member.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{member.role}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <a 
                        href={member.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-everest-yellow transition-colors"
                        aria-label="Github"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={member.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-everest-yellow transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter size={18} />
                      </a>
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-everest-yellow transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                    <a 
                      href={member.portfolio} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-everest-black font-medium hover:text-everest-yellow transition-colors flex items-center"
                    >
                      <Globe size={14} className="mr-1" />
                      <span>Portfolio</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* Minimal diagonal accent */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-50"></div>
    </section>
  );
};

export default TeamSection;
