import React, { useState } from 'react';
import { PianoKeysProvider } from './PianoKeysContext';
import PianoSongPlayer from './components/PianoSongPlayer';
import PianoKeyboard from './components/PianoKeyboard';

function App() {
  const [selectedNote, setSelectedNote] = useState(null);

  const handleNoteSelect = (note) => {
    setSelectedNote(note);
  };

  return (
    <PianoKeysProvider>
      <div className="App">
        <PianoSongPlayer selectedNote={selectedNote} />
        <PianoKeyboard onNoteSelect={handleNoteSelect} />
      </div>
    </PianoKeysProvider>
  );
}

export default App;
