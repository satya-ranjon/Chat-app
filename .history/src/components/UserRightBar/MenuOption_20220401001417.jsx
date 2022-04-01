import React from "react";
import { BiMessageDetail } from "react-icons/bi";
export default function MenuOption() {
  return (
    <div className="my-3 border-y-[1px] border-gray-300-500 grid grid-cols-5 gap-4">
      <div className="p-2 bg-slate-200 m-3  text-xl mx-auto">
        <BiMessageDetail className="" />
      </div>
      <BiMessageDetail className="m-3 bg-slate-300 text-2xl mx-auto" />
      <BiMessageDetail className="m-3 bg-slate-300 text-2xl mx-auto" />
      <BiMessageDetail className="m-3 bg-slate-300 text-2xl mx-auto" />
      <BiMessageDetail className="m-3 bg-slate-300 text-2xl mx-auto" />
    </div>
  );
}
