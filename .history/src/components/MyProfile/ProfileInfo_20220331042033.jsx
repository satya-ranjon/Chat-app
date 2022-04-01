import React from "react";
import { BiUser, BiMessageRounded } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

export default function ProfileInfo() {
  return (
    <div className="border-b-[1px] pb-5">
      <p className="p-5 text-sm font-semibold text-gray-500">
        If several languages coalesce, the grammar of the resulting language is
        more simple.
      </p>
      <div className="flex p-5 flex-col text-gray-600 space-y-2">
        <div className="flex  space-x-4 ">
          <BiUser size="20" />
          <p className="text-sm font-semibold">Kathryn Swarey</p>
        </div>
        <div className="flex  space-x-4 ">
          <BiMessageRounded size="20" />
          <p className="text-sm font-semibold">admin@themesbrand.com</p>
        </div>
        <div className="flex  space-x-4 ">
          <IoLocationOutline size="20" />
          <p className="text-sm font-semibold">California, USA</p>
        </div>
      </div>
    </div>
  );
}
