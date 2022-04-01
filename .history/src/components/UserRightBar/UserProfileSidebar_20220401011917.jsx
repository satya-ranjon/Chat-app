import React from "react";
import AttachedFiles from "../AttachedFiles";
import MediaFile from "../MediaFile";
import FbprofileHaderr from "./FbprofileHaderr";
import MenuOption from "./MenuOption";

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function UserProfileSidebar() {
  return (
    <div className="w-[380px] h-screen transition-all duration-300 p-4 fixed xl:relative right-0 bg-white">
      <FbprofileHaderr />
      <div className="overflow-x-hidden overflow-y-scroll h-[680px] from-inherit style__1 transition-all duration-500">
        <MenuOption />
        <MediaFile array="1,2,3,4" grid="4" />
        <AttachedFiles />
      </div>
    </div>
  );
}
