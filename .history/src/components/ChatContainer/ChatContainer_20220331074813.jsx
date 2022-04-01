import React from "react";
import InfoBarIcom from "../../assets/InfoBarIcom";
import { AiFillInfoCircle } from "react-icons/ai";
const Image =
  "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1648687216~exp=1648687816~hmac=380c4fd70ba9239edbad30e02afcb2357fa93ab0a87a4ba1f7828ca0b8100a6a&w=996";

export default function ChatContainer() {
  return (
    <div className="flex-grow h-screen bg-gray-100 dark:bg-slate-600 bgImage">
      <div className="flex justify-between p-5 px-7">
        <div className="flex space-x-3 ">
          <img className="w-10 h-10 my-auto rounded-full" src={Image} alt="" />
          <div className="flex flex-col p-0">
            <p className="text-xl font-semibold text-gray-600">
              Hendrix Martin
            </p>
            <p className="text-[14px] text-gray-500">Do not disturb</p>
          </div>
        </div>
        <div className="flex justify-between ">
          <AiFillInfoCircle />
          <InfoBarIcom bg="bg-gray-600" />
        </div>
      </div>
    </div>
  );
}
