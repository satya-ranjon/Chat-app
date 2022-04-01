import React from "react";
import { BiMessageDetail } from "react-icons/bi";
export default function MenuOption() {
  return (
    <div className="my-3 border-y-[1px] border-gray-300-500 grid grid-cols-5 gap-4">
      <div className="">
        {" "}
        <BiMessageDetail />
      </div>
      <div className=""> MenuOption</div>
      <div className=""> MenuOption</div>
      <div className=""> MenuOption</div>
      <div className=""> MenuOption</div>
    </div>
  );
}
