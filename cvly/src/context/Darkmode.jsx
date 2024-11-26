import React from "react";
import { createContext, useContext, useState } from "react";

const DarkmodeContext = createContext();

export const DarkmodeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () =>{
        setDarkMode((prev)=> !prev)
    }
  return(
  <DarkmodeContext.Provider value={{darkMode,setDarkMode,toggleMode}}>
    {children}
  </DarkmodeContext.Provider>
);
};

export const useDarkmode =()=> useContext(DarkmodeContext);
 
