import React, { useState } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="sideBar">
      <div className="elements">
        <NavLink
          to="/lab"
          activeClassName="selected"
          onClick={() => handleTabClick("lab")}
        >
          <div
            className={`element lab ${selectedTab === "lab" ? "selected" : ""}`}
          >
            <button
              className={`element_button lab_button ${
                selectedTab === "lab" ? "yellow" : ""
              }`}
            >
              <i className="fa-solid fa-flask"></i>
            </button>
          </div>
        </NavLink>
        <NavLink
          to="/titration"
          activeClassName="selected"
          onClick={() => handleTabClick("titration")}
        >
          <div
            className={`element titration ${
              selectedTab === "titration" ? "selected" : ""
            }`}
          >
            <button
              className={`element_button titration_button ${
                selectedTab === "titration" ? "blue" : ""
              }`}
            >
              <i className="fa-solid fa-flask-vial"></i>
            </button>
          </div>
        </NavLink>
        <NavLink
          to="/organic"
          activeClassName="selected"
          onClick={() => handleTabClick("organic")}
        >
          <div
            className={`element organic ${
              selectedTab === "organic" ? "selected" : ""
            }`}
          >
            <button
              className={`element_button organic_button ${
                selectedTab === "organic" ? "blue" : ""
              }`}
            >
              <i className="fa-solid fa-c"></i>
            </button>
          </div>
        </NavLink>
        <NavLink
          to="/inorganic"
          activeClassName="selected"
          onClick={() => handleTabClick("inorganic")}
        >
          <div
            className={`element inorganic ${
              selectedTab === "inorganic" ? "selected" : ""
            }`}
          >
            <button
              className={`element_button inorganic_button ${
                selectedTab === "inorganic" ? "blue" : ""
              }`}
            >
              <span>Na</span>
            </button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
