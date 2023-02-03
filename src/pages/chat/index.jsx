import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ChatContainer from "../../components/ChatContainer/ChatContainer";
import Chats from "../../components/Chats/Chats";
import SideBarManu from "../../components/SideBarManu";
import UserProfileSidebar from "../../components/UserRightBar/UserProfileSidebar";
import MyProfile from "../../components/MyProfile/MyProfile";

const ChatPage = () => {
  const [userProfileSideBarToggle, setUserProfileSideBarToggle] =
    useState(true);
  const { pathname } = useLocation();
  const p = pathname.slice(1);

  return (
    <div className="flex">
      <SideBarManu />
      {p == "m" || <Chats />}
      {p == "p" || <MyProfile />}

      <ChatContainer setToggle={setUserProfileSideBarToggle} />
      {userProfileSideBarToggle ? (
        <UserProfileSidebar setToggle={setUserProfileSideBarToggle} />
      ) : null}
    </div>
  );
};

export default ChatPage;
