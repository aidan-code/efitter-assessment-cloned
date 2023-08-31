import React from "react";
import { Outlet } from "react-router-dom";
import Client from "../assets/ClientLogo.svg";
import "./Design.css";
import { NavLink } from "react-router-dom";

const Design = () => {
  return (
    <div className="Design">
      <div className="casing">
        <div className="Headers">
          <img src={Client} alt="logo" />
          <p>Designs</p>
        </div>

        {/* the Body section of this page */}

        <div className="bod-ied">
          <div className="linked ">
            <p>
              <NavLink to="/">Design Editor</NavLink>
            </p>
            <p>
              <NavLink to="/design/" >Copy Editor</NavLink>
            </p>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Design;
