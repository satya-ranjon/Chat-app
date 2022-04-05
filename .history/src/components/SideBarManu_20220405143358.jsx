import React, { useEffect, useState } from "react";
import { BiMessageDetail, BiUserCircle, BiPhoneCall } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { CgUserList } from "react-icons/cg";
import {
  MdOutlineBookmarks,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";

import { FiSettings } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import UserShortCard from "./UserShortCard";
import { useAuth } from "../context/AuthProvider";

const Image =
  "https://img.freepik.com/free-photo/modern-living-room-interior-with-sofa-green-plants-lamp-table-dark-wall-background_41470-1528.jpg?w=996&t=st=1648676636~exp=1648677236~hmac=3f890077ce9371578c992216baf3e8f401b234873628a920daaf2d4174ff41ce";
export default function SideBarManu() {
  const [theme, setTheme] = useState("");
  const [toogle, setToogle] = useState(false);
  const { currentUser } = useAuth();

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

        <img
          className="w-9 h-9 rounded-full mx-auto  m-5 border-2 border-[#4eac6d] cursor-pointer "
          onClick={() => setToogle((prev) => !prev)}
          src={!currentUser.photoURL ? Image : currentUser.photoURL}
          alt="pic"
        />
        {toogle && <UserShortCard setToogle={setToogle} />}
      </div>
    </div>
  );
}
