import React from "react";
import { BiUser } from "react-icons/bi";

export default function ProfileInfo() {
  return (
    <div className="">
      <p className="p-5 text-sm font-semibold text-gray-500">
        If several languages coalesce, the grammar of the resulting language is
        more simple.
      </p>
      <div className="flex p-5 flex-col text-gray-600">
        <div className="flex  space-x-4 ">
          <BiUser size="20" />
          <p className="text-sm font-semibold">Kathryn Swarey</p>
        </div>
        <div className="flex  space-x-4 ">
          <BiUser size="20" />
          <p className="text-sm font-semibold">Kathryn Swarey</p>
        </div>
      </div>
    </div>
  );
}
