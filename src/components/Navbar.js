import React, { useEffect } from "react";
import "./Navbar.css";
// import { Routes, Route, Link } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  console.log("windowSize");
  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Feaures", to: "features" },
    { name: "Testemonials", to: "test" },
    { name: "Q&A", to: "q&a" },
  ];
  return (
    <div className='navbar-container'>
      <div className='logo'>H-WARE</div>
      <div className='nav-links-container'>
        {navLinks.map((link) => (
          <div className='nav-link'>
            <Link to={link.to} smooth={true}>
              <span>{link.name}</span>
            </Link>
          </div>
        ))}
      </div>
      <div className='btn-container'>
        <Link to='/sign'>
          <div className='sign-in'>Sign in</div>
        </Link>
        <Link to='/sign'>
          <div className='sign-up'>Sign up</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
