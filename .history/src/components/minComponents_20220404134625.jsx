import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ChatMinContainer from "./ChatMinContainer";

import LoginContainer from "./Login/LoginContainer";

export default function MinComponents() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/login" element={<Navigate to={<LoginContainer />} />} />
        <Route path="/chat" element={<ChatMinContainer />} />
      </Routes>
    </>
  );
}
