import React, { useEffect, useState } from "react";
import { BiMessageDetail, BiUserCircle, BiPhoneCall } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { CgUserList } from "react-icons/cg";
import { BiLogOutCircle } from "react-icons/bi";

import {
  MdOutlineBookmarks,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";

import { FiSettings } from "react-icons/fi";
import UserImage from "./UserImage";
import { NavLink, useNavigate } from "react-router-dom";

export default function SideBarManu() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    setTheme("dark");
  }, []);
  const DarkTheme = () => {
    const root = window.document.documentElement;
    root.classList.add(theme);
    setTheme(" ");
  };
  const LiteTheme = () => {
    const root = window.document.documentElement;
    root.classList.remove("dark");
    setTheme("dark");
  };

  const navigate = useNavigate();
  const activeClass =
    "text-[#4eac6d] border-[#4eac6d] sm:border-r-4 transition-all duration-200 ";
  const DeactiveClass =
    "border-[#2e2e2e] sm:border-r-4 transition-all duration-200 text-[#878a92] ";
  return (
    <div className="sm:w-[75px] sm:h-screen bg-[#2e2e2e] flex sm:flex-col sm:justify-between sm:static mobile  flex-row w-full absolute bottom-0 justify-center z-10 ">
      <div className="flex sm:flex-col sm:space-x-0 flex-row space-x-4">
        <BiMessageDetail
          color="#4eac6d"
          className="text-center  m-5 cursor-pointer mx-auto hidden sm:block"
          size={28}
          onClick={() => navigate(" ")}
        />
        <NavLink
          to="profile"
          className={(navInfo) =>
            navInfo.isActive ? activeClass : DeactiveClass
          }
        >
          <BiUserCircle
            className="text-center  m-5 cursor-pointer mx-auto   "
            size={28}
          />
        </NavLink>
        <NavLink
          to="chatlist"
          className={(navInfo) =>
            navInfo.isActive ? activeClass : DeactiveClass
          }
        >
          <TiMessages
            className="text-center  m-5 cursor-pointer mx-auto"
            size={28}
          />
        </NavLink>
        <div className="sm:border-r-4 border-[#2e2e2e] transition-all duration-200 ">
          <CgUserList
            color="#878a92"
            className="text-center  m-5 cursor-pointer mx-auto"
            size={28}
          />
        </div>
        <div className="sm:border-r-4 border-[#2e2e2e] transition-all duration-200 ">
          <BiPhoneCall
            color="#878a92"
            className="text-center  m-5 cursor-pointer mx-auto"
            size={28}
          />
        </div>
        <div className="sm:border-r-4 border-[#2e2e2e] transition-all duration-200 ">
          <MdOutlineBookmarks
            color="#878a92"
            className="text-center  m-5 cursor-pointer mx-auto"
            size={28}
          />
        </div>
        <div className="sm:border-r-4 border-[#2e2e2e] transition-all duration-200 ">
          <FiSettings
            color="#878a92"
            className="text-center  m-5 cursor-pointer mx-auto"
            size={28}
          />
        </div>
      </div>
      <div className="flex sm:flex-col sm:space-x-5 sm:pl-0  flex-row pl-4 space-x-4">
        {theme === "dark" ? (
          <MdOutlineDarkMode
            color="#878a92"
            className="text-center  m-5 cursor-pointer mx-auto"
            size={28}
            onClick={DarkTheme}
          />
        ) : (
          <MdOutlineLightMode
            color="#878a92"
            className="text-center  m-5 cursor-pointer mx-auto"
            size={28}
            onClick={LiteTheme}
          />
        )}

        <UserImage className="w-9 h-9 rounded-full mx-auto  m-5 border-2 border-[#4eac6d] " />

        <div className=" absolute flex flex-col font-semibold text-white bg-neutral-800 transition-all duration-500 p-">
          <p className="flex justify-between p-1 px-4 w-32 hover:bg-neutral-700 cursor-pointer">
            Profile <BiLogOutCircle className="my-auto" />
          </p>
          <p className="flex justify-between p-1 px-2 w-32 hover:bg-neutral-700 cursor-pointer">
            Logout <BiLogOutCircle className="my-auto" />
          </p>
        </div>
      </div>
    </div>
  );
}
