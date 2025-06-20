interface IconProps {
  icon: React.ElementType;
  link: string;
  name: string;
}

export default function Icon({ icon: IconComponent, link, name }: IconProps) {
  return (
    <a href={link} aria-label={name} target="_blank" rel="noopener noreferrer">
      <IconComponent
        className="group-hover:blur-sm hover:!blur-none transition duration-200 hover:text-gray-300 text-4xl md:text-2xl"
        aria-hidden="true"
      />
    </a>
  );
}
