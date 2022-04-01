import ChatHader from "./ChatHader";
import ChatsUserList from "./ChatsUserList";

export default function Chats() {
  return (
    <div className="w-80 h-screen dark:bg-[#262626] ">
      <ChatHader />
      <ChatsUserList />
    </div>
  );
}
