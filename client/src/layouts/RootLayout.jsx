import { Outlet, ScrollRestoration } from "react-router";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
