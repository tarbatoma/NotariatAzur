
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <Card className="border-t-2 border-notary-gold bg-white h-full hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full bg-notary-navy/5 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-notary-navy" />
        </div>
        <h3 className="text-lg font-semibold text-notary-navy font-playfair">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
