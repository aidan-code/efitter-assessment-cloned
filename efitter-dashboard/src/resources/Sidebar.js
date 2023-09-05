import React from "react";
import "./Sidebar.css";
import Efitter from "../assets/Efitter.svg";
// import Vector from "../assets/Vector.svg";
// import Graph from "../assets/Graph.svg";
// import LightGraph from "../assets/LightGraph.svg";
// import Paint_tray from "../assets/Paint_tray.svg";
// import Settings from "../assets/settings.svg";
// import ManageUsers from "../assets/ManageUsers.svg";
// import Group from "../assets/Group.svg";
import arrowdark from "../assets/arrowdark.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SpeedIcon from "@mui/icons-material/Speed";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
const navData = [
  {
    page: "/dash",
    label: "Dashboard",
    icon: (
      <SpeedIcon
        fontSize="10px"
        edge="start"
        color="ffd9e3"
        sx={{
          ".active &": {
            color: "712e49",
          },
        }}
      />
    ),
  },

  {
    page: "/",
    label: "Result",
    icon: (
      <ShowChartOutlinedIcon
        fontSize="10px"
        edge="start"
        color="ffd9e3"
        sx={{
          ".active &": {
            color: "712e49",
          },
        }}
      />
    ),
  },

  {
    page: "/design",
    label: "Design",
    icon: (
      <ColorLensOutlinedIcon
        fontSize="10px"
        edge="start"
        color="ffd9e3"
        sx={{
          ".active &": {
            color: "712e49",
          },
        }}
      />
    ),
  },

  {
    page: "/setup",
    label: "Set up",
    icon: (
      <SettingsOutlinedIcon
        fontSize="10px"
        margin="20px"
        edge="start"
        color="ffd9e3"
        sx={{
          ".active &": {
            color: "712e49",
          },
        }}
      />
    ),
  },

  {
    page: "/Manage",
    label: "Manage Users",
    icon: (
      <GroupOutlinedIcon
        fontSize="10px"
        edge="start"
        color="ffd9e3"
        sx={{
          ".active &": {
            color: "712e49",
          },
        }}
      />
    ),
  },
];

const Sidebar = () => {
  const [newActiveLink, setNewActiveLink] = useState(false);

  return (
    <div className="Sidebar">
      <div className="sidebar_content">
        <div className="logo">
          <img src={Efitter} alt="" />
        </div>

        <div className="Ecomponents">
          {navData.map((data, index) => (
            <NavLink
              key={index}
              to={data.page}
              // isActive={(match, location) => {
              //   match && setNewActiveLink(index); // <-- set active index
              //   return match; // <-- return boolean
              // }}
            >
              <div className="ctflex">
                <div className="labels">
                  {data.icon}
                  <p className="textlabel">{data.label}</p>
                </div>
                <ArrowForwardIosIcon
                  fontSize= "5px"
                  edge="start"
                  color="ffd9e3"
                  sx={{
                    ".active &": {
                      color: "712e49",
                    },
                  }}
                />

                
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
