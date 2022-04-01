import React from "react";
import { BiMessageDetail, BiPhoneCall } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import InfoBarIcom from "../../assets/InfoBarIcom";
export default function MenuOption() {
  return (
    <div className="my-3 border-y-[1px] border-gray-300-500 grid grid-cols-5 gap-4 text-gray-600">
      <div className="p-4 flex justify-center flex-col">
        <div className="cursor-pointer text-center bg-slate-100 text-xl m-auto p-2 ">
          <BiMessageDetail />
        </div>
        <p className="uppercase text-[12px]">Message</p>
      </div>

      {/* <div className="p-2 cursor-pointer bg-slate-100 m-3  text-xl mx-auto">
        <MdFavoriteBorder />
      </div>
      <div className="p-2 cursor-pointer bg-slate-100 m-3  text-xl mx-auto">
        <BiPhoneCall />
      </div>
      <div className="p-2 cursor-pointer bg-slate-100 m-3  text-xl mx-auto">
        <BsCameraVideo />
      </div>
      <div className="p-2 cursor-pointer bg-slate-100 m-3  text-xl mx-auto">
        <InfoBarIcom bg="bg-gray-600" classes="pt-1" coll="true" />
      </div> */}
    </div>
  );
}
