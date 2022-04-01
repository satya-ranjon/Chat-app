import React from "react";

import Chats from "./components/Chats/Chats";
import SideBarManu from "./components/SideBarManu";
import UserChat from "./components/UserChat";
import UserProfileSidebar from "./components/UserProfileSidebar";

export default function App() {
  return (
    <div className="flex">
      <SideBarManu />
      <Chats />
      <UserChat />
      <UserProfileSidebar />
    </div>
  );
}
