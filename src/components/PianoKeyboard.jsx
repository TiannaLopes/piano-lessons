import React from 'react';
import PianoKey from './PianoKey';
import '../PianoKeyboard.css';
import keys from '../data/keys.json'; 

const PianoKeyboard = () => {
  const handleClick = (note) => {
    console.log(note + ' was clicked');
  };
const getGroupFromNote = (note) => {
  const octave = parseInt(note.slice(-1), 10);
  return octave % 3 + 1;
};

return (
  <div className="piano">
    {keys.map((key, index) => (
      <PianoKey
        key={index}
        note={key.note}
        type={key.type}
        group={getGroupFromNote(key.note)}
        onClick={handleClick}
      />
    ))}
  </div>
);

};

export default PianoKeyboard;
