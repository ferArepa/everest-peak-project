
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
    <section id="team" className="bg-white py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-everest-black mb-4 uppercase">
            Nuestro Equipo
          </h2>
          <Separator className="w-16 h-1 bg-everest-yellow mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-everest-black">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-everest-yellow transition-colors"
                      aria-label="Github"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={member.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-everest-yellow transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-everest-yellow transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                  <a 
                    href={member.portfolio} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-everest-black font-medium hover:text-everest-yellow transition-colors flex items-center"
                  >
                    <Globe size={16} className="mr-1" />
                    <span>Portfolio</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Subtle diagonal element at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-everest-gray" style={{ clipPath: 'polygon(0 100%, 100% 30%, 100% 100%, 0 100%)' }}></div>
    </section>
  );
};

export default TeamSection;
