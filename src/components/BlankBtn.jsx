import React from "react";
import "./BlankBtn.css";
import { Link } from "react-router-dom";

const BlankBtn = ({ to, children, color }) => {
  function pickColor(color) {
    return color;
  }
  return (
    <Link to={to}>
      <button className={`blank-btn-container ${pickColor(color)}`}>
        {children}
      </button>
    </Link>
  );
};

export default BlankBtn;
