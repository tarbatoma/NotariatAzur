import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/common/Hero';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Award, Clock, CheckCircle } from 'lucide-react';

const Despre = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We act with honesty and transparency in all our professional interactions, always putting our clients’ interests first.',
      icon: Shield
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality services, paying close attention to every detail and maintaining high professional standards.',
      icon: Award
    },
    {
      title: 'Promptness',
      description: 'We respect our clients’ time and strive to provide efficient and swift solutions without compromising service quality.',
      icon: Clock
    },
    {
      title: 'Confidentiality',
      description: 'We strictly protect our clients’ confidential information, ensuring total discretion in every aspect of our collaboration.',
      icon: CheckCircle
    }
  ];

  return (
    <Layout>
      <Hero
        title="About Us"
        subtitle="Our story, mission and guiding values"
        image="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80"
      />

      {/* About Us */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <SectionTitle
                title="Who We Are"
                subtitle="A team dedicated to excellence in notarial services"
              />
              <p className="text-gray-600 mb-6">
                Notariat Modern was founded in 2008 with the mission of providing high-quality notarial services tailored to our clients’ modern needs. Over the years, we have built our reputation on professionalism, integrity, and a dedication to excellence.
              </p>
              <p className="text-gray-600 mb-6">
                Our notarial office brings together a team of professionals with extensive legal experience, all committed to delivering the highest quality services. We combine traditional expertise with modern approaches, leveraging advanced technology to streamline processes and enhance the client experience.
              </p>
              <p className="text-gray-600 mb-8">
                We pride ourselves on understanding each client’s specific needs and offering personalized, efficient solutions that comply with current legislation. Whether you’re an individual or a corporation, we guide you through legal complexities with professionalism and clarity.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-full">
                <img
                  src="https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80"
                  alt="Our office"
                  className="rounded-lg shadow-xl h-full object-cover"
                />
                <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-notary-gold rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Our Mission"
              align="center"
            />
            <p className="text-gray-600 text-lg mb-12">
              Our mission is to provide high-quality notarial services that are accessible and tailored to each client’s needs. We commit to delivering efficient legal solutions, ensuring the security of transactions and legal relationships, while strictly adhering to legislation and professional ethical principles.
            </p>

            <SectionTitle
              title="Our Vision"
              align="center"
            />
            <p className="text-gray-600 text-lg">
              We aim to be recognized as a leading notarial office in Romania, blending tradition and expertise with innovation and technology, offering excellent services and contributing to the strengthening of legal security in society.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Values"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-notary-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-notary-navy" />
                </div>
                <h3 className="text-xl font-bold text-notary-navy mb-3 font-playfair">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Our History"
            align="center"
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-notary-navy text-white p-4 rounded-lg text-center">
                    <h3 className="text-xl font-bold font-playfair">2008</h3>
                    <p className="text-white/80">Founded</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-bold text-notary-navy mb-2">The Beginning of Our Journey</h4>
                  <p className="text-gray-600">
                    Notariat Modern was established with a clear vision: to provide modern, efficient, and client-focused notarial services. We began with a small but dedicated team determined to bring a fresh approach to the notarial field.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-notary-navy text-white p-4 rounded-lg text-center">
                    <h3 className="text-xl font-bold font-playfair">2012</h3>
                    <p className="text-white/80">Expansion</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-bold text-notary-navy mb-2">Growth and Development</h4>
                  <p className="text-gray-600">
                    After four years of operation, we expanded our team and moved to a larger office to accommodate our growing client base. We implemented advanced digital systems to optimize internal processes.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-notary-navy text-white p-4 rounded-lg text-center">
                    <h3 className="text-xl font-bold font-playfair">2016</h3>
                    <p className="text-white/80">Innovation</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-bold text-notary-navy mb-2">Adopting Technology</h4>
                  <p className="text-gray-600">
                    We were among the first notarial offices to implement comprehensive digital solutions for document management and client communication, setting new industry standards for efficiency and accessibility.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-notary-navy text-white p-4 rounded-lg text-center">
                    <h3 className="text-xl font-bold font-playfair">Present</h3>
                    <p className="text-white/80">Continuous Excellence</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-bold text-notary-navy mb-2">Industry Leader</h4>
                  <p className="text-gray-600">
                    Today, Notariat Modern is recognized for service excellence, an innovative approach, and dedication to clients. We continue to evolve and adapt to legislative changes and our clients’ ever-changing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-notary-navy text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
            Need Notarial Services?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            We are here to assist you with expertise and professionalism. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-notary-gold hover:bg-notary-gold/90 text-notary-navy font-semibold px-8 py-6 text-lg"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <Link to="/servicii">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Despre;
