import { Link } from "react-router";
import { getAuth } from "firebase/auth";
import Logout from "./Logout";
import { useState } from "react";
import { BsChatTextFill } from "react-icons/bs";
import ChatRoom from "../pages/ChatRoom";

export default function Nav() {
  const auth = getAuth();
  const [isOpen, setIsOpen] = useState(null);

  const openChat = () => {
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <div id="nav-container" className="">
      <ul className="nav-links">
        <Link to={`/account/${auth.currentUser.uid}/dashboard`}>Dashboard</Link>
        <Link to={`/account/${auth.currentUser.uid}/requests`}>Request</Link>
        <Logout />
      </ul>
      {isOpen ? null : (
        <button className="chatbox-widget-btn" onClick={openChat}>
          <BsChatTextFill style={{ fontSize: "1.5rem" }} />
        </button>
      )}
      {isOpen ? <ChatRoom close={closeChat} /> : null}
    </div>
  );
}
