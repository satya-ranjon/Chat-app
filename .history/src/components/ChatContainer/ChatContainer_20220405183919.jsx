import React, { useEffect, useState } from "react";
import ChatConFooter from "./ChatConFooter";
import ChatConHader from "./ChatConHader";
import { ChatEngine } from "react-chat-engine";
import Axios from "axios";
import { useAuth } from "../../context/AuthProvider";
import { async } from "@firebase/util";

export default function ChatContainer() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    Axios.get("https://api.chatengine.io/users/me", {
      headers: {
        "project-id": "8a4f5f0f-3766-4412-922b-6d141dd3dddb",
        "user-name": currentUser.email,
        "user-secret": currentUser.uid,
      },
    })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", currentUser.email);
        formdata.append("username", currentUser.displayName);
        formdata.append("secret", currentUser.uid);
        getFile(currentUser.photoUrl).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          Axios.post("http://api.chatengine.io/users", formdata, {
            headers: { "private-key": "8a4f5f0f-3766-4412-922b-6d141dd3dddb" },
          });
        });
      });
  }, [currentUser.uid]);

  return (
    <div className="flex-grow h-screen bg-gray-100 dark:bg-[#2e2e2e] bgImage relative">
      <ChatConHader />
      <ChatEngine
        height="calc(100vh - 90px)"
        projectID="8a4f5f0f-3766-4412-922b-6d141dd3dddb"
        userName={currentUser.email}
        userSecret={currentUser.uid}
      />
      {/* <ChatConFooter /> */}
    </div>
  );
}
