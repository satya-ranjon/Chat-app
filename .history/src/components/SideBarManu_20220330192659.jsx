import React from "react";
import { BiMessageDetail, BiUserCircle, BiPhoneCall } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { CgUserList } from "react-icons/cg";
import { MdOutlineBookmarks } from "react-icons/md";

export default function SideBarManu() {
  return (
    <div className="w-14 h-screen bg-[#2e2e2e] flex flex-col">
      <div className="flex flex-col">
        <BiMessageDetail
          color="#4eac6d"
          className="text-center m-4 cursor-pointer mx-auto"
          size={24}
        />
        <BiUserCircle
          color="#878a92"
          className="text-center m-4 cursor-pointer mx-auto"
          size={24}
        />
        <TiMessages
          color="#878a92"
          className="text-center m-4 cursor-pointer mx-auto"
          size={24}
        />
        <CgUserList
          color="#878a92"
          className="text-center m-4 cursor-pointer mx-auto"
          size={24}
        />
        <BiPhoneCall
          color="#878a92"
          className="text-center m-4 cursor-pointer mx-auto"
          size={24}
        />
        <MdOutlineBookmarks
          color="#878a92"
          className="text-center m-4 cursor-pointer mx-auto"
          size={24}
        />
        <MdOutlineBookmarks
          color="#878a92"
          className="text-center m-4 cursor-pointer mx-auto"
          size={24}
        />
      </div>
    </div>
  );
}
