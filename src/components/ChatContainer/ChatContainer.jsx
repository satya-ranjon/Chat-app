import React from "react";
import ChatConFooter from "./ChatConFooter";
import ChatConHader from "./ChatConHader";

export default function ChatContainer({ setToggle }) {
  return (
    <div className="flex-grow h-screen bg-gray-100 dark:bg-[#2e2e2e] bgImage relative">
      <ChatConHader setToggle={setToggle} />
      <ChatConFooter />
    </div>
  );
}
