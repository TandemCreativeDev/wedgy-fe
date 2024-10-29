import Header from "../components/Header/Header";
import BandcampPlayer from "../components/BandcampPlayer/BandcampPlayer";
import bandCampData from "../assets/data/bandcamp.json";

export default function Music() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap gap-24 mt-24 w-10/12 m-auto mb-16">
        {bandCampData.map((song) => {
          return <BandcampPlayer song={song} />;
        })}
      </div>
    </>
  );
}
