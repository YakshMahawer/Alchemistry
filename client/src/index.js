import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Result from "./result";
import Lab from "./lab";
import Organic from "./organic";
import Titration from "./titration";
import Inorganic from "./inorganic";
import Success from "./success";
import History from "./history";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="result" element={<Result/>} />
      <Route path="lab" element={<Lab />} />
      <Route path="organic" element={<Organic />} />
      <Route path="titration" element={<Titration />} />
      <Route path="inorganic" element={<Inorganic />} />
      <Route path="success" element={<Success />} />
      <Route path="history" element={<History />} />
    </Routes>
  </BrowserRouter>
);
