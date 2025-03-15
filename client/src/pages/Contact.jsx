import { Link } from "react-router";
import Nav from "../components/Nav";

function Contact() {
  return (
    <>
      <Nav />
      <div className="main-container">
        Contact
        <button>
          <Link to="/login">Back To Home</Link>
        </button>
      </div>
    </>
  );
}

export default Contact;
