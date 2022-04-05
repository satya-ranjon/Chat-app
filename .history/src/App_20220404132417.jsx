import React, { useEffect } from "react";
import MinComponents from "./components/minComponents";

export default function App() {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add();
  });

  return <MinComponents />;
}
