import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";

export default function SocilLogin() {
  return (
    <div className="flex justify-between">
      <button className="text-sky-400">
        <BsFacebook />
      </button>
      <button className="bg-green-500">
        <FcGoogle />
      </button>
      <button className="text-sky-400">
        <FaTwitter />
      </button>
    </div>
  );
}
