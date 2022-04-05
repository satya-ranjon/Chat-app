import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatMinContainer from "./ChatMinContainer";

import LoginContainer from "./Login/LoginContainer";

export default function MinComponents() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/" element={<ChatMinContainer />} />
      </Routes>
    </>
  );
}
