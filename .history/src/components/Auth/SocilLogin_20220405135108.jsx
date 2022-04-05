import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { useAuth } from "../../context/AuthProvider";
export default function SocilLogin() {
  const { googlesign, facebooksign } = useAuth();
  return (
    <>
      <div className="flex my-5 text-neutral-400">
        <div className="w-full bg-neutral-600 h-[1px] my-auto"></div>
        <p className="w-screen text-center">Sign in with</p>
        <div className="w-full bg-neutral-600 h-[1px] my-auto"></div>
      </div>

      {/* // socil login */}

      <div className="flex justify-between">
        <button
          className="text-sky-400 text-xl px-9 py-3 bg-neutral-700 cursor-pointer sm:cursor-pointer"
          onClick={() => facebooksign()}
        >
          <BsFacebook />
        </button>
        <button
          className="text-xl  px-9 py-3 bg-neutral-700 cursor-pointer"
          onClick={() => googlesign()}
        >
          <FcGoogle />
        </button>
        <button className="text-sky-400 text-xl  px-9 py-3 bg-neutral-700 cursor-pointer">
          <FaTwitter />
        </button>
      </div>
    </>
  );
}
