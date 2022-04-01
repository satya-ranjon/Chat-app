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
          <button
            className="bg-green-100 hover:bg-green-300 transition-colors duration-300 p-2
          "
          >
            <HiOutlinePlusSm />
          </button>
        </div>
      </div>
      <div className=" relative ">
        <div className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0">
          Tooltip on left
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
}
