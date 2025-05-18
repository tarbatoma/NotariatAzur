import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/common/Hero';
import SectionTitle from '@/components/common/SectionTitle';
import TeamMember from '@/components/common/TeamMember';

const Echipa = () => {
  const teamMembers = [
    {
      name: 'Maria Popescu',
      position: 'Public Notary',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
      description: 'With over 20 years of notarial experience, Maria leads our office with professionalism and dedication. Specialized in real estate law and inheritances.'
    },
    {
      name: 'Alexandru Ionescu',
      position: 'Public Notary',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
      description: 'Alexandru joined the team in 2012, bringing valuable expertise in corporate law and commercial transactions. Holds a Law degree with a Master’s in Private Law.'
    },
    {
      name: 'Elena Dumitrescu',
      position: 'Lawyer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
      description: 'With 15 years of legal experience, Elena provides specialized legal advice and prepares complex documents. Excels in detailed legal analysis.'
    },
    {
      name: 'Mihai Stanescu',
      position: 'Lawyer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
      description: 'Mihai specializes in family law and inheritances. With an empathetic and meticulous approach, he helps clients navigate complex legal procedures with ease.'
    },
    {
      name: 'Andreea Marin',
      position: 'Notarial Secretary',
      image: 'https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?auto=format&fit=crop&q=80&w=600',
      description: 'Andreea manages appointments, client relations, and documentation, ensuring all administrative processes run efficiently and professionally.'
    },
    {
      name: 'Cristian Popa',
      position: 'IT Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
      description: 'Cristian ensures the optimal functioning of the office’s IT systems and implements digital solutions to streamline processes and secure data.'
    }
  ];

  return (
    <Layout>
      <Hero
        title="Our Team"
        subtitle="The professionals behind our service excellence"
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
      />

      {/* Team Introduction */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle
            title="Meet Our Experts"
            subtitle="A team of professionals dedicated to excellence in notarial services"
            align="center"
          />
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-600">
              At Notariat Modern, we pride ourselves on a diverse team of professionals with extensive legal and notarial experience. Each team member is committed to delivering the highest quality services and finding optimal solutions for our clients’ specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Join Our Team"
              subtitle="We are always looking for talented, dedicated professionals"
              align="center"
            />
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6">
                If you are passionate about the legal field, have a strong professional ethic, and want to grow in a dynamic, excellence-driven environment, we invite you to explore career opportunities at our notarial office.
              </p>
              
              <p className="text-gray-600 mb-6">
                We offer a stimulating work environment, continuous professional development opportunities, and competitive benefits. We commit to supporting each team member’s professional growth.
              </p>
              
              <p className="text-gray-600 mb-8">
                To learn more about open positions or to express your interest, please contact us at <span className="text-notary-navy font-semibold">cariere@notariatmodern.ro</span>.
              </p>

              <h3 className="text-xl font-bold text-notary-navy mb-4 font-playfair">Currently Open Positions:</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Lawyer specializing in real estate law (full-time)</li>
                <li>Notarial Secretary (full-time)</li>
                <li>Notarial Practice Intern (part-time)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
                  alt="Team Meeting"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-notary-gold rounded-lg -z-10"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <SectionTitle
                title="Our Approach"
                subtitle="How we work to deliver the best services"
              />
              <p className="text-gray-600 mb-6">
                Every case is treated with individual attention. We start by fully understanding the client’s specific needs and circumstances, then develop customized solutions to meet those needs.
              </p>
              <p className="text-gray-600 mb-6">
                We work as an integrated team, combining our members’ diverse expertise to address each situation from multiple perspectives. This collaborative approach allows us to provide comprehensive, well-founded solutions.
              </p>
              <p className="text-gray-600">
                We commit to maintaining open and transparent communication with our clients throughout the process. We believe that full information and clarity are essential for building trust and achieving optimal outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Echipa;
