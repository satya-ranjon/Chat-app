import React, { useEffect } from "react";
import MinComponents from "./components/minComponents";
import { ToggleContexts } from "./context/toggleContext";

export default function App() {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("lite");
  });

  return (
    <ToggleContexts>
      <MinComponents />
    </ToggleContexts>
  );
}
