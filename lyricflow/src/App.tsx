import "./App.css";

import Vinyl from "./components/Vinyl";
import SongInfo from "./components/SongInfo";
import Lyrics from "./components/Lyrics";
import Spectrum from "./components/Spectrum";

function App() {
  return (
    <div className="app">

      <Vinyl />

      <div className="right">

        <SongInfo />

        <Lyrics />

        <Spectrum />

      </div>
      <div className="Glass">
        
      </div>

     </div>   
    
  
  );
}
export default App;