import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./HabmurgerNav.css";
const HabmurgerNav = ({ open, setOpen }) => {
  const navLinks = ["Home", "About", "Testimonials", "Contacts"];

  return (
    <>
      <div className='dropdown-container'>
        <div className='drop-down-logo' onClick={() => setOpen(!open)}>
          <GiHamburgerMenu fontSize='30' />
          <p className='logo-txt'>H-SOFTWARE</p>
        </div>
        <div
          className={`dropdown ${
            open ? "dropdown-btn-container " : "dropdown-btn-hidden "
          }`}
          onClick={() => setOpen(false)}
        >
          {navLinks.map((element) => (
            <Link to='/'>
              <div className='dropdown-btn'>{element}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HabmurgerNav;
