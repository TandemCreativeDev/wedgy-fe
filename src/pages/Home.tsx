import backgroundImg from "../assets/images/background.jpg";
import HomeMenu from "../components/HomeMenu/HomeMenu";

export default function Home() {
  return (
    <main className="relative overflow-hidden w-full h-screen z-10">
      {" "}
      {/* Set z-10 */}
      <img
        className="-z-10 absolute inset-0 object-cover w-full h-full object-right"
        src={backgroundImg}
        alt=""
      />
      <h1 className="hidden absolute md:block top-8 left-1/2 transform -translate-x-1/2 text-white text-5xl font-kalnia z-20">
        {" "}
        {/* Add z-20 */}
        Wedgy.
      </h1>
      <HomeMenu />
    </main>
  );
}
