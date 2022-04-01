import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export function useToggle() {
  return useContext(ToggleContext);
}

export function ToggleContexts({ children }) {
  const [toggle, setToggle] = useState(false);
  const value = {
    setToggle,
    toggle,
  };
  return <ToggleContext.Provider value={value}></ToggleContext.Provider>;
}
