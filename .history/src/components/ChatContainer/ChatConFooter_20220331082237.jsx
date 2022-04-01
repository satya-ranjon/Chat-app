import React from "react";
import { BsEmojiSmile } from "react-icons/bs";

export default function ChatConFooter() {
  return (
    <div className="absolute bottom-0 min-w-full p-4 py-7 border-t-[1px] border-gray-200">
      <div class="grid grid-cols-9 gap-4">
        <div class=" bg-red-400">01</div>

        <BsEmojiSmile className="text-xl my-auto" />
        <input
          className="col-start-3 col-span-5 bg-white outline-none p-2 px-4 rounded-md border-2 border-gray-300"
          type="text"
          placeholder="Type your messsage..."
        />
        <div class=" bg-red-400">01</div>
        <div class=" bg-red-400">01</div>
      </div>
    </div>
  );
}
