import { ScrollRestoration } from "react-router";
import Dashboard from "../pages/Dashboard";

export default function DashboardLayout() {
  return (
    <div id="dashboard-container">
      <ScrollRestoration />
      <div className="main-container">
        <Dashboard />
      </div>
    </div>
  );
}
