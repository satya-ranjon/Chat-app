import React from "react";

export default function Login() {
  return (
    <div className="text-left text-neutral-400 font-semibold space-y-3">
      <label htmlFor="username">Username</label>
      <input
        className="w-full p-1 my-2"
        type="text"
        name="username"
        id="username"
      />
      <label htmlFor="password">Password</label>
      <input
        className="w-full p-1 my-2"
        type="text"
        name="password"
        id="password"
      />
    </div>
  );
}
