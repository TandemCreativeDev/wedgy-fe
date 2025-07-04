import { useLocation } from "react-router-dom";

export default function HomeMenu() {
  const location = useLocation();
  const menuLinks = [
    { linkAddress: "/tour", linkText: "TOUR" },
    { linkAddress: "/about", linkText: "ABOUT" },
    { linkAddress: "/music", linkText: "MUSIC" },
    { linkAddress: "/merch", linkText: "MERCH" },
    { linkAddress: "/contact", linkText: "CONTACT" },
  ];

  return (
    <nav aria-label="Home">
      <ul className="z-30 text-white font-lexend flex flex-col text-5xl md:text-xl gap-[8vh] md:flex-row space-x-4 list-none absolute top-1/2 left-1/2 w-10/12 justify-between items-center text-center transform -translate-x-1/2 -translate-y-1/2 group">
        {menuLinks.map((link, index) => (
          <li
            key={index}
            className="group-hover:blur-sm hover:!blur-none transition duration-200"
          >
            <a
              href={link.linkAddress}
              className="relative cursor-pointer decoration-2 tracking-widest hover:drop-shadow-lg transition duration-200 before:content-[''] before:absolute before:inset-0 before:border before:border-white before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
              aria-current={
                location.pathname === link.linkAddress ? "page" : undefined
              }
            >
              {link.linkText}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
