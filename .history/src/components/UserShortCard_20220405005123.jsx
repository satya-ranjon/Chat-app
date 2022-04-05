import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function UserShortCard({ setToogle }) {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <div
      className=" absolute flex flex-col font-semibold text-white bg-neutral-800 transition-all duration-500 border-[1px] border-gray-600 "
      onClick={() => setToogle((prev) => !prev)}
    >
      <p
        className="flex justify-between p-1 px-4 w-32 hover:bg-neutral-700 cursor-pointer"
        onClick={() => navigate("profile")}
      >
        Profile <BiUserCircle className="my-auto" />
      </p>
      <p
        className="flex justify-between p-1 px-4 w-32 hover:bg-neutral-700 cursor-pointer"
        onClick={() => logout()}
      >
        Logout <BiLogOutCircle className="my-auto" />
      </p>
      <p
        className="flex justify-between p-1 px-4 w-32 hover:bg-neutral-700 cursor-pointer"
        onClick={() => navigate("auth")}
      >
        Logout <BiLogOutCircle className="my-auto" />
      </p>
    </div>
  );
}
