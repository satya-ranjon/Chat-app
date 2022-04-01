import React from "react";
import { useToggle } from "../../context/toggleContext";
import { VscChromeClose } from "react-icons/vsc";

export default function UserProfileSidebar() {
  const { setToggle } = useToggle();
  return (
    <div className="w-[380px] h-screen transition-all duration-300 p-4 fixed right-0 bg-white">
      <div className="relative before:w-full before:h-full before:bg-gradient-to-t from-violet-500 to-fuchsia-500 before:absolute before:left-0">
        <img
          className="w-full h-full"
          src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343"
          alt="profile pic"
        />
        <div className="abslute"></div>
        <VscChromeClose className="cursor-pointer absolute top-3 left-3 text-2xl text-white" />
      </div>
    </div>
  );
}
