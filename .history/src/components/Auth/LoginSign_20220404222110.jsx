import React, { useState } from "react";
import SocilLogin from "./SocilLogin";

export default function Login() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="text-left text-neutral-400 font-semibold">
      {toggle || (
        <>
          <label htmlFor="email">Email</label>
          <input
            className="w-full p-2 my-2 mb-3 bg-neutral-700 border-none outline-none rounded-sm"
            type="text"
            name="email"
            id="email"
          />
        </>
      )}

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

      <button className="w-full p-2 my-2 mb-3 bg-green-500 border-none outline-none rounded-sm text-white">
        {toggle === true ? "Login" : "Reginster"}
      </button>

      <SocilLogin />
      <p className="text-center my-5 text-neutral-400">
        Don't have an account ?{" "}
        <span
          className="text-green-500 cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle === true ? "Reginster" : "Login"}
        </span>
      </p>
    </div>
  );
}