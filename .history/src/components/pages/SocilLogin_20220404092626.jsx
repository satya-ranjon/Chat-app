import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";

export default function SocilLogin() {
  return (
    <div className="flex justify-between">
      <button className="text-sky-400 text-xl px-5 py-2 bg-neutral-800">
        <BsFacebook />
      </button>
      <button className="text-xl">
        <FcGoogle />
      </button>
      <button className="text-sky-400 text-xl">
        <FaTwitter />
      </button>
    </div>
  );
}
