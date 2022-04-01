import React, { useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
export default function ChatList() {
  const [toolip, setToolip] = useState(false);
  return (
    <div className="w-72 h-screen ">
      <div className="px-5 pt-4">
        <div className="flex justify-between items-start">
          <p className="text-2xl font-sans text-zinc-500 font-semibold ">
            Chats
          </p>
          <div className="flex">
            <div
              className={` bg-slate-700 font-extralight  text-white py-1 p-1 mr-2 ${
                toolip || `hidden`
              }`}
            >
              Add Connect
            </div>
            <button
              className="bg-green-100 hover:bg-green-300 transition-colors duration-300 p-2
          "
              onMouseOver={() => setToolip((prev) => !prev)}
              onMouseOut={() => setToolip((prev) => !prev)}
            >
              <HiOutlinePlusSm />
            </button>
          </div>
        </div>
        <input
          className="bg-slate-100 text-sm p-3 w-full m-5 mx-0 outline-none"
          type="text"
          placeholder="Search here.."
        />
      </div>
    </div>
  );
}
