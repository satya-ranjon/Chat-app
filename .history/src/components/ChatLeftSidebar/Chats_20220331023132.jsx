import UserImage from "../UserImage";
import ChatHader from "./ChatHader";

export default function ChatList() {
  return (
    <div className="w-72 h-screen ">
      <ChatHader />
      <div className="flex flex-col">
        <div className="flex justify-start ">
          <UserImage className="w-9 h-9 rounded-full mx-auto  m-5 border-2 border-[#4eac6d]" />
          <p>Khokon devsharma</p>
        </div>
        <div className="flex  justify-start ">
          <UserImage className="w-9 h-9 rounded-full mx-auto   border-2 border-[#4eac6d]" />
          <p>Satya ranjon devsharma</p>
        </div>
      </div>
    </div>
  );
}
