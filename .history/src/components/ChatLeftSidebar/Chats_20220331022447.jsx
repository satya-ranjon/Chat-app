import UserImage from "../UserImage";
import ChatHader from "./ChatHader";

export default function ChatList() {
  return (
    <div className="w-72 h-screen ">
      <ChatHader />
      <div className="flex justify-start">
        <div className="flex flex-row ">
          <UserImage />
        </div>
      </div>
    </div>
  );
}
