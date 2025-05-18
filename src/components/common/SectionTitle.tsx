
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'left',
}) => {
  return (
    <div className={`mb-8 ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'}`}>
      <h2 className={`text-2xl md:text-3xl font-bold text-notary-navy mb-3 font-playfair relative inline-block`}>
        {title}
        <span className={`absolute h-0.5 bg-notary-gold w-1/2 bottom-0 ${
          align === 'center' ? 'left-1/2 transform -translate-x-1/2' : 
          align === 'right' ? 'right-0' : 'left-0'
        }`}></span>
      </h2>
      {subtitle && <p className="text-base text-gray-600 mt-3 max-w-2xl">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
