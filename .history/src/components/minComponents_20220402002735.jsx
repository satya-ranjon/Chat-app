import React from "react";
import Chats from "./Chats/Chats";
// import MyProfile from "./MyProfile/MyProfile";
import SideBarManu from "./SideBarManu";
import ChatContainer from "./ChatContainer/ChatContainer";
import UserProfileSidebar from "./UserRightBar/UserProfileSidebar";
import { useToggle } from "../context/toggleContext";
import { ThemeProvider } from "../context/ThemeContext";

export default function MinComponents({ children }) {
  const { toggle } = useToggle();
  return (
    <div className="flex">
      <ThemeProvider>
        <SideBarManu /> <main>{children}</main>
      </ThemeProvider>
      <Chats />
      {/* <MyProfile /> */}
      <ChatContainer />
      {toggle ? <UserProfileSidebar /> : null}
    </div>
  );
}
