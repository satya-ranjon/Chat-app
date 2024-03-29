import React from "react";
import { Link } from "react-router-dom";
import SocilLogin from "./SocilLogin";

export default function Login() {
  return (
    <div className="text-left text-neutral-400 font-semibold">
      <label htmlFor="username">Username</label>
      <input
        className="w-full p-2 my-2 mb-3 bg-neutral-700 border-none outline-none rounded-sm"
        type="text"
        name="username"
        id="username"
      />
      <label htmlFor="password">Password</label>
      <input
        className="w-full p-2 my-2 mb-3 bg-neutral-700 border-none outline-none rounded-sm"
        type="text"
        name="password"
        id="password"
      />

      <Link to="/m">
        <button className="w-full p-2 my-2 mb-3 bg-green-500 border-none outline-none rounded-sm text-white">
          Login
        </button>
      </Link>
      <div className="flex my-5">
        <div className="w-full bg-neutral-600 h-[1px] my-auto"></div>
        <p className="w-screen text-center">Sign in with</p>
        <div className="w-full bg-neutral-600 h-[1px] my-auto"></div>
      </div>
      <SocilLogin />
      <p className="text-center my-5">
        Don't have an account ?
        <span className="text-green-500 cursor-pointer">Register</span>
      </p>
    </div>
  );
}
