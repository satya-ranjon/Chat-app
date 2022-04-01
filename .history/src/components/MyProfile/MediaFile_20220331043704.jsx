import React from "react";

export default function MediaFile() {
  return (
    <div className="p-5">
      <div className="flex  justify-between">
        <p className="text-sm text-gray-400 font-semibold ">MEDIA</p>
        <p className="text-green-500 text-sm cursor-pointer">Show all</p>
      </div>
      <div className="grid grid-rows-3 ">
        <div class="bg-red-400">01</div>
        <div class="bg-red-400">01</div>
        <div class="bg-red-400">01</div>
        <div class="bg-red-400">01</div>
        <div class="bg-red-400">01</div>
        <div class="bg-red-400">01</div>
      </div>
    </div>
  );
}
