import React from "react";
import UserImage from "../UserImage";
const Image =
  "https://img.freepik.com/free-photo/interior-wall-mockup-green-wall-wooden-cabinet-3d-rendering_41470-3959.jpg?w=996";

export default function MyProfile() {
  return (
    <div className="w-72 h-screen ">
      <div className="relative">
        <img src={Image} alt={Image} className="w-full h-40" />
        <UserImage className="w-14 h-14 rounded-full absolute  inset-x-0" />
      </div>
    </div>
  );
}
