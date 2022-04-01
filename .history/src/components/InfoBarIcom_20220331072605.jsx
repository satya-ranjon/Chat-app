import React from "react";

export default function InfoBarIcom({ bg, coll = true }) {
  return (
    <div
      className={`flex ${
        coll || `flex-col`
      }  top-0 right-0 absolute p-3 cursor-pointer`}
    >
      <p className={`${bg} w-1 h-1 rounded-full m-[2px]`}></p>
      <p className={`${bg} w-1 h-1 rounded-full m-[2px]`}></p>
      <p className={`${bg} w-1 h-1 rounded-full m-[2px]`}></p>
    </div>
  );
}
