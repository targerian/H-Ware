import React from "react";
import "./Logo.css";
import { ReactComponent as Logos } from "../logos.svg";

const Logo = () => {
  return (
    <div className='logo-container'>
      <Logos />
    </div>
  );
};

export default Logo;
