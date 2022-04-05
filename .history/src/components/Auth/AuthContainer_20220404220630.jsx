import React, { useEffect } from "react";
import { BsChatSquareTextFill } from "react-icons/bs";
import { Outlet, useNavigate } from "react-router-dom";
import Login from "./Login";
import SocilLogin from "./SocilLogin";

export default function LoginContainer() {
  const navigate = useNavigate();
  useEffect(() => {
    if (false) return navigate("/");
  }, [navigate]);

  return (
    <div className="min-h-screen min-w-full py-10 px-5  md:flex  bg-green-500">
      <div className="text-2xl flex absolute  text-neutral-200 left-[45%] 2sm:left-[40%]  top-4 md:top-10 md:left-10 ">
        <BsChatSquareTextFill className="mt-2 mr-3" />
        Chat
      </div>
      <div className="w-full h-full xl:pl-96 md:pl-64 pt-6 md:p-0">
        <div
          className="w-full h-full bg-neutral-800 rounded-2xl text-center p-10 sm:p10 md:p-24 lg:p-36
      "
        >
          <h1 className="text-2xl text-gray-400 font-semibold">
            Welcome Back !
          </h1>
          <p className="text-sm text-gray-400">Sign in to continue to Chat.</p>
          <Outlet />
          <div className="flex my-5 text-neutral-400">
            <div className="w-full bg-neutral-600 h-[1px] my-auto"></div>
            <p className="w-screen text-center">Sign in with</p>
            <div className="w-full bg-neutral-600 h-[1px] my-auto"></div>
          </div>
          <SocilLogin />
          <p className="text-center my-5 text-neutral-400">
            Don't have an account ?{" "}
            <span className="text-green-500 cursor-pointer">Register</span>
          </p>
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
