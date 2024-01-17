import React, { createContext, useState, useContext } from 'react';

const PianoKeysContext = createContext();

export const usePianoKeys = () => useContext(PianoKeysContext);

export const PianoKeysProvider = ({ children }) => {
  const [activeKeys, setActiveKeys] = useState([]);

  const lightUpKey = (key) => {
    setActiveKeys([...activeKeys, key]);
    setTimeout(() => {
      setActiveKeys(activeKeys.filter(activeKey => activeKey !== key));
    }, 1000); 
  };

 return (
    <PianoKeysContext.Provider value={{ activeKeys, lightUpKey }}>
      {children}
    </PianoKeysContext.Provider>
  );
};
