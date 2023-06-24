import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";

const Lab = () => {
  const navigate = useNavigate();
  const [chemA, setChemA] = useState(0);
  const [chemB, setChemB] = useState(0);
  const [chemC, setChemC] = useState(0);
  const [chemD, setChemD] = useState(0);

  const handleChemAChange = (e) => {
    const value = parseInt(e.target.value);
    const remainingValue = 100 - value;

    setChemA(value);
    setChemC(Math.max(0, Math.min(chemC, remainingValue - chemB)));
    setChemD(Math.max(0, Math.min(chemD, remainingValue - chemB - chemC)));
  };

  const handleChemBChange = (e) => {
    const value = parseInt(e.target.value);
    const remainingValue = 100 - chemA - value;

    setChemB(value);
    setChemC(Math.max(0, Math.min(chemC, remainingValue)));
    setChemD(Math.max(0, Math.min(chemD, remainingValue - chemC)));
  };

  const handleChemCChange = (e) => {
    const value = parseInt(e.target.value);
    const remainingValue = 100 - chemA - chemB - value;

    setChemC(value);
    setChemD(Math.max(0, Math.min(chemD, remainingValue)));
  };

  const handleChemDChange = (e) => {
    const value = parseInt(e.target.value);
    const remainingValue = 100 - chemA - chemB - chemC;

    setChemD(Math.max(0, Math.min(value, remainingValue)));
  };

  const handlePlayClick = () => {
    navigate("/result", {
      replace: true,
      state: { chemA, chemB, chemC, chemD },
    });
  };

  const isPlayDisabled = !(chemA > 0 && (chemB > 0 || chemC > 0 || chemD > 0));

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="lab">
        <input
          type="range"
          name="a"
          id=""
          min="0"
          max="100"
          value={chemA}
          onChange={handleChemAChange}
        />
        <p>{chemA}</p>
        <input
          type="range"
          name="b"
          id=""
          min="0"
          max={100 - chemA}
          value={chemB}
          onChange={handleChemBChange}
        />
        <p>{chemB}</p>
        <input
          type="range"
          name="c"
          id=""
          min="0"
          max={100 - chemA - chemB}
          value={chemC}
          onChange={handleChemCChange}
        />
        <p>{chemC}</p>
        <input
          type="range"
          name="d"
          id=""
          min="0"
          max={100 - chemA - chemB - chemC}
          value={chemD}
          onChange={handleChemDChange}
        />
        <p>{chemD}</p>
        <button disabled={isPlayDisabled} onClick={handlePlayClick}>
          PLAY
        </button>
      </div>
    </div>
  );
};

export default Lab;
