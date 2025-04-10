import { ScrollRestoration, useLoaderData } from "react-router";
import Request from "../pages/Requests";
import { useEffect } from "react";

export default function RequestLayout() {
  const request = useLoaderData();

  useEffect(() => {}, []);

  return (
    <div id="Request-container">
      <ScrollRestoration />
      <div className="main-container">
        <Request request={request} />
      </div>
    </div>
  );
}
