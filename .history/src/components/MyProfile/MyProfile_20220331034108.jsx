import React from "react";
import UserImage from "../UserImage";
const Image =
  "https://img.freepik.com/free-photo/interior-wall-mockup-green-wall-wooden-cabinet-3d-rendering_41470-3959.jpg?w=996";

export default function MyProfile() {
  return (
    <div className="sm:w-72 h-screen w-40 ">
      <div className="relative">
        <img src={Image} alt={Image} className="w-full h-40" />
        <UserImage className="w-16 h-16 sm:w-20 sm:h-20 rounded-full absolute sm:-bottom-9  -bottom-7 sm:right-[6.6rem]  right-12  border-4 border-b-white" />
        <p className=" absolute top-0 left-0 p-3 text-white font-semibold text-xl">
          My Profile
        </p>
        <div className="flex flex-col top-0 right-0 absolute">
          <p>.</p>
          <p>.</p>
          <p>.</p>
        </div>
      </div>
    </div>
  );
}
