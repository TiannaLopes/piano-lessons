import React from 'react';
import { usePianoKeys } from '../PianoKeysContext';

const PianoKey = ({ note, type }) => {
  const { activeKeys } = usePianoKeys();
  const isActive = activeKeys.includes(note);
  const keyClassName = `piano-key ${type === 'black' ? 'black-key' : 'white-key'} ${isActive ? 'active' : ''}`;

  return (
    <div className={keyClassName}>
      <span className="key-label">{note}</span>
    </div>
  );
};

export default PianoKey;
