import React from "react";

export default function Alart({ text }) {
  return (
    <div className=" p-3 rounded-md w-full bg-red-400 font-semibold text-white">
      {text}
    </div>
  );
}
