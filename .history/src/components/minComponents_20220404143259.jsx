import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ChatMinContainer from "./ChatMinContainer";
import MyProfile from "./MyProfile/MyProfile";
import ChatList from "./Chats/Chats";
import LoginContainer from "./Login/LoginContainer";

export default function MinComponents() {
  const navigate = useNavigate();
  useEffect(() => {
    if (false) return navigate("login");
  });
  return (
    <>
      <Routes>
        <Route index element={<LoginContainer />} />
        <Route path="/chat/*" element={<ChatMinContainer />}>
          <Route path="chatlist" element={<ChatList />} />
          <Route path="profile" element={<MyProfile />} />
        </Route>
      </Routes>
    </>
  );
}