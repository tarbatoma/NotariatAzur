import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/common/Hero';
import SectionTitle from '@/components/common/SectionTitle';
import ContactForm from '@/components/common/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+40 123 456 789', '+40 987 654 321']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['office@notariatazur.ro', 'appointments@notariatazur.ro']
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Example St. no. 123', 'Bucharest, Romania']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed']
    }
  ];

  return (
    <Layout>
      <Hero
        title="Contact Us"
        subtitle="We are here to answer your questions and assist you with notarial services"
        image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
      />

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle
            title="Contact Information"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-notary-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-notary-navy" />
                </div>
                <h3 className="text-xl font-bold text-notary-navy mb-3 font-playfair">{item.title}</h3>
                <div className="text-gray-600">
                  {item.details.map((detail, i) => (
                    <p key={i} className="mb-1">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <SectionTitle
                title="Send Us a Message"
                subtitle="Fill out the form and we will get back to you as soon as possible"
              />
              <ContactForm />
            </div>

            <div className="lg:w-1/2">
              <SectionTitle
                title="Our Location"
                subtitle="Find us easily in the city center"
              />
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22771.84037885934!2d26.079940973694966!3d44.439340328374124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff0bdb080a2b%3A0x23a3287635a1907!2zQnVjdXJlyJl0aQ!5e0!3m2!1sro!2sro!4v1636721100000!5m2!1sro!2sro" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  aria-hidden="false"
                  title="Notariat Azur Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Frequently Asked Questions about Appointments"
            align="center"
          />

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-notary-navy mb-3 font-playfair">How can I make an appointment?</h3>
              <p className="text-gray-600">
                You can make an appointment by phone at +40 123 456 789, by email at appointments@notariatazur.ro, or by filling out the contact form on this page. We will confirm your appointment as soon as possible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-notary-navy mb-3 font-playfair">Is it necessary to schedule in advance?</h3>
              <p className="text-gray-600">
                For most services, we recommend scheduling in advance to avoid wait times and ensure we can give you the necessary attention. For certain simple services, such as document legalization, you can come without an appointment during working hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-notary-navy mb-3 font-playfair">How long does a notarial session last?</h3>
              <p className="text-gray-600">
                The duration of a notarial session varies depending on the type of service requested. For simple services, such as legalization or powers of attorney, the session may last 30–60 minutes. For more complex services, such as sale-purchase contracts or successions, one or more sessions of 1–2 hours may be required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
