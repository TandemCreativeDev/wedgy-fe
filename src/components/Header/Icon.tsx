import React from 'react';

interface IconProps {
  icon: React.ElementType;
  link: string;
}

export default function Icon({ icon: IconComponent, link }: IconProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <IconComponent className="group-hover:blur-sm hover:!blur-none transition duration-200 hover:text-gray-300" />
    </a>
  );
}