interface SongProps {
  src: string;
  title: string;
  href: string;
}

export default function BandcampPlayer({ song }: { song: SongProps }) {
  return (
    <iframe
      style={{ border: 0, width: "350px", height: "442px" }}
      src={song.src}
      title={song.title}
      loading="lazy"
      seamless
    >
      <a href={song.href}>{song.title}</a>
    </iframe>
  );
}
