import React from "react";
import AttachedFiles from "../AttachedFiles";
import MediaFile from "../MediaFile";
import ProfileHader from "./ProfileHader";
import ProfileInfo from "./ProfileInfo";

export default function MyProfile() {
  return (
    <div className="sm:w-72 h-screen w-40 ">
      <ProfileHader />
      <div className="overflow-x-hidden overflow-y-scroll h-[650px] from-inherit style__1 transition-all duration-500">
        <ProfileInfo />
        <MediaFile className="m-5" />
        <AttachedFiles className="m-5" />
      </div>
    </div>
  );
}
