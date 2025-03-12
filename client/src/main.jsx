// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "./pages/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary fallback={<h1>Something is wrong...</h1>}>
    <RouterProvider router={router} />
  </ErrorBoundary>
);
