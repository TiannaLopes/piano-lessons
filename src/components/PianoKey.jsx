import React, { useRef } from 'react';
import { usePianoKeys } from '../PianoKeysContext';
import gsap from 'gsap';

const PianoKey = ({ note, type, onPlayNote }) => {
  const keyRef = useRef(null);
  const { activeKeys } = usePianoKeys();
  const isActive = activeKeys.includes(note);
  const keyClassName = `piano-key ${type === 'black' ? 'black-key' : 'white-key'} ${isActive ? 'active' : ''}`;

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
    <div ref={keyRef} className={keyClassName} onClick={handleClick}>
      <span className="key-label">{note}</span>
    </div>
  );
};

export default PianoKey;
