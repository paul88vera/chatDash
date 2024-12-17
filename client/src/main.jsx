import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "./pages/ErrorBoundary.jsx";
import Error from "./pages/Error.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);
