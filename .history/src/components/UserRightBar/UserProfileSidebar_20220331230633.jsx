import React from "react";
import { useToggle } from "../../context/toggleContext";

export default function UserProfileSidebar() {
  const { setToggle } = useToggle();
  return (
    <div className="w-[380px] h-screen transition-all duration-300 p-4 fixed">
      <div className="">
        <img
          className=""
          src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343"
          alt="profile pic"
        />
      </div>
    </div>
  );
}
