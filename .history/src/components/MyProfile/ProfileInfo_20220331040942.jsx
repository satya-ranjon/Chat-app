import React from "react";
import { BiUser } from "react-icons/bi";

export default function ProfileInfo() {
  return (
    <div>
      <p className="p-5 text-sm font-semibold text-gray-500">
        If several languages coalesce, the grammar of the resulting language is
        more simple.
      </p>
      <div className="flex flex-col">
        <div className="flex">
          <BiUser />
          <p>Kathryn Swarey</p>
        </div>
      </div>
    </div>
  );
}
