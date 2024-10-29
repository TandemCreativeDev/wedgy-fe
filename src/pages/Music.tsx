export default function Music() {
  return (
    <div className="flex flex-wrap gap-24 mt-24 w-10/12 m-auto mb-16">
      <iframe
        style={{ border: 0, width: "350px", height: "442px" }} // Use an object here
        src="https://bandcamp.com/EmbeddedPlayer/track=1695960462/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/"
        seamless
      >
        <a href="https://wedgefund.bandcamp.com/track/speak-to-me">
          Speak To Me by Wedgy
        </a>
      </iframe>
      <iframe
        style={{ border: 0, width: "350px", height: "442px" }} // Use an object here
        src="https://bandcamp.com/EmbeddedPlayer/track=463988426/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/"
        seamless
      >
        <a href="https://wedgefund.bandcamp.com/track/stitch-the-lines">
          Stitch The Lines by Wedgy
        </a>
      </iframe>
      <iframe
        style={{ border: 0, width: "350px", height: "442px" }} // Use an object here
        src="https://bandcamp.com/EmbeddedPlayer/track=1520204842/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/"
        seamless
      >
        <a href="https://wedgefund.bandcamp.com/track/wasnt-present-in-me">
          Wasn't Present In Me by Wedgy
        </a>
      </iframe>
      <iframe
        style={{ border: 0, width: "350px", height: "470px" }} // Use an object here
        src="https://bandcamp.com/EmbeddedPlayer/album=3432374493/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/"
        seamless
      >
        <a href="https://wedgefund.bandcamp.com/album/redundant-in-rio">
          Redundant in Rio by Wedgy
        </a>
      </iframe>
    </div>
  );
}
