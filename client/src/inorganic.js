import React from "react";
import Sidebar from "./sidebar";
import working from "./images/work_in_progress.svg";

const Inorganic = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Inorganic Page</h1>
          <img height="350px" src={working} alt="" />
          <h2>Work In Progress</h2>
        </div>
      </div>{" "}
    </div>
  );
};

export default Inorganic;
