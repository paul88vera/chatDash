import { useState } from "react";
import ChatRoom from "./ChatRoom";
import { BsChatTextFill } from "react-icons/bs";
import Logout from "../components/Logout";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(null);

  const openChat = () => {
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Logout />
      Dashboard
      {isOpen ? null : (
        <button className="chatbox-widget-btn" onClick={openChat}>
          <BsChatTextFill style={{ fontSize: "1.5rem" }} />
        </button>
      )}
      {isOpen ? <ChatRoom close={closeChat} /> : null}
    </div>
  );
}
