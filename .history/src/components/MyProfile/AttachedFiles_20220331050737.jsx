import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
export default function AttachedFiles() {
  return (
    <div className="m-5">
      <p className="text-gray-400 text-[12px] font-semibold">ATTACHED FILES</p>
      <div className="flex justify-between border-[1px] border-gray-100 p-3 my-2 ">
        <AiOutlineFileText className="bg-green-200 p-1 rounded-full text-2xl" />
        <HiDownload className=" p-1 text-2xl" />
      </div>
    </div>
  );
}
