import React from "react";

export default function ChatContainer() {
     return (
             <SideBarManu />
      <Chats />
      {/* <MyProfile /> */}
      <ChatContainer />
      {toggle ? <UserProfileSidebar /> : null}
  );
}
