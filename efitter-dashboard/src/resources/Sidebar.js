import React from "react";
import Logo from "../assets/Efitter.svg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="sidebar_performance"></div>
    </div>
  );
};

export default Sidebar;
