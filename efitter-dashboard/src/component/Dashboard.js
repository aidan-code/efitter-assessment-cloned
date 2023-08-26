// import react from "react";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../resources/Sidebar";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Sidebar />
      <div className="Outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
