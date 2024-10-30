import BandcampPlayer from "../components/BandcampPlayer/BandcampPlayer";
import bandCampData from "../assets/data/bandcamp.json";

export default function Music() {
  return (
    <>
      <h1 className=" font-lexend text-white text-7xl text-center tracking-widest">
        MUSIC
      </h1>
      <h2 className="m-auto w-1/2 font-lexend text-white text-4xl text-center tracking-widest mt-10 mb-10">
        SINGLES
      </h2>
      <div className="flex justify-center flex-wrap gap-24 w-11/12 m-auto mb-16">
        {bandCampData.map((song) => {
          if (song.type === "single") {
            return <BandcampPlayer song={song} />;
          }
        })}
      </div>
      <h2 className="m-auto w-1/2 font-lexend text-white text-4xl text-center items-center tracking-widest mt-10 mb-10">
        BUY THE ALBUM
      </h2>
      <div className="flex justify-center flex-wrap gap-24 w-11/12 m-auto mb-16">
        {bandCampData.map((song) => {
          if (song.type === "album") {
            return <BandcampPlayer song={song} />;
          }
        })}
      </div>
    </>
  );
}
