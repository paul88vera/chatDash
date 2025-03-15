import { ScrollRestoration } from "react-router";
import Nav from "../components/Nav";
import Request from "../pages/Request";

export default function RequestLayout() {
  return (
    <div id="Request-container">
      <Nav />
      <ScrollRestoration />
      <div className="main-container">
        <Request />
      </div>
    </div>
  );
}
