import React, { createContext, useState, useContext } from 'react';

const PianoKeysContext = createContext();

export const usePianoKeys = () => useContext(PianoKeysContext);

export const PianoKeysProvider = ({ children }) => {
  const [activeKeys, setActiveKeys] = useState([]);

  const lightUpKey = (key) => {
    if (!activeKeys.includes(key)) {
      setActiveKeys([key]);
      // Optionally set a timeout to turn off the light
     setTimeout(() => {
      setActiveKeys(activeKeys => activeKeys.filter(activeKey => activeKey !== key));
    }, 1000);
    }
  };

  return (
    <PianoKeysContext.Provider value={{ activeKeys, lightUpKey }}>
      {children}
    </PianoKeysContext.Provider>
  );
};