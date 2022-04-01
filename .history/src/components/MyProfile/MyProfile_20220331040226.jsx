import React from "react";
import UserImage from "../UserImage";
const Image =
  "https://img.freepik.com/free-photo/modern-living-room-interior-with-sofa-green-plants-lamp-table-dark-wall-background_41470-1528.jpg?w=996&t=st=1648676636~exp=1648677236~hmac=3f890077ce9371578c992216baf3e8f401b234873628a920daaf2d4174ff41ce";

export default function MyProfile() {
  return (
    <div className="sm:w-[160px] h-screen w-40 ">
      <div className="border-b-[1px] pb-7">
        <div className="relative mb-12">
          <img src={Image} alt={Image} className="w-full h-40" />
          <UserImage className="w-16 h-16 sm:w-20 sm:h-20 rounded-full absolute sm:-bottom-9  -bottom-7 sm:right-[6.6rem]  right-12  border-4 border-b-white" />
          <p className=" absolute top-0 left-0 p-3 text-white font-semibold text-xl">
            My Profile
          </p>
          <div className="flex flex-col top-0 right-0 absolute p-3 cursor-pointer">
            <p className="bg-white w-1 h-1 rounded-full m-[2px]"></p>
            <p className="bg-white w-1 h-1 rounded-full m-[2px]"></p>
            <p className="bg-white w-1 h-1 rounded-full m-[2px]"></p>
          </div>
        </div>
        <p className="text-[18px] text-gray-600 text-center font-semibold">
          Kathryn Swarey
        </p>
        <p className="text-sm text-gray-500 text-center">Front end Developer</p>
      </div>
    </div>
  );
}
