import React, { useEffect } from "react";
import "./Navbar.css";
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  console.log("windowSize");
  const navLinks = ["Home", "About", "Testimonials", "Contacts"];
  return (
    <div className='navbar-container'>
      <div className='logo'>H-SOFTWARE</div>
      <div className='nav-links-container'>
        {navLinks.map((link) => (
          <div className='nav-link'>
            <Link to='/'>
              <span>{link}</span>
            </Link>
          </div>
        ))}
      </div>
      <div className='btn-container'>
        <Link to='/'>
          <div className='sign-in'>Sign in</div>
        </Link>
        <Link to='/'>
          <div className='sign-up'>Sign up</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
