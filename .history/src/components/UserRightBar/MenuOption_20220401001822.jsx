import React from "react";
import { BiMessageDetail, BiPhoneCall } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import InfoBarIcom from "../../assets/InfoBarIcom";
export default function MenuOption() {
  return (
    <div className="my-3 border-y-[1px] border-gray-300-500 grid grid-cols-5 gap-4">
      <div className="p-2 cursor-pointer bg-slate-100 m-3  text-xl mx-auto">
        <BiMessageDetail />
      </div>
      <div className="p-2 cursor-pointer bg-slate-100 m-3  text-xl mx-auto">
        <MdFavoriteBorder />
      </div>
      <div className="p-2 cursor-pointer bg-slate-100 m-3  text-xl mx-auto">
        <BiPhoneCall />
      </div>
      <div className="p-2 cursor-pointer bg-slate-100 m-3  text-xl mx-auto">
        <BsCameraVideo />
      </div>
      <div className="p-2 cursor-pointer bg-slate-100 m-3  text-xl mx-auto">
        <InfoBarIcom bg="bg-gray-600" />
      </div>
    </div>
  );
}
