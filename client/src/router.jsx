import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Login from "./auth/Login";
import Account from "./pages/Account";
import ErrorMessage from "./pages/ErrorMessage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorMessage />,
        children: [
          { index: true, element: <Navigate to="login" /> },
          { path: "login", element: <Login /> },
          {
            path: "account",
            element: <Account />,
            children: [
              { index: true, element: <Account /> },
              { path: "?dashboard=:id", element: <Dashboard /> },
            ],
          },
          { path: "*", element: <Error /> },
        ],
      },
    ],
  },
]);
