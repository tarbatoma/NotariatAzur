import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/common/SectionTitle';

const IntroSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-full md:w-1/2">
            <SectionTitle
              title="Welcome to Azur Notary"
              subtitle="With over 15 years of notarial experience, we provide top-quality services, ensuring professionalism, confidentiality, and customized solutions for every client."
            />
            <p className="text-gray-600 mb-6">
              We have built our reputation on trust and outstanding results, recognized for our attention to detail and client-centered approach. Our team of experienced professionals is here to guide you through legal complexities and offer the best solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-notary-navy hover:bg-notary-accent text-white"
              >
                <Link to="/despre">About Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-notary-navy text-notary-navy hover:bg-notary-navy/5"
              >
                <Link to="/servicii">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src="/public/lovable-uploads/98922f63-a56f-44d6-bf07-03e48f1dd3cb.png"
                alt="Document Signing"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-notary-gold p-4 md:p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-white font-bold text-base md:text-lg">15+ Years of Experience</p>
                <p className="text-white/80 text-sm md:text-base">Providing Quality Notarial Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
