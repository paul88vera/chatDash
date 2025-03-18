import { useEffect, useRef, useState } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";

const ChatRoom = ({ close }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();
  const dummy = useRef();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
      return;
    }

    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, [navigate]);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    await addDoc(collection(db, "messages"), {
      text: newMessage,
      timestamp: serverTimestamp(),
      user: auth.currentUser.displayName || "Anonymous",
      uid: auth.currentUser.uid,
      photoUrl: auth.currentUser.photoURL || "",
    });

    setNewMessage("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return createPortal(
    <div id="chatbox-container">
      <button className="close-btn" onClick={close}>
        <FaMinus />
      </button>
      <div className=" chat">
        {messages.map((msg) => {
          // Determines if the message was sent or received
          const messageClass =
            msg.uid === auth.currentUser.uid ? "sent" : "received";

          return (
            <div className={`message-container ${messageClass}`} key={msg.id}>
              <p className={`bubble-container`}>
                <img src={msg.photoUrl || "/default-avatar.svg"} alt="User" />
                <span>{msg.text}</span>
              </p>
            </div>
          );
        })}
        <div ref={dummy}></div>
      </div>
      <div className="chatbox-new-message-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          className="border p-2"
        />
        <button
          onClick={sendMessage}
          className="bg-green-500 px-4 py-2 text-white">
          <IoPaperPlaneSharp />
        </button>
      </div>
    </div>,
    document.querySelector("#chatbox")
  );
};

export default ChatRoom;
