import ChatHader from "./ChatHader";
import ChatsUserList from "./ChatsUserList";

export default function ChatList() {
  return (
    <div className="w-72 h-screen ">
      <ChatHader />
      <ChatsUserList />{" "}
    </div>
  );
}
