import { ScrollRestoration } from "react-router";
import Nav from "../components/Nav";
import Dashboard from "../pages/Dashboard";

export default function DashboardLayout() {
  return (
    <div id="dashboard-container">
      <Nav />
      <ScrollRestoration />
      <div className="main-container">
        <Dashboard />
      </div>
    </div>
  );
}
