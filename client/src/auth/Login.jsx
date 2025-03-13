import { auth, googleProvider } from "../firebase.js";
import {
  onAuthStateChanged,
  getRedirectResult,
  signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getRedirectResult(auth) // Gets auth state after redirection
      .then((result) => {
        if (result?.user) {
          console.log("Redirect login success:", result.user);
          navigate(`/account/${result.user.uid}/dashboard`);
        }
      })
      .catch((error) => console.error("Login failed:", error));

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate(`/account/${user.uid}/dashboard`);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const signIn = () => signInWithPopup(auth, googleProvider);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={signIn}
        className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
