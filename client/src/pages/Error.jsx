import { Link } from "react-router";
import Nav from "../components/Nav";

function Error() {
  return (
    <div>
      <Nav />
      <div className="main-container">
        Error - 404
        <br />
        Page Does Not Exist
        <button>
          <Link to="/login">Back To Home</Link>
        </button>
      </div>
    </div>
  );
}

export default Error;
