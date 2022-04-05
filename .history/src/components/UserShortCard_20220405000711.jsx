import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function UserShortCard() {
  const navigate = useNavigate();
  return (
    <div className=" absolute flex flex-col font-semibold text-white bg-neutral-800 transition-all duration-500 border-[1px] border-gray-600 -z-1">
      <p
        className="flex justify-between p-1 px-4 w-32 hover:bg-neutral-700 cursor-pointer"
        onClick={() => navigate("profile")}
      >
        Profile <BiUserCircle className="my-auto" />
      </p>
      <p className="flex justify-between p-1 px-4 w-32 hover:bg-neutral-700 cursor-pointer">
        Logout <BiLogOutCircle className="my-auto" />
      </p>
    </div>
  );
}