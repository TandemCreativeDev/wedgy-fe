import backgroundImg from "../assets/images/background.jpg";
import HomeMenu from "../components/HomeMenu/HomeMenu";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Wedgy";
  }, []);
  return (
    <main
      id="main-content"
      className="overflow-hidden w-full min-h-[calc(100vh-9.25rem)] z-10"
    >
      <img
        className="-z-10 absolute inset-0 object-cover w-full h-full object-right"
        src={backgroundImg}
        alt="Photo of Wedgy performing live, black & white"
      />
      <HomeMenu />
    </main>
  );
}
