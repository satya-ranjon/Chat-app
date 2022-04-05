import React from "react";
import ChatConFooter from "./ChatConFooter";
import ChatConHader from "./ChatConHader";
import { ChatEngine } from "react-chat-engine";

export default function ChatContainer() {
  return (
    <div className="flex-grow h-screen bg-gray-100 dark:bg-[#2e2e2e] bgImage relative">
      <ChatConHader />
      <ChatEngine
        hight="500px"
        projectID="8a4f5f0f-3766-4412-922b-6d141dd3dddb"
        userName="."
        userSecret="."
      />
      <ChatConFooter />
    </div>
  );
}
