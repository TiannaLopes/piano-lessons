import React, { useRef, useEffect } from 'react';
import { usePianoKeys } from '../PianoKeysContext';
import gsap from 'gsap';

const PianoKey = ({ note, type, onPlayNote }) => {
  const keyRef = useRef(null);
  const { activeKeys } = usePianoKeys();
  const isActive = activeKeys.includes(note);
  const keyClassName = `piano-key ${type === 'black' ? 'black-key' : 'white-key'} ${isActive ? 'active' : ''}`;

 const handleClick = () => {
    onPlayNote(note);

    // Animate the key using GSAP
    gsap.to(keyRef.current, {
      scale: 0.9,
      duration: 0.1,
      ease: "power1.out",
      onComplete: () => {
        gsap.to(keyRef.current, { scale: 1, duration: 0.1, ease: "power1.in" });
      }
    });
  };

  return (
    <div ref={keyRef} className={keyClassName} onClick={handleClick}>
      <span className="key-label">{note}</span>
    </div>
  );
};

export default PianoKey;
