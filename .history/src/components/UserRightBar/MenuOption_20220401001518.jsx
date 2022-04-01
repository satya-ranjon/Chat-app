import React from "react";
import { BiMessageDetail } from "react-icons/bi";
export default function MenuOption() {
  return (
    <div className="my-3 border-y-[1px] border-gray-300-500 grid grid-cols-5 gap-4">
      <div className="p-2 cursor-pointer bg-slate-200 m-3  text-xl mx-auto">
        <BiMessageDetail />
      </div>
    </div>
  );
}
