import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    const currentRoute = window.location.pathname;
    setSelectedTab(getTabFromRoute(currentRoute));
  }, []);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleLogout = () => {
    fetch("/api/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          localStorage.removeItem("token");

          window.location.href = "/login";
        } else {
          console.error("Logout failed");
        }
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };

  const getTabFromRoute = (route) => {
    switch (route) {
      case "/lab":
        return "lab";
      case "/titration":
        return "titration";
      case "/organic":
        return "organic";
      case "/inorganic":
        return "inorganic";
      default:
        return "";
    }
  };

  return (
    <div className="sideBar">
      <div className="elements">
        <NavLink
          to="/lab"
          activeClassName="selected"
          onClick={() => handleTabClick("lab")}
        >
          <div className={`element ${selectedTab === "lab" ? "selected" : ""}`}>
            <button
              className={`element_button lab_button ${
                selectedTab === "lab" ? "selected" : ""
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
                selectedTab === "titration" ? "selected" : ""
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
                selectedTab === "organic" ? "selected" : ""
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
                selectedTab === "inorganic" ? "selected" : ""
              }`}
            >
              <span>Na</span>
            </button>
          </div>
        </NavLink>

        <NavLink
          to="/history"
          activeClassName="selected"
          onClick={() => handleTabClick("history")}
        >
          <div
            className={`element history ${
              selectedTab === "history" ? "selected" : ""
            }`}
          >
            <button
              className={`element_button history_button ${
                selectedTab === "history" ? "selected" : ""
              }`}
            >
              <span>H.</span>
            </button>
          </div>
        </NavLink>
        <div className="logout_button">
          <button className="element_button" onClick={handleLogout}>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
