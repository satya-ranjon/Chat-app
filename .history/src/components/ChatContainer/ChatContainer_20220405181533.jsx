import React, { useEffect } from "react";
import ChatConFooter from "./ChatConFooter";
import ChatConHader from "./ChatConHader";
import { ChatEngine } from "react-chat-engine";
import Axios from "axios";
import { useAuth } from "../../context/AuthProvider";

export default function ChatContainer() {
  const { currentUser } = useAuth()
  useEffect(() => {
    Axios.get('https://api.chatengine.io/users/me', {
      headers: {
        "project-id": "",
        "user-name":currentUser. ,
        "user-secret": ,
      }
    })
  }, []);
  return (
    <div className="flex-grow h-screen bg-gray-100 dark:bg-[#2e2e2e] bgImage relative">
      {/* <ChatConHader /> */}
      <ChatEngine
        projectID="8a4f5f0f-3766-4412-922b-6d141dd3dddb"
        userName="."
        userSecret="."
      />
      {/* <ChatConFooter /> */}
    </div>
  );
}
