import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";
import ChatPage from "./pages/chat";

export default function App() {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/p" element={<ChatPage />} />
        <Route path="/m" element={<ChatPage />} />
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
