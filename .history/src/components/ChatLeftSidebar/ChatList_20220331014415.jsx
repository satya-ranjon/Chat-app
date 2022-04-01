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
      <button
        data-tooltip-target="tooltip-default"
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Default tooltip
      </button>
      <div
        id="tooltip-default"
        role="tooltip"
        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
      >
        Tooltip content
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
}
