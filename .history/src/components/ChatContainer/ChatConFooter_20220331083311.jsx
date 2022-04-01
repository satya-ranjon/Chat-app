import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import InfoBarIcom from "../../assets/InfoBarIcom";

export default function ChatConFooter() {
  return (
    <div className="absolute bottom-0 min-w-full p-4 py-7 border-t-[1px] border-gray-200">
      <div class="grid grid-flow-col text-gray-500 ">
        <InfoBarIcom bg="bg-gray-500" coll="true" classes=" my-auto mx-auto" />
        <BsEmojiSmile className=" cursor-pointer text-xl  my-auto mx-auto" />
        <input
          className="col-start-3 col-span-12 bg-white outline-none p-2 px-4 rounded-md border-2 border-gray-300"
          type="text"
          placeholder="Type your messsage..."
        />
        <BsEmojiSmile className="text-xl cursor-pointer my-auto mx-auto" />
        <BsEmojiSmile className="text-xl cursor-pointer my-auto mx-auto" />
      </div>
    </div>
  );
}
