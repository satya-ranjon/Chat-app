import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ChatMinContainer from "./ChatMinContainer";
import MyProfile from "./MyProfile/MyProfile";
import ChatList from "./Chats/Chats";
import LoginContainer from "./Login/LoginContainer";
import { ToggleContexts } from "../context/toggleContext";

export default function MinComponents() {
  const navigate = useNavigate();
  useEffect(() => {
    if (false) return navigate("/login");
  }, [navigate]);

  return (
    <>
      <ToggleContexts>
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/*" element={<ChatMinContainer />}>
            <Route path="chatlist" element={<ChatList />} />
            <Route path="profile" element={<MyProfile />} />
          </Route>
        </Routes>
      </ToggleContexts>
    </>
  );
}
