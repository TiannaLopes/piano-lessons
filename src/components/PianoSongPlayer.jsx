import React, { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';
import { usePianoKeys } from '../PianoKeysContext';

const PianoSongPlayer = ({ selectedNote }) => {
  const { lightUpKey } = usePianoKeys();
  const [isAudioReady, setIsAudioReady] = useState(false);
  const synthRef = useRef(null); // Reference to the Tone.js Synthesizer

  useEffect(() => {
    // Initialize the synth
    if (!synthRef.current) {
      synthRef.current = new Tone.Synth().toDestination();
    }
  }, []);

  useEffect(() => {
    if (selectedNote && isAudioReady) {
      // Start playing the note
      synthRef.current.triggerAttack(selectedNote);
      lightUpKey(selectedNote);

      // Optionally, set a maximum duration for the note
      setTimeout(() => {
        synthRef.current.triggerRelease();
      }, 500); // Stop playing the note after half a second
    }
  }, [selectedNote, isAudioReady, lightUpKey]);

  const handleStartAudio = async () => {
    await Tone.start();
    console.log('Audio is ready');
    setIsAudioReady(true);
  };

  const handleStopAudio = () => {
    // Stop any ongoing sound
    if (synthRef.current) {
      synthRef.current.triggerRelease();
    }
  };

  return (
    <div>
      {!isAudioReady ? (
        <button onClick={handleStartAudio}>Start Audio</button>
      ) : (
        <button onClick={handleStopAudio}>Stop Audio</button>
      )}
      {/* Your Piano Song Player UI here */}
    </div>
  );
};

export default PianoSongPlayer;
