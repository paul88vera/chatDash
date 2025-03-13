import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect after successful logout
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 px-4 py-2 text-white rounded">
      Logout
    </button>
  );
};

export default Logout;
