import React from "react";
import { BiMessageDetail, BiUserCircle, BiPhoneCall } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { CgUserList } from "react-icons/cg";
import {
  MdOutlineBookmarks,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { FiSettings } from "react-icons/fi";

export default function SideBarManu() {
  return (
    <div className="w-14 h-screen bg-[#2e2e2e] flex flex-col justify-between">
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
        <FiSettings
          color="#878a92"
          className="text-center m-4 cursor-pointer mx-auto"
          size={24}
        />
      </div>
      <div className="flex flex-col">
        <MdOutlineDarkMode
          color="#878a92"
          className="text-center m-4 cursor-pointer mx-auto"
          size={24}
        />
        {/* <MdOutlineLightMode
          color="#878a92"
          className="text-center m-4 cursor-pointer mx-auto"
          size={24}
        /> */}
        <img
          className="w-10 h-10 rounded-full mx-auto m-4 border-3 border-[#4eac6d]"
          src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343"
          alt=""
        />
      </div>
    </div>
  );
}
