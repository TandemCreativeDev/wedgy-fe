import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuLinks = [
    { linkAddress: "/", linkText: "HOME" },
    { linkAddress: "/tour", linkText: "TOUR" },
    { linkAddress: "/about", linkText: "ABOUT" },
    { linkAddress: "/music", linkText: "MUSIC" },
    { linkAddress: "/merch", linkText: "MERCH" },
    { linkAddress: "/contact", linkText: "CONTACT" },
  ];

  return (
    <nav aria-label="Main">
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden z-40 fixed top-4 right-4 text-white focus:outline-none"
        aria-label="Open menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Mobile dialog menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative w-screen h-screen max-w-md bg-black ">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="text-white font-lexend flex flex-col items-center text-3xl gap-16 mt-16">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.linkAddress}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-gray-400 cursor-pointer"
                    aria-current={
                      location.pathname === link.linkAddress
                        ? "page"
                        : undefined
                    }
                  >
                    {link.linkText}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
