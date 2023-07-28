import React, { createContext, useState } from "react";

// Create a context
const SelectValueContext = createContext();

// Create a provider to set and update the selected value
const SelectValueProvider = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState("talents");

  return (
    <SelectValueContext.Provider value={{ selectedValue, setSelectedValue }}>
      {children}
    </SelectValueContext.Provider>
  );
};

export { SelectValueContext, SelectValueProvider };
