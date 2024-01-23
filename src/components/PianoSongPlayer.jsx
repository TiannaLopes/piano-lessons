import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import { usePianoKeys } from '../PianoKeysContext';

const PianoSongPlayer = () => {
  const { lightUpKey } = usePianoKeys();
  const [isAudioReady, setIsAudioReady] = useState(false);

  useEffect(() => {
    if (isAudioReady) {
      const synth = new Tone.Synth().toDestination();

      // Example of playing a note
      const playNote = (note) => {
        synth.triggerAttackRelease(note, '8n');
        lightUpKey(note);
      };

      // Play a note (replace with your logic to play notes from a MIDI file or other source)
      playNote('C4');
    }
  }, [isAudioReady, lightUpKey]);

  const handleStartAudio = async () => {
    await Tone.start();
    console.log('Audio is ready');
    setIsAudioReady(true);
  };

  return (
    <div>
      {!isAudioReady && (
        <button onClick={handleStartAudio}>Start Audio</button>
      )}
      {/* Your Piano Song Player UI here */}
    </div>
  );
};

export default PianoSongPlayer;
