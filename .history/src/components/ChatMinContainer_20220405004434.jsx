import React from "react";
import SideBarManu from "./SideBarManu";
import ChatContainer from "./ChatContainer/ChatContainer";
import UserProfileSidebar from "./UserRightBar/UserProfileSidebar";
import { useToggle } from "../context/toggleContext";
import { Outlet } from "react-router-dom";

export default function ChatMinContainer() {
  const { toggle } = useToggle();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log(currentUser);
  useEffect(() => {
    if (!currentUser) return navigate("/auth");
  }, [currentUser]);
  return (
    <div className="flex">
      <SideBarManu />
      <Outlet />
      <ChatContainer />
      {toggle ? <UserProfileSidebar /> : null}
    </div>
  );
}
