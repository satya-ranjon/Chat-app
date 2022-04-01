import React from "react";
import AttachedFiles from "./AttachedFiles";
import MediaFile from "./MediaFile";
import ProfileHader from "./ProfileHader";
import ProfileInfo from "./ProfileInfo";

export default function MyProfile() {
  return (
    <div className="sm:w-72 h-screen w-40 ">
      <ProfileHader />
      <div className="flex flex-col min-h-0 min-w-0 overflow-auto">
        <ProfileInfo />
        <MediaFile />
        <AttachedFiles />
      </div>
    </div>
  );
}
