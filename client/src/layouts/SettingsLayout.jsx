import { ScrollRestoration } from "react-router";
import Nav from "../components/Nav";
import Settings from "../pages/Settings";

export default function SettingsLayout() {
  return (
    <div id="Settings-container">
      <Nav />
      <ScrollRestoration />
      <div className="main-container">
        <Settings />
      </div>
    </div>
  );
}
