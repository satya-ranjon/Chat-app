import React from "react";
import { BsChatSquareTextFill } from "react-icons/bs";

export default function Login() {
  return (
    <div className="min-h-screen min-w-full p-10  bg-green-500">
      <div className="text-2xl flex justify-start">
        <BsChatSquareTextFill /> <p className="">Chat</p>
      </div>
      <div
        className="w-[100rem] absolute left-0 h-full  bg-neutral-800 rounded-2xl
      "
      ></div>
      <img
        src="https://doot-light.react.themesbrand.com/static/media/auth-img.9302755e.png"
        alt="img"
        className=" absolute left-0 bottom-0 hidden  xl:w-[45rem] md:w-[35rem] md:block"
      />
    </div>
  );
}
