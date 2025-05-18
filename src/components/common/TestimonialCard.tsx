
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  text: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  text,
  image,
}) => {
  return (
    <Card className="card-shadow h-full">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-notary-gold opacity-50"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
          </div>

          <p className="text-gray-600 mb-6 flex-grow">{text}</p>

          <div className="flex items-center">
            {image ? (
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full bg-notary-navy/10 flex items-center justify-center mr-4">
                <span className="text-notary-navy font-bold text-lg">
                  {name.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <h4 className="font-bold text-notary-navy">{name}</h4>
              <p className="text-sm text-gray-500">Client</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
