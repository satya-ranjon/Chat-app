import React from "react";
import { BrowserRouter } from "react-router-dom";
import MinComponents from "./components/minComponents";

export default function App() {
  return (
    <BrowserRouter>
      <MinComponents />
    </BrowserRouter>
  );
}
