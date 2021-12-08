import React from "react";
import { Children } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Button.css";

const Button = ({ width, to, children, rightLeft }) => {
  return (
    <Link to={to}>
      <div style={{ position: "relative" }}>
        <div
          className={
            rightLeft
              ? "usable-btn-container-rightleft"
              : "usable-btn-container"
          }
          style={{
            width: width,
          }}
        >
          <p>{children}</p>
        </div>
      </div>
    </Link>
  );
};

export default Button;
