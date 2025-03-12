import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Login from "./auth/Login";
import Account from "./pages/Account";
import ErrorMessage from "./pages/ErrorMessage";
import { clientLoader, clientsLoader } from "./loaders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: clientsLoader,
    children: [
      {
        errorElement: <ErrorMessage />,
        children: [
          { index: true, element: <Navigate to="login" /> },
          { path: "login", element: <Login /> },
          {
            path: "account",
            children: [
              { index: true, element: <Account />, loader: clientsLoader },
              {
                path: ":id_dashboard",
                element: <Dashboard />,
                loader: clientLoader,
              },
            ],
          },
          { path: "*", element: <Error /> },
        ],
      },
    ],
  },
]);
