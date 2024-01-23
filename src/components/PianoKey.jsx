import React, { useRef } from 'react';
import { usePianoKeys } from '../PianoKeysContext';
import gsap from 'gsap';

const PianoKey = ({ note, type, onPlayNote }) => {
  const keyRef = useRef(null);
  const { activeKeys } = usePianoKeys();
  const isActive = activeKeys.includes(note);

  // Extract the octave from the note
 const octave = parseInt(note.slice(-1), 10);
  
  // Define colors for each key group (octave in this case)
  const octaveColors = {
  0: 'lightblue',    // Color for the 1st octave (C0 to B0)
  1: 'lightgreen',   // Color for the 2nd octave (C1 to B1)
  2: 'lightpink',    // Color for the 3rd octave (C2 to B2)
  3: 'lightyellow',  // Color for the 4th octave (C3 to B3)
  4: 'lightcoral',   // Color for the 5th octave (C4 to B4)
  5: 'lightsalmon',  // Color for the 6th octave (C5 to B5)
  6: 'lightgrey',    // Color for the 7th octave (C6 to B6)
  7: 'lightcyan'     // Color for the 8th partial octave (C7 and above)
};

 // Get the color for the current key's group
  const keyColor = octaveColors[octave] || 'white'; 

  const keyClassName = `piano-key ${type === 'black' ? 'black-key' : 'white-key'}`;
  const keyStyle = isActive ? { backgroundColor: keyColor } : {};

  const animateKey = () => {
    gsap.to(keyRef.current, {
      scale: 0.9,
      duration: 0.1,
      ease: "power1.out",
      onComplete: () => {
        gsap.to(keyRef.current, { scale: 1, duration: 0.1, ease: "power1.in" });
      }
    });
  };

  // Initialize window.triggerAnimation as an object if it doesn't exist
  if (!window.triggerAnimation) {
    window.triggerAnimation = {};
  }

  // Assign the animate function to the corresponding note
  window.triggerAnimation[note] = animateKey;

  const handleClick = () => {
    onPlayNote(note);
    animateKey();
  };

  return (
 <div ref={keyRef} className={keyClassName} style={keyStyle} onClick={handleClick}>
      <span className="key-label">{note}</span>
    </div>
  );
};

export default PianoKey;
