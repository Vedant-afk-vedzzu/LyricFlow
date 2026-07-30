import "./App.css";

import Vinyl from "./components/Vinyl";
import SongInfo from "./components/SongInfo";
import Lyrics from "./components/Lyrics";
import Spectrum from "./components/Spectrum";
import mockSong from "./data/mockSong";

function App() {
  return (
    <div className="app">

      <Vinyl 
      albumArt={mockSong.albumArt}
      isPlaying={mockSong.isPlaying} />
      <div className="right">

        <h1>{mockSong.title}</h1>
        
        <h2>{mockSong.artist}</h2>

        < SongInfo 
          title={mockSong.title} 
          artist={mockSong.artist}
          />

        <Lyrics />

        <Spectrum />

      </div>
      <div className="glass">
        
      </div>

     </div>   
    
  
  );
}
export default App;