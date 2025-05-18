import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import { Shield, Edit, Clock } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <SectionTitle
          title="Why Choose Us"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-notary-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-notary-navy" />
            </div>
            <h3 className="text-xl font-bold text-notary-navy mb-3 font-playfair">Guaranteed Confidentiality</h3>
            <p className="text-gray-600">
              We treat all client information with the utmost confidentiality and discretion.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-notary-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Edit className="w-8 h-8 text-notary-navy" />
            </div>
            <h3 className="text-xl font-bold text-notary-navy mb-3 font-playfair">Legal Expertise</h3>
            <p className="text-gray-600">
              Our team possesses extensive knowledge and experience in notarial services and applicable legislation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-notary-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-notary-navy" />
            </div>
            <h3 className="text-xl font-bold text-notary-navy mb-3 font-playfair">Prompt Services</h3>
            <p className="text-gray-600">
              We value our clients’ time and strive to deliver efficient and swift services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
