import React, { useEffect } from "react";
import SideBarManu from "./SideBarManu";
import ChatContainer from "./ChatContainer/ChatContainer";
import UserProfileSidebar from "./UserRightBar/UserProfileSidebar";
import { useToggle } from "../context/toggleContext";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
export default function ChatMinContainer() {
  const { toggle } = useToggle();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log(currentUser);
  // useEffect(() => {
  //   if (!currentUser) return navigate("/auth");
  // }, [currentUser]);

  return (
    <div className="flex">
      <SideBarManu />
      <Outlet />
      <ChatContainer />
      {toggle ? <UserProfileSidebar /> : null}
    </div>
  );
}
