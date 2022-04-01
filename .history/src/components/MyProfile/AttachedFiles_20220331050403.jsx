import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
export default function AttachedFiles() {
  return (
    <div className="m-5">
      <p className="text-gray-400 text-[12px] font-semibold">ATTACHED FILES</p>
      <div className="flex justify-between  p-2 my-2 shadow-md">
        <AiOutlineFileText className="bg-green-200 p-1 rounded-full text-2xl" />
      </div>
    </div>
  );
}
