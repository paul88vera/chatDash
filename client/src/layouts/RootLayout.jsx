import { Outlet, ScrollRestoration } from "react-router";
import Nav from "../components/Nav";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Nav />
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
