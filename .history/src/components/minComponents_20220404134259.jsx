import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatMinContainer from "./ChatMinContainer";

import LoginContainer from "./Login/LoginContainer";

export default function MinComponents() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/chat" element={<ChatMinContainer />} />
      </Routes>
    </>
  );
}
