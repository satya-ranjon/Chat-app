import React from "react";

export default function ChatList() {
  return (
    <div className="w-72 h-screen ">
      <div className="px-4 pt-4">
        <div className="flex justify-between items-start">
          <p className="text-xl font-sans zinc-900">Chats</p>
          <button className="bg">+</button>
        </div>
      </div>
    </div>
  );
}
