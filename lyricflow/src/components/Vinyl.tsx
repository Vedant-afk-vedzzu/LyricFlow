import vinyl from "../assets/vinyl.svg";

interface VinylProps {
  albumArt: string;
  isPlaying: boolean;
}

export default function Vinyl({
  albumArt,
  isPlaying,
}: VinylProps) {
  return (
    <div className={`vinyl ${isPlaying ? "playing" : "paused"}`}>
      <img className="record" src={vinyl} alt="Vinyl Record" />

      <div className="album-center">
        <img src={albumArt} alt="Album Art" />
      </div>
    </div>
  );
}