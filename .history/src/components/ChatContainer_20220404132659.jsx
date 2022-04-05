import React from "react";
import Chats from "./Chats/Chats";
// import MyProfile from "./MyProfile/MyProfile";
import SideBarManu from "./SideBarManu";
import ChatContainer from "./ChatContainer/ChatContainer";
import UserProfileSidebar from "./UserRightBar/UserProfileSidebar";
import { useToggle } from "../context/toggleContext";
import LoginContainer from "./Login/LoginContainer";

export default function ChatContainer() {
  return (
    <>
      <SideBarManu />
      <Chats />
      <ChatContainer />
      {toggle ? <UserProfileSidebar /> : null}
    </>
  );
}
