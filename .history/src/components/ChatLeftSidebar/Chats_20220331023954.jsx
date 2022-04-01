import UserImage from "../UserImage";
import ChatHader from "./ChatHader";

export default function ChatList() {
  return (
    <div className="w-72 h-screen ">
      <ChatHader />
      <div className="flex flex-col">
        <div className="flex justify-start px-5 p-2 space-x-4 bg-[#4eac6d] text-white">
          <UserImage className="w-8 h-8 rounded-full" />
          <p className="text-center leading-7">Khokon devsharma</p>
        </div>
        <div className="flex justify-start px-5 p-2 space-x-4 ">
          <UserImage className="w-8 h-8 rounded-full" />
          <p className="text-center leading-7">Khokon devsharma</p>
        </div>
        <div className="flex justify-start px-5 p-2 space-x-4 ">
          <UserImage className="w-8 h-8 rounded-full" />
          <p className="text-center leading-7">Khokon devsharma</p>
        </div>
      </div>
    </div>
  );
}
