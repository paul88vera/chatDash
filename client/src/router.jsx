import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Error from "./pages/Error";
import Login from "./auth/Login";
import Account from "./pages/Account";
import ErrorMessage from "./pages/ErrorMessage";
import { requestsLoader } from "./loaders.js";
import RequestLayout from "./layouts/RequestLayout";

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
            children: [
              { index: true, element: <Account /> },
              {
                path: ":id/dashboard",
                element: <DashboardLayout />,
              },
              {
                path: ":id/requests",
                element: <RequestLayout />,
                loader: requestsLoader,
              },
            ],
          },
          { path: "*", element: <Error /> },
        ],
      },
    ],
  },
]);
