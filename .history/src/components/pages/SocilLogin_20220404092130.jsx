import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";

export default function SocilLogin() {
  return (
    <div className="flex justify-between">
      <button>
        <BsFacebook className="bg-green-500" />
      </button>
      <button>
        <FcGoogle />
      </button>
      <button className="text-green-400">
        <FaTwitter />
      </button>
    </div>
  );
}
