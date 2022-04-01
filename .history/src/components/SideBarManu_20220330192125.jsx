import React from "react";
import { BiMessageDetail } from "react-icons/bi";

export default function SideBarManu() {
  return (
    <div className="w-14 h-screen bg-[#2e2e2e] flex flex-col">
      <div className="flex flex-col">
        <BiMessageDetail
          color="#878a92"
          className="text-center  mx-auto"
          size={24}
        />
      </div>
    </div>
  );
}
