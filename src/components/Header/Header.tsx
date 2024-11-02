import * as icons from "react-icons/fa";
import Icon from "./Icon";
import socialLinks from "../../assets/data/socials.json"; // Adjust the path as needed

type IconKey = keyof typeof icons;

export default function Header() {
  return (
    <header className="w-full flex flex-col md:flex-row items-center md:items-start p-4 h-auto md:h-16">
      <a
        href="/"
        className="text-white text-5xl font-kalnia hover:text-gray-300 text-center md:text-left mb-4 md:mb-0"
      >
        <h1>Wedgy.</h1>
      </a>
      <div className="flex space-x-4 text-white group justify-center md:justify-end md:ml-auto">
        {socialLinks.map(({ icon, link }, index) => {
          const IconComponent = icons[icon as IconKey];
          return <Icon key={index} icon={IconComponent} link={link} />;
        })}
      </div>
    </header>
  );
}