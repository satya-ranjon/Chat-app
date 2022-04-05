import React, { useState } from "react";
import SocilLogin from "./SocilLogin";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";

export default function Login() {
  const [toggle, setToggle] = useState(true);
  const [passShowHide, setPassShowHide] = useState(true);
  const khokon = () => {
    console.log("khokn");
  };

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
      <div className="relative">
        <input
          className="w-full p-2 my-2 mb-3 bg-neutral-700 border-none outline-none rounded-sm"
          type={passShowHide ? "password" : "text"}
          name="password"
          id="password"
        />
        {passShowHide ? (
          <IoEyeSharp
            className=" absolute right-5 top-5 cursor-pointer"
            onClick={() => setPassShowHide((prev) => !prev)}
          />
        ) : (
          <div
            // className=" absolute right-5 top-5 cursor-pointer"
            onClick={khokon}
          >
            <BsEyeSlashFill />
          </div>
        )}
        <IoEyeSharp className=" absolute right-5 top-5 cursor-pointer" />
      </div>
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
