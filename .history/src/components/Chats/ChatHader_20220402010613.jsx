import React, { useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";

export default function ChatHader() {
  const [toolip, setToolip] = useState(false);
  return (
    <div className="px-5 pt-4">
      <div className="flex justify-between items-start">
        <p className="text-2xl font-sans text-zinc-500 font-semibold ">Chats</p>
        <div className="flex">
          <div
            className={` bg-slate-700 font-extralight  text-white py-1 p-1 mr-2  ${
              toolip || `hidden`
            }`}
          >
            Add Connect
          </div>
          <button
            className="bg-green-50 text-green-400 hover:bg-green-400 hover:text-white transition-colors duration-300 p-2 dark:bg-neutral-500 dark:hover:bg-green-400
          "
            onMouseOver={() => setToolip((prev) => !prev)}
            onMouseOut={() => setToolip((prev) => !prev)}
          >
            <HiOutlinePlusSm />
          </button>
        </div>
      </div>
      <input
        className="bg-slate-100 dark:bg-neutral-700 text-sm p-3 w-full m-5 mx-0 outline-none placeholder:text-slate-400 placeholder:font-semibold text-zinc-700 dark:text-neutral-300"
        type="text"
        placeholder="Search here.."
      />
    </div>
  );
}
