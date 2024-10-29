import backgroundImg from "../assets/images/background.jpg";

export default function Home() {
  return (
    <main className="relative overflow-hidden w-full h-screen">
      <img
        className="-z-50 absolute inset-0 object-cover w-full h-full "
        src={backgroundImg}
        alt=""
      />
      <h1 className="hidden absolute md:block top-8 left-1/2 transform -translate-x-1/2 text-white text-5xl font-kalnia">
        Wedgy.
      </h1>
    </main>
  );
}
