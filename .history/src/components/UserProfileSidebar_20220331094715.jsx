import React from "react";
import { useToggle } from "../context/toggleContext";

export default function UserProfileSidebar() {
  const { setToggle } = useToggle();
  return (
    <div
      className="w-80 h-screen bg-red-100 transition-all duration-300"
      onClick={() => setToggle(prev) => !prev}
    ></div>
  );
}
