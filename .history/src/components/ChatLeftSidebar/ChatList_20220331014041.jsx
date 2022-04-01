import React from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
export default function ChatList() {
  return (
    <div className="w-72 h-screen ">
      <div className="px-5 pt-4">
        <div className="flex justify-between items-start">
          <p className="text-2xl font-sans text-zinc-500 font-semibold ">
            Chats
          </p>
          <button
            className="bg-green-100 hover:bg-green-300 transition-colors duration-300 p-2
          "
          >
            <HiOutlinePlusSm />
          </button>
        </div>
        <button
          data-tooltip-target="tooltip-left"
          data-tooltip-placement="left"
          type="button"
          class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Tooltip left
        </button>
        <div
          id="tooltip-left"
          role="tooltip"
          class="tooltip absolute z-10 inline-block bg-gray-900 font-medium shadow-sm text-white py-2 px-3 text-sm rounded-lg opacity-0 invisible"
          data-popper-reference-hidden=""
          data-popper-escaped=""
          data-popper-placement="left"
          style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-1266.22px, 1620px, 0px);"
        >
          Tooltip on left
          <div
            class="tooltip-arrow"
            data-popper-arrow=""
            style="position: absolute; top: 0px; transform: translate3d(0px, 28px, 0px);"
          ></div>
        </div>
      </div>
    </div>
  );
}
