import { auth, googleProvider } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/react.svg";

// Login Authentication for Google Provider & Email/Password
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate(`/account/${user.uid}/dashboard`);
      }
    });
  }, [navigate]);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate(`/account/${auth.currentUser.uid}/dashboard`);
    } catch (error) {
      console.error(error);
    }
  };

  const emailSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(`/account/${auth.currentUser.uid}/dashboard`);
    } catch (error) {
      console.error("Login failed:", error.code, error.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 align-middle justify-center h-[100vh]">
      <img src={logo} alt="Evident logo" className="animate-spin" />
      <h1 className="text-4xl">Evident Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-3 py-2 border rounded w-100"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-3 py-2 border rounded w-100"
      />
      <button
        onClick={emailSignIn}
        className="bg-green-500 hover:bg-green-900 text-white px-4 py-2 rounded w-100 cursor-pointer">
        Sign in with Email
      </button>
      <button
        onClick={signInWithGoogle}
        className="bg-blue-500 hover:bg-blue-900 text-white px-4 py-2 rounded w-100 cursor-pointer">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
