import React, { useState } from "react";
import UserImage from "../UserImage";

export default function ChatsUserList() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex flex-col">
      <div
        className={`flex justify-start px-5 p-2 space-x-4  ${
          toggle ? `bg-[#4eac6d] text-white` : "text-gray-600"
        }`}
        onClick={() => setToggle((prev) => !prev)}
      >
        <UserImage className="w-8 h-8 rounded-full" />
        <p className="text-center leading-7">Khokon devsharma</p>
      </div>
      <div className="flex justify-start px-5 p-2 space-x-4 text-gray-600 ">
        <UserImage className="w-8 h-8 rounded-full" />
        <p className="text-center leading-7">Khokon devsharma</p>
      </div>
      <div className="flex justify-start px-5 p-2 space-x-4 text-gray-600 ">
        <UserImage className="w-8 h-8 rounded-full" />
        <p className="text-center leading-7">Khokon devsharma</p>
      </div>
    </div>
  );
}
