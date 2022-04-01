import React from "react";
import { BiMessageDetail, BiPhoneCall } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import InfoBarIcom from "../../assets/InfoBarIcom";
export default function MenuOption() {
  return (
    <div className="my-3 border-y-[1px] border-gray-300-500 grid grid-cols-5 gap-4 text-gray-600">
      <div className="p-4 flex items-center flex-col space-x-1 space-y-2">
        <div className="cursor-pointer p-2 bg-slate-100 text-xl">
          <BiMessageDetail />
        </div>
        <p className="uppercase text-gray-500 text-[12px] font-semibold ">
          Message
        </p>
      </div>
      <div className="p-4 flex items-center flex-col space-x-1 space-y-2">
        <div className="cursor-pointer p-2 bg-slate-100 text-xl">
          <MdFavoriteBorder />
        </div>
        <p className="uppercase text-gray-500 text-[12px] font-semibold ">
          Message
        </p>
      </div>
      <div className="p-4 flex items-center flex-col space-x-1 space-y-2">
        <div className="cursor-pointer p-2 bg-slate-100 text-xl">
          <BiPhoneCall />
        </div>
        <p className="uppercase text-gray-500 text-[12px] font-semibold ">
          Message
        </p>
      </div>
      <div className="p-4 flex items-center flex-col space-x-1 space-y-2">
        <div className="cursor-pointer p-2 bg-slate-100 text-xl">
          <BsCameraVideo />
        </div>
        <p className="uppercase text-gray-500 text-[12px] font-semibold ">
          Message
        </p>
      </div>
      <div className="p-4 flex items-center flex-col space-x-1 space-y-2">
        <div className="cursor-pointer p-2 bg-slate-100 text-xl">
          <InfoBarIcom bg="bg-gray-600" classes="my-2" coll="true" />
        </div>
        <p className="uppercase text-gray-500 text-[12px] font-semibold ">
          Message
        </p>
      </div>
    </div>
  );
}
