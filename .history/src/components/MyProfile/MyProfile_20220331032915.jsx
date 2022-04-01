import React from "react";
import UserImage from "../UserImage";
const Image =
  "https://img.freepik.com/free-photo/interior-wall-mockup-green-wall-wooden-cabinet-3d-rendering_41470-3959.jpg?w=996";

export default function MyProfile() {
  return (
    <div className="sm:w-72 h-screen w-40 ">
      <div className="relative">
        <img src={Image} alt={Image} className="w-full h-40" />
        <UserImage className="w-20 h-20 rounded-full absolute  -bottom-7 sm:right-28 right-12  border-4 border-b-white" />
      </div>
    </div>
  );
}
