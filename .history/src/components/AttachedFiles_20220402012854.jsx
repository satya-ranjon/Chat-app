import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";

const array = [1, 2, 3, 4, 5, 6, 7, 8];
export default function AttachedFiles({ className }) {
  return (
    <div className={className}>
      <p className="text-gray-400 text-[12px] font-semibold">ATTACHED FILES</p>
      {array.map((i) => (
        <div
          key={i}
          className="flex justify-between dark:text-neutral-400 border-[1px] border-gray-100 dark:border-neutral-700 p-3 my-2"
        >
          <AiOutlineFileText className="bg-green-200 dark:bg-green-900 p-1 dark:text-green-400  rounded-full text-2xl my-auto" />
          <div className="flex flex-col text-[14px] my-auto">
            <p>Image-1.jpg</p>
            <p>12.5 MB</p>
          </div>
          <HiDownload className="p-1 text-2xl my-auto" />
          <div className="flex justify-between space-x-[1.3px] cursor-pointer my-auto">
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
