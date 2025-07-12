import React from 'react';
import { Users } from 'lucide-react';
import { HeroSection } from './SectionContainer';

const Hero = () => {
  return (
    <HeroSection>
      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center gap-2 mb-4">
        <Users size={70} strokeWidth={2.5} className="text-[#831c1c]" />
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#831c1c] tracking-tight">CodeCollab</h1>
        <p className="italic text-[#831c1c] text-lg md:text-xl">Projects. Teams. Growth.</p>
      </div>
      
      {/* Tagline */}
      <div className="relative z-10 max-w-xl mx-auto mt-2 mb-6">
        <p className="text-[#831c1c] text-base md:text-lg font-serif">A student-led initiative at UMass where you actually build real tech projects in teams and with our support.</p>
      </div>
      
      {/* Quote */}
      <div className="relative z-10 max-w-2xl mx-auto mt-6 mb-2">
        <blockquote className="italic text-[#831c1c] text-xl md:text-2xl font-serif font-medium">"I want to build something... but I don't know how or where to start."</blockquote>
      </div>
    </HeroSection>
  );
};

export default Hero;
