import React from "react";
import ChatConFooter from "./ChatConFooter";
import ChatConHader from "./ChatConHader";

export default function ChatContainer() {
  return (
    <div className="flex-grow h-screen bg-gray-100 dark:bg-zinc-900 bgImage relative">
      <ChatConHader />
      <ChatConFooter />
    </div>
  );
}
