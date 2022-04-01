import React from "react";
import AttachedFiles from "./AttachedFiles";
import MediaFile from "./MediaFile";
import ProfileHader from "./ProfileHader";
import ProfileInfo from "./ProfileInfo";

export default function MyProfile() {
  return (
    <div className="sm:w-72 h-screen w-40 ">
      <ProfileHader />
      <div className="overflow-x-hidden overflow-y-scroll h-[650px] scroll-mx-96">
        <ProfileInfo />
        <MediaFile />
        <AttachedFiles />
      </div>
    </div>
  );
}
