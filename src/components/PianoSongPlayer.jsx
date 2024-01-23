import React from 'react';
import * as Tone from 'tone';
import { usePianoKeys } from '../PianoKeysContext';

const PianoSongPlayer = () => {
  const { lightUpKey } = usePianoKeys();
  const synth = new Tone.Synth().toDestination(); // Initialize the synthesizer

  // Function to play a note
  const playNote = async (note) => {
    try {
      await Tone.start(); // Start the Tone.js audio context
      synth.triggerAttackRelease(note, '8n'); // Play the note
      lightUpKey(note); // Light up the piano key
    } catch (error) {
      console.error("Error playing note:", error);
    }
  };

  // Expose the playNote function for parent components
  window.playNote = playNote;

  // const handleStartAudio = async () => {
  //   await Tone.start();
  //   console.log('Audio is ready');
  //   setIsAudioReady(true);
  // };

  // const handleStopAudio = () => {
  //   // Stop any ongoing sound
  //   if (synth.current) {
  //     synth.current.triggerRelease();
  //   }
  // };

  return (
    <div>
      {/* {!isAudioReady ? (
        <button onClick={handleStartAudio}>Start Audio</button>
      ) : (
        <button onClick={handleStopAudio}>Stop Audio</button>
      )} */}
      {/* Your Piano Song Player UI here */}
    </div>
  );
};

export default PianoSongPlayer;
