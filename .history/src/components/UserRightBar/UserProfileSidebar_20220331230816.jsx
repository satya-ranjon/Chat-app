import React from "react";
import { useToggle } from "../../context/toggleContext";

export default function UserProfileSidebar() {
  const { setToggle } = useToggle();
  return (
    <div className="w-[380px] h-screen transition-all duration-300 p-4 fixed right-0 bg-white">
      <div className="relative">
        <img
          className="w-full h-full"
          src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343"
          alt="profile pic"
        />
        <div className="cursor-pointer absolute">X</div>
      </div>
    </div>
  );
}
