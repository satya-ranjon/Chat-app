import React from "react";

export default function ChatConFooter() {
  return (
    <div>
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4 bg-red-200">01</div>
        <div class="col-start-1 col-end-3 bg-red-200 ">02</div>
        <div class="col-end-7 col-span-2 bg-red-200">03</div>
        <div class="col-start-1 col-end-7 ">04</div>
      </div>
    </div>
  );
}
