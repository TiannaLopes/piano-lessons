import React, { useEffect } from 'react';
import MidiPlayer from 'midi-player-js';
import { PianoKeysProvider, usePianoKeys } from '../PianoKeysContext'; // adjust path as needed

const PianoSongPlayer = () => {
  const { lightUpKey } = usePianoKeys();

  useEffect(() => {
  const Player = new MidiPlayer.Player((event) => {
      if (event.name === 'Note on' && event.velocity > 0) {
        lightUpPianoKey(event.noteName);
      }
    });

    // Load MIDI file
    Player.loadFile('path/to/your-midi-file.mid');
    Player.play();

    return () => {
      Player.stop();
    };
 }, [lightUpKey]); 

 const lightUpPianoKey = (noteName) => {
    lightUpKey(noteName); 
  };
  return (
  <PianoKeysProvider>
    <PianoSongPlayer />
  </PianoKeysProvider>
  );
};

export default PianoSongPlayer;
