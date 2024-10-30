// import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <header className="w-full flex justify-center mt-5 md:block h-12">
      <a
        href="/"
        className="md:mt-7 md:ml-7 block transform text-white text-5xl font-kalnia z-20 hover:text-gray-300"
      >
        <h1 className="hidden  md:block">Wedgy.</h1>
      </a>
    </header>
  );
}
