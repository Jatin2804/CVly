import React, { createContext, useContext, useState } from "react";

// Create FormatterContext
const FormatterContext = createContext();

// Custom hook to use FormatterContext
export const useFormatter = () => useContext(FormatterContext);

// FormatterProvider component
export const FormatterProvider = ({ children }) => {
  const [formatterString, setFormatterString] = useState("first");

  // Function to update the formatter string
  const updateFormatter = (newFormatter) => {
    setFormatterString(newFormatter);
  };

  return (
    <FormatterContext.Provider value={{ formatterString, updateFormatter }}>
      {children}
    </FormatterContext.Provider>
  );
};
