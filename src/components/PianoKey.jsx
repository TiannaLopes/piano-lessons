
import React, { useState, useEffect } from 'react';

const PianoKey = ({ note, type, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const isBlackKey = type === 'black';
  const keyClassName = `piano-key ${isBlackKey ? 'black-key' : 'white-key'} ${isActive ? 'active' : ''}`;

  useEffect(() => {
    if (isActive) {
      const timeoutId = setTimeout(() => {
        setIsActive(false);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [isActive]);

  return (
    <div className={keyClassName} onClick={() => { setIsActive(true); onClick(note); }}>
      <span className="key-label">{note}</span> 
    </div>
  );
};

export default PianoKey;
