import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function SocilLogin() {
  return (
    <div className="flex justify-between">
      <button>
        <BsFacebook />
      </button>
      <button>FcGoogle</button>
      <button>login</button>
    </div>
  );
}
