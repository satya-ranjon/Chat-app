import React from "react";
// import Chats from "./components/Chats/Chats";
import MyProfile from "./components/MyProfile/MyProfile";
import SideBarManu from "./components/SideBarManu";
import ChatContainer from "./components/ChatContainer/ChatContainer";
import UserProfileSidebar from "./components/UserProfileSidebar";

export default function App() {
  return (
    <div className="flex">
      <SideBarManu />
      {/* <Chats /> */}
      <MyProfile />
      <ChatContainer />
      <UserProfileSidebar />
    </div>
  );
}
