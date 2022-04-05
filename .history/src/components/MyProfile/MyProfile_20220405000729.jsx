import React from "react";
import AttachedFiles from "../AttachedFiles";
import MediaFile from "../MediaFile";
import ProfileHader from "./ProfileHader";
import ProfileInfo from "./ProfileInfo";
const array = [1, 2, 3];
export default function MyProfile() {
  return (
    <div className="w-full sm:w-80 bg-white h-screen dark:bg-[#262626] sm:static fixed  ">
      <ProfileHader />
      <div className="overflow-x-hidden overflow-y-scroll m-5 h-[600px] from-inherit style__1 transition-all duration-500 ">
        <ProfileInfo />
        <MediaFile grid="3" array={array} />
        <AttachedFiles />
      </div>
    </div>
  );
}
