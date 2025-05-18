import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/common/SectionTitle';
import ServiceCard from '@/components/common/ServiceCard';
import { File, User, Book, Contact } from 'lucide-react';

const ServicesSection = () => {
  const featuredServices = [
    {
      title: 'Contracts',
      description: 'Authentication and drafting of sale-purchase, donation, loan contracts, and others.',
      icon: File
    },
    {
      title: 'Successions',
      description: 'Full assistance in succession procedures and transfer of property rights.',
      icon: User
    },
    {
      title: 'Corporate Documents',
      description: 'Drafting and authentication of documents for establishing and modifying companies.',
      icon: Book
    },
    {
      title: 'Powers of Attorney',
      description: 'Preparation and authentication of general and special powers of attorney for various situations.',
      icon: Contact
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle
          title="Our Services"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-notary-navy hover:bg-notary-accent text-white"
          >
            <Link to="/servicii">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
