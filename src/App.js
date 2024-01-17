import React from 'react';
import { PianoKeysProvider } from './PianoKeysContext'; // Adjust the import path as needed
import PianoSongPlayer from './components/PianoSongPlayer'; // Adjust the import path as needed
import PianoKeyboard from './components/PianoKeyboard'; // Adjust the import path as needed

function App() {
  return (
    <PianoKeysProvider>
      <div className="App">
        <PianoSongPlayer />
        <PianoKeyboard />
      </div>
    </PianoKeysProvider>
  );
}

export default App;
