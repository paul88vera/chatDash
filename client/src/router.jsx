import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Error from "./pages/Error";
import Login from "./auth/Login";
import Account from "./pages/Account";
import ErrorMessage from "./pages/ErrorMessage";
import { clientLoader, clientsLoader } from "./loaders";
import RequestLayout from "./layouts/RequestLayout";
import Contact from "./pages/Contact";

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
                path: ":id/dashboard",
                element: <DashboardLayout />,
                loader: clientLoader,
              },
              {
                path: ":id/request",
                element: <RequestLayout />,
                loader: clientLoader,
              },
              {
                path: ":id/contact",
                element: <Contact />,
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
