interface SongInfoProps {
  title: string;
  artist: string;
}

export default function SongInfo({ title, artist }: SongInfoProps) {
  return (
    <div className="content">
      <h1>{title}</h1>
      <h2>{artist}</h2>
    </div>
  );
}