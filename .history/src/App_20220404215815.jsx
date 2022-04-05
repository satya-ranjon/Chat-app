import React from "react";
import { BrowserRouter } from "react-router-dom";
import MinComponents from "./components/minComponents";
import { AuthProvider } from "./context/AuthProvider";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MinComponents />
      </AuthProvider>
    </BrowserRouter>
  );
}
