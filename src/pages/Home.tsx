import backgroundImg from "../assets/images/background.jpg";

export default function Home() {
  return (
    <main>
      <img className="-z-50 relative w-screen " src={backgroundImg} alt="" />
      <h1 className="absolute top-8 left-1/2 transform -translate-x-1/2  text-white text-5xl font-kalnia">
        Wedgy.
      </h1>
    </main>
  );
}
