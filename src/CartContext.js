import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [cartContext, setCartContext] = React.useState([]);

  return (
    <GlobalContext.Provider value={{cartContext, setCartContext }}>
      {children}
    </GlobalContext.Provider>
  );

};