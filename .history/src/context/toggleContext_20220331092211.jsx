import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export function useToggle() {
  return useContext(ToggleContext);
}

export default function ToggleContexts({ children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
}
