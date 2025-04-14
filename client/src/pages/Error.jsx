import { Link } from "react-router";

function Error() {
  return (
    <div>
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
