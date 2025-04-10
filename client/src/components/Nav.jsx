import { Link, useNavigate } from "react-router";
import Logout from "./Logout";
import { useEffect, useState } from "react";
import { BsChatTextFill } from "react-icons/bs";
import ChatRoom from "../pages/ChatRoom";
import { getAuth } from "firebase/auth";

export default function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(null);
  const auth = getAuth();

  // auth check
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  // Chat toggle
  const openChat = () => {
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  // just incase it loads too fast
  if (!auth.currentUser) {
    return (
      <ul className="nav-links w-full flex flex-row gap-6 align-middle justify-center items-center">
        <Link to={`/login`} className="hover:text-slate-400">
          Dashboard
        </Link>
        <Link to={`/login`} className="hover:text-slate-400">
          Request
        </Link>
        <Logout />
      </ul>
    ); // or a spinner
  }

  return (
    <div
      id="nav-container"
      className="w-full flex flex-row justify-around bg-purple-950 p-2">
      {auth.currentUser && (
        <ul className="nav-links w-full flex flex-row gap-6 align-middle justify-center items-center">
          <Link
            to={`/account/${auth.currentUser.uid}/dashboard`}
            className="hover:text-slate-400">
            Dashboard
          </Link>
          <Link
            to={`/account/${auth.currentUser.uid}/requests`}
            className="hover:text-slate-400">
            Request
          </Link>
          <Logout />
        </ul>
      )}
      {isOpen ? null : (
        <button
          className="chatbox-widget-btn bg-transparent"
          onClick={openChat}>
          <BsChatTextFill style={{ fontSize: "1.5rem" }} />
        </button>
      )}
      {isOpen ? <ChatRoom close={closeChat} /> : null}
    </div>
  );
}
