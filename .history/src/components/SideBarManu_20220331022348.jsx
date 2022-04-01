import React, { useState } from "react";
import { BiMessageDetail, BiUserCircle, BiPhoneCall } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { CgUserList } from "react-icons/cg";

import {
  MdOutlineBookmarks,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import UserImage from "./UserImage";

export default function SideBarManu() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-[75px] h-screen bg-[#2e2e2e] flex flex-col justify-between">
      <div className="flex flex-col">
        <BiMessageDetail
          color="#4eac6d"
          className="text-center  m-5 cursor-pointer mx-auto "
          size={28}
        />
        <div
          className={` ${
            toggle ? `border-[#2e2e2e]` : `border-[#4eac6d]`
          } border-r-4 transition-all duration-200  `}
          onClick={() => setToggle((prev) => !prev)}
        >
          <BiUserCircle
            color={toggle ? `#878a92` : `#4eac6d`}
            className="text-center  m-5 cursor-pointer mx-auto   "
            size={28}
          />
        </div>
        <div className="border-r-4 border-[#2e2e2e] transition-all duration-200 ">
          <TiMessages
            color="#878a92"
            className="text-center  m-5 cursor-pointer mx-auto"
            size={28}
          />
        </div>
        <div className="border-r-4 border-[#2e2e2e] transition-all duration-200 ">
          <CgUserList
            color="#878a92"
            className="text-center  m-5 cursor-pointer mx-auto"
            size={28}
          />
        </div>
        <div className="border-r-4 border-[#2e2e2e] transition-all duration-200 ">
          <BiPhoneCall
            color="#878a92"
            className="text-center  m-5 cursor-pointer mx-auto"
            size={28}
          />
        </div>
        <div className="border-r-4 border-[#2e2e2e] transition-all duration-200 ">
          <MdOutlineBookmarks
            color="#878a92"
            className="text-center  m-5 cursor-pointer mx-auto"
            size={28}
          />
        </div>
        <div className="border-r-4 border-[#2e2e2e] transition-all duration-200 ">
          <FiSettings
            color="#878a92"
            className="text-center  m-5 cursor-pointer mx-auto"
            size={28}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <MdOutlineDarkMode
          color="#878a92"
          className="text-center  m-5 cursor-pointer mx-auto"
          size={28}
        />
        {/* <MdOutlineLightMode
          color="#878a92"
          className="text-center  m-5 cursor-pointer mx-auto"
          size={28}
        /> */}
        <UserImage />
      </div>
    </div>
  );
}
