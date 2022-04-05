import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ChatMinContainer from "./ChatMinContainer";
import MyProfile from "./MyProfile/MyProfile";
import ChatList from "./Chats/Chats";
import AuthContainer from "./Auth/AuthContainer";
import { ToggleContexts } from "../context/toggleContext";
import Login from "./Auth/LoginSign";

export default function MinComponents() {
  const navigate = useNavigate();
  useEffect(() => {
    if (false) return navigate("/login");
  }, [navigate]);

  return (
    <>
      <ToggleContexts>
        <Routes>
          <Route path="/auth" element={<AuthContainer />}></Route>
          <Route path="/*" element={<ChatMinContainer />}>
            <Route path="chatlist" element={<ChatList />} />
            <Route path="profile" element={<MyProfile />} />
          </Route>
        </Routes>
      </ToggleContexts>
    </>
  );
}
