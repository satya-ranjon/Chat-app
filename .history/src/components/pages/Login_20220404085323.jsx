import React from "react";

export default function Login() {
  return (
    <div className="text-center">
      <label htmlFor="username"></label>
      <input
        className="w-full p-1 my-5"
        type="text"
        name="username"
        id="username"
      />
      <input className="w-full p-1 my-5" type="text" name="username" id="" />
    </div>
  );
}
