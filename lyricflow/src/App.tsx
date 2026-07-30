import { useState } from "react";
import "./App.css";

import Vinyl from "./components/Vinyl";
import SongInfo from "./components/SongInfo";
import Lyrics from "./components/Lyrics";
import Spectrum from "./components/Spectrum";
import mockSong from "./data/mockSong";

function App() {
   const [song] = useState(mockSong);
  return (
    <div className="app">
      
      <Vinyl 
      albumArt={song.albumArt}
      isPlaying={song.isPlaying} />
      <div className="right">

        <h1>{song.title}</h1>
        
        <h2>{song.artist}</h2>

        < SongInfo 
          title={song.title} 
          artist={song.artist}
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