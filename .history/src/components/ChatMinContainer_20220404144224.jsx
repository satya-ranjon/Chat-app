import React from "react";
import SideBarManu from "./SideBarManu";
import ChatContainer from "./ChatContainer/ChatContainer";
import UserProfileSidebar from "./UserRightBar/UserProfileSidebar";
import { ToggleContexts, useToggle } from "../context/toggleContext";
import { Outlet } from "react-router-dom";

export default function ChatMinContainer() {
  const { toggle } = useToggle();
  return (
    <div className="flex">
      <SideBarManu />
      <Outlet />
      <ChatContainer />
      {toggle ? <UserProfileSidebar /> : null}
    </div>
  );
}
