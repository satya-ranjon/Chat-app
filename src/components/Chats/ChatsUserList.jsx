import React, { useState } from "react";
import UserImage from "../UserImage";

export default function ChatsUserList() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="flex flex-col">
      <div
        className={`flex justify-start px-5 p-2 space-x-4 cursor-pointer  ${
          toggle
            ? `bg-[#4eac6d] text-white`
            : "text-gray-600 dark:text-gray-400"
        }`}
        onClick={() => setToggle((prev) => !prev)}>
        <UserImage className="w-8 h-8 rounded-full" />
        <p className="text-center leading-7">Satya Ranjon</p>
      </div>

      <div className="flex justify-start px-5 p-2 space-x-4 text-gray-600 dark:text-gray-400  cursor-pointer">
        <UserImage className="w-8 h-8 rounded-full" />
        <p className="text-center leading-7">Khokon Sharma</p>
      </div>
      <div className="flex justify-start px-5 p-2 space-x-4 text-gray-600 dark:text-gray-400 cursor-pointer ">
        <UserImage className="w-8 h-8 rounded-full" />
        <p className="text-center leading-7">Shamim Raze</p>
      </div>
    </div>
  );
}
