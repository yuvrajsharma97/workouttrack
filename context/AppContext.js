"use client";

import { createContext, useContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Create a custom hook for easy usage
export const useApp = () => useContext(AppContext);

// Provider component
export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
