import React from "react";
import ChatConFooter from "./ChatConFooter";
import ChatConHader from "./ChatConHader";

export default function ChatContainer() {
  return (
    <div className="flex-grow h-screen bg-gray-100 dark:bg-[#2e2e2e] bgImage relative">
      <ChatConHader />
      <ChatEn
        projectID="00000000-0000-0000-0000-000000000000"
        userName="adam"
        userSecret="pass1234"
      />
      <ChatConFooter />
    </div>
  );
}
