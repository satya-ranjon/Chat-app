import React, { useState } from "react";
// import Chats from "./components/Chats/Chats";
import MyProfile from "./components/MyProfile/MyProfile";
import SideBarManu from "./components/SideBarManu";
import ChatContainer from "./components/ChatContainer/ChatContainer";
import UserProfileSidebar from "./components/UserProfileSidebar";
import { ToggleContexts, useToggle } from "./context/toggleContext";

export default function App() {
  // const { setToggle, toggle } = useToggle();
  return (
    <div className="flex">
      <SideBarManu />
      {/* <Chats /> */}
      <MyProfile />
      <ToggleContexts>
        <ChatContainer />
      </ToggleContexts>
      {/* {toggle ? <UserProfileSidebar /> : null} */}
    </div>
  );
}
