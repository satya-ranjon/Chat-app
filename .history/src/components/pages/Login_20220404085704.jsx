import React from "react";

export default function Login() {
  return (
    <div className="text-left text-neutral-400 font-semibold">
      <label htmlFor="username" className="p-5">
        Username
      </label>
      <input
        className="w-full p-1 my-2"
        type="text"
        name="username"
        id="username"
      />
      <label htmlFor="password" className="p-5">
        Password
      </label>
      <input
        className="w-full p-1 my-2"
        type="text"
        name="password"
        id="password"
      />
    </div>
  );
}
