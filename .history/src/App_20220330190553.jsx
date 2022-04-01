import React from "react";
import ChatLeftSidebar from "./components/ChatLeftSidebar";
import SideBarManu from "./components/SideBarManu";
import UserChat from "./components/UserChat";
import UserProfileSidebar from "./components/UserProfileSidebar";

export default function App() {
  return (
    <div className="flex">
      <SideBarManu />
      <ChatLeftSidebar />
      <UserChat />
      {/* <UserProfileSidebar /> */}
    </div>
  );
}
