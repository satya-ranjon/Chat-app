import UserImage from "../UserImage";
import ChatHader from "./ChatHader";

export default function ChatList() {
  return (
    <div className="w-72 h-screen ">
      <ChatHader />
      <div className="flex flex-col">
        <div className="flex justify-start ">
          <UserImage />
          <p>Khokon devsharma</p>
        </div>
        <div className="flex p-5 justify-start ">
          <UserImage />
        </div>
      </div>
      <div className="flex justify-start ">
        <UserImage />
        <p>Khokon devsharma</p>
      </div>
    </div>
  );
}
