import React from "react";
import { useToggle } from "../../context/toggleContext";
import { VscChromeClose } from "react-icons/vsc";
import InfoBarIcom from "../../assets/InfoBarIcom";

export default function UserProfileSidebar() {
  const { setToggle } = useToggle();
  return (
    <div className="w-[380px] h-screen transition-all duration-300 p-4 fixed xl:relative right-0 bg-white"></div>
  );
}
