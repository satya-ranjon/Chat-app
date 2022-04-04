import React from "react";

export default function Login() {
  return (
    <div className="text-left text-neutral-400 font-semibold">
      <label htmlFor="username">Username</label>
      <input
        className="w-full p-1 my-2 mb-3 bg-neutral-700 border-none"
        type="text"
        name="username"
        id="username"
      />
      <label htmlFor="password">Password</label>
      <input
        className="w-full p-1 my-2 mb-3"
        type="text"
        name="password"
        id="password"
      />
    </div>
  );
}
