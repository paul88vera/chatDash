import { Outlet, ScrollRestoration } from "react-router";
import Nav from "../components/Nav";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const auth = getAuth();
  const [navi, setNavi] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setNavi(true);
      } else {
        setNavi(false);
      }
    });
  }, [auth, navi]);

  return (
    <>
      <ScrollRestoration />
      {auth && navi === true ? null : <Nav />}
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
