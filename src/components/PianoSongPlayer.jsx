import React from 'react';
import * as Tone from 'tone';
import { usePianoKeys } from '../PianoKeysContext';

const PianoSongPlayer = ({ selectedSong }) => {
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

  // Function to play a song
   const playSong = () => {
    if (selectedSong && selectedSong.notes) {
      selectedSong.notes.forEach((note, index) => {
        setTimeout(() => {
          if (window.playNote) {
            window.playNote(note);
          }
          if (window.triggerAnimation && window.triggerAnimation[note]) {
            window.triggerAnimation[note](); // Trigger animation for the key
          }
        }, index * 500);
      });
    }
  };

  // Expose the playNote function for parent components
  window.playNote = playNote;

  return (
    <div>
      <button onClick={playSong}>Play Song</button>
    </div>
  );
};

export default PianoSongPlayer;
