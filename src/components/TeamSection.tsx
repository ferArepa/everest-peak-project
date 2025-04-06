
import React from 'react';
import { Github, Globe, Twitter, Linkedin } from 'lucide-react';

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
    <section id="team" className="bg-everest-gray py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-everest-black mb-4 uppercase">
            Cards con GitHub
          </h2>
          <div className="h-1 w-20 bg-everest-yellow mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-everest-black">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-everest-yellow transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={member.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-everest-yellow transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-everest-yellow transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                  <a 
                    href={member.portfolio} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-everest-black font-medium hover:text-everest-yellow transition-colors"
                  >
                    <Globe size={18} className="mr-1" />
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Diagonal element at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-everest-black" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
    </section>
  );
};

export default TeamSection;
