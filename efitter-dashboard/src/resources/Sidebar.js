import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Efitter from "../assets/Efitter.svg";
import Vector from "../assets/Vector.svg";
import Graph from "../assets/Graph.svg";
import Paint_tray from "../assets/Paint_tray.svg";      
import Settings from "../assets/settings.svg";
import ManageUsers from "../assets/ManageUsers.svg";
import Client from "../assets/ClientLogo.svg";
import CartOutline from "../assets/cart-outline.svg";
import Arrow from "../assets/Arrow.svg";
import Group from "../assets/Group.svg";
import Graphs from "../component/Graphs.js";

const Sidebar = () => {
  return (
    <div className="sidebar_cont">
      <div className="logo.cont">
        <div className="Sidebar">
          <div className="logo-div">
            <div className="logo">
              <img src={Efitter} alt="" />
            </div>

            <div className="Ecomponents">
              {[
                {
                  page: "/",
                  label: "Dashboard",
                  icon: Vector,
                },

                {
                  page: "/",
                  label: "Results",
                  icon: Graph,
                },

                {
                  page: "/",
                  label: "Designs",
                  icon: Paint_tray,
                },

                {
                  page: "/",
                  label: "Set up",
                  icon: Settings,
                },

                {
                  page: "/",
                  label: "Manage Users",
                  icon: ManageUsers,
                },
              ].map((data) => (
                <Link key={data.label} to={data.page}>
                  <div className="data-flex">
                    <img src={data.icon} alt="" />

                    {/* style={{ border: "1px solid red" }} */}
                    <p>{data.label}</p>
                    <img src={Group} alt="" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
