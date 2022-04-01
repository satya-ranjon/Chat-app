import React from "react";
import { BiUser, BiMessageRounded } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

export default function ProfileInfo() {
  return (
    <div className="border-b-[1px] pb-5 mt-5  space-y-3">
      <p className=" text-sm font-semibold text-gray-400 dark:text-neutral-500">
        If several languages coalesce, the grammar of the resulting language is
        more simple.
      </p>
      <div className="flex flex-col text-gray-500 space-y-4 dark:text-neutral-500">
        <div className="flex  space-x-4 ">
          <BiUser size="20" />
          <p className="text-sm font-semibold ">Kathryn Swarey</p>
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
