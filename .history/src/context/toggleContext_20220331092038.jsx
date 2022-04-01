import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export function useToggle() {
  return useContext(ToggleContext);
}

export default function toggleContext({ children }) {
  return (
    <ToggleContext.Provider value={value}>
      {!loading && children}
    </ToggleContext.Provider>
  );
}
