import React from "react";
import "./Sidebar.css";
import Efitter from "../assets/Efitter.svg";
import Vector from "../assets/Vector.svg";
import Graph from "../assets/Graph.svg";
import LightGraph from "../assets/LightGraph.svg";
import Paint_tray from "../assets/Paint_tray.svg";
import Settings from "../assets/settings.svg";
import ManageUsers from "../assets/ManageUsers.svg";
import Group from "../assets/Group.svg";
import arrowdark from "../assets/arrowdark.svg";
import { NavLink } from "react-router-dom";

const navData = [
  {
    page: "/dash",
    label: "Dashboard",
    icon: Vector,
    iconDark: Vector,

    arrowlight: Group,
    arrowDark: arrowdark,
  },

  {
    page: "/result",
    label: "Result",
    icon: LightGraph,
    iconDark: Graph,

    arrowlight: Group,
    arrowDark: Group,
  },

  {
    page: "/design",
    label: "Design",
    icon: Paint_tray,
    iconDark: Paint_tray,

    arrowlight: Group,
    arrowDark: Group,
  },

  {
    page: "/setup",
    label: "Set up",
    icon: Settings,
    arrowlight: Group,
    arrowDark: Group,
  },

  {
    page: "/Manage",
    label: "Manage Users",
    icon: ManageUsers,
    arrowlight: Group,
    arrowDark: Group,
  },
];

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="sidebar_content">
        <div className="logo">
          <img src={Efitter} alt="" />
        </div>

        <div className="Ecomponents">
          {navData.map((data, index) => (
            <NavLink key={index} to={data.page}>
              {({ isActive }) => (
                <div className="ctflex">
                  <div className="labels">
                    <img src={data.icon} alt="" />
                    <p>{data.label}</p>
                  </div>

                  {isActive ? (
                    <img src={data.arrowDark} alt="ardark" />
                  ) : (
                    <img src={data.arrowlight} alt="light" />
                  )}
                </div>
              )}

              {/* </div> */}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
