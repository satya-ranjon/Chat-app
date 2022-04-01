import React from "react";
import FbprofileHaderr from "./FbprofileHaderr";
import MenuOption from "./MenuOption";

export default function UserProfileSidebar() {
  return (
    <div className="w-[380px] h-screen transition-all duration-300 p-4 fixed xl:relative right-0 bg-white">
      <FbprofileHaderr />
      <MenuOption />
    </div>
  );
}
