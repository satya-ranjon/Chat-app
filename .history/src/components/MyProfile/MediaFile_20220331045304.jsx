import React from "react";

const Image =
  "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1648679396~exp=1648679996~hmac=abb785dde5ef006cae92425fe8b83ca3b0a65ee44dc525b969d719b89d77ab7b&w=996";
export default function MediaFile() {
  return (
    <div className="border-b-[1px] pb-5 mt-5 mx-5 space-y-3">
      <div className="flex  justify-between">
        <p className="text-sm text-gray-400 font-semibold ">MEDIA</p>
        <p className="text-green-500 text-sm cursor-pointer">Show all</p>
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-1 pt-3 relative">
        <img className="w-20 h-20 rounded-xl" src={Image} alt="" />
        <img className="w-20 h-20 rounded-xl" src={Image} alt="" />
        <img className="w-20 h-20 rounded-xl" src={Image} alt="" />
        <div className="w-20 h-20 rounded-xl bg-[#0000006b] absolute bottom-0 right-0 text-white flex justify-center font-semibold p-7 ">
          2+
        </div>
      </div>
    </div>
  );
}
