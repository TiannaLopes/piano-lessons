import React, { useState } from 'react';

import { PianoKeysProvider } from './PianoKeysContext';
import PianoSongPlayer from './components/PianoSongPlayer';
import PianoKeyboard from './components/PianoKeyboard';
import songs from './data/songs.json'

function App() {
  const [selectedSong, setSelectedSong] = useState(null);

 const handleSongSelect = (event) => {
    const songTitle = event.target.value;
    const song = songs.find(s => s.title === songTitle);
    setSelectedSong(song);
  };
  
  const handleNotePlay = (note) => {
    if (window.playNote) {
      window.playNote(note);
    }
  };

  return (
    <PianoKeysProvider>
      <div className="App">
        <PianoSongPlayer selectedSong={selectedSong} />
        <div>
         <select onChange={handleSongSelect} defaultValue="">
          <option value="" disabled>Select a song</option>
          {songs.map((song, index) => (
            <option key={index} value={song.title}>{song.title}</option>
          ))}
          </select>
           </div>
        <PianoKeyboard onPlayNote={handleNotePlay} />
      </div>
    </PianoKeysProvider>
  );
}

export default App;
