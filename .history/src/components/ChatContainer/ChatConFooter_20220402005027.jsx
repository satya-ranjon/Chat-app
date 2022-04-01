import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import InfoBarIcom from "../../assets/InfoBarIcom";

export default function ChatConFooter() {
  const [message, setMessage] = useState("");

  return (
    <div className="absolute bottom-0 min-w-full p-4 py-7 border-t-[1px] border-gray-200 ">
      <div className="grid grid-flow-col text-gray-500 dark:text-white ">
        <InfoBarIcom bg="bg-gray-500" coll="true" classes=" my-auto mx-auto" />
        <BsEmojiSmile className=" cursor-pointer text-xl  my-auto mx-auto" />
        <input
          className="col-start-3 col-span-12 bg-white outline-none p-2 px-4 rounded-md border-2 border-gray-300"
          type="text"
          placeholder="Type your messsage..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <MdOutlineKeyboardVoice className="text-2xl cursor-pointer my-auto mx-auto" />
        <button
          className={`text-xl my-auto mx-auto  ${
            message.length === 0 ? `bg-green-300` : `bg-green-500`
          } p-2`}
          disabled={message.length === 0}
        >
          <IoSendSharp className="text-xl text-white" />
        </button>
      </div>
    </div>
  );
}
