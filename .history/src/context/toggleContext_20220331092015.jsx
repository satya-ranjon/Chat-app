import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export function useToggle({ children }) {
  return useContext(ToggleContext);
}

export default function toggleContext() {
  return (
    <ToggleContext.Provider value={value}>
      {!loading && children}
    </ToggleContext.Provider>
  );
}
