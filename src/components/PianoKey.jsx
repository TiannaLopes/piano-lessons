import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';

const PianoKey = ({ note, type, group, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const isBlackKey = type === 'black';
  const keyClassName = `piano-key ${isBlackKey ? 'black-key' : 'white-key'} ${isActive ? `active-group-${group}` : ''}`;

  useEffect(() => {
    if (isActive) {
      const timeoutId = setTimeout(() => {
        setIsActive(false);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [isActive]);

  const playNote = (note) => {
    Tone.start();

    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, "8n");
  };

  return (
    <div className={keyClassName} onClick={() => { setIsActive(true); onClick(note); playNote(note); }}>
      <span className="key-label">{note}</span>
    </div>
  );
};

export default PianoKey;
