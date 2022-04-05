import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import "firebase/auth";
import { auth } from "../../firebase";

export default function SocilLogin() {
  return (
    <div className="flex justify-between">
      <button
        className="text-sky-400 text-xl px-9 py-3 bg-neutral-700"
        onClick={() =>
          auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        }
      >
        <BsFacebook />
      </button>
      <button
        className="text-xl  px-9 py-3 bg-neutral-700"
        onClick={() =>
          auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        }
      >
        <FcGoogle />
      </button>
      <button className="text-sky-400 text-xl  px-9 py-3 bg-neutral-700">
        <FaTwitter />
      </button>
    </div>
  );
}