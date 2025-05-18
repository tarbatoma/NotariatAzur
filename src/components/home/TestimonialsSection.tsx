import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import TestimonialCard from '@/components/common/TestimonialCard';

const testimonials = [
  {
    name: 'Mihai Popescu',
    text: 'I used Notariat Modern for a sale-purchase contract. The staff was extremely professional and everything was handled in record time. I highly recommend them!'
  },
  {
    name: 'Ana Ionescu',
    text: 'Top-quality services. They guided me through the entire succession process with patience and professionalism. I really appreciate the clarity of their explanations and their efficiency.'
  },
  {
    name: 'George Dumitrescu',
    text: 'I used their services to establish a company. Everything went smoothly and quickly. The staff is very friendly and knowledgeable. I will definitely return!'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Feedback from clients who have used our services"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
