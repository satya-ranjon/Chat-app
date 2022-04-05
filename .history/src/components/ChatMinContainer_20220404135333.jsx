import React from "react";
import Chats from "./Chats/Chats";
// import MyProfile from "./MyProfile/MyProfile";
import SideBarManu from "./SideBarManu";
import ChatContainer from "./ChatContainer/ChatContainer";
import UserProfileSidebar from "./UserRightBar/UserProfileSidebar";
import { useToggle } from "../context/toggleContext";
import { Outlet } from "react-router-dom";

export default function ChatMinContainer() {
  const { toggle } = useToggle();
  return (
    <div className="flex">
      <SideBarManu />
      <Chats />
      {/* <MyProfile /> */}
      <Outlet />
      <ChatContainer />
      {toggle ? <UserProfileSidebar /> : null}
    </div>
  );
}
