import React from "react";
import ChatConFooter from "./ChatConFooter";
import ChatConHader from "./ChatConHader";

export default function ChatContainer() {
  return (
    <div className="flex-grow h-screen bg-gray-100 dark:bg-slate-800 bgImage relative">
      <ChatConHader />
      <ChatConFooter />
    </div>
  );
}
