import React from 'react';
import { PianoKeysProvider } from './PianoKeysContext';
import PianoSongPlayer from './components/PianoSongPlayer';
import PianoKeyboard from './components/PianoKeyboard';

function App() {

  const handleNotePlay = (note) => {
    if (window.playNote) {
      window.playNote(note);
    }
  };

  return (
    <PianoKeysProvider>
      <div className="App">
        <PianoSongPlayer />
        <PianoKeyboard onPlayNote={handleNotePlay} />
      </div>
    </PianoKeysProvider>
  );
}

export default App;
