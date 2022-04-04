import React from "react";
import { BsChatSquareTextFill } from "react-icons/bs";
import Login from "./Login";

export default function LoginContainer() {
  return (
    <div className="min-h-screen min-w-full px-10  md:flex  bg-green-500">
      <div className="text-2xl flex justify-center md:justify-start text-neutral-200">
        <BsChatSquareTextFill className="mt-2 mr-3" />
        Chat
      </div>
      <div className="w-full h-full xl:pl-96 md:pl-64 pt-6 md:p-0">
        <div
          className="w-full h-full bg-neutral-800 rounded-2xl text-center p-24
      "
        >
          <h1 className="text-2xl text-gray-400 font-semibold">
            Welcome Back !{" "}
          </h1>
          <p className="text-sm text-gray-400">Sign in to continue to Chat.</p>
          <Login />
        </div>
      </div>

      <img
        src="https://doot-light.react.themesbrand.com/static/media/auth-img.9302755e.png"
        alt="img"
        className=" absolute left-0 bottom-0 hidden  xl:w-[45rem] md:w-[35rem] md:block"
      />
    </div>
  );
}
