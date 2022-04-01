import React from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
export default function ChatList() {
  return (
    <div className="w-72 h-screen ">
      <div className="px-5 pt-4">
        <div className="flex justify-between items-start">
          <p className="text-2xl font-sans text-zinc-500 font-semibold ">
            Chats
          </p>

          <div className="flex">
            <div className="bg-gray-500 text-white px-1 p-0">Add Connect</div>
            <button
              className="bg-green-100 hover:bg-green-300 transition-colors duration-300 p-2
          "
            >
              <HiOutlinePlusSm />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
