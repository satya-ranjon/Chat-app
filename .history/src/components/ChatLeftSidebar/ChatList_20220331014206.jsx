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
          <div className="relative mx-2">
            <div className="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full">
              Tooltip right
              <svg
                className="absolute text-black h-2 right-0 mr-3 top-full"
                x="0px"
                y="0px"
                viewBox="0 0 255 255"
                xml:space="preserve"
              >
                <polygon
                  className="fill-current"
                  points="0,0 127.5,127.5 255,0"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
