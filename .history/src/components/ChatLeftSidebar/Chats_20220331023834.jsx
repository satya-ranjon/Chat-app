import UserImage from "../UserImage";
import ChatHader from "./ChatHader";

export default function ChatList() {
  return (
    <div className="w-72 h-screen ">
      <ChatHader />
      <div className="flex flex-col">
        <div className="flex justify-start px-5 p-2 space-x-4 bg-[#4eac6d] text-white">
          <UserImage className="w-9 h-9 rounded-full border-2 border-[#4eac6d]" />
          <p className="text-center leading-8">Khokon devsharma</p>
        </div>
      </div>
    </div>
  );
}
