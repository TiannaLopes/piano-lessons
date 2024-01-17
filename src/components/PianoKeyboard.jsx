import React from 'react';
import PianoKey from './PianoKey';
import '../PianoKeyboard.css';
import keys from '../data/keys.json'; 

const PianoKeyboard = () => {
  const handleClick = (note) => {
    console.log(note + ' was clicked');
  };

  return (
    <div className="piano">
      {keys.map((key, index) => (
        <PianoKey key={index} note={key.note} type={key.type} onClick={handleClick} />
      ))}
    </div>
  );
};

export default PianoKeyboard;
