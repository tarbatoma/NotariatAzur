
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  image,
  description,
}) => {
  return (
    <Card className="overflow-hidden card-shadow h-full">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-notary-navy mb-1 font-playfair">{name}</h3>
        <p className="text-notary-gold font-medium mb-4">{position}</p>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
