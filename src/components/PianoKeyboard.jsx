import React from 'react';
import PianoKey from './PianoKey';
import '../PianoKeyboard.css';
import keys from '../data/keys.json'; 

const PianoKeyboard = ({ onPlayNote }) => {
  const handleClick = (note) => {
    console.log(note + ' was clicked');
    onPlayNote(note);
  };

  return (
    <div className="piano">
      {keys.map((key, index) => (
        <PianoKey
          key={index}
          note={key.note}
          type={key.type}
          onPlayNote={onPlayNote}  
        />
      ))}
    </div>
  );
};

export default PianoKeyboard;
