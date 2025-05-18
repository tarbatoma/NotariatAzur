import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-notary-navy/70"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">
          {title}
        </h1>
        <p className="text-xl text-white/90 mb-8">{subtitle}</p>
        
        {buttonText && buttonLink && (
          <Button 
            asChild 
            className="bg-notary-gold hover:bg-notary-gold/90 text-notary-navy font-semibold px-8 py-6 text-lg"
          >
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Hero;
