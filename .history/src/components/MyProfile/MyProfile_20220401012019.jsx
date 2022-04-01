import React from "react";
import AttachedFiles from "../AttachedFiles";
import MediaFile from "../MediaFile";
import ProfileHader from "./ProfileHader";
import ProfileInfo from "./ProfileInfo";

export default function MyProfile() {
  return (
    <div className="sm:w-80 h-screen w-40 ">
      <ProfileHader />
      <div className="overflow-x-hidden overflow-y-scroll m-5 h-[620px] from-inherit style__1 transition-all duration-500">
        <ProfileInfo />
        <MediaFile grid="3" />
        <AttachedFiles />
      </div>
    </div>
  );
}
