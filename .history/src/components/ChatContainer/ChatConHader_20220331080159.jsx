import React from "react";

export default function ChatConHader() {
  return (
    <div className="flex justify-between p-5 px-7">
      <div className="flex space-x-3 ">
        <img className="w-10 h-10 my-auto rounded-full" src={Image} alt="" />
        <div className="flex flex-col p-0">
          <p className="text-xl font-semibold text-gray-600">Hendrix Martin</p>
          <p className="text-[14px] text-gray-500">Do not disturb</p>
        </div>
      </div>
      <div className="flex justify-between space-x-6 p-3 text-xl text-gray-500 ">
        <FiSearch className="my-auto cursor-pointer" />
        <FiPhoneCall className="my-auto cursor-pointer" />
        <BsCameraVideo className="my-auto cursor-pointer" />
        <AiFillInfoCircle className="my-auto cursor-pointer" />
        <InfoBarIcom bg="bg-gray-600" />
      </div>
    </div>
  );
}
