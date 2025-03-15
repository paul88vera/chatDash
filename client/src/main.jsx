// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import { Suspense } from "react";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary fallbackRender={() => <h1>Something is wrong...</h1>}>
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </ErrorBoundary>
);
