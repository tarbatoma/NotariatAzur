import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/common/Hero';
import IntroSection from '@/components/home/IntroSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

// Import your local image
import cladire from '../images/cladire.jpg';

const Index = () => {
  return (
    <Layout>
      <Hero
        title="Trusted Notarial Services"
        subtitle="We provide top-quality legal solutions for all your needs"
        image={cladire}
        buttonText="Book an Appointment"
        buttonLink="/contact"
      />
      <IntroSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
