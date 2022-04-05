import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import MinComponents from "./components/minComponents";

import { ToggleContexts } from "./context/toggleContext";

export default function App() {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add();
  });

  return (
    <ToggleContexts>
      <MinComponents />
    </ToggleContexts>
  );
}
