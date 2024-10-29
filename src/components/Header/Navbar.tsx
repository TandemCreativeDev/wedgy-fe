const navItemClasses = "hover:text-gray-400";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-4 list-none absolute">
        <li>
          <a href="/" className={navItemClasses}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" className={navItemClasses}>
            About
          </a>
        </li>
        <li>
          <a href="/contact" className={navItemClasses}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
