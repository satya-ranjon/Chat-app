import React from "react";
import MinComponents from "./components/minComponents";
import { ToggleContexts } from "./context/toggleContext";

export default function App() {
  return (
    <ToggleContexts>
      <MinComponents />
    </ToggleContexts>
  );
}
