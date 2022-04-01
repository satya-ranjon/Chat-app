import React from "react";
import UserImage from "../UserImage";
const Image =
  "https://img.freepik.com/free-photo/interior-wall-mockup-green-wall-wooden-cabinet-3d-rendering_41470-3959.jpg?w=996";
const Image2 =
  "https://img.freepik.com/free-photo/green-wall-mockup-with-green-plant-shelf3d-rendering_41470-4114.jpg?t=st=1648672065~exp=1648672665~hmac=4bfdd984dbd130819176b46c740c94fadc774d8e6673d486d7a2318096ee0a49&w=996";
export default function MyProfile() {
  return (
    <div className="w-72 h-screen ">
      <div className="relative">
        <img src={Image2} alt={Image} className="w-full h-40" />
        <UserImage className="w-12 h-12 rounded-full" />
      </div>
    </div>
  );
}
