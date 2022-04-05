import React from "react";
import { Routes } from "react-router-dom";
import ChatMinContainer from "./ChatMinContainer";

import LoginContainer from "./Login/LoginContainer";

export default function MinComponents() {
  return (
    <>
      <Routes>
        <LoginContainer /> <ChatMinContainer />
      </Routes>
    </>
  );
}
