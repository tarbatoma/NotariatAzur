import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-notary-navy text-white">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 font-playfair">
          We Have the Right Solution for Your Needs
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8">
          Contact us today for a consultation, and we’ll help you navigate all legal aspects.
        </p>
        <Button
          asChild
          className="bg-notary-gold hover:bg-notary-gold/90 text-notary-navy font-semibold px-6 py-3 md:px-8 md:py-6 text-base md:text-lg"
        >
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
