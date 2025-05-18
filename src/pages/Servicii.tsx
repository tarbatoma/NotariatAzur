import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/common/Hero';
import SectionTitle from '@/components/common/SectionTitle';
import ServiceCard from '@/components/common/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { File, User, Book, Contact, Home, Edit, Shield, Archive, MapPin } from 'lucide-react';

const Servicii = () => {
  const services = [
    {
      title: 'Sale-Purchase Agreements',
      description: 'Drafting and notarization of sale-purchase agreements for real estate, land, and other assets.',
      icon: File
    },
    {
      title: 'Inheritance Procedures',
      description: 'Comprehensive assistance in inheritance procedures, from opening the estate to issuing the heir certificate.',
      icon: User
    },
    {
      title: 'Commercial Company Documents',
      description: 'Drafting and notarization of documents for the incorporation, modification, or dissolution of commercial companies.',
      icon: Book
    },
    {
      title: 'Powers of Attorney',
      description: 'Preparation and notarization of general and special powers of attorney for various legal situations.',
      icon: Contact
    },
    {
      title: 'Donation Agreements',
      description: 'Drafting and notarization of donation agreements for movable and immovable property.',
      icon: Home
    },
    {
      title: 'Wills',
      description: 'Assistance in drafting and notarizing wills to ensure your final wishes are respected.',
      icon: Edit
    },
    {
      title: 'Loan Agreements',
      description: 'Drafting and notarization of loan agreements between individuals or legal entities.',
      icon: Shield
    },
    {
      title: 'Legalizations & Certifications',
      description: 'Legalization of document copies and certification of facts where required by law.',
      icon: Archive
    },
    {
      title: 'Declarations',
      description: 'Drafting and notarization of declarations required in various legal procedures.',
      icon: Contact
    },
    {
      title: 'Lease Agreements',
      description: 'Drafting and notarization of lease agreements for real estate properties.',
      icon: Home
    },
    {
      title: 'Mutual Divorce',
      description: 'Assistance in mutual divorce proceedings under public notary regulations.',
      icon: User
    },
    {
      title: 'Apostille',
      description: 'Assistance in obtaining an apostille for documents to be used abroad.',
      icon: MapPin
    },
  ];

  return (
    <Layout>
      <Hero
        title="Our Services"
        subtitle="Comprehensive notarial solutions for all your needs"
        image="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80"
      />

      {/* Services Description */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle
            title="High-Quality Notarial Services"
            subtitle="We offer a full range of notarial services for individuals and businesses, ensuring professionalism, confidentiality, and tailored solutions."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-600 mb-4">
                At Notariat Modern, we understand that every legal situation is unique and requires a personalized approach. That’s why we provide notarial services tailored to each client’s specific needs, whether they are individuals or corporations.
              </p>
              <p className="text-gray-600 mb-4">
                We are committed to delivering efficient solutions while upholding the highest standards of professionalism and ethics. Our team of specialists will guide you through the entire process, ensuring you fully understand the legal implications and that your interests are protected.
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-4">
                All our services are carried out with meticulous attention to detail and in full compliance with current legislation. We make sure that documents drafted and notarized in our office meet all legal requirements and provide you with the legal certainty you need.
              </p>
              <p className="text-gray-600">
                For additional information about any of our services or to schedule an appointment, please don’t hesitate to contact us. We are here to help you navigate legal complexities with ease and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Complete List of Services"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle
            title="Fees & Rates"
            align="center"
          />

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Notarial fees are set according to the regulations of the National Union of Public Notaries of Romania and may vary based on case complexity, transaction value, and required processing time.
            </p>
            
            <p className="text-gray-600 mb-6">
              To receive an accurate cost estimate for the service you need, we recommend contacting us directly. We will provide detailed and transparent information about all applicable fees.
            </p>

            <p className="text-gray-600 mb-8">
              We are committed to offering quality services at competitive prices and ensuring you are fully informed about all costs before starting our collaboration.
            </p>

            <div className="text-center">
              <Button
                asChild
                className="bg-notary-navy hover:bg-notary-accent text-white"
              >
                <Link to="/contact">Request a Personalized Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Frequently Asked Questions"
            align="center"
          />

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-notary-navy mb-3 font-playfair">What documents are required to notarize a sale-purchase agreement?</h3>
              <p className="text-gray-600">
                Generally required documents include: identity cards of the parties, seller’s property deeds, current land registry excerpt, tax certificate, and other documents depending on the property type. We recommend contacting us in advance for a precise list tailored to your situation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-notary-navy mb-3 font-playfair">How long does the inheritance procedure take?</h3>
              <p className="text-gray-600">
                The duration of the inheritance procedure depends on case complexity, number of heirs, and assets involved. In simple cases, it can be completed in a few weeks, but more complex situations may take several months.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-notary-navy mb-3 font-playfair">Is everyone required to be present when signing a contract?</h3>
              <p className="text-gray-600">
                Generally, yes— all parties must be present to notarize a contract. However, in certain cases, a notarized power of attorney may allow representation by another person. Please discuss your specific situation with us in advance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-notary-navy mb-3 font-playfair">Can I obtain a copy of a lost notarial deed?</h3>
              <p className="text-gray-600">
                Yes, if the deed was executed in our office, we can issue duplicates or certified copies. This service is available to the parties involved or their legal representatives, in compliance with data protection regulations.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-notary-gold hover:bg-notary-gold/90 text-notary-navy font-semibold"
            >
              <Link to="/contact">Have more questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicii;
