import { ScrollRestoration, useLoaderData } from "react-router";
import Nav from "../components/Nav";
import Request from "../pages/Requests";

export default function RequestLayout() {
  const request = useLoaderData();
  return (
    <div id="Request-container">
      <Nav />
      <ScrollRestoration />
      <div className="main-container">
        <Request request={request} />
      </div>
    </div>
  );
}
