import backgroundImg from "../assets/images/background.jpg";
import HomeMenu from "../components/HomeMenu/HomeMenu";

export default function Home() {
  return (
    <main className=" overflow-hidden w-full h-screen z-10">
      <img
        className="-z-10 absolute inset-0 object-cover w-full h-full object-right"
        src={backgroundImg}
        alt=""
      />

      <HomeMenu />
    </main>
  );
}
