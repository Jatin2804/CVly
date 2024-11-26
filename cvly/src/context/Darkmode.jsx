import React, { useEffect, useState, createContext, useContext } from "react";

const DarkmodeContext = createContext();

export const DarkmodeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkmode");
    return savedMode ? JSON.parse(savedMode) : false; // Default to false if no value is found
  });

  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem("darkmode", JSON.stringify(darkMode));
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkmodeContext.Provider value={{ darkMode, setDarkMode, toggleMode }}>
      {children}
    </DarkmodeContext.Provider>
  );
};

export const useDarkmode = () => useContext(DarkmodeContext);
