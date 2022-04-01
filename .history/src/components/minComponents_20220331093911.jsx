import React, { useState } from "react";
// import Chats from "./Chats/Chats";
import MyProfile from "./MyProfile/MyProfile";
import SideBarManu from "./SideBarManu";
import ChatContainer from "./ChatContainer/ChatContainer";
import UserProfileSidebar from "./UserProfileSidebar";

export default function Mi() {
  // const { toggle } = useToggle();
  return (
    <div className="flex">
      <SideBarManu />
      {/* <Chats /> */}
      <MyProfile />
      <ChatContainer />
      {/* {toggle ? <UserProfileSidebar /> : null} */}
    </div>
  );
}
