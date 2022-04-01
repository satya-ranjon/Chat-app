import React from "react";
import AttachedFiles from "../AttachedFiles";
import MediaFile from "../MediaFile";
import ProfileHader from "./ProfileHader";
import ProfileInfo from "./ProfileInfo";
const array = [1, 2, 3];
export default function MyProfile() {
  return (
    <div className="w-80 h-screen   dark:bg-[#262626] relative right-10 z-10 ">
      <ProfileHader />
      <div className="overflow-x-hidden overflow-y-scroll m-5 h-[620px] from-inherit style__1 transition-all duration-500 ">
        <ProfileInfo />
        <MediaFile grid="3" array={array} />
        <AttachedFiles />
      </div>
    </div>
  );
}
