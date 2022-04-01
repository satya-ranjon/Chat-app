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

export default function SideBarManu() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-[75px] h-screen bg-[#2e2e2e] flex flex-col justify-between">
      <div className="flex flex-col">
        <BiMessageDetail
          color="#4eac6d"
          className="text-center m-4 cursor-pointer mx-auto "
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
            className="text-center m-4 cursor-pointer mx-auto   "
            size={28}
          />
        </div>
        <div className="border-r-4 transition-all duration-200 ">
          <TiMessages
            color="#878a92"
            className="text-center m-4 cursor-pointer mx-auto"
            size={28}
          />
        </div>

        <CgUserList
          color="#878a92"
          className="text-center m-4 cursor-pointer mx-auto"
          size={28}
        />
        <BiPhoneCall
          color="#878a92"
          className="text-center m-4 cursor-pointer mx-auto"
          size={28}
        />
        <MdOutlineBookmarks
          color="#878a92"
          className="text-center m-4 cursor-pointer mx-auto"
          size={28}
        />
        <FiSettings
          color="#878a92"
          className="text-center m-4 cursor-pointer mx-auto"
          size={28}
        />
      </div>
      <div className="flex flex-col">
        <MdOutlineDarkMode
          color="#878a92"
          className="text-center m-4 cursor-pointer mx-auto"
          size={28}
        />
        {/* <MdOutlineLightMode
          color="#878a92"
          className="text-center m-4 cursor-pointer mx-auto"
          size={28}
        /> */}
        <img
          className="w-9 h-9 rounded-full mx-auto m-4 border-2 border-[#4eac6d]"
          src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343"
          alt="profile pic"
        />
      </div>
    </div>
  );
}
