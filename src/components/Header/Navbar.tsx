const navItemClasses = "hover:text-gray-400";

export default function Navbar() {
  return (
    <nav>
      <ul className="text-white text-xl font-lexend flex space-x-4 list-none absolute top-1/2  left-1/2 w-10/12 justify-between transform -translate-x-1/2 -translate-y-1/2">
        <li>
          <a href="/" className={navItemClasses}>
            TOUR
          </a>
        </li>
        <li>
          <a href="/about" className={navItemClasses}>
            MUSIC
          </a>
        </li>
        <li>
          <a href="/contact" className={navItemClasses}>
            MERCH
          </a>
        </li>
        <li>
          <a href="/contact" className={navItemClasses}>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}
