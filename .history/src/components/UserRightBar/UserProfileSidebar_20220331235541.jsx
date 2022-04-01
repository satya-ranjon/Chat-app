import React from "react";
import { useToggle } from "../../context/toggleContext";
import { VscChromeClose } from "react-icons/vsc";
import InfoBarIcom from "../../assets/InfoBarIcom";

export default function UserProfileSidebar() {
  const { setToggle } = useToggle();
  return (
    <div className="w-[380px] h-screen transition-all duration-300 p-4 fixed xl:relative right-0 bg-white">
      <div className="relative before:w-full before:h-full before:bg-gradient-to-t from-[#0404044f] to-[#0a0a0b7c] before:absolute before:left-0">
        <img
          className="w-full h-full"
          src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343"
          alt="profile pic"
        />
        <VscChromeClose
          onClick={() => setToggle((prev) => !prev)}
          className="cursor-pointer absolute top-3 left-3 text-2xl text-white"
        />
        <InfoBarIcom bg="bg-white" classes="absolute right-3 top-3" />
        <div className="flex flex-col absolute bottom-3 ml-4 space-y-1 ">
          <p className="text-white font-semibold text-[18px]">Khokon dev</p>
          <div className="flex flex-row">
            <div className="w-2 h-2 rounded-full bg-green-500 my-auto"></div>
            <p className="text-gray-300 text-sm my-auto mx-1">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}
