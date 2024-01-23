import React, { createContext, useState, useContext } from 'react';

const PianoKeysContext = createContext();

export const usePianoKeys = () => useContext(PianoKeysContext);

export const PianoKeysProvider = ({ children }) => {
  const [activeKeys, setActiveKeys] = useState([]);

  const lightUpKey = (key) => {
    setActiveKeys((prevActiveKeys) => {
      // Adding key only if it's not already present
      if (!prevActiveKeys.includes(key)) {
        return [...prevActiveKeys, key];
      }
      return prevActiveKeys;
    });

    setTimeout(() => {
      setActiveKeys((prevActiveKeys) => prevActiveKeys.filter(activeKey => activeKey !== key));
    }, 1000);
  };
  return (
    <PianoKeysContext.Provider value={{ activeKeys, lightUpKey }}>
      {children}
    </PianoKeysContext.Provider>
  );
};
